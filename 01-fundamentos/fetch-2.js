// Petidición GET
// https://reqres.in/api/users

fetch('https://reqres.in/api/users')
    .then( resp => resp.json())
    .then(respObj => {
        console.log(respObj);
        console.log(respObj.page);
        console.log(respObj.per_page);
    });




// fetch('https://wikipedia.org')
//     .then( resp => resp.text() )
//     .then( html => {
//         document.open();
//         document.write( html );
//         document.close();
//     });
