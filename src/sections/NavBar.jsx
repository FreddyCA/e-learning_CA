import styled from "styled-components";
import LogoNavBar from "../components/NavBarLogo";
import NavBarItems from "../components/NavBarItems";

const NavBarStyle = styled.div`
  background-color: var(--color--bgPrincipal);
  height: 90px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid #004080;
`;

const NavBar = () => {
  return (
    <NavBarStyle>
      <LogoNavBar />
      <NavBarItems />
    </NavBarStyle>
  );
};

export default NavBar;
