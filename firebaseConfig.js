// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXnksL95yjMB3fTlDKqTJF28bPRHc2kqw",
  authDomain: "research-node-ae68e.firebaseapp.com",
  projectId: "research-node-ae68e",
  storageBucket: "research-node-ae68e.appspot.com",
  messagingSenderId: "1062920195395",
  appId: "1:1062920195395:web:fc00059068d7f10c5873f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);