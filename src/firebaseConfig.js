// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQp91dbhm4bQ3lNg-R0tEGMNcrZgFncOE",
  authDomain: "mini-e54a9.firebaseapp.com",
  projectId: "mini-e54a9",
  storageBucket: "mini-e54a9.appspot.com",
  messagingSenderId: "442326472295",
  appId: "1:442326472295:web:5ea0b20b7acd2c89bfa6c2",
  measurementId: "G-B6DWBNXGXM"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const firestore = getFirestore(app);
 const storage = getStorage(app);

 export{auth,app,firestore,storage};