import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeU9D3YphE0dXkS-3bfKj3E9Kp4Vf4TUc",
  authDomain: "tiendapokemon-ada20.firebaseapp.com",
  projectId: "tiendapokemon-ada20",
  storageBucket: "tiendapokemon-ada20.appspot.com",
  messagingSenderId: "719377629083",
  appId: "1:719377629083:web:e8bfd1ed4f3cd3b847eb3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
