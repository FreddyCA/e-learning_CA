import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBarUser from "../sections/NavBarUser";
import Footer from "../sections/Footer";
import LoginForm from "../components/LoginForm";
import ResetPassword from "../components/ResetPassword";
import { useState } from "react";

const LoginStyle = styled.div`
  background-color: rgb(28, 30, 53);
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  const [resetPasswordState, setResetPasswordState] = useState(true);
  return (
    <LoginStyle>
      <NavBarUser />
      {resetPasswordState ? (
        <LoginForm setResetPasswordState={setResetPasswordState} />
      ) : (
        <ResetPassword setResetPasswordState={setResetPasswordState} />
      )}
      <p>No tiene una cuenta?</p>
      <Link to={"/registro"}>Crear cuenta</Link>
      <Footer />
    </LoginStyle>
  );
};

export default Login;
