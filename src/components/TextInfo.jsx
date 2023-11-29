import styled from "styled-components";
import PropTypes from "prop-types";

const TextInfoStyle = styled.p`
  color: var(--color--textSecondary);
  font-size: 0.95rem;
`;
const TextInfo = ({ text }) => {
  return <TextInfoStyle>{text}</TextInfoStyle>;
};

TextInfo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextInfo;
