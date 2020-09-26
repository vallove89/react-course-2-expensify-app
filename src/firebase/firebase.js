import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MESSUREMENT_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };

//   database.ref().set({
//       name: 'Val Love',
//       age: 31,
//       isSingle: true,
//       location: {
//           city: 'MT Vernon',
//           country: 'United States'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('Tis failed.', e);
//   });

// database.ref('age').set(32);

// database.ref('attributes/height').set(5.10);
// database.ref('attributes/weight').set(170);