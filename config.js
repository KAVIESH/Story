import * as firebase from 'firebase'
require('@firebase/firestore')


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBR5bTncps9INYNMg7haKU3FGuaEGpKJS8",
    authDomain: "story-hub-64494.firebaseapp.com",
    databaseURL: "https://story-hub-64494-default-rtdb.firebaseio.com",
    projectId: "story-hub-64494",
    storageBucket: "story-hub-64494.appspot.com",
    messagingSenderId: "524629519702",
    appId: "1:524629519702:web:fc483ad5a3e83583bc3af7",
    measurementId: "G-K4712Z6XVG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase.firestore();