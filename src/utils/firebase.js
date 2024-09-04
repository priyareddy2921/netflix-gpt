/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbMIQeIUdyj6rQ6glxvi_wPXtF1HLXr7Q",
  authDomain: "netflixgpt-165c4.firebaseapp.com",
  projectId: "netflixgpt-165c4",
  storageBucket: "netflixgpt-165c4.appspot.com",
  messagingSenderId: "574414983891",
  appId: "1:574414983891:web:cb56a00621fe9977dffa26",
  measurementId: "G-22TPRXCR66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
