// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8Du6yBPbCKbMKiGQq_5RkgqBN66YwJqo",
  authDomain: "netflix-gpt-400cd.firebaseapp.com",
  projectId: "netflix-gpt-400cd",
  storageBucket: "netflix-gpt-400cd.appspot.com",
  messagingSenderId: "446340796357",
  appId: "1:446340796357:web:1a3051a6b48b9c02ce85ac",
  measurementId: "G-X7CD5DXJH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics();

export const auth = getAuth();