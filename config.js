const admin = require('firebase-admin');
const serviceAccount = require('./firebase/serviceAccount.json');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = firebase
