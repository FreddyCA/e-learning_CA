import PropTypes from "prop-types";

// importanto referencia
import { createContext, useContext, useEffect, useState } from "react";
import { auth, firebaseDB } from "./firebase";

// importanto caracteriticas de auth
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

// creando el contexto
const AuthUserContext = createContext({
  authUser: null,
  isLoading: true,
  errorCode: null,
});

function UserFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorCode, setErrorCode] = useState(null);

  //   registro de nuevos usuarios
  const register = async (name, lastName, email, password) => {
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const nameUser = `${name.toUpperCase()} ${lastName.toUpperCase()}`;
      // SUBIR DATOS A FIRESTORE
      const userDocRef = doc(firebaseDB, "usuarios", user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        name: nameUser,
        email: email.toLowerCase(),
        rol: "usuario",
        dateInitial: new Date().toString(),
        dateInitialDB: serverTimestamp(),
        courses: false,
      });

      setAuthUser({
        uid: user.uid,
        email: user.email,
      });
      setErrorCode(null);
      setIsLoading(false);
    } catch (error) {
      console.log("error al registrar el usuario", error.message);
      setAuthUser(null);
      setErrorCode({
        code: error.code,
        message: error.message,
      });
      console.log(errorCode);
      setIsLoading(false);
    }
  };

  // registro de nuevos usuarios con google
  const registerWithGoogle = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      // SUBIR DATOS A FIRESTORE
      const userDocRef = doc(firebaseDB, "usuarios", user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        name: user.displayName.toUpperCase(),
        email: user.email.toLowerCase(),
        rol: "usuario",
        dateInitial: new Date().toString(),
        dateInitialDB: serverTimestamp(),
        courses: false,
      });

      setAuthUser({
        uid: user.uid,
        email: user.email,
      });
      setErrorCode(null);
      setIsLoading(false);
    } catch (error) {
      setErrorCode({
        code: error.code,
        message: error.message,
      });
      setIsLoading(false);
    }
  };

  //   login
  const login = async (email, password) => {
    setIsLoading(true);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    setAuthUser({
      uid: user.uid,
      email: user.email,
    });
    setIsLoading(false);
    setErrorCode(null);
  };

  // LOGIN CON GOOGLE
  const loginWithGoogle = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      // Aquí puedes realizar acciones adicionales después de iniciar sesión con Google si es necesario
      setAuthUser({
        uid: user.uid,
        email: user.email,
      });
      setIsLoading(false);
      setErrorCode(null);
    } catch (error) {
      if (
        error instanceof FirebaseError &&
        error.code === "auth/cancelled-popup-request"
      ) {
        // El usuario cerró la ventana emergente antes de completar la autenticación
        console.log("Inicio de sesión con Google cancelado por el usuario.");
      } else {
        console.error("Error al iniciar sesión con Google:", error);
        setErrorCode({
          code: error.code,
          message: error.message,
        });
      }
      setIsLoading(false);
    }
  };

  //   reset password
  const resetPassword = async (email) => {
    setIsLoading(true);
    await sendPasswordResetEmail(auth, email);
    setIsLoading(false);
  };

  //   cerrando sesión
  const logOut = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
      setAuthUser(null);
      setErrorCode(null);
      setIsLoading(false);
    } catch (error) {
      setErrorCode({
        code: error.code,
        message: error.message,
      });
      setIsLoading(false);
    }
  };

  //   verificando estado de sesion
  const authStateChanged = async (user) => {
    setIsLoading(true);
    if (!user) {
      setAuthUser(null);
      setIsLoading(false);
      return;
    }
    setAuthUser({
      uid: user.uid,
      email: user.email,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsuscribe();
  }, []);

  return {
    authUser,
    isLoading,
    errorCode,
    register,
    login,
    loginWithGoogle,
    logOut,
    resetPassword,
    registerWithGoogle,
  };
}

export function AuthUserProvider({ children }) {
  const auth = UserFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthUserContext);
};

AuthUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
