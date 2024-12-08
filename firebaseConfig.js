import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj32YtwGt3W52V-6eOO8cPARAs3-b7yUY",
  authDomain: "kelvin-s-project.firebaseapp.com",
  projectId: "kelvin-s-project",
  storageBucket: "kelvin-s-project.firebasestorage.app",
  messagingSenderId: "481272405586",
  appId: "1:481272405586:web:3f75b11873ffa87dcc098b",
  measurementId: "G-9CE9LF8DQV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;



