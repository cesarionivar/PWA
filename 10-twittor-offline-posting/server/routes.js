// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();

const mensajes = [
  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'Hola Mundo'
  },
  {
    _id: 'XSD',
    user: 'ironman',
    mensaje: 'Hola Iron'
  },
  {
    _id: 'XSD',
    user: 'hulk',
    mensaje: 'Hola hulk'
  },
  {
    _id: 'XSD',
    user: 'wolverine',
    mensaje: 'Hola wolverine'
  }
];






// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});




module.exports = router;