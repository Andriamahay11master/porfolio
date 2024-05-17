// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApyYSbumHariXOVZBLYyPvxMyyJurFLkA",
  authDomain: "porfolio-1e830.firebaseapp.com",
  projectId: "porfolio-1e830",
  storageBucket: "porfolio-1e830.appspot.com",
  messagingSenderId: "851116813838",
  appId: "1:851116813838:web:4859dd3a8dfcc90360965f",
  measurementId: "G-GX267Z8ZKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(app);

export { app, db, analytics }