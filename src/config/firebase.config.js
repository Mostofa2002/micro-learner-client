// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjx0qgBRo1p-RUbNE4j_RAEe8ybNyTfPs",
  authDomain: "micro-learner.firebaseapp.com",
  projectId: "micro-learner",
  storageBucket: "micro-learner.appspot.com",
  messagingSenderId: "863546685768",
  appId: "1:863546685768:web:4b9ce33ddaff4f4800db7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
