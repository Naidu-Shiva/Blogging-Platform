// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "beginners-blog.firebaseapp.com",
  projectId: "beginners-blog",
  storageBucket: "beginners-blog.appspot.com",
  messagingSenderId: "697345429429",
  appId: "1:697345429429:web:936ac69e516d2bdde653fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

