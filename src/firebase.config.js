// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgcRI7huSB94xPgKaKCblAOC3zN8R_bD4",
  authDomain: "otp-pro-88aae.firebaseapp.com",
  projectId: "otp-pro-88aae",
  storageBucket: "otp-pro-88aae.appspot.com",
  messagingSenderId: "447600690534",
  appId: "1:447600690534:web:6a9faf18f63a56c17af4a7",
  measurementId: "G-EYBGMLJ0WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
