// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsGSA47Eaj1P78AG-hvL1IDTl-ie-9T9A",
  authDomain: "prueba-8cd58.firebaseapp.com",
  projectId: "prueba-8cd58",
  storageBucket: "prueba-8cd58.firebasestorage.app",
  messagingSenderId: "170651833217",
  appId: "1:170651833217:web:1f63f4f36765ee774d4e80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export function crearUsuario(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      console.log("Credenciales", userCredential);
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      console.log(error.code, error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export function loginEmailPass(email, password) {

  return new Promise((respuerta, rechazado) => {
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("Credenciales", userCredential);
        const user = userCredential.user;
        console.log(user);
        // ...
        respuerta(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code, error.message);
        rechazado(error)
      });
  });
}
