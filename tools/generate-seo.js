#!/usr/bin/env node
/*
 * generate-seo.js — regenerates SEO artifacts from the single source of truth
 * (posts.js): the JSON-LD block inside index.html, sitemap.xml, and feed.xml.
 *
 * Usage:  node tools/generate-seo.js [targetDir]
 *   targetDir defaults to the repo root. The CI build runs it against dist/ so
 *   timestamps reflect deploy time. It is idempotent (JSON-LD lives between
 *   <!-- JSONLD:START --> / <!-- JSONLD:END --> markers), so it is also run
 *   locally and the results committed, keeping dev and prod identical.
 */
const fs = require('fs');
const path = require('path');
const { POSTS, POST_ORDER } = require('../posts.js');

const SITE = 'https://samcbarth.github.io/aisite/';
const targetDir = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(__dirname, '..');

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const stripHtml = (html) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const now = new Date();

// ── JSON-LD (Person + WebSite + Blog with each post) ──────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': SITE + '#person',
      name: 'Sam C Barth',
      url: SITE,
      jobTitle: 'HubSpot Strategy & Operations Manager',
      worksFor: { '@type': 'Organization', name: 'LAIRE' },
      address: [
        { '@type': 'PostalAddress', addressLocality: 'Dallas', addressRegion: 'TX', addressCountry: 'US' },
        { '@type': 'PostalAddress', addressLocality: 'El Reno', addressRegion: 'OK', addressCountry: 'US' }
      ],
      sameAs: [
        'https://linkedin.com/in/samcbarth',
        'https://samcbarthresume.work/'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': SITE + '#website',
      url: SITE,
      name: 'Sam C Barth',
      description: 'RevOps, AI, and CRM strategy from Sam C Barth.',
      publisher: { '@id': SITE + '#person' }
    },
    {
      '@type': 'Blog',
      '@id': SITE + '#blog',
      url: SITE,
      name: 'Sam C Barth — Latest Updates',
      author: { '@id': SITE + '#person' },
      blogPost: POST_ORDER.map((id) => {
        const p = POSTS[id];
        return {
          '@type': 'BlogPosting',
          headline: p.title,
          datePublished: p.iso,
          url: SITE + '#' + id,
          author: { '@id': SITE + '#person' },
          articleSection: p.category,
          description: stripHtml(p.body).slice(0, 200)
        };
      })
    }
  ]
};

const ldScript = '<script type="application/ld+json">\n' +
  JSON.stringify(jsonLd, null, 2) + '\n</script>';

const indexPath = path.join(targetDir, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
const marker = /<!-- JSONLD:START -->[\s\S]*?<!-- JSONLD:END -->/;
if (!marker.test(html)) throw new Error('JSONLD markers not found in ' + indexPath);
html = html.replace(marker, '<!-- JSONLD:START -->\n  ' + ldScript + '\n  <!-- JSONLD:END -->');
fs.writeFileSync(indexPath, html);

// ── sitemap.xml (single-page app: one canonical URL) ──────────────
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}</loc>
    <lastmod>${now.toISOString().slice(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(targetDir, 'sitemap.xml'), sitemap);

// ── feed.xml (RSS 2.0) ────────────────────────────────────────────
const items = POST_ORDER.map((id) => {
  const p = POSTS[id];
  const link = SITE + '#' + id;
  const pub = new Date(p.iso + 'T12:00:00Z').toUTCString();
  return `    <item>
      <title>${esc(p.title)}</title>
      <link>${esc(link)}</link>
      <guid isPermaLink="false">${esc(link)}</guid>
      <pubDate>${pub}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(stripHtml(p.body).slice(0, 280))}</description>
    </item>`;
}).join('\n');

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sam C Barth — RevOps, AI &amp; CRM Strategy</title>
    <link>${SITE}</link>
    <atom:link href="${SITE}feed.xml" rel="self" type="application/rss+xml"/>
    <description>RevOps, AI, and CRM strategy from Sam C Barth.</description>
    <language>en-us</language>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
fs.writeFileSync(path.join(targetDir, 'feed.xml'), feed);

console.log('generate-seo: wrote JSON-LD, sitemap.xml, feed.xml to ' + targetDir);
