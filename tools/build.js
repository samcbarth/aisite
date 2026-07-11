#!/usr/bin/env node
/*
 * build.js - produces an optimized dist/ for GitHub Pages.
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
const BASE_URL = 'https://samcbarth.github.io/aisite';
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

  const staticFiles = ['manifest.webmanifest', 'sw.js', 'robots.txt', '.nojekyll', 'premium.html', 'premium.js', 'start-here.html', 'resources.html', 'about.html', 'work.html'];
  for (const f of staticFiles) {
    if (fs.existsSync(path.join(root, f))) fs.copyFileSync(path.join(root, f), path.join(dist, f));
  }
  copyRecursive(path.join(root, 'assets'), path.join(dist, 'assets'));

  // 2. index.html -> dist with deploy timestamp
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: false
  }).replace(',', '') + ' UTC';
  const assetVersion = timestamp.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8').replace('DEPLOY_TIME', timestamp);
  html = html
    .replace(/src="posts\.js"/g, `src="posts.js?v=${assetVersion}"`)
    .replace(/src="app\.js"/g, `src="app.js?v=${assetVersion}"`);
  html = syncHomepageCards(html);
  fs.writeFileSync(path.join(dist, 'index.html'), html);

  // 3. Regenerate SEO artifacts against dist (fresh JSON-LD + sitemap + feed)
  execFileSync('node', [path.join(root, 'tools', 'generate-seo.js'), dist], { stdio: 'inherit' });

  // 4a. Minify the JS bundles
  for (const f of ['posts.js', 'app.js', 'post-likes.js', 'premium.js']) {
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
  //    shell. Any content change -> new sw.js -> new worker installs and purges
  //    the stale cache. (Otherwise returning visitors keep the old posts.js.)
  const swPath = path.join(dist, 'sw.js');
  if (fs.existsSync(swPath)) {
    const hash = crypto.createHash('sha256');
    for (const f of ['index.html', 'premium.html', 'start-here.html', 'resources.html', 'about.html', 'work.html', 'assets/section-page.css', 'app.js', 'posts.js', 'premium.js', 'manifest.webmanifest']) {
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
  function cleanLocalAsset(imgUrl) {
    return (imgUrl || '').replace(/^\.?\//, '');
  }
  function makeOgImage(imgUrl) {
    if (!imgUrl) return '';
    if (/^(https?:|data:|\/)/.test(imgUrl)) return imgUrl.replace(/w=\d+&h=\d+/, 'w=1200&h=630');
    return `${BASE_URL}/${cleanLocalAsset(imgUrl)}`;
  }
  function makeHeroImage(imgUrl) {
    if (!imgUrl) return '';
    if (/^(https?:|data:|\/)/.test(imgUrl)) return imgUrl.replace(/w=\d+&h=\d+/, 'w=1160&h=440');
    return '../../' + cleanLocalAsset(imgUrl);
  }
  function makeCardImage(imgUrl) {
    if (!imgUrl) return '';
    if (!/^(https?:|data:|\/)/.test(imgUrl)) return cleanLocalAsset(imgUrl);
    return imgUrl.replace(/w=\d+&h=\d+/, 'w=900&h=506').replace(/q=\d+/, 'q=85');
  }
  function makePostPageImage(imgUrl) {
    if (!imgUrl) return '';
    if (/^(https?:|data:|\/)/.test(imgUrl)) return imgUrl;
    return '../../' + imgUrl.replace(/^\.?\//, '');
  }
  function syncHomepageCards(sourceHtml) {
    return sourceHtml.replace(/<a class="post-card"[\s\S]*?<\/a>/g, (cardHtml) => {
      const id = (cardHtml.match(/data-id="([^"]+)"/) || [])[1];
      const post = POSTS[id];
      if (!post) return cardHtml;
      const excerpt = makeExcerpt(post.body);
      return cardHtml
        .replace(/(<img class="post-thumb"[^>]*?)src="[^"]*" alt="[^"]*"/, `$1src="${makeCardImage(post.image)}" alt="${escAttr(post.title)} thumbnail"`)
        .replace(/(<img class="post-thumb") width="\d+" height="\d+"/, '$1 width="900" height="506"')
        .replace(/<span class="post-date">[\s\S]*?<\/span>/, `<span class="post-date">${escAttr(post.date)}</span>`)
        .replace(/<span class="post-category">[\s\S]*?<\/span>/, `<span class="post-category">${escAttr(post.category)}</span>`)
        .replace(/<span class="post-tag [^"]*">[\s\S]*?<\/span>/, `<span class="post-tag ${escAttr(post.tagClass)}">${escAttr(post.tag)}</span>`)
        .replace(/<div class="post-title">[\s\S]*?<\/div>/, `<div class="post-title">${escAttr(post.title)}</div>`)
        .replace(/<div class="post-excerpt">[\s\S]*?<\/div>/, `<div class="post-excerpt">${escAttr(excerpt)}</div>`);
    });
  }
  const INLINE_MEDIA = {
    post78: {
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=650&fit=crop&q=80',
      caption: 'Cognizant is using its own engineers, project teams, and support operations as the first large deployment environment.', side: 'left', after: 5,
      supportImage: 'https://images.unsplash.com/photo-1522071901873-411886a10004?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'The useful proof will connect adoption to quality, rework, and durable operating results.'
    },
    post77: {
      image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=900&h=650&fit=crop&q=80',
      caption: 'Forward deployed engineers translate between operating problems, internal systems, and production software.', side: 'right', after: 5,
      supportImage: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'The field work creates leverage only when one customer\'s solution makes the next deployment easier.'
    },
    post76: {
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&h=650&fit=crop&q=80',
      caption: 'Industrial AI needs one usable map across sensor, engineering, maintenance, and business records.', side: 'left', after: 5,
      supportImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'The deal works if better context produces safer actions without locking customers into another closed stack.'
    },
    post75: {
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&h=650&fit=crop&q=80',
      caption: 'The first dialogue put governments, researchers, companies, and civil society into one recurring process.', side: 'right', after: 5,
      supportImage: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'Common principles only become useful when countries and companies can turn them into operating controls.'
    },
    post74: {
      image: 'assets/images/post74-inline.jpg',
      caption: 'Moving voltage regulation closer to the processor shortens the electrical path and frees board space.', side: 'left', after: 5,
      supportImage: 'assets/images/post74-support.jpg',
      supportCaption: 'AI server economics depend on the full power and cooling system, not only the accelerator specification.'
    },
    post73: {
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=900&h=650&fit=crop&q=80',
      caption: 'Ownership data turns a repository inventory into a routing system for security and operations.', side: 'right', after: 5,
      supportImage: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'Automation at portfolio scale needs a stop condition for stale data and unexpected action volume.'
    },
    post72: {
      image: 'assets/images/post72-inline.jpg',
      caption: 'A central orchestration layer routes routine, regulated, and sensitive requests down different paths.', side: 'left', after: 5,
      supportImage: 'assets/images/post72-support.jpg',
      supportCaption: 'The quality of the human handoff will determine whether the system improves service, not only self-service.'
    },
    post71: {
      image: 'assets/images/post71-inline.jpg',
      caption: 'AWS is moving enterprise search, workplace AI, and agent infrastructure toward fewer product paths.', side: 'right', after: 5,
      supportImage: 'assets/images/post71-support.jpg',
      supportCaption: 'A migration starts with mapping the indexes, permissions, actions, and workflows already tied to the older services.'
    },
    post70: {
      image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=900&h=650&fit=crop&q=80',
      caption: 'A useful forecast shows the likely outcome and the uncertainty surrounding it.', side: 'left', after: 4,
      supportImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'Weather intelligence creates value when uncertainty connects to a defined operating decision.'
    },
    post69: {
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&h=650&fit=crop&q=80',
      caption: 'A repeatable offer still needs enough room for the customer\'s own systems and operating model.', side: 'right', after: 5,
      supportImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'Accenture Edge works if standard delivery reduces the project burden without hiding ownership or cost.'
    },
    post68: {
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&h=650&fit=crop&q=80',
      caption: 'Agent economics depend on the full path through planning, tools, context, and review.', side: 'left', after: 5,
      supportImage: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'A benchmark becomes a business case only when the savings survive real data, policies, and failure costs.'
    },
    post67: {
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&h=650&fit=crop&q=80',
      caption: 'MSPs need customer separation and one operating view across every environment they protect.', side: 'right', after: 4,
      supportImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'The acquisition works if identity policy becomes easier to operate across a large partner customer base.'
    },
    post66: {
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&h=650&fit=crop&q=80',
      caption: 'The browser now sits between sensitive business data and a growing set of AI tools.', side: 'left', after: 4,
      supportImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'Useful browser policy has to protect the company without becoming another obstacle to normal work.'
    },
    post65: {
      image: 'assets/images/post65-inline.jpg',
      caption: 'One buying plan only works when linear and streaming inventory share usable campaign context.', side: 'right', after: 4,
      supportImage: 'assets/images/post65-support.jpg',
      supportCaption: 'WBD is turning planning, pricing, activation, and measurement into one connected operating system.'
    },
    post64: {
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=650&fit=crop&q=80',
      caption: 'Moving past a pilot means connecting strategy, validation, governance, and daily operations.', side: 'left', after: 4,
      supportImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'The $6 million engagement will be judged by the business capacity it creates, not the number of use cases launched.'
    },
    post63: {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=650&fit=crop&q=80',
      caption: 'Rackspace is moving away from lower-margin resale toward infrastructure it can operate and govern.', side: 'right', after: 4,
      supportImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'The bet depends on connecting private control, public-cloud flexibility, and measurable customer work.'
    },
    post62: {
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&h=650&fit=crop&q=80',
      caption: 'Microsoft is moving engineering closer to the customer and the deployment work.',
      side: 'left',
      after: 3,
      supportImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'The reorganization changes the people, handoffs, and accountability behind enterprise AI.'
    },
    post61: {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900&h=650&fit=crop&q=80',
      caption: 'The real gain is redesigning the work, not adding another tool.',
      side: 'right',
      after: 2,
      supportImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'Leadership alignment is what turns adoption into output.'
    },
    post60: {
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Data_centers_in_Ashburn.jpg',
      caption: 'The software story is still tied to the physical stack underneath it.',
      side: 'left',
      after: 2,
      supportImage: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Minimalist_meeting_room_%28Unsplash%29.jpg',
      supportCaption: 'Modernization gets real when the work can be discussed, reviewed, and approved.'
    },
    post59: {
      image: 'assets/images/post59-inline.jpg',
      caption: 'The useful product is a simpler path from custom data to a model a team still owns.',
      side: 'left',
      after: 3,
      supportImage: 'assets/images/post59-support.jpg',
      supportCaption: 'Ownership and cost have to stay clear when an experiment becomes an operating system.'
    },
    post58: {
      image: 'assets/images/post58-inline.jpg',
      caption: 'The customer needs one clear view across a network that spans many systems.',
      side: 'right',
      after: 3,
      supportImage: 'assets/images/post58-support.jpg',
      supportCaption: 'The deal works only if software makes the physical network easier to operate.'
    },
    post56: {
      image: 'assets/images/post56-inline.jpg',
      caption: 'Agentic AI changes the compute stack, not just the model layer.',
      side: 'right',
      after: 2,
      supportImage: 'assets/images/post45-support.jpg',
      supportCaption: 'The finance question still decides how far the stack can scale.'
    },
    post57: {
      image: 'https://news.microsoft.com/source/asia/wp-content/uploads/2026/05/260422-CommBank-HR-004-1900x1268.jpg',
      caption: 'AI only matters when it changes the work, not just the interface.',
      side: 'left',
      after: 2,
      supportImage: 'https://news.microsoft.com/source/asia/wp-content/uploads/2026/05/260422-CommBank-HR-008-1900x1268.jpg',
      supportCaption: 'The real test is whether service work gets simpler for customers and staff.'
    },
    post55: {
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Virginia_Tech_-_data_center.jpg',
      caption: 'Consensus only matters when the network can keep moving through real failures.',
      side: 'right',
      after: 2,
      supportImage: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Wikimedia_Servers-0051_19.jpg',
      supportCaption: 'The business problem is still the same: keep the stack available when the links get messy.'
    },
    post53: {
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Duga-1_radar_data_center_interior_server_room_2018.jpg',
      caption: 'AI capacity only matters when the room, the power, and the cooling all work together.',
      side: 'right',
      after: 2,
      supportImage: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Excavation_begins_under_high-voltage_power_lines_%287902576092%29.jpg',
      supportCaption: 'The real story starts before the servers go live. It starts with power and site work.'
    },
    post54: {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Top_Workspace_Office.jpg/1280px-Top_Workspace_Office.jpg',
      caption: 'Cloud pricing only matters when finance can plan around it.',
      side: 'left',
      after: 2,
      supportImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Clean_minimalist_office_%28Unsplash%29.jpg/1280px-Clean_minimalist_office_%28Unsplash%29.jpg',
      supportCaption: 'The real work is in renewals and budgets, not press releases.'
    },
    post52: {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Viewing_Website_Analytics_on_Mobile_Device.jpg/960px-Viewing_Website_Analytics_on_Mobile_Device.jpg',
      caption: 'Budget control only works when someone owns the numbers behind it.',
      side: 'left',
      after: 2,
      supportImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Website_Heatmap_Analysis_on_Desktop.jpg/960px-Website_Heatmap_Analysis_on_Desktop.jpg',
      supportCaption: 'The real issue is not the button. It is the signal behind the button.'
    },
    post51: {
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=650&fit=crop&q=80',
      caption: 'Image creation only matters when it fits the workflow people already use.',
      side: 'right',
      after: 2,
      supportImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'The commercial edge is in keeping the creative work inside the same ecosystem.'
    },
    post50: {
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&h=650&fit=crop&q=80',
      caption: 'Customer messaging is becoming a product layer, not just a support inbox.',
      side: 'left',
      after: 2,
      supportImage: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'The businesses that win will answer faster without losing the human handoff.'
    },
    post49: {
      image: 'https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?w=900&h=650&fit=crop&q=80',
      caption: 'The next AI win is installation, not another shiny demo.',
      side: 'right',
      after: 2,
      supportImage: 'https://images.unsplash.com/photo-1758873267345-535a381ea6be?w=900&h=650&fit=crop&q=80',
      supportCaption: 'Customers still want real people near the workflow when the work gets messy.'
    },
    post47: {
      image: 'assets/images/post47-inline.jpg',
      caption: 'The useful AI stack is the one that keeps business context together.',
      side: 'right',
      after: 2,
      supportImage: 'assets/images/post47-support.jpg',
      supportCaption: 'Data movement is expensive when every team keeps rebuilding the same path.'
    },
    post48: {
      image: 'https://fastly.picsum.photos/id/857/1200/630.jpg?hmac=OyKwOXHFPYC1QCjlGxczNl8flsBcJMFQbaV-DUQnwUU',
      caption: 'Security work only matters if the control points stay clear.',
      side: 'right',
      after: 2,
      supportImage: 'https://fastly.picsum.photos/id/294/1200/630.jpg?hmac=pRqnRvsg1Jx7HUftdoScJF5VbkTj38dHcrfhsMojJs0',
      supportCaption: 'Enterprise AI in security has to move fast without losing the guardrails.'
    },
    post46: {
      image: 'assets/images/post46-inline.jpg',
      caption: 'OpenAI is building a channel around implementation, not just model access.',
      side: 'left',
      after: 2,
      supportImage: 'assets/images/post46-support.jpg',
      supportCaption: 'Partners now matter because workflow design is the hard part.'
    },
    post45: {
      image: 'assets/images/post45-inline.jpg',
      caption: 'Enterprise AI only matters when it fits the work teams already do every day.',
      side: 'right',
      after: 2,
      supportImage: 'assets/images/post45-support.jpg',
      supportCaption: 'The control point is workflow, not just model output.'
    },
    post44: {
      image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=900&h=650&fit=crop&q=80',
      caption: 'The real shift is from chat output to delegated workflow.',
      side: 'right',
      after: 2,
      supportImage: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=900&h=650&fit=crop&q=80',
      supportCaption: 'The hard part is still the workflow around the model.'
    },
    post43: {
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=650&fit=crop&q=80',
      caption: 'AI only becomes useful when it fits the workflow people already run every day.',
      side: 'right',
      after: 2,
      supportImage: 'https://images.unsplash.com/photo-1782094673136-5198a372980c?w=900&h=650&fit=crop&q=80',
      supportCaption: 'The economics still point back to compute, cooling, and the cost of delivering each useful task.'
    },
    post42: {
      image: 'https://images.unsplash.com/photo-1635310568932-47fd9c961c26?w=900&h=650&fit=crop&q=80',
      caption: 'The AI security story sits in the workflow, not the keynote.',
      side: 'left',
      after: 2,
      supportImage: 'https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?w=900&h=650&fit=crop&q=80',
      supportCaption: 'The business is moving toward trust, patching, and control over the software supply chain.'
    },
    post38: {
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&h=650&fit=crop&q=80',
      caption: 'AI demand is pushing more attention onto the memory and server layer underneath everyday electronics.',
      side: 'right',
      after: 3,
      supportImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=650&fit=crop&q=80',
      supportCaption: 'When memory gets expensive, the pressure shows up in retail hardware first.'
    },
    post39: {
      image: 'https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=900&h=650&fit=crop&q=80',
      caption: 'Theatrical viewing still matters when the movie gives people a reason to leave the house.',
      side: 'right',
      after: 3,
      supportImage: 'https://images.unsplash.com/photo-1643208589889-0735ad7218f0?w=900&h=650&fit=crop&q=80',
      supportCaption: 'Streaming changed the habit, but the living room still competes with the theater.'
    },
    post40: {
      image: 'https://images.unsplash.com/photo-1663932210347-164a05ed0ccd?w=900&h=650&fit=crop&q=80',
      caption: 'The AI business is moving closer to the hardware and data center layer underneath the models.',
      side: 'left',
      after: 4,
      supportImage: 'https://images.unsplash.com/photo-1682559736721-c2e77ff4c650?w=900&h=650&fit=crop&q=80',
      supportCaption: 'Own more of the stack and you own more of the economics.'
    },
    post41: {
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=900&h=650&fit=crop&q=80',
      caption: 'Enterprise AI still needs people sitting close to the workflow.',
      side: 'right',
      after: 4,
      supportImage: 'https://images.unsplash.com/photo-1631085160969-6a4889625eec?w=900&h=650&fit=crop&q=80',
      supportCaption: 'The money is in the messy middle between model access and business process.'
    },
    post36: {
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=900&h=650&fit=crop&q=80',
      caption: 'International fans discovering local food is one of the best stories around the World Cup.',
      side: 'right',
      after: 4,
      supportImage: 'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=900&h=650&fit=crop&q=80',
      supportCaption: 'The game creates the value. Its governing institutions should remain accountable to the people who support it.'
    },
    post37: {
      image: 'https://images.unsplash.com/photo-1758518730037-a16581a040e8?w=1200&h=675&fit=crop&q=80',
      caption: 'Trust gets shaky fast when a CRM starts sounding like a shared dataset.',
      side: 'left',
      after: 4,
      supportImage: 'https://images.unsplash.com/photo-1758518729794-456bbd9f70f8?w=1200&h=675&fit=crop&q=80',
      supportCaption: 'The real issue is permission, ownership, and whether the defaults still feel like customer control.'
    },
    post35: {
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?w=900&h=650&fit=crop&q=80',
      caption: 'Research gets more useful when AI shortens the first pass without replacing verification.',
      side: 'left',
      after: 4,
      supportImage: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=900&h=650&fit=crop&q=80',
      supportCaption: 'The best AI use cases fit into work the team already understands.'
    },
    post34: {
      image: 'https://images.unsplash.com/photo-1642984061431-fe76503975fd?w=900&h=650&fit=crop&q=80',
      caption: 'The gaming strategy looks different when employees carry the cuts and executives sell shares.',
      side: 'right',
      after: 3,
      supportImage: 'https://images.unsplash.com/photo-1767424196045-030bbde122a4?w=900&h=650&fit=crop&q=80',
      supportCaption: 'The filing does not explain motive, but the size and timing of the sales deserve attention.'
    },
    post33: {
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=650&fit=crop&q=80',
      caption: 'CRM data only works when teams trust the system holding it.',
      side: 'right',
      after: 3,
      supportImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop&q=80',
      supportCaption: 'The real issue is not enrichment. It is control, consent, and governance.'
    },
    post32: {
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900&h=650&fit=crop&q=80',
      caption: 'Public trust gets harder when financial incentives overlap with public power.',
      side: 'left',
      after: 3,
      supportImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=650&fit=crop&q=80',
      supportCaption: 'The core issue is governance, disclosure, and who benefits from access.'
    },
    post31: {
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=900&h=650&fit=crop&q=80',
      caption: 'AAA gaming keeps asking teams to carry bigger and riskier bets.',
      side: 'right',
      after: 3,
      supportImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&h=650&fit=crop&q=80',
      supportCaption: 'Players can feel when the business model starts crowding out the game.'
    },
    post30: { image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=650&fit=crop&q=80', caption: 'Retirement money is not built for a moonshot.', side: 'left', after: 2 },
    post29: { image: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=900&h=650&fit=crop&q=80', caption: 'Price pressure is how the boom reaches consumers.', side: 'right', after: 2 },
    post28: { image: 'https://images.unsplash.com/photo-1429514513361-8fa3226d0b08?w=900&h=650&fit=crop&q=80', caption: 'Supply is the part nobody gets to skip.', side: 'left', after: 2 },
    post27: { image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&h=650&fit=crop&q=80', caption: 'Local resistance changes the build math.', side: 'right', after: 2 },
    post26: { image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=650&fit=crop&q=80', caption: 'The market can only price so much hope at once.', side: 'left', after: 2 },
    post25: { image: 'https://images.unsplash.com/photo-1438109491414-7198515b166b?w=900&h=650&fit=crop&q=80', caption: 'Compute is becoming a financed asset class.', side: 'right', after: 2 },
    post24: { image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&h=650&fit=crop&q=80', caption: 'AI spend is now a capital allocation story.', side: 'left', after: 2 },
    post23: { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=650&fit=crop&q=80', caption: 'Power and water are becoming the real negotiation.', side: 'right', after: 2 },
    post22: { image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=900&h=650&fit=crop&q=80', caption: 'Infrastructure debates are now information debates.', side: 'left', after: 2 },
    post21: { image: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=900&h=650&fit=crop&q=80', caption: 'The CRM has to become the operating layer.', side: 'right', after: 2 },
    post20: { image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&h=650&fit=crop&q=80', caption: 'The real bill is the physical footprint.', side: 'right', after: 2 },
    post19: { image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=900&h=650&fit=crop&q=80', caption: 'Outcome-based pricing changes the conversation.', side: 'left', after: 2 },
    post18: { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=650&fit=crop&q=80', caption: 'Context is the actual product here.', side: 'right', after: 2 },
    post14: { image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=900&h=650&fit=crop&q=80', caption: 'The market starts asking who pays for the story.', side: 'left', after: 2 },
    post13: { image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=900&h=650&fit=crop&q=80', caption: 'The buildout becomes physical fast.', side: 'right', after: 2 },
    post15: { image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&h=650&fit=crop&q=80', caption: 'The race keeps moving toward orbit.', side: 'left', after: 2 },
    post16: { image: 'https://images.unsplash.com/photo-1459666644539-a9755287d6b2?w=900&h=650&fit=crop&q=80', caption: 'Local approval is now the bottleneck.', side: 'right', after: 2 },
    post17: { image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=900&h=650&fit=crop&q=80', caption: 'Orbit is the extreme version of the grid problem.', side: 'left', after: 2 },
    post12: { image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=900&h=650&fit=crop&q=80', caption: 'The leverage is in local tooling.', side: 'right', after: 2 },
    post11: { image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=650&fit=crop&q=80', caption: 'Trust is the inventory that really matters.', side: 'left', after: 2 },
    post10: { image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&h=650&fit=crop&q=80', caption: 'A strong core business can subsidize new plays.', side: 'right', after: 2 },
    post7: { image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=650&fit=crop&q=80', caption: 'Infrastructure is where the AI money is going.', side: 'left', after: 2 },
    post8: { image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=650&fit=crop&q=80', caption: 'Value creation has to be shared.', side: 'right', after: 2 },
    post9: { image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=900&h=650&fit=crop&q=80', caption: 'Security risk expands with the stack.', side: 'left', after: 2 },
    post6: { image: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40?w=900&h=650&fit=crop&q=80', caption: 'Prompting still needs structure.', side: 'right', after: 2 },
    post5: { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop&q=80', caption: 'Context beats generic automation.', side: 'left', after: 2 },
    post4: { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop&q=80', caption: 'Two different AI bets, same market.', side: 'right', after: 2 },
    post1: { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=650&fit=crop&q=80', caption: 'Operational systems, not just databases.', side: 'left', after: 1 },
    post2: { image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&h=650&fit=crop&q=80', caption: 'The shortest route from idea to shipped site.', side: 'right', after: 1 },
    post3: {
      image: 'assets/images/post3-marketing-team-1200.jpg',
      caption: 'A live strategy session fits the point that marketing keeps changing.',
      side: 'left',
      after: 1,
      supportImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop&q=80',
      supportCaption: 'A dashboard-style view fits the reporting side of the work.'
    }
  };
  const QUOTE_LIBRARY = {
    cognizantProvenInside: {
      text: 'We have built this capability, proven it inside our own business, and are now bringing it to joint clients at scale.',
      source: 'Ravi Kumar S, Cognizant CEO',
      sourceUrl: 'https://investors.cognizant.com/news-and-events/news/news-details/2026/Cognizant-expands-partnership-with-Google-Cloud-to-accelerate-enterprise-AI-adoption-with-Gemini-Enterprise-and-Google-Workspace/default.aspx'
    },
    googleFirstHand: {
      text: 'This deep, first-hand experience uniquely positions Cognizant to help our joint customers scale agentic AI solutions and accelerate time-to-value.',
      source: 'Karthik Narain, Google Cloud',
      sourceUrl: 'https://investors.cognizant.com/news-and-events/news/news-details/2026/Cognizant-expands-partnership-with-Google-Cloud-to-accelerate-enterprise-AI-adoption-with-Gemini-Enterprise-and-Google-Workspace/default.aspx'
    },
    schneiderIndustrialGrade: {
      text: 'a truly industrial grade AI platform that turns the complexity of operational data into a competitive advantage',
      source: 'Olivier Blum, Schneider Electric CEO',
      sourceUrl: 'https://www.se.com/ww/en/assets/pdf/Schneider-Electric-announces-agreement-to-acquire-Cognite'
    },
    akerComplementaryPlatform: {
      text: 'a highly complementary platform with a broad software offering',
      source: 'Oyvind Eriksen, Aker ASA CEO',
      sourceUrl: 'https://live.euronext.com/en/products/equities/company-news/2026-06-30-aker-asa-agreement-sell-cognite-schneider-electric'
    },
    unGovernTogether: {
      text: 'The question is whether we will govern this transformation together, or let it govern us.',
      source: 'António Guterres, United Nations Secretary-General',
      sourceUrl: 'https://www.un.org/global-dialogue-ai-governance/en'
    },
    unOpenDiscussion: {
      text: 'open, transparent and inclusive discussions on artificial intelligence governance',
      source: 'United Nations Global Dialogue on AI Governance',
      sourceUrl: 'https://www.un.org/en/delegate-delegate-gva-delegate-nyc/inaugural-global-dialogue-ai-governance-convenes-geneva'
    },
    adiEnergyConstraint: {
      text: 'energy now one of the most persistent constraints to scaling next-generation systems.',
      source: 'Vincent Roche, Analog Devices',
      sourceUrl: 'https://investor.analog.com/news-releases/news-release-details/analog-devices-completes-acquisition-empower-semiconductor'
    },
    siaPowerArchitecture: {
      text: 'The architecture of power delivery into AI data centers is now changing on an almost annual basis.',
      source: 'SIA and Deloitte, Powering AI',
      sourceUrl: 'https://www.semiconductors.org/wp-content/uploads/2026/05/Powering-AI_The-Semiconductor-Ecosystem-at-the-Foundation-of-Data-Centers_report.pdf'
    },
    githubInputsFail: {
      text: 'assume your data sources will occasionally be wrong, and your notifications will sometimes get lost.',
      source: 'GitHub repository ownership team',
      sourceUrl: 'https://github.blog/security/application-security/how-github-gave-every-repository-a-durable-owner/'
    },
    nistCommonLanguage: {
      text: 'a common language for describing secure software development practices',
      source: 'NIST Secure Software Development Framework',
      sourceUrl: 'https://csrc.nist.gov/projects/ssdf'
    },
    commbankSeparateIntelligence: {
      text: 'separating intelligence from channels',
      source: 'Shashank Verma, CommBank',
      sourceUrl: 'https://news.microsoft.com/source/asia/features/how-commonwealth-bank-and-microsoft-are-reimagining-the-future-of-customer-service/'
    },
    commbankTrustNuance: {
      text: 'where trust and nuance are important',
      source: 'Rachel Round, CommBank',
      sourceUrl: 'https://news.microsoft.com/source/asia/features/how-commonwealth-bank-and-microsoft-are-reimagining-the-future-of-customer-service/'
    },
    awsMaintenanceContinuity: {
      text: 'Customers already using these services and features can continue to do so.',
      source: 'AWS service availability update',
      sourceUrl: 'https://aws.amazon.com/about-aws/whats-new/2026/06/aws-service-availability/'
    },
    persistentContextualRecommendations: {
      text: 'accurate and contextual recommendations relevant to the concerned customer and opportunity',
      source: 'Persistent Systems',
      sourceUrl: 'https://www.persistent.com/services/data-and-analytics/data-science-and-machine-learning/intelligent-search/elevate-sales-engagement-outcomes-with-intelligent-search/'
    },
    microsoftAuroraPractical: {
      text: 'a meaningful step toward making weather foundation models more open, useful, and practical.',
      source: 'Sridhar Iyer, Microsoft AI',
      sourceUrl: 'https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/'
    },
    metOfficeAuroraPlatform: {
      text: 'a great platform for learning how to translate these tools for use in climate projection',
      source: 'Doug McNeall, UK Met Office',
      sourceUrl: 'https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/'
    },
    accentureWeeksOutcomes: {
      text: 'in weeks and get measurable outcomes at the scale, budget and speed that they need to grow.',
      source: 'Rajendra Prasad, Accenture',
      sourceUrl: 'https://www.googlecloudpresscorner.com/2026-07-07-Accenture-Edge-and-Google-Cloud-Bring-Scalable-Agentic-AI-Solutions-to-Mid-Market-Companies'
    },
    googleDirectSector: {
      text: 'directly to this sector.',
      source: 'Kevin Ichhpurani, Google Cloud',
      sourceUrl: 'https://www.googlecloudpresscorner.com/2026-07-07-Accenture-Edge-and-Google-Cloud-Bring-Scalable-Agentic-AI-Solutions-to-Mid-Market-Companies'
    },
    langchainModelPart: {
      text: 'model choice is only one part of improving agent performance.',
      source: 'LangChain',
      sourceUrl: 'https://www.langchain.com/blog/langchain-and-nvidia-launch-the-nemoclaw-deep-agents-blueprint'
    },
    nvidiaNetworkDefault: {
      text: 'Network access is denied by default.',
      source: 'NVIDIA',
      sourceUrl: 'https://build.nvidia.com/nvidia/nemoclaw-for-langchain-deep-agents-code/architecture'
    },
    barracudaMspScale: {
      text: 'fail to meet the needs of MSPs that must scale to securely manage millions of identities across thousands of customer environments',
      source: 'Barracuda Networks',
      sourceUrl: 'https://www.barracuda.com/company/news/2026/barracuda-acquires-evo-security-complete-identity-resilience'
    },
    evoMspOperations: {
      text: 'designed from day one for MSP operations',
      source: 'Evo Security',
      sourceUrl: 'https://www.evosecurity.com/blog/barracuda-acquires-evo-security'
    },
    akamaiControlsCannotSee: { text: 'cannot see how employees are interacting with AI tools', source: 'Mani Sundaram, Akamai', sourceUrl: 'https://www.akamai.com/newsroom/press-release/akamai-technologies-announces-intent-to-acquire-layerx-advancing-its-workforce-security-strategy-with-ai-usage-control' },
    layerxDefiningChallenge: { text: 'one of the defining challenges in enterprise security', source: 'Or Eshed, LayerX', sourceUrl: 'https://www.akamai.com/newsroom/press-release/akamai-technologies-announces-intent-to-acquire-layerx-advancing-its-workforce-security-strategy-with-ai-usage-control' },
    wbdPlanAcrossBoth: { text: 'the fluidity to plan, package, and optimize across both', source: 'Dr. Nage Sethu, Warner Bros. Discovery', sourceUrl: 'https://press.aboutamazon.com/aws/2026/7/warner-bros-discovery-announces-agentic-ai-powered-advertising-technology-built-on-aws-its-preferred-cloud-provider' },
    awsBetterOutcomes: { text: 'better outcomes for brands and viewers alike', source: 'Samira Panah Bakhtiar, AWS', sourceUrl: 'https://press.aboutamazon.com/aws/2026/7/warner-bros-discovery-announces-agentic-ai-powered-advertising-technology-built-on-aws-its-preferred-cloud-provider' },
    presidioDoneExperimenting: { text: 'done experimenting with AI', source: 'Bob Cagnazzi, Presidio', sourceUrl: 'https://www.globenewswire.com/news-release/2026/07/09/3325086/0/en/Presidio-Addresses-AI-Value-Paradox-with-New-Investments-Dedicated-AI-Consulting-Group-AI-Blueprint-and-Innovation-Lab.html' },
    presidioOperatingRedesign: { text: 'an operating model redesign, not a technology project', source: 'Rob Kim, Presidio', sourceUrl: 'https://www.globenewswire.com/news-release/2026/07/09/3325086/0/en/Presidio-Addresses-AI-Value-Paradox-with-New-Investments-Dedicated-AI-Consulting-Group-AI-Blueprint-and-Innovation-Lab.html' },
    rackspaceExpediteStrategy: { text: 'expedite our AI Enterprise strategy', source: 'Gajen Kandiah, Rackspace Technology', sourceUrl: 'https://www.globenewswire.com/news-release/2026/07/09/3324723/0/en/Rackspace-Technology-Announces-Plans-to-Accelerate-Enterprise-AI-Growth-Vector-Provides-Preliminary-2Q26-Results-and-Updates-FY26-Outlook.html' },
    apolloNextPhase: { text: 'the right steps to fund its next phase of growth', source: 'Aaron Sobel, Apollo Global Management', sourceUrl: 'https://www.globenewswire.com/news-release/2026/07/09/3324723/0/en/Rackspace-Technology-Announces-Plans-to-Accelerate-Enterprise-AI-Growth-Vector-Provides-Preliminary-2Q26-Results-and-Updates-FY26-Outlook.html' },
    microsoftEmbeddingEngineers: {
      text: 'embedding our engineering experts alongside customers',
      source: 'Microsoft employee note',
      sourceUrl: 'https://blogs.microsoft.com/blog/2026/07/06/the-latest-in-our-company-transformation/'
    },
    microsoftFrontierSkills: {
      text: 'deep industry knowledge, change management and continuous improvement experience and enterprise-grade AI engineering expertise',
      source: 'Microsoft Frontier Company',
      sourceUrl: 'https://news.microsoft.com/signal/?link_id=714&threads='
    },
    swissWorkflowRedesign: {
      text: 'the ones willing to redesign how work itself is organized.',
      source: 'Microsoft Source EMEA',
      sourceUrl: 'https://news.microsoft.com/source/emea/2026/07/swiss-ai-users-outperform-global-peers-on-productivity/'
    },
    swissHumanJudgment: {
      text: 'AI can accelerate execution, but human judgment remains critical.',
      source: 'Catrin Hinkel, Microsoft Switzerland',
      sourceUrl: 'https://news.microsoft.com/source/emea/2026/07/swiss-ai-users-outperform-global-peers-on-productivity/'
    },
    crusoeManagedOwnership: {
      text: "You shouldn't have to choose between a managed experience and ownership of your model.",
      source: 'Erwan Menard, Crusoe Cloud',
      sourceUrl: 'https://www.globenewswire.com/news-release/2026/07/07/3323398/0/en/Crusoe-Launches-Serverless-Fine-Tuning-and-Self-Serve-Inference-Deployments-Accelerating-Open-Model-Development-From-Experiment-to-Production.html'
    },
    stackOneLatencyCost: {
      text: 'optimize the latency and cost of our AI agents as we scale our infrastructure',
      source: 'StackOne AI researchers',
      sourceUrl: 'https://www.globenewswire.com/news-release/2026/07/07/3323398/0/en/Crusoe-Launches-Serverless-Fine-Tuning-and-Self-Serve-Inference-Deployments-Accelerating-Open-Model-Development-From-Experiment-to-Production.html'
    },
    lumenSimplerNetworks: {
      text: 'make complex environments simpler for customers',
      source: 'Kate Johnson, Lumen CEO',
      sourceUrl: 'https://ir.lumen.com/news/news-details/2026/Lumen-Completes-Alkira-Acquisition-Accelerating-Its-Unified-Digital-Platform-for-AI-Era-Networking/default.aspx'
    },
    gartnerLumenLeadership: {
      text: 'strengthens its ability to extend its leadership into enterprise AI WAN and connectivity services',
      source: 'Gartner, cited by Lumen',
      sourceUrl: 'https://ir.lumen.com/news/news-details/2026/Lumen-Completes-Alkira-Acquisition-Accelerating-Its-Unified-Digital-Platform-for-AI-Era-Networking/default.aspx'
    },
    meerkatWritesAtAllTimes: {
      text: 'all replicas can perform writes at all times',
      source: 'Cloudflare Blog',
      sourceUrl: 'https://blog.cloudflare.com/meerkat-introduction/'
    },
    meerkatNoTimeoutHalt: {
      text: 'progress is never halted due to a timeout',
      source: 'Cloudflare Blog',
      sourceUrl: 'https://blog.cloudflare.com/meerkat-introduction/'
    },
    quepaxaNoTimeouts: {
      text: 'the first protocol offering state-of-the-art normal-case efficiency without depending on timeouts',
      source: 'QuePaxa paper',
      sourceUrl: 'https://bford.info/pub/os/quepaxa/quepaxa.pdf'
    },
    metaAlbertaPower: {
      text: 'help power our AI innovations and core products',
      source: 'Meta Newsroom',
      sourceUrl: 'https://about.fb.com/news/2026/07/breaking-ground-on-metas-first-data-center-in-canada/'
    },
    albertaBringYourOwnPower: {
      text: 'large AI data centres have to bring their own power, pay for the infrastructure they need and meet strict water rules',
      source: 'Government of Alberta',
      sourceUrl: 'https://www.alberta.ca/release.cfm?xID=964679A5BC522-A153-A52F-1F8CC3D418C55411'
    },
    metaInfiniteTeam: {
      text: 'as if they had an infinite team behind them',
      source: 'Meta Business Agent',
      sourceUrl: 'https://about.fb.com/news/2026/06/meta-business-agent/'
    },
    metaBrandVoice24_7: {
      text: 'It handles customer conversations 24/7 in your brand voice.',
      source: 'Meta Business Agent',
      sourceUrl: 'https://metabusinessai.com/'
    },
    museCreativePartner: {
      text: 'the creative partner that knows your world',
      source: 'Meta Newsroom',
      sourceUrl: 'https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/'
    },
    museSubscriptionPlans: {
      text: "for people who want to create even more, it's available as part of Meta's subscription plans.",
      source: 'Meta Newsroom',
      sourceUrl: 'https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/'
    },
    metaHundredsSystems: {
      text: 'connect to a growing suite of hundreds of systems like Shopify, Zendesk, and Shopee',
      source: 'Meta Business Agent',
      sourceUrl: 'https://about.fb.com/news/2026/06/meta-business-agent/'
    },
    microsoftOutcomes: {
      text: 'measurable business outcomes',
      source: 'Microsoft Frontier Company',
      sourceUrl: 'https://blogs.microsoft.com/blog/2026/07/02/microsoft-frontier-company-ai-engineering-that-amplifies-and-protects-your-intelligence/'
    },
    microsoftModelChoice: {
      text: "Customers shouldn't be locked into a single model any more than they should be locked into a single technology vendor.",
      source: 'Microsoft Frontier Company',
      sourceUrl: 'https://blogs.microsoft.com/blog/2026/07/02/microsoft-frontier-company-ai-engineering-that-amplifies-and-protects-your-intelligence/'
    },
    sapDataContext: {
      text: 'Enterprise AI doesn’t stall because the models aren’t good enough; it stalls because the data isn’t ready for AI agents.',
      source: 'SAP News',
      sourceUrl: 'https://news.sap.com/2026/05/sap-to-acquire-dremio-unify-sap-and-non-sap-data-power-agentic-ai/'
    },
    dremioOpenPlatform: {
      text: 'one open platform where agents reason over all enterprise data, decide, and act',
      source: 'Dremio',
      sourceUrl: 'https://www.dremio.com/blog/sap-intends-to-acquire-dremio/'
    },
    ibmBobBetterAssistant: {
      text: 'The bar for enterprise AI is no longer a better coding assistant.',
      source: 'IBM Newsroom',
      sourceUrl: 'https://newsroom.ibm.com/2026-07-09-ibm-advances-enterprise-ai-software-development-with-multi-agent-capabilities-and-specialized-modernization-workflows'
    },
    ibmBobWorkflowsBackbone: {
      text: 'AI is good at open-ended problem-solving and bad at doing the same thing twice.',
      source: 'IBM Bob Blog',
      sourceUrl: 'https://bob.ibm.com/blog/bob-v2-release-announcement/'
    },
    jackHenryAccelerateRpg: {
      text: 'our developers are able to accelerate RPG development workflows, improve code quality, and gain deeper insights into decades of accumulated system knowledge',
      source: 'IBM Newsroom',
      sourceUrl: 'https://newsroom.ibm.com/2026-07-09-ibm-advances-enterprise-ai-software-development-with-multi-agent-capabilities-and-specialized-modernization-workflows'
    },
    openaiWorkflowAction: {
      text: 'ChatGPT Work is an agent that can take action across your apps and files, stay with a project for hours if needed, and turn a goal into finished work.',
      source: 'OpenAI',
      sourceUrl: 'https://openai.com/index/chatgpt-for-your-most-ambitious-work/'
    },
    openaiLongerTasks: {
      text: 'ChatGPT Work is an agent for longer, more involved tasks.',
      source: 'OpenAI Help Center',
      sourceUrl: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes'
    },
    ibmDaybreakMachineSpeed: {
      text: 'Attackers are already using AI to probe, exploit, and scale threats at machine speed. Defenders need the same advantage, with the security and control enterprises require.',
      source: 'IBM Newsroom',
      sourceUrl: 'https://newsroom.ibm.com/2026-06-22-ibm-and-openai-bring-frontier-ai-to-cyber-defense-helping-enterprises-keep-pace-with-machine-speed-threats'
    },
    openaiTrustedCyberDefense: {
      text: 'Work with OpenAI to bring trusted, AI-powered cyber defense to more organizations through your products, services, and expertise.',
      source: 'OpenAI',
      sourceUrl: 'https://openai.com/daybreak/'
    },
    openaiPartnerSolutions: {
      text: 'build, sell, and deliver AI solutions with OpenAI.',
      source: 'OpenAI Partner Network',
      sourceUrl: 'https://openai.com/index/introducing-openai-partner-network/'
    },
    openaiDeployEveryday: {
      text: 'build and deploy AI systems they can rely on every day',
      source: 'OpenAI Deployment Company',
      sourceUrl: 'https://openai.com/index/openai-launches-the-deployment-company/'
    },
    northslopeAllFdes: {
      text: 'At Northslope we are all Forward Deployed Engineers.',
      source: 'Northslope',
      sourceUrl: 'https://www.northslope.com/'
    },
    huangInfra: {
      text: 'We are now a few hundred billion dollars into it.',
      source: 'South China Morning Post',
      sourceUrl: 'https://www.scmp.com/tech/tech-war/article/3340709/watch-nvidia-ceo-jensen-huang-speak-davos'
    },
    nadellaWater: {
      text: 'In fact, the daily water usage over the course of an entire year is roughly equivalent to what a single restaurant would use.',
      source: 'Windows Central',
      sourceUrl: 'https://www.windowscentral.com/microsoft/satya-nadella-microsofts-ai-data-center-water-cooling-a-single-restaurant'
    },
    yaminiDisconnection: {
      text: 'Companies are struggling with unprecedented disconnection from their customers and each other.',
      source: 'HubSpot',
      sourceUrl: 'https://www.hubspot.com/web-guide/customer-connection-blueprint/future'
    },
    dharmeshProblems: {
      text: 'Customers are usually very good at identifying their problems, not so much the solutions.',
      source: 'HubSpot',
      sourceUrl: 'https://blog.hubspot.com/service/customer-success-quotes'
    },
    ellisonImportant: {
      text: 'Is this the most important new computer technology ever? Probably.',
      source: 'Oracle',
      sourceUrl: 'https://blogs.oracle.com/connect/larry-ellison-oracle-shape-future-healthcare'
    },
    ellisonProductive: {
      text: 'We proved to ourselves that we could be much more productive.',
      source: 'Oracle',
      sourceUrl: 'https://blogs.oracle.com/connect/larry-ellison-commits-oracle-to-healthcare-big-challenges'
    },
    muskFuture: {
      text: "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about.",
      source: 'SpaceX',
      sourceUrl: 'https://www.spacex.com/mission'
    },
    costcoValue: {
      text: 'Costco Gas Stations offer consistently low, member-exclusive prices.',
      source: 'Costco',
      sourceUrl: 'https://www.costco.com/f/-/my-life-fuel-costco-gas-stations'
    },
    costcoOperating: {
      text: 'Keep costs down and pass the savings on to our members',
      source: 'Fox Business',
      sourceUrl: 'https://www.foxbusiness.com/retail/history-costco'
    },
    rackhamTrust: {
      text: 'Trust is what makes business happen',
      source: 'Trusted Advisor',
      sourceUrl: 'https://trustedadvisor.com/trustmatters/neil-rackham-on-trust-in-professional-selling-trust-quotes-5'
    },
    ibmMemory: {
      text: 'Short-term memory enables an AI agent to remember recent inputs',
      source: 'IBM',
      sourceUrl: 'https://www.ibm.com/think/topics/ai-agent-memory'
    },
    lightwellStructuralShift: {
      text: 'fundamental structural shift',
      source: 'Red Hat',
      sourceUrl: 'https://newsroom.ibm.com/2026-07-08-ibm-and-red-hat-expand-lightwell-with-new-commercial-offerings-to-build-the-trust-infrastructure-for-ai-era-open-source'
    },
    lightwellNoDisruption: {
      text: 'certified fixes they can pull straight into the systems they already run, with no retooling or disruption',
      source: 'IBM',
      sourceUrl: 'https://newsroom.ibm.com/2026-07-08-ibm-and-red-hat-expand-lightwell-with-new-commercial-offerings-to-build-the-trust-infrastructure-for-ai-era-open-source'
    },
    googlePredictablePerformance: {
      text: 'more consistent and predictable performance',
      source: 'Google Ads Help',
      sourceUrl: 'https://support.google.com/google-ads/answer/17061251?hl=en'
    },
    googleNoAutoAdjust: {
      text: 'Google will not automatically adjust your bidding targets or budgets.',
      source: 'Google Ads Help',
      sourceUrl: 'https://support.google.com/google-ads/answer/17061251?hl=en'
    },
    databricksMemory: {
      text: 'memory scaling becomes a distinct and complementary axis',
      source: 'Databricks',
      sourceUrl: 'https://www.databricks.com/blog/memory-scaling-ai-agents'
    },
    reutersMemoryShortage: {
      text: 'An acute global shortage of memory chips is forcing artificial intelligence and consumer-electronics companies to fight for dwindling supplies',
      source: 'Reuters',
      sourceUrl: 'https://www.tbsnews.net/world/global-economy/ai-frenzy-driving-memory-chip-supply-crisis-1300721'
    },
    omdiaMemoryCosts: {
      text: 'In 1Q26, memory costs already accounted for nearly 60% of the total BOM cost in smartphones priced below $400',
      source: 'Omdia',
      sourceUrl: 'https://omdia.tech.informa.com/blogs/2026/july/global-smartphones-priced-below-400-dollars-will-decline-by-22percent-as-memory-costs-soar'
    },
    netflixDynamic: {
      text: 'The entertainment business remains extraordinarily dynamic and competitive.',
      source: 'Netflix',
      sourceUrl: 'https://ir.netflix.net/files/doc_financials/2026/q1/FINAL-Q1-26-Shareholder-Letter.pdf'
    },
    openaiComputePowered: {
      text: 'The world is moving to a compute-powered economy.',
      source: 'OpenAI',
      sourceUrl: 'https://openai.com/index/openai-broadcom-jalapeno-inference-chip/'
    },
    gpt56MoreIntelligence: {
      text: 'more intelligence from every token',
      source: 'OpenAI',
      sourceUrl: 'https://openai.com/index/gpt-5-6/'
    },
    microsoftMeasuredOutcomes: {
      text: 'measurable business outcomes',
      source: 'Microsoft',
      sourceUrl: 'https://blogs.microsoft.com/blog/2026/07/02/microsoft-frontier-company-ai-engineering-that-amplifies-and-protects-your-intelligence/'
    },
    microsoftMoreUseful: {
      text: 'more useful work from every token',
      source: 'Microsoft 365 Copilot Blog',
      sourceUrl: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/available-today-openai%E2%80%99s-gpt-5-6-in-microsoft-365-copilot/4533152'
    },
    microsoftModelChoice: {
      text: "Customers shouldn't be locked into a single model any more than they should be locked into a single technology vendor.",
      source: 'Microsoft',
      sourceUrl: 'https://blogs.microsoft.com/blog/2026/07/02/microsoft-frontier-company-ai-engineering-that-amplifies-and-protects-your-intelligence/'
    },
    broadcomRoadmap: {
      text: 'This is just the beginning of a multi-generation roadmap.',
      source: 'Broadcom',
      sourceUrl: 'https://investors.broadcom.com/news-releases/news-release-details/openai-and-broadcom-unveil-llm-optimized-intelligence-processor'
    },
    artHouseRally: {
      text: 'Our latest survey proves that audiences continue to rally around their local independent theaters.',
      source: 'Boxoffice Pro',
      sourceUrl: 'https://www.boxofficepro.com/art-house-convergence-releases-results-of-2026-national-audience-survey/'
    },
    cookUnavoidable: {
      text: 'price increases for some Apple products are unavoidable',
      source: 'Al Jazeera',
      sourceUrl: 'https://www.aljazeera.com/news/2026/6/18/apple-ceo-warns-price-rises-unavoidable-amid-ai-boom'
    },
    andrewElectricity: {
      text: 'AI is the new electricity.',
      source: 'Stanford Graduate School of Business',
      sourceUrl: 'https://www.gsb.stanford.edu/insights/andrew-ng-why-ai-new-electricity'
    },
    benioffAgentic: {
      text: 'Agentic AI is a new labor model, new productivity model, and a new economic model.',
      source: 'Salesforce',
      sourceUrl: 'https://www.salesforce.com/news/stories/agentic-ai-reshapes-workforce/'
    },
    bradCommunity: {
      text: 'Progress must go hand in hand with partnership.',
      source: 'Interesting Engineering',
      sourceUrl: 'https://interestingengineering.com/culture/microsoft-ai-infrastructure-water-power'
    },
    kurtzAgents: {
      text: "The humans get elevated into a role where they're now controlling a fleet of agents.",
      source: 'CRN',
      sourceUrl: 'https://www.crn.com/news/security/2025/george-kurtz-s-5-boldest-ai-statements-at-crowdstrike-fal-con-2025'
    },
    dellAIFirst: {
      text: 'machine intelligent systems will be the primary consumer of the world\'s IT computing power',
      source: 'CRN',
      sourceUrl: 'https://www.crn.com/news/channel-news/michael-dell-tech-built-for-ai-first-will-dominate-computing'
    },
    benioffTrust: {
      text: 'In a world of so much mistrust, being a trusted enterprise means making trust your highest value.',
      source: 'Salesforce',
      sourceUrl: 'https://www.salesforce.com/blog/how-to/build-brand-trust/'
    },
    spaceXTrillions: {
      text: 'to the Moon and Mars, energy production on the Moon and Mars, such future markets could be worth in the "trillions" of dollars',
      source: 'SpaceX S-1 filing',
      sourceUrl: 'https://content.spacex.com/cms-assets/FINAL_Documents%20and%20Updates/Project%20Apex%20-%20Australian%20Wrap%20and%20S-1%20-%20Final%20%28Lodgement%204%20June%202026%29%20-%20Compressed%20vF.pdf'
    },
    xboxNotHealthy: {
      text: 'Our business today is not healthy.',
      source: 'Xbox Wire',
      sourceUrl: 'https://news.xbox.com/en-us/2026/07/06/resetting-xbox/'
    },
    sonyCommunity: {
      text: 'The PlayStation community means everything to us',
      source: 'Sony Interactive Entertainment',
      sourceUrl: 'https://sonyinteractive.com/en/news/blog/difficult-news-about-our-workforce/'
    },
    whiteHouseConflict: {
      text: 'There are no conflicts of interest.',
      source: 'New York Magazine',
      sourceUrl: 'https://nymag.com/intelligencer/article/trump-made-more-money-2025-than-in-entire-first-term-usd-2-2-billion-crypto.html'
    },
    warrenCrypto: {
      text: 'brazen crypto corruption',
      source: 'New York Magazine',
      sourceUrl: 'https://nymag.com/intelligencer/article/trump-made-more-money-2025-than-in-entire-first-term-usd-2-2-billion-crypto.html'
    },
    hubspotMistake: {
      text: 'We made a mistake.',
      source: 'HubSpot Community',
      sourceUrl: 'https://community.hubspot.com/t/we-got-this-wrong-and-we-are-fixing-it/152063'
    },
    hubspotControl: {
      text: 'You control your data.',
      source: 'HubSpot Community',
      sourceUrl: 'https://community.hubspot.com/t/we-got-this-wrong-and-we-are-fixing-it/152063'
    },
    hubspotCommercialDataset: {
      text: "Enrichment data is provided by HubSpot's commercial dataset.",
      source: 'HubSpot Knowledge Base',
      sourceUrl: 'https://knowledge.hubspot.com/records/get-started-with-data-enrichment'
    },
    sonyMarathon: {
      text: 'Marathon remains an important part of our portfolio',
      source: 'GeekWire',
      sourceUrl: 'https://www.geekwire.com/2026/sony-cuts-significant-number-of-jobs-at-bungie-following-end-of-destiny-2-development/'
    },
    insiderSaleCaution: {
      text: 'Insider sells may not necessarily indicate a bearish view.',
      source: 'Benzinga',
      sourceUrl: 'https://www.benzinga.com/news/26/07/60335377/insider-unloading-hiroki-totoki-sells-4-73m-worth-sony-group-shares'
    },
    hbrCustomerChoice: {
      text: 'Competitive advantage is shifting from direct customer understanding to managing AI-shaped interactions.',
      source: 'Harvard Business Review',
      sourceUrl: 'https://hbr.org/2026/07/ai-is-changing-how-customers-choose-your-business'
    },
    googleSeoFoundation: {
      text: 'SEO best practices remain relevant and foundational to success with our generative AI features.',
      source: 'Google Search Central',
      sourceUrl: 'https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing'
    },
    microsoftPricingPredictability: {
      text: 'greater pricing predictability',
      source: 'Microsoft Source',
      sourceUrl: 'https://news.microsoft.com/source/2026/07/08/microsoft-announces-moving-to-annual-local-currency-pricing-updates-for-commercial-cloud-services-every-january/'
    },
    microsoftPlanConfidence: {
      text: 'plan with confidence and invest in the technologies they need to grow and adapt',
      source: 'Microsoft Source',
      sourceUrl: 'https://news.microsoft.com/source/2026/07/08/microsoft-announces-moving-to-annual-local-currency-pricing-updates-for-commercial-cloud-services-every-january/'
    },
    microsoftBuildSystemRuns: {
      text: 'AI alone won’t change your business. The system running it will.',
      source: 'Microsoft Build 2026',
      sourceUrl: 'https://news.microsoft.com/build-2026/'
    },
    deutscheTelekomAInative: {
      text: 'Becoming AI-native is not about adding AI to the way we work today. It is about redesigning the work itself.',
      source: 'OpenAI',
      sourceUrl: 'https://openai.com/index/deutsche-telekom/'
    },
    deutscheTelekomPrivacyFirst: {
      text: 'simple, multilingual, and privacy-first AI experiences',
      source: 'OpenAI',
      sourceUrl: 'https://openai.com/index/deutsche-telekom-collaboration/'
    },
    cobalt50PercentBetter: {
      text: 'up to 50% better generational performance',
      source: 'Microsoft Azure Blog',
      sourceUrl: 'https://azure.microsoft.com/en-us/blog/new-azure-cobalt-200-vms-deliver-50-performance-improvement-fully-optimized-for-modern-agentic-ai-workloads/'
    },
    cobaltAgentsUnique: {
      text: 'agents are unique from traditional workloads',
      source: 'Microsoft Azure Blog',
      sourceUrl: 'https://azure.microsoft.com/en-us/blog/new-azure-cobalt-200-vms-deliver-50-performance-improvement-fully-optimized-for-modern-agentic-ai-workloads/'
    },
    restaurantWorldCup: {
      text: 'You can\'t top American restaurants for amazing food and fantastic places to gather.',
      source: 'Michelle Korsmo, National Restaurant Association',
      sourceUrl: 'https://www.goodmorningamerica.com/travel/story/fifa-world-cup-tourists-love-american-food-133921609'
    },
    fifaCustodian: {
      text: 'FIFA has forgotten that it is the custodian of the sport, not the owner.',
      source: 'Transparency International',
      sourceUrl: 'https://www.transparency.org/en/news/give-back-the-game-how-to-fix-fifa'
    }
  };
  function makeQuote(label, quote) {
    return {
      label,
      text: quote.text,
      source: quote.source,
      sourceUrl: quote.sourceUrl
    };
  }
  const INLINE_QUOTES = {
    post78: { after: 7, quotes: [makeQuote('Internal proof', QUOTE_LIBRARY.cognizantProvenInside), makeQuote('Partner view', QUOTE_LIBRARY.googleFirstHand)] },
    post77: { after: 7, quotes: [makeQuote('Daily reliability', QUOTE_LIBRARY.openaiDeployEveryday), makeQuote('Field model', QUOTE_LIBRARY.northslopeAllFdes)] },
    post76: { after: 7, quotes: [makeQuote('Industrial data', QUOTE_LIBRARY.schneiderIndustrialGrade), makeQuote('Combined platform', QUOTE_LIBRARY.akerComplementaryPlatform)] },
    post75: { after: 7, quotes: [makeQuote('Shared governance', QUOTE_LIBRARY.unGovernTogether), makeQuote('Dialogue mandate', QUOTE_LIBRARY.unOpenDiscussion)] },
    post74: { after: 7, quotes: [makeQuote('Scaling constraint', QUOTE_LIBRARY.adiEnergyConstraint), makeQuote('Architecture pace', QUOTE_LIBRARY.siaPowerArchitecture)] },
    post73: { after: 7, quotes: [makeQuote('Automation boundary', QUOTE_LIBRARY.githubInputsFail), makeQuote('Operating language', QUOTE_LIBRARY.nistCommonLanguage)] },
    post72: { after: 7, quotes: [makeQuote('Architecture', QUOTE_LIBRARY.commbankSeparateIntelligence), makeQuote('Human boundary', QUOTE_LIBRARY.commbankTrustNuance)] },
    post71: { after: 7, quotes: [makeQuote('Service continuity', QUOTE_LIBRARY.awsMaintenanceContinuity), makeQuote('Existing use case', QUOTE_LIBRARY.persistentContextualRecommendations)] },
    post70: { after: 6, quotes: [makeQuote('Open model', QUOTE_LIBRARY.microsoftAuroraPractical), makeQuote('Scientific use', QUOTE_LIBRARY.metOfficeAuroraPlatform)] },
    post69: { after: 6, quotes: [makeQuote('Delivery promise', QUOTE_LIBRARY.accentureWeeksOutcomes), makeQuote('Market focus', QUOTE_LIBRARY.googleDirectSector)] },
    post68: { after: 5, quotes: [makeQuote('Performance lever', QUOTE_LIBRARY.langchainModelPart), makeQuote('Runtime policy', QUOTE_LIBRARY.nvidiaNetworkDefault)] },
    post67: { after: 5, quotes: [makeQuote('Scale problem', QUOTE_LIBRARY.barracudaMspScale), makeQuote('Product design', QUOTE_LIBRARY.evoMspOperations)] },
    post66: { after: 5, quotes: [makeQuote('Visibility gap', QUOTE_LIBRARY.akamaiControlsCannotSee), makeQuote('Security problem', QUOTE_LIBRARY.layerxDefiningChallenge)] },
    post65: { after: 5, quotes: [makeQuote('WBD goal', QUOTE_LIBRARY.wbdPlanAcrossBoth), makeQuote('AWS view', QUOTE_LIBRARY.awsBetterOutcomes)] },
    post64: { after: 6, quotes: [makeQuote('Customer stage', QUOTE_LIBRARY.presidioDoneExperimenting), makeQuote('Scope of change', QUOTE_LIBRARY.presidioOperatingRedesign)] },
    post63: { after: 6, quotes: [makeQuote('Capital plan', QUOTE_LIBRARY.rackspaceExpediteStrategy), makeQuote('Investor view', QUOTE_LIBRARY.apolloNextPhase)] },
    post62: { after: 4, quotes: [makeQuote('Delivery model', QUOTE_LIBRARY.microsoftEmbeddingEngineers), makeQuote('Combined skills', QUOTE_LIBRARY.microsoftFrontierSkills)] },
    post61: { after: 3, quotes: [makeQuote('Redesign', QUOTE_LIBRARY.swissWorkflowRedesign), makeQuote('Judgment', QUOTE_LIBRARY.swissHumanJudgment)] },
    post60: { after: 3, quotes: [makeQuote('Assistant', QUOTE_LIBRARY.ibmBobBetterAssistant), makeQuote('Repeat', QUOTE_LIBRARY.ibmBobWorkflowsBackbone)] },
    post59: { after: 4, quotes: [makeQuote('Ownership', QUOTE_LIBRARY.crusoeManagedOwnership), makeQuote('Customer goal', QUOTE_LIBRARY.stackOneLatencyCost)] },
    post58: { after: 4, quotes: [makeQuote('Customer promise', QUOTE_LIBRARY.lumenSimplerNetworks), makeQuote('Market view', QUOTE_LIBRARY.gartnerLumenLeadership)] },
    post57: { after: 3, quotes: [makeQuote('AI-native', QUOTE_LIBRARY.deutscheTelekomAInative), makeQuote('Customer AI', QUOTE_LIBRARY.deutscheTelekomPrivacyFirst)] },
    post56: { after: 3, quotes: [makeQuote('System', QUOTE_LIBRARY.microsoftBuildSystemRuns), makeQuote('Performance', QUOTE_LIBRARY.cobalt50PercentBetter), makeQuote('Agents', QUOTE_LIBRARY.cobaltAgentsUnique)] },
    post55: { after: 3, quotes: [makeQuote('Writes', QUOTE_LIBRARY.meerkatWritesAtAllTimes), makeQuote('Timeouts', QUOTE_LIBRARY.meerkatNoTimeoutHalt)] },
    post53: { after: 3, quotes: [makeQuote('Power', QUOTE_LIBRARY.metaAlbertaPower), makeQuote('Rules', QUOTE_LIBRARY.albertaBringYourOwnPower)] },
    post54: { after: 3, quotes: [makeQuote('Predictability', QUOTE_LIBRARY.microsoftPricingPredictability), makeQuote('Confidence', QUOTE_LIBRARY.microsoftPlanConfidence)] },
    post52: { after: 3, quotes: [makeQuote('Predictability', QUOTE_LIBRARY.googlePredictablePerformance), makeQuote('No auto fix', QUOTE_LIBRARY.googleNoAutoAdjust)] },
    post51: { after: 3, quotes: [makeQuote('Creative partner', QUOTE_LIBRARY.museCreativePartner), makeQuote('Subscription', QUOTE_LIBRARY.museSubscriptionPlans)] },
    post50: { after: 3, quotes: [makeQuote('Infinite team', QUOTE_LIBRARY.metaInfiniteTeam), makeQuote('Brand voice', QUOTE_LIBRARY.metaBrandVoice24_7)] },
    post49: { after: 3, quotes: [makeQuote('Business outcomes', QUOTE_LIBRARY.microsoftOutcomes), makeQuote('Model choice', QUOTE_LIBRARY.microsoftModelChoice)] },
    post47: { after: 3, quotes: [makeQuote('Data readiness', QUOTE_LIBRARY.sapDataContext), makeQuote('Open platform', QUOTE_LIBRARY.dremioOpenPlatform)] },
    post48: { after: 3, quotes: [makeQuote('Machine speed', QUOTE_LIBRARY.ibmDaybreakMachineSpeed), makeQuote('Trusted defense', QUOTE_LIBRARY.openaiTrustedCyberDefense)] },
    post46: { after: 3, quotes: [makeQuote('Partner network', QUOTE_LIBRARY.openaiPartnerSolutions), makeQuote('Deployment', QUOTE_LIBRARY.openaiDeployEveryday)] },
    post45: { after: 3, quotes: [makeQuote('Repeatable work', QUOTE_LIBRARY.ibmBobWorkflowsBackbone), makeQuote('Customer proof', QUOTE_LIBRARY.jackHenryAccelerateRpg)] },
    post44: { after: 3, quotes: [makeQuote('Workflow agent', QUOTE_LIBRARY.openaiWorkflowAction), makeQuote('Longer tasks', QUOTE_LIBRARY.openaiLongerTasks)] },
    post43: { after: 3, quotes: [makeQuote('OpenAI framing', QUOTE_LIBRARY.gpt56MoreIntelligence), makeQuote('Microsoft framing', QUOTE_LIBRARY.microsoftMoreUseful)] },
    post42: { after: 4, quotes: [makeQuote('Structural shift', QUOTE_LIBRARY.lightwellStructuralShift), makeQuote('No disruption', QUOTE_LIBRARY.lightwellNoDisruption)] },
    post40: { after: 4, quotes: [makeQuote('Compute economy', QUOTE_LIBRARY.openaiComputePowered), makeQuote('Roadmap', QUOTE_LIBRARY.broadcomRoadmap)] },
    post41: { after: 4, quotes: [makeQuote('Outcomes', QUOTE_LIBRARY.microsoftMeasuredOutcomes), makeQuote('Model choice', QUOTE_LIBRARY.microsoftModelChoice)] },
    post38: { after: 4, quotes: [makeQuote('Supply', QUOTE_LIBRARY.reutersMemoryShortage), makeQuote('Cost pressure', QUOTE_LIBRARY.omdiaMemoryCosts)] },
    post39: { after: 4, quotes: [makeQuote('Streaming', QUOTE_LIBRARY.netflixDynamic), makeQuote('Theaters', QUOTE_LIBRARY.artHouseRally)] },
    post36: { after: 6, quotes: [makeQuote('Fan experience', QUOTE_LIBRARY.restaurantWorldCup), makeQuote('Accountability', QUOTE_LIBRARY.fifaCustodian)] },
    post37: { after: 4, quotes: [makeQuote('Trust', QUOTE_LIBRARY.hubspotControl), makeQuote('Dataset', QUOTE_LIBRARY.hubspotCommercialDataset)] },
    post35: { after: 6, quotes: [makeQuote('Strategy view', QUOTE_LIBRARY.hbrCustomerChoice), makeQuote('Search view', QUOTE_LIBRARY.googleSeoFoundation)] },
    post34: { after: 5, quotes: [makeQuote('Sony view', QUOTE_LIBRARY.sonyMarathon), makeQuote('Market caution', QUOTE_LIBRARY.insiderSaleCaution)] },
    post33: { after: 4, quotes: [makeQuote('Accountability', QUOTE_LIBRARY.hubspotMistake), makeQuote('Trust standard', QUOTE_LIBRARY.hubspotControl)] },
    post32: { after: 4, quotes: [makeQuote('Defense view', QUOTE_LIBRARY.whiteHouseConflict), makeQuote('Critic view', QUOTE_LIBRARY.warrenCrypto)] },
    post31: { after: 4, quotes: [makeQuote('Xbox view', QUOTE_LIBRARY.xboxNotHealthy), makeQuote('Sony view', QUOTE_LIBRARY.sonyCommunity)] },
    post30: { after: 3, quotes: [makeQuote('Builder view', QUOTE_LIBRARY.muskFuture), makeQuote('Trust view', QUOTE_LIBRARY.benioffTrust)] },
    post29: { after: 3, quotes: [makeQuote('Apple view', QUOTE_LIBRARY.cookUnavoidable), makeQuote('Platform view', QUOTE_LIBRARY.andrewElectricity)] },
    post28: { after: 3, quotes: [makeQuote('Infrastructure view', QUOTE_LIBRARY.huangInfra), makeQuote('Factory view', QUOTE_LIBRARY.dellAIFirst)] },
    post27: { after: 3, quotes: [makeQuote('Community view', QUOTE_LIBRARY.bradCommunity), makeQuote('Reality check', QUOTE_LIBRARY.nadellaWater)] },
    post26: { after: 3, quotes: [makeQuote('Market view', QUOTE_LIBRARY.spaceXTrillions), makeQuote('Trust view', QUOTE_LIBRARY.benioffTrust)] },
    post25: { after: 3, quotes: [makeQuote('Infrastructure view', QUOTE_LIBRARY.huangInfra), makeQuote('Platform view', QUOTE_LIBRARY.andrewElectricity)] },
    post24: { after: 3, quotes: [makeQuote('Infrastructure view', QUOTE_LIBRARY.huangInfra), makeQuote('Reality check', QUOTE_LIBRARY.nadellaWater)] },
    post23: { after: 3, quotes: [makeQuote('Community view', QUOTE_LIBRARY.bradCommunity), makeQuote('Reality check', QUOTE_LIBRARY.nadellaWater)] },
    post22: { after: 3, quotes: [makeQuote('Trust view', QUOTE_LIBRARY.benioffTrust), makeQuote('Community view', QUOTE_LIBRARY.bradCommunity)] },
    post21: { after: 3, quotes: [makeQuote('Connection view', QUOTE_LIBRARY.yaminiDisconnection), makeQuote('Agentic view', QUOTE_LIBRARY.benioffAgentic)] },
    post20: { after: 4, quotes: [makeQuote('Bullish view', QUOTE_LIBRARY.huangInfra), makeQuote('Reality check', QUOTE_LIBRARY.nadellaWater)] },
    post19: { after: 3, quotes: [makeQuote('Product view', QUOTE_LIBRARY.yaminiDisconnection), makeQuote('Operator view', QUOTE_LIBRARY.dharmeshProblems)] },
    post18: { after: 3, quotes: [makeQuote('Product view', QUOTE_LIBRARY.yaminiDisconnection), makeQuote('Operator view', QUOTE_LIBRARY.dharmeshProblems)] },
    post14: { after: 3, quotes: [makeQuote('Builder view', QUOTE_LIBRARY.muskFuture), makeQuote('Market view', QUOTE_LIBRARY.spaceXTrillions)] },
    post13: { after: 3, quotes: [makeQuote('Expansion view', QUOTE_LIBRARY.ellisonImportant), makeQuote('Execution view', QUOTE_LIBRARY.ellisonProductive)] },
    post15: { after: 3, quotes: [makeQuote('Infrastructure view', QUOTE_LIBRARY.huangInfra), makeQuote('Platform view', QUOTE_LIBRARY.ellisonImportant)] },
    post16: { after: 3, quotes: [makeQuote('Community view', QUOTE_LIBRARY.bradCommunity), makeQuote('Reality check', QUOTE_LIBRARY.nadellaWater)] },
    post17: { after: 3, quotes: [makeQuote('Future view', QUOTE_LIBRARY.muskFuture), makeQuote('Buildout view', QUOTE_LIBRARY.huangInfra)] },
    post12: { after: 3, quotes: [makeQuote('Productivity view', QUOTE_LIBRARY.andrewElectricity), makeQuote('Operator view', QUOTE_LIBRARY.benioffAgentic)] },
    post11: { after: 3, quotes: [makeQuote('Trust view', QUOTE_LIBRARY.rackhamTrust), makeQuote('Enterprise view', QUOTE_LIBRARY.benioffTrust)] },
    post10: { after: 3, quotes: [makeQuote('Costco view', QUOTE_LIBRARY.costcoValue), makeQuote('Operating view', QUOTE_LIBRARY.costcoOperating)] },
    post7: { after: 3, quotes: [makeQuote('Factory view', QUOTE_LIBRARY.dellAIFirst), makeQuote('Infrastructure view', QUOTE_LIBRARY.huangInfra)] },
    post8: { after: 3, quotes: [makeQuote('Productivity view', QUOTE_LIBRARY.andrewElectricity), makeQuote('Factory view', QUOTE_LIBRARY.dellAIFirst)] },
    post9: { after: 3, quotes: [makeQuote('Defender view', QUOTE_LIBRARY.kurtzAgents), makeQuote('Platform view', QUOTE_LIBRARY.andrewElectricity)] },
    post6: { after: 3, quotes: [makeQuote('Memory view', QUOTE_LIBRARY.ibmMemory), makeQuote('Systems view', QUOTE_LIBRARY.databricksMemory)] },
    post5: { after: 2, quotes: [makeQuote('Customer view', QUOTE_LIBRARY.dharmeshProblems), makeQuote('Connection view', QUOTE_LIBRARY.yaminiDisconnection)] },
    post4: { after: 2, quotes: [makeQuote('Agentic view', QUOTE_LIBRARY.benioffAgentic), makeQuote('Connection view', QUOTE_LIBRARY.yaminiDisconnection)] },
    post1: { after: 2, quotes: [makeQuote('Connection view', QUOTE_LIBRARY.yaminiDisconnection), makeQuote('Customer view', QUOTE_LIBRARY.dharmeshProblems)] },
    post2: { after: 2, quotes: [makeQuote('Build view', QUOTE_LIBRARY.andrewElectricity), makeQuote('Trust view', QUOTE_LIBRARY.benioffTrust)] },
    post3: { after: 2, quotes: [makeQuote('Customer view', QUOTE_LIBRARY.dharmeshProblems), makeQuote('Platform view', QUOTE_LIBRARY.andrewElectricity)] }
  };

  function makeInlineImage(imgUrl) {
    return makePostPageImage(imgUrl.replace(/w=\d+&h=\d+/, 'w=1200&h=675'));
  }

  function hashString(input) {
    let hash = 2166136261;
    for (let i = 0; i < input.length; i += 1) {
      hash ^= input.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function pickPalette(seed) {
    const palettes = [
      ['#7c6af7', '#22d3ee', '#111827'],
      ['#f97316', '#f59e0b', '#1f2937'],
      ['#10b981', '#22c55e', '#0f172a'],
      ['#f472b6', '#7c6af7', '#111827'],
      ['#38bdf8', '#0ea5e9', '#0b1120'],
      ['#e879f9', '#fb7185', '#1f132b']
    ];
    return palettes[seed % palettes.length];
  }

  function imageKey(imgUrl) {
    return (imgUrl || '').split('?')[0];
  }

  function pickSupportImage(postId) {
    const current = POSTS[postId];
    const primary = INLINE_MEDIA[postId] || {};
    const seen = new Set([current && current.image, primary.image].filter(Boolean).map(imageKey));
    const start = POST_ORDER.indexOf(postId);
    for (let offset = 1; offset < POST_ORDER.length; offset += 1) {
      const candidate = POSTS[POST_ORDER[(start + offset) % POST_ORDER.length]];
      if (candidate && candidate.image && !seen.has(imageKey(candidate.image))) return candidate.image;
    }
    return current && current.image ? current.image : '';
  }

  function injectInlineMedia(body, post, postId) {
    const media = INLINE_MEDIA[postId] || {};
    const side = media.side || (POST_ORDER.indexOf(postId) % 2 === 0 ? 'right' : 'left');
    const imgUrl = makeInlineImage(media.image || post.inlineImage || post.image);
    const caption = media.caption || post.inlineCaption || ('A visual reference for ' + post.title);
    const after = Math.max(1, media.after || post.inlineAfter || 2);
    const postClass = postId === 'post14' ? ' inline-media-spacex' : '';
    const inline = `<figure class="inline-media inline-media-${side}${postClass}"><img src="${imgUrl}" alt="${escAttr(post.title)}" width="900" height="650" loading="lazy"><figcaption>${escAttr(caption)}</figcaption></figure>`;

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

  function makeSupportMedia(post, postId) {
    const media = INLINE_MEDIA[postId] || {};
    const imgUrl = media.supportImage || pickSupportImage(postId);
    if (!imgUrl) return '';
    const supportImg = makeInlineImage(imgUrl);
    const caption = media.supportCaption || 'Another angle on the business impact.';
    return `<figure class="inline-media post-support-media"><img src="${supportImg}" alt="${escAttr(post.title)} supporting image" width="1200" height="675" loading="lazy"><figcaption>${escAttr(caption)}</figcaption></figure>`;
  }
  function injectInlineQuotes(body, postId) {
    const block = INLINE_QUOTES[postId];
    if (!block || !block.quotes || !block.quotes.length) return body;

    const quotes = block.quotes.map((quote) => {
      const sourceHtml = quote.sourceUrl
        ? `<a class="inline-quote-source" href="${escAttr(quote.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escAttr(quote.source)}</a>`
        : `<span class="inline-quote-source">${escAttr(quote.source)}</span>`;
      return `<blockquote class="inline-quote">` +
        `<span class="inline-quote-label">${escAttr(quote.label)}</span>` +
        `<div class="inline-quote-text">"${escAttr(quote.text)}"</div>` +
        `<div class="inline-quote-meta">Source: ${sourceHtml}</div>` +
        `</blockquote>`;
    }).join('');

    const inline = `<aside class="inline-quotes">${quotes}</aside>`;
    const totalParagraphs = (body.match(/<\/p>/g) || []).length;
    if (totalParagraphs === 0) return inline + body;
    const insertAfter = Math.min(Math.max(1, block.after || 2), Math.max(1, totalParagraphs - 1));
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
      const thumb = makePostPageImage(rp.image.replace(/w=\d+&h=\d+/, 'w=600&h=300'));
      return `<a class="related-card" href="../${toSlug(rp.title)}/">` +
        `<img src="${thumb}" alt="${escAttr(rp.title)} thumbnail" loading="lazy">` +
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
    const bodyHtml = injectInlineQuotes(injectInlineMedia(p.body.trim(), p, id), id);
    const supportMediaHtml = makeSupportMedia(p, id);
    const heroImageRel = makeHeroImage(p.image);
    const heroImageAbs = makeOgImage(p.image);
    const jsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.iso,
      url: canonical,
      author: { '@type': 'Person', name: 'Sam C Barth', url: BASE_URL },
      image: heroImageAbs,
      description: excerpt,
      articleSection: p.category
    });

    const titleSafe = escAttr(p.title);
    const excerptSafe = escAttr(excerpt);

    let page = template
      .replace(/POST_TITLE/g, titleSafe)
      .replace(/POST_EXCERPT/g, excerptSafe)
      .replace(/POST_IMAGE_OG/g, heroImageAbs)
      .replace(/POST_IMAGE_HERO/g, heroImageRel)
      .replace(/POST_DATE/g, p.date)
      .replace(/POST_ISO/g, p.iso)
      .replace(/POST_CATEGORY/g, p.category)
      .replace(/POST_TAG_CLASS/g, p.tagClass)
      .replace(/POST_TAG/g, p.tag)
      .replace(/POST_READ_TIME/g, String(readTime))
      .replace(/POST_CANONICAL/g, canonical)
      .replace(/POST_ID/g, id)
      .replace('POST_BODY', bodyHtml)
      .replace('POST_SUPPORT_MEDIA', supportMediaHtml)
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
