import styled from "styled-components";
import NavBarLogo from "../components/NavBarLogo";
import ButtonPrimary from "../components/ButtonPrimary";
import { useNavigate } from "react-router-dom";

const NavBarUserStyle = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  border-bottom: 5px solid #004080;
`;

const NavBarUser = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <NavBarUserStyle>
      <NavBarLogo />
      <div onClick={handleGoBack}>
        <ButtonPrimary text={"Volver"}></ButtonPrimary>
      </div>
    </NavBarUserStyle>
  );
};

export default NavBarUser;
