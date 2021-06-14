import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArhHtMTXpZTwpzq0oHJguEAZ0k0j8L_Y0",
  authDomain: "user-list-a29e9.firebaseapp.com",
  databaseURL: "https://user-list-a29e9-default-rtdb.firebaseio.com",
  projectId: "user-list-a29e9",
  storageBucket: "user-list-a29e9.appspot.com",
  messagingSenderId: "646797847858",
  appId: "1:646797847858:web:8e831786a9c34ba88cfb2b",
};

firebase.initializeApp(firebaseConfig);

export const fb = firebase.firestore();
