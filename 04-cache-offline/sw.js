
self.addEventListener('fetch',  e => {

    const offlineResp = new Response(`
        
        Bienvenido a mi Página Web

        Disculpa, pero para usarla, necesitas internet

    `);

    const resp = fetch(e.request)
        .catch(() => offlineResp);

    e.respondWith( resp );


});