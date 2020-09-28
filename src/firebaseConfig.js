import firebase from 'firebase'
import 'firebase/firestore'
  
  var firebaseConfig = {
    apiKey: "AIzaSyBskvo-ydZIZqE2WcI8tqhS-Ls5VRuntYk",
    authDomain: "lift-tracker-a1a73.firebaseapp.com",
    databaseURL: "https://lift-tracker-a1a73.firebaseio.com",
    projectId: "lift-tracker-a1a73",
    storageBucket: "lift-tracker-a1a73.appspot.com",
    messagingSenderId: "686134843078",
    appId: "1:686134843078:web:61e605287366a308a329c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()
  const exercises = db.collection('Exercises')

  export default {
      db,
      auth, 
      exercises
  }