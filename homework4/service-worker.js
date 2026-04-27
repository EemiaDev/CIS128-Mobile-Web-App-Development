const cacheName = 'homework4-cache-v1';
 
const assetsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/pwa.js',
  '/manifest.json',
  '/images/lightblue.jpg',
  '/images/lightgold.jpg',
  '/images/icon-192.png',
  '/images/icon-512.png'
];

// Installation
self.addEventListener('install', (event) => {
    self.skipWaiting(); 
    event.waitUntil(
      caches.open(cacheName).then((cache) => {
        return cache.addAll(assetsToCache);
      })
   );
});

// Activation
self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== cacheName)
            .map((name) => caches.delete(name))
        );
      })
   );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});