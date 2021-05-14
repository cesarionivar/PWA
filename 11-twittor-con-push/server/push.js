const fs = require('fs');

const urlSafeBase64 = require('urlsafe-base64');
const vapid = require('./vapid.json');

const webpush = require('web-push');


webpush.setVapidDetails(
  'mailto:ing.cesarionivar@gmail.com',
  vapid.publicKey,
  vapid.privateKey
);

let suscripciones = require('./subs-db.json');

module.exports.getKey = () => {
  return urlSafeBase64.decode(vapid.publicKey);
};


module.exports.addSubscription = (suscripcion) => {
  
  suscripciones.push(suscripcion);

  fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones));

};
 
module.exports.sendPush = ( post ) => {

  console.log('Mandando PUSHES');


  let notificacioneEnviadas = [];

  suscripciones.forEach((suscripcion, index) => {

    const pushProm = webpush.sendNotification(suscripcion, JSON.stringify(post))
      .then(console.log('Notificacion enviada'))
      .catch(err => {
        console.log('Notificacion fallo');

        if(err.statusCode === 410) { // Gone

          suscripciones[index].borrar = true;

        }


      });

    notificacioneEnviadas.push(pushProm);

  });

  Promise.all(notificacioneEnviadas).then( () => {

    suscripciones = suscripciones.filter(subs => !subs.borrar);

    fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones));


  });

};