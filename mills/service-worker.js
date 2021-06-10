self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
            './index.html',
            './index.css',
            './game.js',
            './konva.min.js',
            './service-worker-init.js',
            './assets/wood.png'
        ]);
      })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => {
            return resp || fetch(event.request).then((response) => {
              return caches.open('v1').then((cache) => {
                cache.put(event.request, response.clone());
                return response;
              });
            });
        })
    );
});