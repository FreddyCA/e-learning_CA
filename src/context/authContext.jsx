import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.js";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no auth provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // registrarce
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // para login
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // para cerrar sesion
  const logout = () => signOut(auth);

  // un loading mientras se verifica el estado
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // cada vez que se carga la pagina donde se usa el context
    // se ara una peticion de que si la mquina esta logueada
    const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // TERMINADO LA VERIFICACION DEL ESTADO DE QUE SI ESTA CONECTADO O NO
      setLoading(false);
    });
    console.log("auth provaider cargando");

    return () => unsubscribe()
  }, []);


  return (
    <authContext.Provider value={{ signup, login, user, logout, loading }}>
      {children}
    </authContext.Provider>
  );
};
