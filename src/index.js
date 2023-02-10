import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI0kOirRMlLEtynC0XntvcbxJOqrt4cFk",
  authDomain: "freemarket-1fb5f.firebaseapp.com",
  projectId: "freemarket-1fb5f",
  storageBucket: "freemarket-1fb5f.appspot.com",
  messagingSenderId: "710699899304",
  appId: "1:710699899304:web:8e501d42a2d41d4967e59d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*   <React.StrictMode> */
    <App />
/*   </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

