

// Entrenamiento PouchDB

// 1- Crear la base de datos
// Nombre:  mensajes
let db = new PouchDB('pouchdb');
let remoteCouch = false;

// Objeto a grabar en base de datos
let mensaje = {
    _id: new Date().toISOString(),
    user: 'spiderman',
    mensaje: 'Mi tía hizo unos panqueques muy buenos',
    sincronizado: false
};


// 2- Insertar en la base de datos
function addMensaje(mensaje) {

  db.put(mensaje, function callback(err, result) {
    if (!err) {
      console.log('Successfully posted a message!');
    }
  });
}
// addMensaje(mensaje);


// 3- Leer todos los mensajes offline
// que aparezcan en la consola
function showMessage() {
  db.allDocs({include_docs: true, descending: true}, function(err, doc) {
    console.log(doc.rows);
  });
}

// showMessage();


// 4- Cambiar el valor 'sincronizado' de todos los objetos
//  en la BD a TRUE
// function updateMessage(mensaje) {
//   mensaje.sincronizado = true;
//   db.put(mensaje);
// }




// 5- Borrar todos los registros, uno por uno, evaluando
// cuales estan sincronizados
// deberá de comentar todo el código que actualiza
// el campo de la sincronización 

function deleteMessage(mensaje) {
  db.remove(mensaje);
}




