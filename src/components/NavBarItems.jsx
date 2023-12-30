import styled from "styled-components";
import { useAuth } from "../firebase/Auth";
import LinkContent from "./LinkContent";
import { useNavigate } from "react-router-dom";

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
  cursor: pointer;
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
const NavBarItemProfile = styled.span`
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

const ItemLogin = () => {
  return (
    <LinkContent to="/login">
      <NavBarItemsStyle>
        <NavBarItemsLoginStyle>Iniciar Sesión</NavBarItemsLoginStyle>
      </NavBarItemsStyle>
    </LinkContent>
  );
};

const ItemLogout = () => {
  return (
    <LinkContent to="/">
      <NavBarItemsStyle>
        <NavBarItemsLoginStyle>Cerrar Sesión</NavBarItemsLoginStyle>
      </NavBarItemsStyle>
    </LinkContent>
  );
};

const NavBarItems = () => {
  // trayendo lo necesario
  const { authUser, isLoading, logOut } = useAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };

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

      {isLoading === false && authUser ? (
        <>
          <LinkContent to="panel-de-usuario">
            <NavBarItemsStyle>
              <NavBarItemProfile>Mi Cuenta</NavBarItemProfile>
            </NavBarItemsStyle>
          </LinkContent>
          <div onClick={handleLogout}>
            <ItemLogout />
          </div>
        </>
      ) : (
        <ItemLogin />
      )}
    </NavBarItemsContentStyle>
  );
};

export default NavBarItems;
