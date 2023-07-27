import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAyYVfiXrZfTWBFS0NpYln812Qw2AvD8kk",
    authDomain: "netflix-abe5d.firebaseapp.com",
    projectId: "netflix-abe5d",
    storageBucket: "netflix-abe5d.appspot.com",
    messagingSenderId: "677619085465",
    appId: "1:677619085465:web:1cc73920118c3de46fc808"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;