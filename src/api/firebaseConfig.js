import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
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
  
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);

}

export default StartFirebase;
