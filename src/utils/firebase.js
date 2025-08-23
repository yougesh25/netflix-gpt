// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXb1Kt_OtqmftA0bcFiMQQlIuaHfs6Obk",
  authDomain: "videoflixgpt.firebaseapp.com",
  projectId: "videoflixgpt",
  storageBucket: "videoflixgpt.firebasestorage.app",
  messagingSenderId: "1057815584921",
  appId: "1:1057815584921:web:91061fbd7ad86a5322d808",
  measurementId: "G-BZF7YFRFDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();