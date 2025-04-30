// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_1LHfP0o_CxKdK81VTb9RndZDW949AcY",
    authDomain: "alternador-de-link.firebaseapp.com",
    projectId: "alternador-de-link",
    storageBucket: "alternador-de-link.firebasestorage.app",
    messagingSenderId: "836955365911",
    appId: "1:836955365911:web:a9d7d0fa69d3751a6db252",
    databaseURL: "https://alternador-de-link-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 