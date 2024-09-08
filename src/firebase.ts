
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCOlSlRKfAbni9Jlw2FOjoNDOxd1Yok-0",
  authDomain: "akunnatree.firebaseapp.com",
  projectId: "akunnatree",
  storageBucket: "akunnatree.appspot.com",
  messagingSenderId: "1088509649434",
  appId: "1:1088509649434:web:5b2f01ca1f6c6d0c76e7a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;