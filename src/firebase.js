// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnt9buJx063Fwfm8CSKOLo3LFj6zYAVB0",
  authDomain: "todo-list-aeffe.firebaseapp.com",
  projectId: "todo-list-aeffe",
  storageBucket: "todo-list-aeffe.appspot.com",
  messagingSenderId: "631954253732",
  appId: "1:631954253732:web:0bde9daf82028e03f90331",
  measurementId: "G-MLLY2KQ573"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db, firebase };
