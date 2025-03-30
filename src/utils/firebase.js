// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX4J99ehb25Qi0SWNnOChkVirwvDQVAbs",
  authDomain: "netflixgpt-93405.firebaseapp.com",
  projectId: "netflixgpt-93405",
  storageBucket: "netflixgpt-93405.firebasestorage.app",
  messagingSenderId: "590240926479",
  appId: "1:590240926479:web:50e47bb3ac927a8b368c7a",
  measurementId: "G-V1KENH2915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();