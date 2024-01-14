import styled from "styled-components";
import NavBarLogo from "../components/NavBarLogo";
import ButtonPrimary from "../components/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/Auth";

const NavBarUserStyle = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  border-bottom: 5px solid #004080;
`;

const NavBarUserContenStyle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const NavBarUserName = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  color: #FFFFFF;
`;

const NavBarUser = () => {
  const navigate = useNavigate();

  const { authUser } = useAuth();
  console.log(authUser)

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <NavBarUserStyle>
      <NavBarLogo />
      <NavBarUserContenStyle>
        <NavBarUserName>{authUser.email}</NavBarUserName>
        <div onClick={handleGoBack}>
          <ButtonPrimary text={"Volver"}></ButtonPrimary>
        </div>
      </NavBarUserContenStyle>
    </NavBarUserStyle>
  );
};

export default NavBarUser;
