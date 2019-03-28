import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyA-cYVkopOHCbUxMSLH3XAtfiDkaUeFNcA",
    authDomain: "restaurant-4633e.firebaseapp.com",
    databaseURL: "https://restaurant-4633e.firebaseio.com",
    projectId: "restaurant-4633e",
    storageBucket: "restaurant-4633e.appspot.com",
    messagingSenderId: "420150305338"
  };

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;