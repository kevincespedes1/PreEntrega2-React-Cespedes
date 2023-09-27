import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD152NZFLZobwZXvstqWdP09Vse5L7a2Qs",
  authDomain: "test-firebase-clase-13.firebaseapp.com",
  projectId: "test-firebase-clase-13",
  storageBucket: "test-firebase-clase-13.appspot.com",
  messagingSenderId: "793350956012",
  appId: "1:793350956012:web:5c2a53983a7516d9fc56c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
