// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//AIzaSyBO1IvT4srZS2lwfrKsx7yYkmedpYZgGWU
const firebaseConfig = {
  apiKey: "",
  authDomain: "dia-nino-app-af16a.firebaseapp.com",
  projectId: "dia-nino-app-af16a",
  storageBucket: "dia-nino-app-af16a.appspot.com",
  messagingSenderId: "157290908583",
  appId: "1:157290908583:web:6e067cdb5d53c8e1c2c482",
  measurementId: "G-X2XYQGR2F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);