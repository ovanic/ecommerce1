// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDbKqsiJtrMHYtL8r-tQyUQy8xAa5aPsEg",
  authDomain: "ecommerce-65705.firebaseapp.com",
  projectId: "ecommerce-65705",
  storageBucket: "ecommerce-65705.appspot.com",
  messagingSenderId: "1029202388399",
  appId: "1:1029202388399:web:a37a7f53329e1922aa7b5a",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios
export const auth = getAuth(app);
export const firestore = getFirestore(app);