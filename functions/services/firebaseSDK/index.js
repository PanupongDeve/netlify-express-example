
const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAccountKey.json');
const  firebaseDatabase = require('./database');


const initializeApp = () => {
    try {
        console.log('Firebase SDK registed!');
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://netlify-functions-b2363.firebaseio.com",
            databaseAuthVariableOverride: {
                uid: "my-service-worker"
            }
        })
    } catch (error) {
        console.log(error);
    }
}
const firebaseSDK = {
    initializeApp,
    firebaseDatabase
}

module.exports = firebaseSDK;