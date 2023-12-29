import { initializeApp } from "firebase/app";

// importamos para authentication
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR0_-lrnlZV5j3Spl1dwMjsho85qRZHD0",
  authDomain: "e-learning-ca.firebaseapp.com",
  databaseURL: "https://e-learning-ca-default-rtdb.firebaseio.com",
  projectId: "e-learning-ca",
  storageBucket: "e-learning-ca.appspot.com",
  messagingSenderId: "596739427561",
  appId: "1:596739427561:web:bc6d3aff6f772a83b7b478",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// obtenemos la referencia getAuth
export const auth = getAuth(app);
