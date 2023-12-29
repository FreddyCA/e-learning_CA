import styled from "styled-components";
import NavBarLogo from "../components/NavBarLogo";
import ButtonPrimary from "../components/ButtonPrimary";
import LinkContent from "../components/LinkContent";

const NavBarUserStyle = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  border-bottom: 5px solid #004080;
`;

const NavBarUser = () => {
  return (
    <NavBarUserStyle>
      <NavBarLogo />
      <LinkContent to={"/login"}>
        <ButtonPrimary text={"Volver"}></ButtonPrimary>
      </LinkContent>
    </NavBarUserStyle>
  );
};

export default NavBarUser;
