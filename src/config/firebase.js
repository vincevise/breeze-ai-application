// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMxpE37qqO4GNm_PWWuIKvjHMx_XyP6UA",
  authDomain: "breeze-interview-task.firebaseapp.com",
  projectId: "breeze-interview-task",
  storageBucket: "breeze-interview-task.appspot.com",
  messagingSenderId: "146316335088",
  appId: "1:146316335088:web:303a8f14f3441925196f35",
  measurementId: "G-YRXFYCNXE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)