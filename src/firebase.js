import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD09Tif9GShs6xmVR6hjxnpQ0FVNpDy54c",
  authDomain: "hybrid-dominion-328513.firebaseapp.com",
  projectId: "hybrid-dominion-328513",
  storageBucket: "hybrid-dominion-328513.appspot.com",
  appId: "1:349059708333:web:a6ac172dc6459ec6bb9d24",
  measurementId: "G-0ME00LHN8C",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
