import styled from "styled-components";
import PropTypes from "prop-types";

const TitleSecStyle = styled.h3`
  font-size: 1.2rem;
  color: var(--color--textSecondary);
  margin-bottom: 12px;
`;
const TitleSec = ({ children }) => {
  return <TitleSecStyle>{children}</TitleSecStyle>;
};

TitleSec.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TitleSec;
