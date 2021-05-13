// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const push = require('./push');


const mensajes = [
  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'Hola Mundo'
  }
];






// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});


router.post('/', function (req, res) {

  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

  mensajes.push( mensaje );

  console.log(mensajes);

  res.json({
    ok: true,
    mensaje
  });

});


// almacenar la suscripcion
router.post('/suscribe', (req, res) => {

  res.json('suscribe');

});

// Obtener llave publica 
router.get('/key', (req, res) => {


  const key = push.getKey();

  res.send(key);

});

// Enviar una notificacion PUSH a las personas 
// que nosotros queramos
// Es ALGO que se controla del lado del server
router.post('/push', (req, res) => {

  res.json('key publico');

});





module.exports = router;