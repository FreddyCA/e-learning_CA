import styled from "styled-components";
import benefitsBgNumber from "../assets/svg/benefitsContent.svg";
import PropTypes from "prop-types";
import TextInfo from "./TextInfo";

const BenefitItemStyle = styled.div`
  width: 280px;
  height: min-content;
  background-color: #f4f6fc;
  padding: 2.2rem 1.5rem;
  display: flex;
  flex-direction: column;
`;
const BenefitBgNumber = styled.div`
  max-width: 40px;
  height: 40px;
  background-image: url(${benefitsBgNumber});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--color--textPrimary);
  margin-bottom: 1rem;
`;
const BenefitTitle = styled.h3`
  color: var(--color--textSecondary);
  font-size: 1.2rem;
  margin-bottom: 12px;
`;


const BenefitItem = ({ position, title, description }) => {
  return (
    <BenefitItemStyle>
      <BenefitBgNumber>{position}</BenefitBgNumber>
      <BenefitTitle>{title}</BenefitTitle>
      <TextInfo text={description} />
    </BenefitItemStyle>
  );
};

BenefitItem.propTypes = {
  position: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BenefitItem;
