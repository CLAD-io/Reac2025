// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AlertasSweets2, AlertasSweets3 } from "../assets/SweetAlert";
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


// CREAR USUARIO Y GUARDAR EN FIREBASE 

export function crearUsuario(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      console.log("Credenciales", userCredential);
      const user = userCredential.user;
      console.log(user);
              AlertasSweets2("¡Se registró el usuario!", "success", "Ok")

      // ...
    })
    .catch((error) => {
      console.log(error.code, error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == "auth/weak-password"){
        AlertasSweets2("La contraseña debe tener al menos 6 caracteres", "warning", "Cerrar")
      }
      if(errorCode == "auth/email-already-in-use"){
        AlertasSweets2("Correo ya registrado", "error", "Cerrar")
      }
      
      // ..
    });
}


// Codigo para acceder con EMAIL

export function loginEmailPass(email, password) {

  return new Promise((respuerta, rechazado) => {
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("Credenciales", userCredential);
        const user = userCredential.user;
        console.log("usuario credencial: ", user);
        // ...
        respuerta(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Codigo de error " + errorCode, "y Mensaje de error " + errorMessage);
        rechazado(errorCode)
      });
  });
}
