const cacheName = 'homework5-cache-v1';
 
const assetsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/registration.js'
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