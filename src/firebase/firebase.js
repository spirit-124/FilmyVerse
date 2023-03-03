// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "FIREBASE_AUTHENTICATION_KEY",
  authDomain: "filmyverse-7d623.firebaseapp.com",
  projectId: "filmyverse-7d623",
  storageBucket: "filmyverse-7d623.appspot.com",
  messagingSenderId: "401258224789",
  appId: "1:401258224789:web:5e5c8a9a81caa71ae30f9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");


export default app; 