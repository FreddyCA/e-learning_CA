import styled from "styled-components"

const NavBarLogoStyle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: var(--color--textPrimary);
`


const NavBarLogo = () => {
  return (
    <NavBarLogoStyle>E-learning</NavBarLogoStyle>
  )
}

export default NavBarLogo
