// Service worker minimo: guarda la pagina principal para que la app
// abra mas rapido y funcione como PWA instalable. No necesita tocarse
// nunca a menos que se agreguen notificaciones push en el futuro.
const CACHE_NAME = "tesoreria-v1";
const APP_SHELL = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Nunca cachear Firebase (Auth/Firestore): siempre datos frescos.
  if (event.request.url.includes("firestore.googleapis.com") || event.request.url.includes("identitytoolkit")) {
    return;
  }
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
