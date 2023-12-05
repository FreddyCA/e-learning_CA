import { initializeApp } from "firebase/app";
// importando getAuth
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR0_-lrnlZV5j3Spl1dwMjsho85qRZHD0",
  authDomain: "e-learning-ca.firebaseapp.com",
  projectId: "e-learning-ca",
  storageBucket: "e-learning-ca.appspot.com",
  messagingSenderId: "596739427561",
  appId: "1:596739427561:web:bc6d3aff6f772a83b7b478",
};

const app = initializeApp(firebaseConfig);

// exportando la referencia
export const auth = getAuth(app);
