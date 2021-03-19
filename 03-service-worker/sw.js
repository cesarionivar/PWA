// Ciclo de vida del Service Worker

self.addEventListener('install', e =>{ 

    // Descargar assets
    // Creamos un cache


    console.log(`SW: Instalando service worker`);
    
    self.skipWaiting();
    
});


// Cuando el SW tomar el control de la aplicación
self.addEventListener('activate', e => {
    // Borrar cache viejo


    console.log('SW2: Activo y listo para controlar la app');
});