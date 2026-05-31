#!/usr/bin/env node
/*
 * build.js — produces an optimized dist/ for GitHub Pages.
 *
 * Source stays hand-editable (index.html + app.js + posts.js). This script:
 *   1. copies static assets into dist/
 *   2. injects the deploy timestamp into dist/index.html
 *   3. regenerates JSON-LD + sitemap.xml + feed.xml against dist/ (deploy-time stamps)
 *   4. minifies HTML (incl. inline CSS) and the JS bundles
 *
 * Run locally with `npm run build`; CI runs it before uploading the Pages artifact.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const { minify: minifyHtml } = require('html-minifier-terser');
const { minify: minifyJs } = require('terser');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) copyRecursive(path.join(src, entry), path.join(dest, entry));
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

(async () => {
  // 1. Fresh dist + static assets
  fs.rmSync(dist, { recursive: true, force: true });
  fs.mkdirSync(dist, { recursive: true });

  const staticFiles = ['manifest.webmanifest', 'sw.js', 'robots.txt', '.nojekyll'];
  for (const f of staticFiles) {
    if (fs.existsSync(path.join(root, f))) fs.copyFileSync(path.join(root, f), path.join(dist, f));
  }
  copyRecursive(path.join(root, 'assets'), path.join(dist, 'assets'));

  // 2. index.html → dist with deploy timestamp
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: false
  }).replace(',', '') + ' UTC';
  let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8').replace('DEPLOY_TIME', timestamp);
  fs.writeFileSync(path.join(dist, 'index.html'), html);

  // 3. Regenerate SEO artifacts against dist (fresh JSON-LD + sitemap + feed)
  execFileSync('node', [path.join(root, 'tools', 'generate-seo.js'), dist], { stdio: 'inherit' });

  // 4a. Minify the JS bundles
  for (const f of ['posts.js', 'app.js']) {
    const code = fs.readFileSync(path.join(root, f), 'utf8');
    const out = await minifyJs(code, { compress: true, mangle: true });
    fs.writeFileSync(path.join(dist, f), out.code);
  }

  // 4b. Minify HTML (collapses whitespace, minifies inline CSS, drops comments/markers)
  html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
  const minHtml = await minifyHtml(html, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: false,
    keepClosingSlash: true,
    removeAttributeQuotes: false
  });
  fs.writeFileSync(path.join(dist, 'index.html'), minHtml);

  // 5. Cache-bust the service worker. The browser only installs a new SW when
  //    sw.js changes bytes, so stamp CACHE_VERSION with a hash of the built
  //    shell. Any content change → new sw.js → new worker installs and purges
  //    the stale cache. (Otherwise returning visitors keep the old posts.js.)
  const swPath = path.join(dist, 'sw.js');
  if (fs.existsSync(swPath)) {
    const hash = crypto.createHash('sha256');
    for (const f of ['index.html', 'app.js', 'posts.js', 'manifest.webmanifest']) {
      const p = path.join(dist, f);
      if (fs.existsSync(p)) hash.update(fs.readFileSync(p));
    }
    const version = 'scb-' + hash.digest('hex').slice(0, 12);
    let sw = fs.readFileSync(swPath, 'utf8');
    sw = sw.replace(/const CACHE_VERSION = '[^']*';/, `const CACHE_VERSION = '${version}';`);
    fs.writeFileSync(swPath, sw);
    console.log('build: service worker cache version = ' + version);
  }

  console.log('build: dist/ ready (' + (minHtml.length / 1024).toFixed(1) + ' KB index.html)');
})().catch((e) => { console.error(e); process.exit(1); });
