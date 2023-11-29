import styled from "styled-components";
import imgHeader from "../assets/svg/headerImg.svg";

const HeaderImgBgStyle = styled.img`
  width: 420px;
  height: 270px;
`;

const HeaderImgBg = () => {
  return <HeaderImgBgStyle src={imgHeader} alt="imagen fondo Header" />;
};

export default HeaderImgBg;
