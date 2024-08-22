// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCORdF6Bi_CKFhpGzdM6WknSyEloSGp9P4",
  authDomain: "flashcardsaas-bb661.firebaseapp.com",
  projectId: "flashcardsaas-bb661",
  storageBucket: "flashcardsaas-bb661.appspot.com",
  messagingSenderId: "228602300048",
  appId: "1:228602300048:web:96df3056561bdb4a68ba15",
  measurementId: "G-KSLYB1H285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app)
export {db}