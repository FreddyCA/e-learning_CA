import styled from "styled-components";
import ButtonPrimary from "./ButtonPrimary";
import { useAuth } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";

const RegisterWhitGoogleStyle = styled.div`
  display: flex;
`;

const RegisterWhitGoogle = () => {
  const { registerWithGoogle } = useAuth();
  const navigate = useNavigate()

  const handleRegisterGoogle = async () => {
    console.log("registrano con google");
    try {
      await registerWithGoogle();
      console.log("se registro")
      navigate("/panel-de-usuario")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <RegisterWhitGoogleStyle onClick={handleRegisterGoogle}>
      <ButtonPrimary text={"Registrarse con Google"} />
    </RegisterWhitGoogleStyle>
  );
};

export default RegisterWhitGoogle;
