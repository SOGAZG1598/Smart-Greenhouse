// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATF3Ey9JHnMC3EYlAy4jcHtSY_9F7kvPU",
  authDomain: "greenmayas-48771.firebaseapp.com",
  databaseURL: "https://greenmayas-48771-default-rtdb.firebaseio.com",
  projectId: "greenmayas-48771",
  storageBucket: "greenmayas-48771.appspot.com",
  messagingSenderId: "774450277707",
  appId: "1:774450277707:web:c42dac297cc9f96de5ccce",
  measurementId: "G-X0XKN74T3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);