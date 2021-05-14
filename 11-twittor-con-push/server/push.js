const vapid = require('./vapid.json');
const urlSafeBase64 = require('urlsafe-base64');


const suscripciones = [];

module.exports.getKey = () => {
  return urlSafeBase64.decode(vapid.publicKey);
};


module.exports.addSubscription = (suscripcion) => {
  suscripciones.push(suscripcion);

  console.log(suscripciones);

}