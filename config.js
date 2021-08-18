import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDw1VLBf1zjihIIj-cp7sKeBoEwXshR3A0",
  authDomain: "barter-app-1e643.firebaseapp.com",
  projectId: "barter-app-1e643",
  storageBucket: "barter-app-1e643.appspot.com",
  messagingSenderId: "682922858473",
  appId: "1:682922858473:web:bc5dc70e02a76223541d78"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
