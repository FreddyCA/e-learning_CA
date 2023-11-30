import styled from "styled-components";
import TextInfo from "./TextInfo";
import TitleSec from "./TitleSec";
import openSVG from "../assets/svg/open.svg";
import closeSVG from "../assets/svg/close.svg";
import { useState } from "react";
import PropTypes from "prop-types";

const FAQItemContentStyle = styled.div`
  border-bottom: 2px solid #ececf1;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;
const FAQItemNumberStyle = styled.p`
  color: #2405f2;
  font-size: 24px;
  font-weight: 500;
`;

const FAQItemTextContetStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const FAQItemButton = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const FAQItem = ({ title, response, number }) => {
  const numberId = (number + 1).toString();
  const [openResp, setOpenResp] = useState(true);
  const handleButton = () => {
    setOpenResp(!openResp);
  };
  return (
    <FAQItemContentStyle>
      <FAQItemNumberStyle>{`0${numberId}`}</FAQItemNumberStyle>
      <FAQItemTextContetStyle>
        <TitleSec>{`¿${title}?`}</TitleSec>
        {!openResp && <TextInfo text={response} />}
      </FAQItemTextContetStyle>
      {openResp ? (
        <FAQItemButton src={openSVG} onClick={handleButton} />
      ) : (
        <FAQItemButton src={closeSVG} onClick={handleButton} />
      )}
    </FAQItemContentStyle>
  );
};

FAQItem.propTypes = {
  title: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default FAQItem;
