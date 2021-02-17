import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDhkjsOMgV77JA1d5n1E7uOK627WRPrmAo",
    authDomain: "booksanta-f87fd.firebaseapp.com",
    projectId: "booksanta-f87fd",
    storageBucket: "booksanta-f87fd.appspot.com",
    messagingSenderId: "621533458459",
    appId: "1:621533458459:web:edeac4959b92bf5c8f48be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();