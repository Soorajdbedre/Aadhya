import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDEJA6V-OF5eMSGmvR2DLxS6s7zTu0SjSU",
  authDomain: "aadhya-2b054.firebaseapp.com",
  databaseURL: "https://aadhya-2b054-default-rtdb.firebaseio.com",
  projectId: "aadhya-2b054",
  storageBucket: "aadhya-2b054.firebasestorage.app",
  messagingSenderId: "593582017553",
  appId: "1:593582017553:web:62b72b221c452e9a7df5b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
