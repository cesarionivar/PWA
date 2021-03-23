
// const CACHE_NAME = 'cache-1';

const CACHE_STATIC_NAME = 'static-v2';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';

const CACHE_DYNAMIC_LIMIT = 50;

function limpiarCache(cacheName, numeroItems) {

    caches.open(cacheName)
        .then(async cache => {

            const keys = await cache.keys();
            if (keys.length > numeroItems) {
                cache.delete(keys[0])
                    .then(limpiarCache(cacheName, numeroItems));
            }

        });

}

self.addEventListener('install', e => {

    const cacheProm = caches.open( CACHE_STATIC_NAME )
        .then(cache => {

            return cache.addAll([
                '/',
                './index.html',
                './css/style.css',
                './img/main.jpg',
                './js/app.js'
            ]);
        });

    const cacheInmutable = caches.open( CACHE_INMUTABLE_NAME )
        .then(cache => cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'));


    e.waitUntil( Promise.all([cacheProm, cacheInmutable]) );

});


self.addEventListener('fetch', e => {

    /* == ESTRATEGIAS DEL CACHE == */

    // 1 - Cache Only -> Es utilizada cuando queremos que la aplicación no vuelve a la web, solo tome los recursos del cache
    // e.respondWith( caches.match(e.request) );

    // 2 - Cache with Network Fallback -> Si no lo encuentra en el cache intenta en la web
    /* const respuesta = caches.match( e.request )
        .then( res => {
            if( res ) return res;

            // No existe el archivo
            // tengo que ir a la web
            console.log('No existe', e.request.url);

            return fetch( e.request )
                .then( newResp => {
                    caches.open( CACHE_DYNAMIC_NAME )
                        .then( cache => {
                            cache.put( e.request, newResp );
                            limpiarCache(CACHE_DYNAMIC_NAME, 50);
                        });

                    return newResp.clone();
                });
        }); */


    // 3 - Netowork with cache fallback

    /* const respuesta = fetch( e.request ).then( res => {

        if( !res ) return caches.match( e.request );

        console.log('Fetch', res);

        caches.open( CACHE_DYNAMIC_NAME )
            .then(cache => {
                cache.put(e.request, res);
                limpiarCache( CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT );
            });


        return res.clone();
    }).catch(err => {

        return caches.match( e.request );

    });

    e.respondWith( respuesta );  */




    // 4 - Cache with network update
    // Rendiemiento es critico
    // Siempre estaran un paso atras

    if( e.request.url.includes('bootstrap')) {
        return e.respondWith(caches.match( e.request ));  
    }

    const respuesta = caches.open( CACHE_STATIC_NAME ).then(cache => {

        fetch( e.request )
            .then( newResp => cache.put( e.request, newResp ));

        return cache.match( e.request );

    });

    e.respondWith( respuesta );
    
        
        


}); 