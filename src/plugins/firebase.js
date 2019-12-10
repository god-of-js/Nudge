import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
var firebaseConfig = {
    apiKey: "AIzaSyDSbm64hnhdDXN88k9uGdkBPz2ikxTR7cw",
    authDomain: "personal-nudge.firebaseapp.com",
    databaseURL: "https://personal-nudge.firebaseio.com",
    projectId: "personal-nudge",
    storageBucket: "personal-nudge.appspot.com",
    messagingSenderId: "869669728575",
    appId: "1:869669728575:web:5f161381fbb0f82d3ee38a",
    measurementId: "G-MXY2GPEEVS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export const db = firebase.firestore();
export const auth = firebase.auth();