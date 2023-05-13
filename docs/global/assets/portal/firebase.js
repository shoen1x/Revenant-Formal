// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCdbFc9cX593xx3WFStMnX5lekV3WK-5gM",
  authDomain: "shoenix-studios.firebaseapp.com",
  projectId: "shoenix-studios",
  storageBucket: "shoenix-studios.appspot.com",
  messagingSenderId: "801387934857",
  appId: "1:801387934857:web:7523b8586e9edf01dc0258"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var db = getFirestore(app);
export { app, db, collection, getDocs, Timestamp, addDoc };
export { query, orderBy, limit, where, onSnapshot };