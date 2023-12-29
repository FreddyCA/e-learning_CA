import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBarUser from "../sections/NavBarUser";
import Footer from "../sections/Footer";
import LoginForm from "../components/LoginForm";

const LoginStyle = styled.div`
  background-color: rgb(28, 30, 53);
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  return (
    <LoginStyle>
      <NavBarUser />
      <LoginForm />
      <p>No tiene una cuenta?</p>
      <Link to={"/registro"}>Crear cuenta</Link>
      <Footer />
    </LoginStyle>
  );
};

export default Login;
