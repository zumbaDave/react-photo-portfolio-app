import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAXnqgOMSKdsRWN5UI04C6IVau2lbh_A50",
    authDomain: "ninja-firegram-db430.firebaseapp.com",
    databaseURL: "https://ninja-firegram-db430.firebaseio.com",
    projectId: "ninja-firegram-db430",
    storageBucket: "ninja-firegram-db430.appspot.com",
    messagingSenderId: "500311224284",
    appId: "1:500311224284:web:dda3b7625d8e6c45bca919"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };