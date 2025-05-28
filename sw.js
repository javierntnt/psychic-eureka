const CACHE_NAME = 'coingeckoapp-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/cryto.css',
  '/aleatorio.js',
  '/api.js',
  '/grafica.js',
  '/detalle.js',
  '/favoritos.js',
  '/lista.js',
  '/usuario.js',
  '/manifest.json',
  '/icons/iconocoingeck.png',
  '/icons/logo.png',
  // Puedes agregar aquí otros recursos estáticos si los tienes
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
