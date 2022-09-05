import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import reportWebVitals from './reportWebVitals';
import HomePage from './app/ui/pages/Home';

const firebaseConfig = {
  apiKey: "AIzaSyDqQ3blEKvMKH7snySU42sxe5Hgbug_v-g",
  authDomain: "battleship-6742a.firebaseapp.com",
  projectId: "battleship-6742a",
  storageBucket: "battleship-6742a.appspot.com",
  messagingSenderId: "774171118283",
  appId: "1:774171118283:web:d4b9ee4a11b25e5122294e"
};

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
