import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAfpb5Kt0pUyFNEpN1hghbAw0Ghe7vf3so",
    authDomain: "facebookclone-192e0.firebaseapp.com",
    projectId: "facebookclone-192e0",
    storageBucket: "facebookclone-192e0.appspot.com",
    messagingSenderId: "266936665170",
    appId: "1:266936665170:web:95a0a29daee1a192220b8b"
  });

  const auth = firebase.auth();
  const provider = new firebase.auth.FacebookAuthProvider();

  // const db = firebaseConfig.firestore();
  const db = firebaseConfig.firestore();
  const storage = firebase.storage();

  export {auth,provider,db,storage}