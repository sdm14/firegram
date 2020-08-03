import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
   apiKey: "AIzaSyDosLjdxSU-1MeSxazgSu5Bn2S9yGa5348",
   authDomain: "firegram-88279.firebaseapp.com",
   databaseURL: "https://firegram-88279.firebaseio.com",
   projectId: "firegram-88279",
   storageBucket: "firegram-88279.appspot.com",
   messagingSenderId: "125022427920",
   appId: "1:125022427920:web:9d8106fc99f40b3b8fe395"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }