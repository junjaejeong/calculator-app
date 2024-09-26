self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v3').then((cache) => {
      return cache.addAll([
        './index.html',
        './style.css',
        './script.js',
        './aaa.png'  // 아이콘 파일 추가
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
