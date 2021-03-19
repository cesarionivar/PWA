// Ciclo de vida del Service Worker

self.addEventListener('install', e =>{ 

    // Descargar assets
    // Creamos un cache

    console.log(`SW: Instalando service worker`);

    const instalacion = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1);    

    });

    e.waitUntil(instalacion);

});


// Cuando el SW tomar el control de la aplicación
self.addEventListener('activate', e => {
    // Borrar cache viejo


    console.log('SW2: Activo y listo para controlar la app');
});


// Fetch: Manejo de peticiones HTTP
self.addEventListener('fetch', e => {

    // Aplicar estratigias del cache
    /* console.log('SW: ', e.request.url);

    if(e.request.url.includes('https://reqres.in/')) {
        const resp = new Response(`{ "ok": "false", "mensaje": "jajaja"}`);

        e.respondWith( resp );
    } */


});


// SYNC: Recuperamos la conexión a internet
self.addEventListener('sync', e => {

    console.log('Tenemos conexión');
    console.log(e);
    console.log(e.tag);

}); 


// PUSH: Manejar las push notifications
self.addEventListener('push', e => {

    console.log('Notificación recibida');


});