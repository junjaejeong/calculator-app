self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v5').then((cache) => {  // 캐시 버전 v4로 변경
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/aaa.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
