/*
 * app.js - site behavior. Externalized from index.html so the page can ship a
 * strict Content-Security-Policy (script-src 'self') with no inline JavaScript.
 * All user interactions are wired here via addEventListener / event delegation
 * rather than inline on* attributes. Post data lives in posts.js (window.POSTS).
 */
(function () {
  'use strict';

  const posts = window.POSTS || {};
  const postOrder = window.POST_ORDER || [];
  function toSlug(title) {
    return title.toLowerCase().replace(/['']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  function postUrl(id) {
    const post = posts[id];
    return post ? SITE_URL + 'posts/' + toSlug(post.title) + '/' : SITE_URL;
  }
  function makeCardImage(imgUrl) {
    return imgUrl.replace(/w=\d+&h=\d+/, 'w=576&h=576').replace(/q=\d+/, 'q=85');
  }
  function makeExcerpt(html, maxLen) {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const limit = maxLen || 160;
    return text.length > limit ? text.slice(0, limit - 3) + '...' : text;
  }
  let currentPostId = null;
  let activeFilter = null;
  let searchQuery = '';
  let lastFocused = null;

  // Sponsor config.
  // Fill this in to feature a sponsor; leave name empty to show the placeholder.
  const sponsor = {
    name: '',
    blurb: '',
    url: 'mailto:samcbarth@gmail.com?subject=Sponsoring%20the%20newsletter',
    logo: ''
  };

  // Likes config.
  // Setup (one time) - see google-apps-script.js for full instructions:
  //   1. Create a Google Sheet with a tab named "likes" (headers: post_id, likes)
  //   2. Extensions -> Apps Script -> paste google-apps-script.js -> Deploy as web app
  //   3. Paste the web app URL below
  const LIKES = {
    sheetsUrl: 'https://script.google.com/macros/s/AKfycbxDBkDGUwhzBF0556X97OuiBb29hfzDN-VMm5VoUvSbRts_za_orLbykiE5ztpwRnQP/exec'
  };
  const likesEnabled = () => Boolean(LIKES.sheetsUrl);
  const likeCounts = {}; // post_id -> global count, cached in memory

  function renderSponsor() {
    const el = document.getElementById('sponsor-slot');
    if (!el) return;
    if (sponsor.name) {
      el.innerHTML = `<a class="sponsor-slot" href="${sponsor.url}" target="_blank" rel="noopener noreferrer">
        <span class="sponsor-tag">Sponsor</span>
        ${sponsor.logo ? `<img class="sponsor-logo" src="${sponsor.logo}" alt="${sponsor.name} logo" loading="lazy">` : ''}
        <span class="sponsor-body">
          <span class="sponsor-name">${sponsor.name}</span>
          <span class="sponsor-blurb">${sponsor.blurb}</span>
        </span>
        <span class="sponsor-cta">Visit</span>
      </a>`;
    } else {
      el.innerHTML = '';
    }
  }

  // TradingView ticker: injected lazily, not render-blocking.
  // The embed script is appended only when the ticker scrolls near the viewport,
  // keeping it off the critical path. Its container reserves height in CSS so the
  // injected iframe doesn't cause layout shift (CLS).
  function loadTradingView() {
    const container = document.querySelector('.tradingview-widget-container__widget');
    if (!container || container.dataset.loaded) return;
    container.dataset.loaded = '1';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'NYSE:HUBS', title: 'HubSpot' },
        { proName: 'NYSE:CRM', title: 'Salesforce' },
        { proName: 'NASDAQ:MSFT', title: 'Microsoft' },
        { proName: 'NASDAQ:ZI', title: 'ZoomInfo' },
        { proName: 'NASDAQ:MNDY', title: 'Monday.com' },
        { proName: 'NASDAQ:GOOGL', title: 'Alphabet' }
      ],
      showSymbolLogo: true,
      colorTheme: 'dark',
      isTransparent: true,
      displayMode: 'adaptive',
      locale: 'en'
    });
    container.appendChild(script);
  }

  function setupTradingView() {
    const wrap = document.querySelector('.tradingview-widget-container');
    if (!wrap) return;
    if (!('IntersectionObserver' in window)) { loadTradingView(); return; }
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => { if (e.isIntersecting) { loadTradingView(); o.disconnect(); } });
    }, { rootMargin: '300px' });
    obs.observe(wrap);
  }

  // Lazy video infrastructure.
  // Native loading="lazy" does NOT apply to <video>, so an IntersectionObserver
  // loads + plays a clip only while it's on screen, and pauses it when it leaves.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const videoObserver = ('IntersectionObserver' in window) ? new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const v = entry.target;
      if (entry.isIntersecting) {
        if (!v.src && v.dataset.src) v.src = v.dataset.src;
        if (!reduceMotion) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
      } else if (v.src) {
        v.pause();
      }
    });
  }, { threshold: 0.25 }) : null;

  function makeLazyVideo({ src, poster, videoClass, manualPlay = true }) {
    const wrap = document.createElement('div');
    wrap.className = 'media-wrap' + (reduceMotion ? ' reduced' : '');

    const v = document.createElement('video');
    v.className = videoClass;
    if (poster) v.poster = poster;
    v.dataset.src = src;
    v.muted = true; v.loop = true; v.playsInline = true;
    v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
    v.setAttribute('aria-label', 'Background video clip');
    v.preload = 'none';
    wrap.appendChild(v);

    const badge = document.createElement('span');
    badge.className = 'media-badge';
    badge.textContent = 'Video';
    wrap.appendChild(badge);

    if (reduceMotion && manualPlay) {
      const btn = document.createElement('button');
      btn.className = 'media-play';
      btn.textContent = 'Play';
      btn.setAttribute('aria-label', 'Play video');
      btn.onclick = (e) => {
        e.stopPropagation();
        if (!v.src) v.src = v.dataset.src;
        v.play(); btn.style.display = 'none';
      };
      wrap.appendChild(btn);
    }

    if (videoObserver) videoObserver.observe(v);
    return wrap;
  }

  function teardownVideo(v) {
    if (!v) return;
    if (videoObserver) videoObserver.unobserve(v);
    v.pause();
    v.removeAttribute('src');
    v.load();
  }

  // Display ad slots: reveal placeholders on scroll, no third-party script.
  function setupAdSlots() {
    const slots = document.querySelectorAll('.ad-slot');
    if (!slots.length) return;
    if (!('IntersectionObserver' in window)) { slots.forEach(s => s.classList.add('revealed')); return; }
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          o.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px' });
    slots.forEach(s => obs.observe(s));
  }

  function setupPromoCarousel() {
    const track = document.getElementById('promo-carousel');
    if (!track) return;
    actions['promo-scroll'] = (el) => {
      const dir = Number(el.dataset.dir || '1');
      const distance = Math.max(280, track.clientWidth * 0.82);
      track.scrollBy({ left: dir * distance, behavior: 'smooth' });
    };
  }

  function readingTime(html) {
    const text = html.replace(/<[^>]+>/g, ' ');
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    return Math.max(1, Math.round(words / 200));
  }

  function buildFilters() {
    const bar = document.getElementById('filter-bar');
    const categories = [...new Set(postOrder.map(id => posts[id].category))];

    const allChip = document.createElement('button');
    allChip.className = 'filter-chip active';
    allChip.textContent = 'All';
    allChip.setAttribute('aria-pressed', 'true');
    allChip.onclick = () => setFilter(null);
    bar.appendChild(allChip);

    categories.forEach(cat => {
      const chip = document.createElement('button');
      chip.className = 'filter-chip';
      chip.textContent = cat;
      chip.dataset.value = cat;
      chip.setAttribute('aria-pressed', 'false');
      chip.onclick = () => setFilter(cat);
      bar.appendChild(chip);
    });
  }

  function setFilter(category) {
    activeFilter = category || null;
    document.querySelectorAll('.filter-chip').forEach(c => {
      const active = (!category && c.textContent === 'All') || c.dataset.value === category;
      c.classList.toggle('active', active);
      c.setAttribute('aria-pressed', String(active));
    });
    applyFilters();
  }

  function applyFilters() {
    let visible = 0;
    document.querySelectorAll('.post-card').forEach(card => {
      const p = posts[card.dataset.id];
      const matchesCat = !activeFilter || p.category === activeFilter;
      const matchesSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery) ||
        p.body.replace(/<[^>]+>/g, '').toLowerCase().includes(searchQuery);
      const show = matchesCat && matchesSearch;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    document.getElementById('post-count').textContent = visible + ' post' + (visible !== 1 ? 's' : '');
    document.getElementById('no-results').style.display = visible === 0 ? 'block' : 'none';
  }

  function refreshPostCards() {
    document.querySelectorAll('.post-card').forEach(card => {
      const img = card.querySelector('.post-thumb');
      const post = posts[card.dataset.id];
      if (!post) return;
      if (img) {
        img.src = makeCardImage(post.image);
        img.alt = post.title + ' thumbnail';
      }
      const date = card.querySelector('.post-date');
      const category = card.querySelector('.post-category');
      const tag = card.querySelector('.post-tag');
      const title = card.querySelector('.post-title');
      const excerpt = card.querySelector('.post-excerpt');
      if (date) date.textContent = post.date;
      if (category) category.textContent = post.category;
      if (tag) {
        tag.textContent = post.tag;
        tag.className = 'post-tag ' + post.tagClass;
      }
      if (title) title.textContent = post.title;
      if (excerpt) excerpt.textContent = makeExcerpt(post.body, 150);
    });
  }

  function renderFeatured() {
    const featuredId = postOrder.find(id => posts[id].featured);
    const section = document.getElementById('featured-section');
    if (!featuredId || !section) return;
    const p = posts[featuredId];
    const excerpt = makeExcerpt(p.body, 160);
    const imgSrc = p.image;

    const card = document.createElement('a');
    card.className = 'featured-card';
    card.setAttribute('aria-label', 'Featured post: ' + p.title);
    card.href = 'posts/' + toSlug(p.title) + '/';

    if (p.video) {
      card.appendChild(makeLazyVideo({ src: p.video, poster: p.poster || imgSrc, videoClass: 'featured-video', manualPlay: false }));
    } else {
      const img = document.createElement('img');
      img.className = 'featured-img';
      img.src = imgSrc; img.alt = p.title; img.loading = 'lazy';
      img.width = 760; img.height = 190;
      card.appendChild(img);
    }

    const body = document.createElement('div');
    body.className = 'featured-body';
    body.innerHTML = `<span class="featured-badge">Featured</span>
        <div class="featured-meta-row">${p.date} &middot; ${p.category} &middot; ${readingTime(p.body)} min read</div>
        <div class="featured-title">${p.title}</div>
        <div class="featured-excerpt">${excerpt}</div>`;
    card.appendChild(body);

    section.innerHTML = '';
    section.appendChild(card);
  }

  function renderRelated(id) {
    const p = posts[id];
    const container = document.getElementById('related-posts');
    const related = postOrder
      .filter(pid => pid !== id)
      .filter(pid => posts[pid].category === p.category || posts[pid].tag === p.tag)
      .slice(0, 2);
    if (related.length === 0) { container.innerHTML = ''; return; }
    container.innerHTML = `<div class="related-label">More like this</div>
      <div class="related-grid">${related.map(pid => {
        const rp = posts[pid];
        return `<button class="related-card" data-action="open-post" data-id="${pid}">
          <div class="related-card-meta">
            <span class="post-category" style="font-size:0.6rem;padding:0.1rem 0.4rem">${rp.category}</span>
            <span class="post-read-time">${readingTime(rp.body)} min read</span>
          </div>
          <div class="related-card-title">${rp.title}</div>
        </button>`;
      }).join('')}</div>`;
  }

  // Like system: every click bumps a shared global count.
  // The count lives in Supabase so it's consistent and persistent across all
  // sessions. localStorage no longer gates whether you can like (clicks are
  // unlimited), it only remembers that this browser has liked at least once so
  // the heart stays filled on return visits.
  function hasLiked(id) { return localStorage.getItem('liked_' + id) === 'true'; }
  function fmtCount(n) {
    if (n == null) return '';
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 >= 100 ? 1 : 0).replace(/\.0$/, '') + 'k';
    return String(n);
  }

  // Fetch all counts in one request and paint them.
  async function loadLikeCounts() {
    if (!likesEnabled()) { renderAllLikeUI(); return; }
    try {
      const res = await fetch(LIKES.sheetsUrl + '?action=counts');
      if (res.ok) {
        const counts = await res.json();
        for (const [id, n] of Object.entries(counts)) likeCounts[id] = n;
      }
    } catch (e) { /* offline or unconfigured - fall back silently */ }
    renderAllLikeUI();
  }

  async function likePost(id) {
    localStorage.setItem('liked_' + id, 'true');
    if (!likesEnabled()) { updateLikeUI(id); return; }
    likeCounts[id] = (likeCounts[id] || 0) + 1;
    updateLikeUI(id);
    try {
      const res = await fetch(LIKES.sheetsUrl + '?action=like&id=' + encodeURIComponent(id));
      if (res.ok) {
        const data = await res.json();
        if (typeof data.count === 'number') { likeCounts[id] = data.count; updateLikeUI(id); }
      }
    } catch (e) { /* keep the optimistic value if the network hiccups */ }
  }

  function toggleModalLike() { likePost(currentPostId); }

  function renderAllLikeUI() { postOrder.forEach(updateLikeUI); }

  function updateLikeUI(id) {
    const liked = hasLiked(id);
    const count = likeCounts[id];
    const label = count != null ? fmtCount(count) : '';
    const cardLike = document.querySelector(`.card-like[data-id="${id}"]`);
    if (cardLike) {
      cardLike.classList.toggle('liked', liked);
      cardLike.textContent = 'Likes' + (label ? ' ' + label : '');
    }
    if (currentPostId === id) {
      const btn = document.getElementById('modal-like-btn');
      if (btn) {
        btn.textContent = (liked ? 'Liked' : 'Like') + (label ? ' | ' + label : '');
        btn.classList.toggle('liked', liked);
      }
    }
  }

  // Theme.
  function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    const btn = document.getElementById('theme-toggle');
    btn.textContent = isLight ? 'Dark' : 'Light';
    btn.setAttribute('aria-pressed', String(isLight));
  }

  async function refreshSite(trigger) {
    const buttons = document.querySelectorAll('[data-action="refresh-site"]');
    buttons.forEach((btn) => {
      btn.disabled = true;
      btn.textContent = btn === trigger ? 'Refreshing...' : 'Refresh locked';
    });
    try {
      sessionStorage.clear();
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map((reg) => reg.unregister()));
      }
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      }
    } finally {
      const freshUrl = window.location.pathname + '?fresh=' + Date.now();
      window.location.replace(freshUrl);
    }
  }

  // Share.
  const SITE_URL = 'https://samcbarth.github.io/aisite/';
  function currentShareUrl() {
    return currentPostId ? postUrl(currentPostId) : SITE_URL;
  }
  function shareOnLinkedIn() {
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(currentShareUrl()), '_blank', 'noopener,width=600,height=600');
  }
  function shareOnX() {
    const title = document.getElementById('modal-title').textContent;
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(title + ' ') + '&url=' + encodeURIComponent(currentShareUrl()), '_blank', 'noopener,width=600,height=600');
  }

  // Quote sharing.
  let selectedQuote = '';
  function shareQuoteLinkedIn() {
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(currentShareUrl()), '_blank', 'noopener,width=600,height=600');
  }
  function shareQuoteX() {
    const title = document.getElementById('modal-title').textContent;
    const text = encodeURIComponent('"' + selectedQuote.substring(0, 200) + '" - ' + title + ' ');
    window.open('https://twitter.com/intent/tweet?text=' + text + '&url=' + encodeURIComponent(currentShareUrl()), '_blank', 'noopener,width=600,height=600');
  }

  // Newsletter.
  function handleSubscribe(e) {
    e.preventDefault();
    document.getElementById('newsletter-note').textContent = 'Got it. Talk soon.';
    document.getElementById('newsletter-email').value = '';
    const btn = e.target.querySelector('.newsletter-btn');
    btn.textContent = 'Done'; btn.disabled = true;
  }

  // Modal media.
  function clearModalVideo() {
    const media = document.getElementById('modal-media');
    const v = media && media.querySelector('video');
    if (v) teardownVideo(v);
  }

  function setModalMedia(p) {
    const media = document.getElementById('modal-media');
    clearModalVideo();
    media.innerHTML = '';
    if (p.video) {
      media.appendChild(makeLazyVideo({ src: p.video, poster: p.poster || p.image, videoClass: 'modal-video' }));
    } else {
      const img = document.createElement('img');
      img.className = 'modal-hero';
      img.id = 'modal-hero';
      img.src = p.image;
      img.alt = p.title;
      img.width = 580; img.height = 220;
      media.appendChild(img);
    }
  }

  // Modal open/close with focus management and deep linking.
  function getFocusable(container) {
    return [...container.querySelectorAll('a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])')]
      .filter(el => el.offsetParent !== null);
  }

  function openPost(id, opts) {
    opts = opts || {};
    if (!posts[id]) return;
    if (!currentPostId) lastFocused = document.activeElement;
    currentPostId = id;
    const p = posts[id];
    setModalMedia(p);
    document.getElementById('modal-date').textContent = p.date;
    document.getElementById('modal-read-time').textContent = readingTime(p.body) + ' min read';
    document.getElementById('modal-category').textContent = p.category;
    const tagEl = document.getElementById('modal-tag');
    tagEl.textContent = p.tag;
    tagEl.className = 'modal-tag ' + p.tagClass;
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-body').innerHTML = p.body;

    const idx = postOrder.indexOf(id);
    document.getElementById('prev-btn').disabled = idx === 0;
    document.getElementById('next-btn').disabled = idx === postOrder.length - 1;

    const copyBtn = document.getElementById('copy-btn');
    copyBtn.textContent = 'Copy to clipboard';
    copyBtn.classList.remove('copied');

    updateLikeUI(id);

    document.getElementById('modal-progress').style.width = '0%';
    document.getElementById('quote-popover').style.display = 'none';
    renderRelated(id);
    document.getElementById('modal').scrollTop = 0;
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    if (location.hash !== '#' + id) history.replaceState(null, '', '#' + id);
    // Move focus into the dialog for keyboard + screen-reader users.
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function navigatePost(dir) {
    const idx = postOrder.indexOf(currentPostId);
    const next = idx + dir;
    if (next >= 0 && next < postOrder.length) openPost(postOrder[next]);
  }

  function closeModal() {
    clearModalVideo();
    document.getElementById('modal-overlay').classList.remove('open');
    document.getElementById('quote-popover').style.display = 'none';
    document.body.style.overflow = '';
    currentPostId = null;
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
    if (lastFocused && typeof lastFocused.focus === 'function') { lastFocused.focus(); lastFocused = null; }
  }

  function copyPost() {
    const title = document.getElementById('modal-title').textContent;
    const body = document.getElementById('modal-body').innerText;
    navigator.clipboard.writeText(title + '\n\n' + body.trim()).then(() => {
      const btn = document.getElementById('copy-btn');
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copy to clipboard'; btn.classList.remove('copied'); }, 2000);
    });
  }

  // Central click delegation replaces inline on* handlers.
  const actions = {
    'toggle-theme': toggleTheme,
    'open-post': (el) => openPost(el.dataset.id),
    'close-modal': closeModal,
    'copy-post': copyPost,
    'share-linkedin': shareOnLinkedIn,
    'share-x': shareOnX,
    'toggle-like': toggleModalLike,
    'nav-prev': () => navigatePost(-1),
    'nav-next': () => navigatePost(1),
    'focus-email': () => document.getElementById('newsletter-email').focus(),
    'share-quote-linkedin': shareQuoteLinkedIn,
    'share-quote-x': shareQuoteX,
    'refresh-site': refreshSite
  };

  function initCards() {
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-mode');
      const tt = document.getElementById('theme-toggle');
      tt.textContent = 'Dark';
      tt.setAttribute('aria-pressed', 'true');
    }

    refreshPostCards();
    renderFeatured();
    renderSponsor();
    setupAdSlots();
    setupPromoCarousel();
    setupTradingView();

    postOrder.forEach(id => {
      const card = document.querySelector(`[data-id="${id}"]`);
      if (!card) return;
      card.querySelector('.post-read-time').textContent = readingTime(posts[id].body) + ' min read';
      const likeBtn = document.createElement('span');
      likeBtn.className = 'card-like' + (hasLiked(id) ? ' liked' : '');
      likeBtn.dataset.id = id;
      likeBtn.textContent = 'Likes';
      card.querySelector('.post-content').appendChild(likeBtn);
    });
    buildFilters();
    applyFilters();
    loadLikeCounts();

    // Delegated clicks for everything declared with data-action, plus modal backdrop.
    document.addEventListener('click', (e) => {
      if (e.target.id === 'modal-overlay') { closeModal(); return; }
      const el = e.target.closest('[data-action]');
      if (!el) return;
      const fn = actions[el.dataset.action];
      if (fn) { e.preventDefault(); fn(el); }
    });

    // Keyboard activation for non-native controls (the post cards are role="button").
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const el = e.target.closest('[data-action]');
      if (!el) return;
      const tag = el.tagName;
      if (tag === 'BUTTON' || tag === 'A' || tag === 'INPUT' || tag === 'TEXTAREA') return;
      const fn = actions[el.dataset.action];
      if (fn) { e.preventDefault(); fn(el); }
    });

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) newsletterForm.addEventListener('submit', handleSubscribe);

    document.getElementById('search-input').addEventListener('input', function () {
      searchQuery = this.value.toLowerCase().trim();
      applyFilters();
    });

    document.getElementById('modal').addEventListener('scroll', function () {
      const pct = this.scrollTop / (this.scrollHeight - this.clientHeight) * 100;
      document.getElementById('modal-progress').style.width = Math.min(100, pct || 0) + '%';
    });

    document.getElementById('modal-body').addEventListener('mouseup', function () {
      setTimeout(() => {
        const sel = window.getSelection();
        const text = sel ? sel.toString().trim() : '';
        const popover = document.getElementById('quote-popover');
        if (!text || text.length < 15) { popover.style.display = 'none'; selectedQuote = ''; return; }
        selectedQuote = text;
        try {
          const rect = sel.getRangeAt(0).getBoundingClientRect();
          popover.style.display = 'flex';
          popover.style.top = Math.max(8, rect.top - 48) + 'px';
          popover.style.left = Math.max(8, (rect.left + rect.right) / 2 - 90) + 'px';
        } catch (err) {}
      }, 10);
    });

    document.addEventListener('mousedown', function (e) {
      if (!e.target.closest('#quote-popover')) document.getElementById('quote-popover').style.display = 'none';
    });

    // Deep link: open a post directly when arriving at #postID.
    if (location.hash) {
      const id = location.hash.slice(1);
      if (posts[id]) openPost(id);
    }

    // React to in-page hash navigation (shared #postID links, back/forward).
    // openPost/closeModal use replaceState, so this only fires for user-driven changes.
    window.addEventListener('hashchange', () => {
      const id = location.hash.slice(1);
      if (posts[id]) openPost(id);
      else if (!location.hash && currentPostId) closeModal();
    });
  }

  // Keyboard: Esc closes, arrows navigate, Tab is trapped in modal.
  document.addEventListener('keydown', e => {
    const overlay = document.getElementById('modal-overlay');
    const open = overlay && overlay.classList.contains('open');
    if (e.key === 'Escape') { closeModal(); return; }
    if (!open) return;
    if (e.key === 'ArrowLeft') navigatePost(-1);
    if (e.key === 'ArrowRight') navigatePost(1);
    if (e.key === 'Tab') {
      const focusable = getFocusable(document.getElementById('modal'));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Service worker registration for offline support and asset caching.
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }

  document.addEventListener('DOMContentLoaded', initCards);
})();
