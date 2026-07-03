/*
 * sw.js - service worker for the site (scope: the directory it's served from,
 * i.e. /aisite/ in production). Provides an offline app-shell and tiered caching:
 *   - same-origin shell assets -> cache-first
 *   - navigations              -> network-first, fall back to cached shell
 *   - Unsplash images          -> stale-while-revalidate
 *   - everything else          -> straight to network, uncached
 *
 * Bump CACHE_VERSION whenever the precached shell changes so old caches are purged.
 */
const CACHE_VERSION = 'scb-v1';
const SHELL = [
  './',
  'index.html',
  'premium.html',
  'resources.html',
  'start-here.html',
  'app.js',
  'posts.js',
  'premium.js',
  'manifest.webmanifest',
  'assets/fonts/space-grotesk-latin.woff2',
  'assets/fonts/space-grotesk-latin-ext.woff2',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/icon-maskable-512.png',
  'assets/icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      // Add individually so one missing asset doesn't fail the whole install.
      .then((cache) => Promise.allSettled(SHELL.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Navigations: network-first, fall back to the cached shell when offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  // Unsplash imagery: stale-while-revalidate.
  if (url.hostname === 'images.unsplash.com') {
    event.respondWith(
      caches.open(CACHE_VERSION).then((cache) =>
        cache.match(req).then((cached) => {
          const network = fetch(req).then((res) => {
            if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
            return res;
          }).catch(() => cached);
          return cached || network;
        })
      )
    );
    return;
  }

  // Same-origin shell assets: cache-first.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        }
        return res;
      }))
    );
    return;
  }

  // Everything else: network, uncached.
});
