import styled from "styled-components";
import ButtonPrimary from "./ButtonPrimary";
import { useAuth } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";

const LoginWhitGoogleStyle = styled.div`
  display: flex;
`;

const LoginWhitGoogle = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLoginGoogle = async () => {
    console.log("logeando con google");
    try {
      await loginWithGoogle();
      console.log("se inicio sesión");
      navigate("/panel-de-usuario");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LoginWhitGoogleStyle onClick={handleLoginGoogle}>
      <ButtonPrimary text={"Iniciar Sesión con Google"} />
    </LoginWhitGoogleStyle>
  );
};

export default LoginWhitGoogle;
