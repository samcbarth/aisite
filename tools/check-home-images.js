#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

const root = path.resolve(__dirname, '..');
const live = process.argv.includes('--live');
const liveUrl = 'https://samcbarth.github.io/aisite/';

function decodeHtml(value) {
  return value.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
}

function parseHomepage(html) {
  const csp = (html.match(/<meta[^>]+http-equiv="Content-Security-Policy"[^>]+content="([^"]+)"/i) || [])[1] || '';
  const imgSources = ((csp.match(/(?:^|;)\s*img-src\s+([^;]+)/i) || [])[1] || '').trim().split(/\s+/).filter(Boolean);
  const thumbnails = [...html.matchAll(/<img\b([^>]*class="post-thumb"[^>]*)>/g)]
    .map(match => decodeHtml((match[1].match(/src="([^"]+)"/) || [])[1] || ''))
    .filter(Boolean);
  return { imgSources, thumbnails: [...new Set(thumbnails)] };
}

function cspAllowsImage(src, pageUrl, sources) {
  if (src.startsWith('data:')) return sources.includes('data:');
  const url = new URL(src, pageUrl);
  if (sources.includes("'self'") && url.origin === new URL(pageUrl).origin) return true;
  return sources.some(source => {
    if (!/^https?:/.test(source)) return false;
    const allowed = new URL(source.replace('*.', 'placeholder.'));
    if (allowed.protocol !== url.protocol) return false;
    if (source.includes('*.')) {
      const suffix = allowed.hostname.replace(/^placeholder\./, '');
      return url.hostname === suffix || url.hostname.endsWith(`.${suffix}`);
    }
    return allowed.origin === url.origin;
  });
}

async function fetchWithRetry(url, attempts = 3, method = 'HEAD') {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        method,
        redirect: 'follow',
        headers: method === 'GET'
          ? { 'User-Agent': 'AISite homepage image verifier/1.0', Range: 'bytes=0-1023' }
          : { 'User-Agent': 'AISite homepage image verifier/1.0' },
        signal: AbortSignal.timeout(10000)
      });
      if ((response.status === 429 || response.status >= 500) && attempt < attempts) {
        if (response.body) response.body.cancel().catch(() => {});
        const retryAfter = Number(response.headers.get('retry-after')) || attempt;
        await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        continue;
      }
      return response;
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise(resolve => setTimeout(resolve, attempt * 1000));
    }
  }
  throw lastError;
}

function curlProbe(url, head = true) {
  return new Promise((resolve, reject) => {
    const args = ['-sS', '-L', '--max-time', '15', '-A', 'AISite homepage image verifier/1.0'];
    if (head) args.push('-I');
    else args.push('-r', '0-1023');
    args.push('-o', os.platform() === 'win32' ? 'NUL' : '/dev/null', '-w', '%{http_code}\t%{content_type}\t%{url_effective}', url);
    const child = spawn(os.platform() === 'win32' ? 'curl.exe' : 'curl', args, { windowsHide: true });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', chunk => { stdout += chunk; });
    child.stderr.on('data', chunk => { stderr += chunk; });
    child.on('error', reject);
    child.on('close', code => {
      const [statusText, type = '', finalUrl = url] = stdout.trim().split('\t');
      const status = Number(statusText);
      if (code !== 0) reject(new Error(`${stderr.trim() || `curl exit ${code}`} ${url}`));
      else resolve({ status, type: type.toLowerCase(), finalUrl });
    });
  });
}

async function checkRemote(src, pageUrl) {
  const url = new URL(src, pageUrl).href;
  let result;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    result = await curlProbe(url);
    if (result.status === 405) result = await curlProbe(url, false);
    if (result.status !== 429 && result.status < 500) break;
    if (attempt < 4) await new Promise(resolve => setTimeout(resolve, attempt * 1000));
  }
  if (result.status === 429 && new URL(url).hostname === 'upload.wikimedia.org') {
    const parts = new URL(url).pathname.split('/').filter(Boolean);
    const thumbIndex = parts.indexOf('thumb');
    const fileName = decodeURIComponent(parts[thumbIndex >= 0 ? parts.length - 2 : parts.length - 1]);
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&titles=File:${encodeURIComponent(fileName)}`;
    const response = await fetchWithRetry(apiUrl, 3, 'GET');
    const data = await response.json();
    const page = data.query && Object.values(data.query.pages || {})[0];
    if (response.ok && page && page.imageinfo && page.imageinfo[0] && page.imageinfo[0].url) {
      return { status: 200, type: 'image/wikimedia-api-verified', finalUrl: page.imageinfo[0].url };
    }
  }
  if (result.status < 200 || result.status >= 400) throw new Error(`${result.status} ${url}`);
  if (!result.type.startsWith('image/')) throw new Error(`non-image content type ${result.type || 'missing'} ${url}`);
  return result;
}

async function runPool(items, worker, limit = 6) {
  const failures = [];
  let next = 0;
  async function run() {
    while (next < items.length) {
      const item = items[next];
      next += 1;
      try {
        await worker(item);
      } catch (error) {
        failures.push(error.message);
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return failures;
}

async function main() {
  const pageUrl = live ? `${liveUrl}?image-check=${Date.now()}` : liveUrl;
  const html = live
    ? await (async () => {
        const response = await fetchWithRetry(pageUrl, 3, 'GET');
        if (!response.ok) throw new Error(`homepage returned ${response.status}`);
        return response.text();
      })()
    : fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const { imgSources, thumbnails } = parseHomepage(html);
  const failures = [];

  if (!imgSources.length) failures.push('homepage CSP missing img-src directive');
  for (const src of thumbnails) {
    if (!cspAllowsImage(src, liveUrl, imgSources)) failures.push(`blocked by homepage CSP: ${src}`);
  }

  const remote = [];
  for (const src of thumbnails) {
    if (/^https?:/i.test(src) || live) {
      remote.push(src);
      continue;
    }
    const localPath = path.resolve(root, src.split('?')[0].split('#')[0]);
    if (!localPath.startsWith(root) || !fs.existsSync(localPath)) failures.push(`missing local image: ${src}`);
  }
  const wikimedia = remote.filter(src => new URL(src, liveUrl).hostname === 'upload.wikimedia.org');
  const otherRemote = remote.filter(src => new URL(src, liveUrl).hostname !== 'upload.wikimedia.org');
  failures.push(...await runPool(otherRemote, src => checkRemote(src, liveUrl)));
  if (wikimedia.length) await new Promise(resolve => setTimeout(resolve, 2000));
  for (const src of wikimedia) {
    try {
      await checkRemote(src, liveUrl);
    } catch (error) {
      failures.push(error.message);
    }
    await new Promise(resolve => setTimeout(resolve, 350));
  }

  if (failures.length) {
    console.error('Homepage image check failed:');
    failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }
  console.log(`Homepage image check passed: ${thumbnails.length} previews (${live ? 'live' : 'local'}).`);
}

main().catch(error => {
  console.error(`Homepage image check failed: ${error.message}`);
  process.exit(1);
});
