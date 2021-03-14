// Petidición POST
// https://reqres.in/api/users


let usuario = {
    nombre: 'Cesario',
    edad: 22
};

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(usuario), // data
    headers: {
        'Contet-Type': 'application/json' 
    }
})
.then( resp => resp.json() )
.then( console.log )
.catch( err => {
    console.log('Error en la petición');
    console.log(err);
});