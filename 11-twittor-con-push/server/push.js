const fs = require('fs');

const vapid = require('./vapid.json');
const urlSafeBase64 = require('urlsafe-base64');


const suscripciones = require('./subs-db.json');

module.exports.getKey = () => {
  return urlSafeBase64.decode(vapid.publicKey);
};


module.exports.addSubscription = (suscripcion) => {
  
  suscripciones.push(suscripcion);

  fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones));

}