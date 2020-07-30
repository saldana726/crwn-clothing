import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBL_D8hc5zHFWu9CGJ-pJrP9jzXsX7fLgc",
    authDomain: "crwn-db-21503.firebaseapp.com",
    databaseURL: "https://crwn-db-21503.firebaseio.com",
    projectId: "crwn-db-21503",
    storageBucket: "crwn-db-21503.appspot.com",
    messagingSenderId: "616990572420",
    appId: "1:616990572420:web:20e2a0c4fbf3a3ccdd67d1",
    measurementId: "G-FJB9FR5JCY"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
