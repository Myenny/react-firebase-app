const admin = require('firebase-admin')

const serviceAccount = require('./authid.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://socialape-9aa30.firebaseio.com'
})

const db = admin.firestore()

module.exports = { admin, db }
