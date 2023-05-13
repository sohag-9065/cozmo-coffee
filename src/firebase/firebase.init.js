// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

/*

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

apiKey: "AIzaSyDSpq7EWYu0TmzeTXRQPsuxTkyv-uEmjhE",
  authDomain: "cozmo-cofeee.firebaseapp.com",
  projectId: "cozmo-cofeee",
  storageBucket: "cozmo-cofeee.appspot.com",
  messagingSenderId: "1096439301793",
  appId: "1:1096439301793:web:f39987cc6d015633f312e0"

export default app;*/