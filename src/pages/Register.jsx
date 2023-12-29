import styled from "styled-components";
import RegisterUser from "../components/RegisterUser";
import Footer from "../sections/Footer";
import NavBarUser from "../sections/NavBarUser";

const RegisterStyle = styled.div`
  background-color: rgb(28, 30, 53);
  display: flex;
  flex-direction: column;
`;
const Register = () => {
  return (
    <RegisterStyle>
      <NavBarUser />
      <RegisterUser />
      <Footer />
    </RegisterStyle>
  );
};

export default Register;
