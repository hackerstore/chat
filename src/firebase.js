// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCujbdbKkdYnk_rBE8uuu7tuKCs1qoPkYk",
  authDomain: "hiddb-30b33.firebaseapp.com",
  databaseURL: "https://hiddb-30b33-default-rtdb.firebaseio.com",
  projectId: "hiddb-30b33",
  storageBucket: "hiddb-30b33.appspot.com",
  messagingSenderId: "83892461212",
  appId: "1:83892461212:web:eeafd62eb886b10fb01759",
  measurementId: "G-ZYE0BGTCC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
