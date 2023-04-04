import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYBJ9YqJHyirAaUjTIjlBLiQJr32TRzek",
  authDomain: "netflix-clone-b19e8.firebaseapp.com",
  projectId: "netflix-clone-b19e8",
  storageBucket: "netflix-clone-b19e8.appspot.com",
  messagingSenderId: "1079728329112",
  appId: "1:1079728329112:web:2c2340ceff66afebb99bed",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
