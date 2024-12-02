import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj32YtwGt3W52V-6eOO8cPARAs3-b7yUY",
  authDomain: "kelvin-s-project.firebaseapp.com",
  databaseURL: "https://kelvin-s-project.firebaseio.com",
  projectId: "kelvin-s-project",
  storageBucket: "kelvin-s-project.firebasestorage.app",
  messagingSenderId: "481272405586",
  appId: "1:481272405586:web:e9c7f3cc74507c22cc098b",
  measurementId: "G-YWF2L7YT22"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };


