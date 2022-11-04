// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD09Tif9GShs6xmVR6hjxnpQ0FVNpDy54c",
  authDomain: "hybrid-dominion-328513.firebaseapp.com",
  projectId: "hybrid-dominion-328513",
  storageBucket: "hybrid-dominion-328513.appspot.com",
  messagingSenderId: "349059708333",
  appId: "1:349059708333:web:a6ac172dc6459ec6bb9d24",
  measurementId: "G-0ME00LHN8C",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
