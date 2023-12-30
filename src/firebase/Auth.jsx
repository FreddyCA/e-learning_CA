import PropTypes from "prop-types";

// importanto referencia
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

// importanto caracteriticas de auth
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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
  const register = async (name, email, password) => {
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

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
    logOut,
    resetPassword,
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
