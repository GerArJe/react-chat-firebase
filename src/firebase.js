// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuJGV5cJPBZ5TFVfrekGBDVCa0IfvlfZs",
  authDomain: "chat-react-775aa.firebaseapp.com",
  projectId: "chat-react-775aa",
  storageBucket: "chat-react-775aa.appspot.com",
  messagingSenderId: "367193840424",
  appId: "1:367193840424:web:22166ab67b6512f9db0e1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
