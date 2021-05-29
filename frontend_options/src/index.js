import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyBlNDrtqbuv8klfgN8R_jan_UyEdsoISLY",
  authDomain: "b3b3-66fec.firebaseapp.com",
  databaseURL: "https://b3b3-66fec-default-rtdb.firebaseio.com",
  projectId: "b3b3-66fec",
  storageBucket: "b3b3-66fec.appspot.com",
  messagingSenderId: "503843612140",
  appId: "1:503843612140:web:a3dc05b103b7e85b440cc9",
  measurementId: "G-XXLL1QB318"
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
