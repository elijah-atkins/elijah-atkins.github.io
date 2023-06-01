// Service Worker version
const CACHE_VERSION = 1;

// Cache name
const CACHE_NAME = `my-app-cache-v${CACHE_VERSION}`;

// Files to cache
const cacheUrls = [
  '/',
  '/index.html',
  '/manifest.json',
  // Add other static assets such as CSS, JS files, and images
  '/static/css/main.css',
  '/static/js/main.js',
  '/static/img/logo.png',
];

// Event: Install
self.addEventListener('install', (event) => {
  // Perform installation steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(cacheUrls);
      })
      .catch((error) => {
        console.error('Cache installation error:', error);
      })
  );
});

// Event: Activate
self.addEventListener('activate', (event) => {
  // Remove old caches if any
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.filter((cache) => {
            return cache !== CACHE_NAME;
          }).map((cache) => {
            return caches.delete(cache);
          })
        );
      })
      .catch((error) => {
        console.error('Cache activation error:', error);
      })
  );
});

// Event: Fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        // Make a network request
        return fetch(fetchRequest)
          .then((networkResponse) => {
            // Check if we received a valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // Clone the response
            const responseToCache = networkResponse.clone();

            // Cache the response
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          });
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      })
  );
});
