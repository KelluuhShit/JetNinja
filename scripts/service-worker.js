const CACHE_NAME = 'my-web-app-cache-v1';

// Files to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/scripts/App.js',
  '/scripts/register.js',
  '/scripts/script.js',
  '/scripts/service-worker.js'
  // Add other files to cache as needed
];

// Install service worker and cache files
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached files
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Fetch and cache non-cached requests
        return fetch(event.request)
          .then(function(response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // Clone the response for use and caching
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
});