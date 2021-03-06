function sumarUno( numero ) {

    var promesa = new Promise((resolve, reject) => {

        console.log( numero );

        if( numero >= 7 ) {
            reject('El número es muy alto');
        }

        setTimeout(() => {
            
            resolve( numero + 1 );

        }, 800);

        
    });
    return promesa;
}

sumarUno( 5 )
    .then( sumarUno )
    .then( sumarUno )  
    .then( sumarUno )  
    .then( sumarUno )  
    .then( nuevoNumero => {
        console.log( nuevoNumero );
    })
    .catch(err => console.log('Error en promesa', err));
    
    