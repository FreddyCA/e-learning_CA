import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarItemsContentStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;
const NavBarItemsStyle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const NavBarItemsLoginStyle = styled.div`
  color: var(--color--textPrimary);
  text-decoration: none;
  font-size: 1rem;
  padding: 1rem;
  white-space: nowrap;
  border-radius: 5px;
  border: 1px solid var(--color--textPrimary);
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--color--textPrimary);
    color: var(--color--bgPrincipal);
  }
`;

const NavBarItemsLinkStyle = styled.a`
  color: var(--color--textPrimary);
  text-decoration: none;
  font-size: 1rem;
  padding: 1rem;
  white-space: nowrap;
  cursor: pointer;
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    left: 50%;
    background-color: var(--color--textPrimary);
    transition: width 0.3s ease;
  }
  &::before {
    top: 0;
    transform: translateX(-50%);
    height: 2.5px;
  }
  &::after {
    bottom: 0;
    transform: translateX(-50%);
    height: 2.5px;
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
  }
`;
const NavBarItems = () => {
  return (
    <NavBarItemsContentStyle>
      <NavBarItemsStyle>
        <NavBarItemsLinkStyle href="#Cursos">Cursos</NavBarItemsLinkStyle>
      </NavBarItemsStyle>
      <NavBarItemsStyle>
        <NavBarItemsLinkStyle href="#acercaDeNosotros">
          Acerca de Nosotros
        </NavBarItemsLinkStyle>
      </NavBarItemsStyle>
      <NavBarItemsStyle>
        <NavBarItemsLinkStyle href="#FAQs">
          Preguntas Frecuentes
        </NavBarItemsLinkStyle>
      </NavBarItemsStyle>
      <NavBarItemsStyle>
        <NavBarItemsLinkStyle href="#Contacto">Contacto</NavBarItemsLinkStyle>
      </NavBarItemsStyle>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <NavBarItemsStyle>
          <NavBarItemsLoginStyle>Iniciar Sesión</NavBarItemsLoginStyle>
        </NavBarItemsStyle>
      </Link>
    </NavBarItemsContentStyle>
  );
};

export default NavBarItems;
