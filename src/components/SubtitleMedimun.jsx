import styled from "styled-components";
import PropTypes from "prop-types";

const SubtitleMediumStyle = styled.h2`
  font-size: 1.5rem;
  color: var(--color--textSecondary);
  margin-bottom: 0.5rem;
`;

const SubtitleMedium = ({ children }) => {
  return <SubtitleMediumStyle>{children}</SubtitleMediumStyle>;
};

SubtitleMedium.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubtitleMedium;