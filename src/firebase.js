// Import the functions you need from the SDKs you need

import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVAS3DttQagrgFjrIG7Cp4Y3srCcjnHPU",
  authDomain: "react-7497b.firebaseapp.com",
  projectId: "react-7497b",
  storageBucket: "react-7497b.appspot.com",
  messagingSenderId: "898566294501",
  appId: "1:898566294501:web:7b0f19ec04f06e10437d0c",
  measurementId: "G-SSLCQYJ9VV",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
