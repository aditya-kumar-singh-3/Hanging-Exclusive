import { initializeApp } from "firebase/app";
import "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseconfig = {
    apiKey: "AIzaSyDoum2_3xAC7dLQtQMblJwRMH7te9BuMSM",
  authDomain: "ecommerce-exclusive.firebaseapp.com",
  projectId: "ecommerce-exclusive",
  storageBucket: "ecommerce-exclusive.appspot.com",
  messagingSenderId: "348249102238",
  appId: "1:348249102238:web:33bca282095c105c74688f",
  measurementId: "G-XSL166CVS7"
};

const app = initializeApp(firebaseconfig);

export default app;