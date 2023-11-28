import styled, { css } from "styled-components";

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

const NavBarItemsLinkStyle = styled.a`
  color: var(--color--textPrimary);
  text-decoration: none;
  font-size: 1rem;
  padding: 1rem;
  white-space: nowrap;
  cursor: pointer;

  ${(props) =>
    props.$signUp &&
    css`
      border-radius: 5px;
      border: 1px solid var(--color--textPrimary);
      transition: all 0.3s ease;
      &:hover {
        background-color: var(--color--textPrimary);
        color: var(--color--bgPrincipal);
      }
    `}
  ${(props) =>
    !props.$signUp &&
    css`
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
    `}
`;
const NavBarItems = () => {
  return (
    <NavBarItemsContentStyle>
      <NavBarItemsStyle>
        <NavBarItemsLinkStyle>Inicio</NavBarItemsLinkStyle>
      </NavBarItemsStyle>
      <NavBarItemsStyle>
        <NavBarItemsLinkStyle>Clases</NavBarItemsLinkStyle>
      </NavBarItemsStyle>
      <NavBarItemsStyle>
        <NavBarItemsLinkStyle>Planes</NavBarItemsLinkStyle>
      </NavBarItemsStyle>
      <NavBarItemsStyle>
        <NavBarItemsLinkStyle href="#">Acerca de Nosotros</NavBarItemsLinkStyle>
      </NavBarItemsStyle>
      <NavBarItemsStyle>
        <NavBarItemsLinkStyle>Iniciar Sesión</NavBarItemsLinkStyle>
      </NavBarItemsStyle>
      <NavBarItemsStyle>
        <NavBarItemsLinkStyle $signUp>Registrarse</NavBarItemsLinkStyle>
      </NavBarItemsStyle>
    </NavBarItemsContentStyle>
  );
};

export default NavBarItems;
