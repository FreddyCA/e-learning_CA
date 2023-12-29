import styled from "styled-components";
import LinkContent from "./LinkContent";

const NavBarLogoStyle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: var(--color--textPrimary);
`;

const NavBarLogo = () => {
  return (
    <LinkContent to={"/"}>
      <NavBarLogoStyle>E-learning</NavBarLogoStyle>
    </LinkContent>
  );
};

export default NavBarLogo;
