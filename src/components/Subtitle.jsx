import styled from "styled-components";
import PropTypes from "prop-types";

const SubtitleStyle = styled.h2`
  font-size: 2rem;
  color: var(--color--textSecondary);
`;

const Subtitle = ({ children }) => {
  return <SubtitleStyle>{children}</SubtitleStyle>;
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Subtitle;
