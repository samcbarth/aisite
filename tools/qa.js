#!/usr/bin/env node
/*
 * qa.js - fast local quality gate for the static site.
 *
 * Run after `npm run build` or through `npm run qa`.
 */
const fs = require('fs');
const path = require('path');
const { POSTS, POST_ORDER } = require('../posts.js');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const failures = [];

function fail(message) {
  failures.push(message);
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function rel(file) {
  return path.relative(root, file).replace(/\\/g, '/');
}

function imageBase(src) {
  return (src || '').split('?')[0];
}

function toSlug(title) {
  return title.toLowerCase().replace(/['']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function walk(dir, predicate, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, predicate, out);
    else if (!predicate || predicate(file)) out.push(file);
  }
  return out;
}

function assertDistBuilt() {
  if (!fs.existsSync(path.join(dist, 'index.html'))) {
    fail('dist/index.html missing. Run npm run build first.');
  }
}

function checkPostData() {
  const ids = new Set();
  const slugs = new Map();
  const titles = new Map();

  for (const id of POST_ORDER) {
    const post = POSTS[id];
    if (!post) fail(`POST_ORDER references missing post: ${id}`);
    if (ids.has(id)) fail(`duplicate post id in POST_ORDER: ${id}`);
    ids.add(id);
    if (!post) continue;

    const slug = toSlug(post.title);
    if (slugs.has(slug)) fail(`duplicate slug: ${slug}`);
    slugs.set(slug, id);
    if (titles.has(post.title)) fail(`duplicate title: ${post.title}`);
    titles.set(post.title, id);
    if (!post.iso || !/^\d{4}-\d{2}-\d{2}$/.test(post.iso)) fail(`bad iso date: ${id}`);
    if (!post.image) fail(`missing hero image: ${id}`);
    if (!post.body || post.body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length < 150) {
      fail(`thin post body under 150 words: ${id}`);
    }
    if (![...(post.body || '').matchAll(/href="https?:[^"]+"/g)].length) {
      fail(`post missing direct body link: ${id}`);
    }
  }

  const featured = POST_ORDER.filter(id => POSTS[id] && POSTS[id].featured);
  if (featured.length !== 1) fail(`expected one featured post, found ${featured.length}`);

  const normal = POST_ORDER.filter(id => POSTS[id] && !POSTS[id].featured);
  for (let i = 1; i < normal.length; i += 1) {
    if (POSTS[normal[i]].iso > POSTS[normal[i - 1]].iso) {
      fail(`post order date regression: ${normal[i - 1]} before ${normal[i]}`);
    }
  }
}

function checkGeneratedPages() {
  const postPages = walk(path.join(dist, 'posts'), file => file.endsWith('index.html'));
  if (postPages.length !== POST_ORDER.length) {
    fail(`generated post page count mismatch: expected ${POST_ORDER.length}, found ${postPages.length}`);
  }

  const htmlFiles = walk(dist, file => file.endsWith('.html'));
  for (const file of htmlFiles) {
    const html = read(file);
    if (!html.includes('id="hs-script-loader"') || !html.includes('src="https://js.hs-scripts.com/20693956.js"')) {
      fail(`missing HubSpot tracker: ${rel(file)}`);
    }
    if (/plausible\.io/i.test(html)) fail(`stale Plausible tracker: ${rel(file)}`);
    if (!/script-src[^;]*https:\/\/\*\.hs-scripts\.com/.test(html)) fail(`HubSpot loader blocked by CSP: ${rel(file)}`);
    if (!/script-src[^;]*https:\/\/\*\.hs-analytics\.net/.test(html)) fail(`HubSpot analytics blocked by CSP: ${rel(file)}`);
    if (!/connect-src[^;]*https:\/\/\*\.hubspot\.com/.test(html)) fail(`HubSpot events blocked by CSP: ${rel(file)}`);
    if (!/img-src[^;]*https:\/\/\*\.hubspot\.com/.test(html)) fail(`HubSpot tracking pixel blocked by CSP: ${rel(file)}`);
    if (!/<main\b/.test(html)) fail(`missing main element: ${rel(file)}`);
    const h1Count = (html.match(/<h1\b/g) || []).length;
    if (h1Count !== 1) fail(`expected one h1, found ${h1Count}: ${rel(file)}`);
    if (!/<title>[^<]{10,}<\/title>/.test(html)) fail(`weak title: ${rel(file)}`);
    if (!/<meta name="description" content="[^"]{50,}"/.test(html)) fail(`weak meta description: ${rel(file)}`);
    for (const match of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)) {
      const attrs = match[1];
      const text = match[2].replace(/<[^>]+>/g, '').trim();
      if (!text && !/aria-label="[^"]+"/.test(attrs)) fail(`unlabeled button: ${rel(file)}`);
    }
    for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
      const attrs = match[1];
      const text = match[2].replace(/<[^>]+>/g, '').trim();
      if (!text && !/aria-label="[^"]+"/.test(attrs)) fail(`unlabeled link: ${rel(file)}`);
    }
  }
}

function checkAssets() {
  const broken = [];
  for (const file of walk(dist, item => item.endsWith('.html'))) {
    const html = read(file);
    for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
      const ref = match[1];
      if (/^(https?:|mailto:|data:|#|javascript:)/.test(ref) || ref.startsWith('/')) continue;
      const clean = ref.split('#')[0].split('?')[0];
      if (!clean) continue;
      const resolved = path.resolve(path.dirname(file), clean);
      if (resolved.startsWith(dist) && !fs.existsSync(resolved)) {
        broken.push(`${rel(file)} -> ${ref}`);
      }
    }
  }
  broken.forEach(item => fail(`broken local asset: ${item}`));
}

function checkImages() {
  const home = read(path.join(dist, 'index.html'));
  const homeThumbs = new Map();
  for (const match of home.matchAll(/<img\b([^>]*class="post-thumb"[^>]*)>/g)) {
    const src = (match[1].match(/src="([^"]*)"/) || [])[1] || '';
    const alt = (match[1].match(/alt="([^"]*)"/) || [])[1];
    if (!src) fail('blank homepage thumbnail src');
    if (alt === undefined || alt.trim().length < 12) fail(`weak homepage thumbnail alt: ${src}`);
    const key = imageBase(src);
    homeThumbs.set(key, (homeThumbs.get(key) || 0) + 1);
  }
  for (const [src, count] of homeThumbs.entries()) {
    if (src && count > 1) fail(`duplicate homepage thumbnail: ${src}`);
  }

  for (const file of walk(path.join(dist, 'posts'), item => item.endsWith('index.html'))) {
    const html = read(file);
    const counts = new Map();
    for (const match of html.matchAll(/<img\b([^>]*)>/g)) {
      const attrs = match[1];
      const src = (attrs.match(/src="([^"]*)"/) || [])[1] || '';
      const alt = (attrs.match(/alt="([^"]*)"/) || [])[1];
      if (!src) fail(`blank image src: ${rel(file)}`);
      if (alt === undefined || alt.trim().length < 12) fail(`weak image alt: ${rel(file)} -> ${src}`);
      if (/\.svg(\?|$)/i.test(src)) fail(`svg image not allowed in post page: ${rel(file)} -> ${src}`);
      const key = imageBase(src);
      counts.set(key, (counts.get(key) || 0) + 1);
    }
    for (const [src, count] of counts.entries()) {
      if (src && count > 1) fail(`duplicate image on page: ${rel(file)} -> ${src}`);
    }
  }
}

function checkSeoArtifacts() {
  const sitemap = read(path.join(dist, 'sitemap.xml'));
  const feed = read(path.join(dist, 'feed.xml'));
  for (const id of POST_ORDER) {
    const slug = toSlug(POSTS[id].title);
    if (!sitemap.includes(`/posts/${slug}/`)) fail(`sitemap missing post: ${id}`);
  }
  if (feed.includes('#post')) fail('feed contains old #post anchors');
  if (!feed.includes('/posts/')) fail('feed missing post page links');
}

function checkServiceWorker() {
  const sw = read(path.join(dist, 'sw.js'));
  for (const asset of ['premium.html', 'resources.html', 'start-here.html', 'about.html', 'work.html', 'assets/section-page.css', 'premium.js', 'assets/icons/icon-maskable-512.png']) {
    if (!sw.includes(asset)) fail(`service worker missing cache asset: ${asset}`);
  }
}

function checkSourceText() {
  const files = [
    'index.html',
    'app.js',
    'posts.js',
    'post-template.html',
    'premium.html',
    'resources.html',
    'start-here.html',
    'about.html',
    'work.html',
    'google-apps-script.js',
    'sw.js',
    '.github/workflows/pages.yml'
  ];
  const bad = ['â', '�', '→', '—', '–', '─'];
  for (const file of files) {
    const text = read(path.join(root, file));
    for (const token of bad) {
      if (text.includes(token)) fail(`bad source character "${token}" in ${file}`);
    }
  }
}

assertDistBuilt();
checkPostData();
if (fs.existsSync(path.join(dist, 'index.html'))) {
  checkGeneratedPages();
  checkAssets();
  checkImages();
  checkSeoArtifacts();
  checkServiceWorker();
}
checkSourceText();

if (failures.length) {
  console.error('QA failed:');
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}

console.log('QA passed');
