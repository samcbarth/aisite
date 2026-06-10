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
const { POSTS, POST_ORDER } = require('../posts.js');

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
  for (const f of ['posts.js', 'app.js', 'post-likes.js']) {
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

  // 6. Generate individual post pages from post-template.html
  const BASE_URL = 'https://samcbarth.github.io/aisite';
  const template = fs.readFileSync(path.join(root, 'post-template.html'), 'utf8');

  function stripHtml(html) {
    return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function readingTime(body) {
    const words = stripHtml(body).split(/\s+/).filter(w => w.length > 0).length;
    return Math.max(1, Math.round(words / 200));
  }
  function makeExcerpt(body) {
    const text = stripHtml(body);
    return text.length > 160 ? text.slice(0, 157) + '...' : text;
  }
  function escAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function toSlug(title) {
    return title.toLowerCase().replace(/['']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  function makeOgImage(imgUrl) {
    return imgUrl.replace(/w=\d+&h=\d+/, 'w=1200&h=630');
  }
  function makeHeroImage(imgUrl) {
    return imgUrl.replace(/w=\d+&h=\d+/, 'w=1160&h=440');
  }
  const INLINE_MEDIA = {
    post20: { image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=650&fit=crop&q=80', caption: 'The real bill is the physical footprint.', side: 'right', after: 2 },
    post19: { image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&h=650&fit=crop&q=80', caption: 'Outcome-based pricing changes the conversation.', side: 'left', after: 2 },
    post18: { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=650&fit=crop&q=80', caption: 'Context is the actual product here.', side: 'right', after: 2 },
    post14: { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop&q=80', caption: 'Public-market scrutiny changes the math.', side: 'left', after: 2 },
    post13: { image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=900&h=650&fit=crop&q=80', caption: 'The buildout becomes physical fast.', side: 'right', after: 2 },
    post15: { image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&h=650&fit=crop&q=80', caption: 'The race keeps moving toward orbit.', side: 'left', after: 2 },
    post16: { image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&h=650&fit=crop&q=80', caption: 'Local approval is now the bottleneck.', side: 'right', after: 2 },
    post17: { image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=900&h=650&fit=crop&q=80', caption: 'Orbit is the extreme version of the grid problem.', side: 'left', after: 2 },
    post12: { image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&h=650&fit=crop&q=80', caption: 'The leverage is in local tooling.', side: 'right', after: 2 },
    post11: { image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=650&fit=crop&q=80', caption: 'Trust is the inventory that really matters.', side: 'left', after: 2 },
    post10: { image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&h=650&fit=crop&q=80', caption: 'A strong core business can subsidize new plays.', side: 'right', after: 2 },
    post7: { image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=650&fit=crop&q=80', caption: 'Infrastructure is where the AI money is going.', side: 'left', after: 2 },
    post8: { image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=650&fit=crop&q=80', caption: 'Value creation has to be shared.', side: 'right', after: 2 },
    post9: { image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=900&h=650&fit=crop&q=80', caption: 'Security risk expands with the stack.', side: 'left', after: 2 },
    post6: { image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&h=650&fit=crop&q=80', caption: 'Prompting still needs structure.', side: 'right', after: 2 },
    post5: { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop&q=80', caption: 'Context beats generic automation.', side: 'left', after: 2 },
    post4: { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop&q=80', caption: 'Two different AI bets, same market.', side: 'right', after: 2 },
    post1: { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=650&fit=crop&q=80', caption: 'Operational systems, not just databases.', side: 'left', after: 1 },
    post2: { image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&h=650&fit=crop&q=80', caption: 'The shortest route from idea to shipped site.', side: 'right', after: 1 },
    post3: { image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&h=650&fit=crop&q=80', caption: 'Good reporting starts with clean systems.', side: 'left', after: 1 }
  };

  function makeInlineImage(imgUrl) {
    return imgUrl.replace(/w=\d+&h=\d+/, 'w=900&h=650');
  }

  function injectInlineMedia(body, post, postId) {
    const media = INLINE_MEDIA[postId] || {};
    const side = media.side || (POST_ORDER.indexOf(postId) % 2 === 0 ? 'right' : 'left');
    const imgUrl = makeInlineImage(media.image || post.inlineImage || post.image);
    const caption = media.caption || post.inlineCaption || ('A visual reference for ' + post.title);
    const after = Math.max(1, media.after || post.inlineAfter || 2);
    const inline = `<figure class="inline-media inline-media-${side}"><img src="${imgUrl}" alt="${escAttr(post.title)}" width="900" height="650" loading="lazy"><figcaption>${escAttr(caption)}</figcaption></figure>`;

    const totalParagraphs = (body.match(/<\/p>/g) || []).length;
    if (totalParagraphs === 0) return inline + body;
    const insertAfter = Math.min(after, Math.max(1, totalParagraphs - 1));
    let paragraphCount = 0;
    let inserted = false;
    const replaced = body.replace(/<\/p>/g, (match) => {
      paragraphCount += 1;
      if (!inserted && paragraphCount === insertAfter) {
        inserted = true;
        return match + '\n' + inline;
      }
      return match;
    });
    return inserted ? replaced : body + '\n' + inline;
  }
  function makeRelatedHtml(postId) {
    const p = POSTS[postId];
    if (!p) return '';
    const related = POST_ORDER
      .filter(id => id !== postId && POSTS[id] && (POSTS[id].category === p.category || POSTS[id].tag === p.tag))
      .slice(0, 2);
    if (!related.length) return '';
    const cards = related.map(id => {
      const rp = POSTS[id];
      const thumb = rp.image.replace(/w=\d+&h=\d+/, 'w=600&h=300');
      return `<a class="related-card" href="../${toSlug(rp.title)}/">` +
        `<img src="${thumb}" alt="" loading="lazy">` +
        `<div class="related-info">` +
        `<span class="related-cat">${rp.category}</span>` +
        `<div class="related-post-title">${rp.title}</div>` +
        `</div></a>`;
    }).join('');
    return `<div class="related-label">More posts</div><div class="related-grid">${cards}</div>`;
  }

  const postsDir = path.join(dist, 'posts');
  fs.mkdirSync(postsDir, { recursive: true });

  for (const id of POST_ORDER) {
    const p = POSTS[id];
    if (!p) continue;
    const slug = toSlug(p.title);
    const canonical = `${BASE_URL}/posts/${slug}/`;
    const excerpt = makeExcerpt(p.body);
    const readTime = readingTime(p.body);
    const bodyHtml = injectInlineMedia(p.body.trim(), p, id);
    const jsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.iso,
      url: canonical,
      author: { '@type': 'Person', name: 'Sam C Barth', url: BASE_URL },
      image: makeOgImage(p.image),
      description: excerpt,
      articleSection: p.category
    });

    const titleSafe = escAttr(p.title);
    const excerptSafe = escAttr(excerpt);

    let page = template
      .replace(/POST_TITLE/g, titleSafe)
      .replace(/POST_EXCERPT/g, excerptSafe)
      .replace(/POST_IMAGE_OG/g, makeOgImage(p.image))
      .replace(/POST_IMAGE_HERO/g, makeHeroImage(p.image))
      .replace(/POST_DATE/g, p.date)
      .replace(/POST_ISO/g, p.iso)
      .replace(/POST_CATEGORY/g, p.category)
      .replace(/POST_TAG_CLASS/g, p.tagClass)
      .replace(/POST_TAG/g, p.tag)
      .replace(/POST_READ_TIME/g, String(readTime))
      .replace(/POST_CANONICAL/g, canonical)
      .replace(/POST_ID/g, id)
      .replace('POST_BODY', bodyHtml)
      .replace('POST_RELATED_HTML', makeRelatedHtml(id))
      .replace('POST_JSON_LD', jsonLd);

    const postDir = path.join(postsDir, slug);
    fs.mkdirSync(postDir, { recursive: true });

    const minPage = await minifyHtml(page, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: false,
      keepClosingSlash: true,
      removeAttributeQuotes: false
    });
    fs.writeFileSync(path.join(postDir, 'index.html'), minPage);
  }
  console.log(`build: generated ${POST_ORDER.length} post pages in dist/posts/`);

})().catch((e) => { console.error(e); process.exit(1); });
