// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//AIzaSyBO1IvT4srZS2lwfrKsx7yYkmedpYZgGWU
const firebaseConfig = {
  apiKey: "AIzaSyBO1IvT4srZS2lwfrKsx7yYkmedpYZgGWU",
  authDomain: "dia-nino-app-af16a.firebaseapp.com",
  projectId: "dia-nino-app-af16a",
  storageBucket: "dia-nino-app-af16a.appspot.com",
  messagingSenderId: "157290908583",
  appId: "1:157290908583:web:6e067cdb5d53c8e1c2c482",
  measurementId: "G-X2XYQGR2F8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const analytics = getAnalytics(app);

// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });