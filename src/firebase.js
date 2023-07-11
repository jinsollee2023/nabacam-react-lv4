// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPCDoD9wyPuYYZGYriPw5JHc26rMFg4n4",
  authDomain: "ndns-c8353.firebaseapp.com",
  projectId: "ndns-c8353",
  storageBucket: "ndns-c8353.appspot.com",
  messagingSenderId: "499727460278",
  appId: "1:499727460278:web:2b72442602e8fe184c8317",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
