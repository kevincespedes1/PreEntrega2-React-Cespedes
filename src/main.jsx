import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { CartProvider } from './context/CartContext';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoiLbtimkN84ARjiA-UJOrqq0Z0n9-xkU",
  authDomain: "productos-react-ch.firebaseapp.com",
  projectId: "productos-react-ch",
  storageBucket: "productos-react-ch.appspot.com",
  messagingSenderId: "272486476065",
  appId: "1:272486476065:web:a74edaaaf675da593cb660"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <App /> 
    </CartProvider>
  </React.StrictMode>
)