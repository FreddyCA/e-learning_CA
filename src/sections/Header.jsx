import styled from "styled-components";
import ButtonPrimary from "../components/ButtonPrimary";
import HeaderText from "../components/HeaderText";
import HeaderImgBg from "../components/HeaderImgBg";

const HeaderStyleContentStyle = styled.div`
  background-color: var(--color--bgPrincipal);
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderStyle = styled.div`
  width: 992px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderContentInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
`;
const Header = () => {
  return (
    <HeaderStyleContentStyle>
      <HeaderStyle>
        <HeaderContentInfoStyle>
          <HeaderText />
          <ButtonPrimary />
        </HeaderContentInfoStyle>
        <HeaderImgBg />
      </HeaderStyle>
    </HeaderStyleContentStyle>
  );
};

export default Header;
