// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXJhyQ7n4LcppN_8_3rq10qTrs9uCB_p8",
  authDomain: "rn-instagram-clone-clever.firebaseapp.com",
  projectId: "rn-instagram-clone-clever",
  storageBucket: "rn-instagram-clone-clever.appspot.com",
  messagingSenderId: "103264836193",
  appId: "1:103264836193:web:b6f59cf44e5d34e82e2820",
  measurementId: "G-ELSBCJE36Y",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
