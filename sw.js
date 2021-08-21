//asignar un nombre y versión al cache
const CACHE_NAME = "v1_cache_Sinaptic",
  urlsToCache = [
    "./",
    "./css/inicio.css",
    "./assets/glyphter-font/css/Glyphter.css",
    "https://fonts.gstatic.com",
    "https://fonts.googleapis.com",
    "https://raw.githubusercontent.com/badkluster/Sinaptic/main/assets/logoSinaptic.webp",
    "https://unpkg.com/aos@2.3.1/dist/aos.css",
    "./css/normalize.css",
    "/css/estilos.css",
    "./pwa.js",
    "./js/app.js",
    "./js/vue@2.js",
    "./assets/logoblanco.webp",
    "./assets/32x32.png",
    "./assets/beneficios-2.webp",
    "./assets/beneficios-2.webp",
    "./assets/beneficios-3.webp",
    "./assets/beneficios-4.webp",
    "/assets/beneficios-1.webp",
    "./assets/beneficios-5.webp",
    "./assets/beneficios-6.webp",
    "./assets/beneficios-7.webp",
    "./assets/beneficios-8.webp",
    "./assets/Sharepoint.webp",
    "./assets/365 color logo.webp",
    "./assets/net.webp",
    "./assets/angular-logo-png.webp",
    "./assets/Dynamics-365-logo.webp",
    "./assets/firebase.webp",
    "./assets/HTML5 JS Y CSS JUNTOS.webp",
    "./assets/ionic logo.webp",
    "./assets/Microsoft_Azure_Logo.webp",
    "./assets/mongodb logo.webp",
    "./assets/Node js logo.webp",
    "./assets/React logo.webp",
    "./assets/ataway.webp",
    "./assets/INTA.webp",
    "./assets/Secure auth.webp",
    "./assets/Mototech.webp",
    "./assets/antofagasta.webp",
    "./assets/redlink.webp",
    "./assets/Multitech.webp",
    "./assets/syngenta.webp",
    "./assets/willis.webp",
    "./assets/abinbev logo png.webp",
    "./assets/afab logo png.webp",
    "./assets/armytech logo png.webp",
    "./assets/beccar png logo.webp",
    "./assets/cordial logo png.webp",
    "./assets/creoslogopng.webp",
    "./assets/global mix.webp",
    "./assets/pothole logo png.webp",
    "https://unpkg.com/aos@2.3.1/dist/aos.js",
    "./js/vue@2.js",
    "https://cdn.emailjs.com/dist/email.min.js",
    "https://spanalytics.com.ar/piwik.js",
    "https://www.googletagmanager.com/gtag/js?id=UA-96539148-1",
    "./assets/banner-header.webp",
    "https://raw.githubusercontent.com/badkluster/Sinaptic/main/assets/logo-sinaptic-azul.png",
  ];

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).then(() => self.skipWaiting());
      })
      .catch((err) => console.log("Falló registro de cache", err))
  );
});

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  );
});

//cuando el navegador recupera una url
self.addEventListener("fetch", (e) => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        //recuperar del cache
        return res;
      }
      //recuperar de la petición a la url
      return fetch(e.request);
    })
  );
});
