// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZxC1JlbBX5cXkCxX13QJ7FexDK6h0seM",
  authDomain: "house-marketplace-app-61696.firebaseapp.com",
  projectId: "house-marketplace-app-61696",
  storageBucket: "house-marketplace-app-61696.appspot.com",
  messagingSenderId: "1036328012801",
  appId: "1:1036328012801:web:8171a091f624ba7fd4c400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()