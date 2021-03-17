



self.addEventListener('fetch', event => {

    if( event.request.url.includes('main.jpg') ) {

        let respuesa = fetch('img/main-patas-arriba.jpg');

        event.respondWith(respuesa);

    }

});
    
        
        
