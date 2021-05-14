const fs = require('fs');

const urlSafeBase64 = require('urlsafe-base64');
const vapid = require('./vapid.json');

const webpush = require('web-push');


webpush.setVapidDetails(
  'mailto:ing.cesarionivar@gmail.com',
  vapid.publicKey,
  vapid.privateKey
);

const suscripciones = require('./subs-db.json');

module.exports.getKey = () => {
  return urlSafeBase64.decode(vapid.publicKey);
};


module.exports.addSubscription = (suscripcion) => {
  
  suscripciones.push(suscripcion);

  fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones));

};
 
module.exports.sendPush = ( post ) => {

  suscripciones.forEach((suscripcion, index) => {

    webpush.sendNotification(suscripcion, JSON.stringify(post));

  });

};