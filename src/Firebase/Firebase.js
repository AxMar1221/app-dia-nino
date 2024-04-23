// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsNuR4ezqExSPz0qnzRMm9HIdFx-A8hzY",
  authDomain: "dia-nino-app-73fd3.firebaseapp.com",
  projectId: "dia-nino-app-73fd3",
  storageBucket: "dia-nino-app-73fd3.appspot.com",
  messagingSenderId: "750666141925",
  appId: "1:750666141925:web:08c88e7bffb18af7cd440c",
  measurementId: "G-6JMJJ0J4E4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const analytics = getAnalytics(app);

