// İzmir Mutfak & Banyo PWA Service Worker (Offline-First)
const CACHE_NAME = 'imb-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/favicon-48x48.png',
  '/favicon-192x192.png',
  '/logo.png',
  '/site.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});