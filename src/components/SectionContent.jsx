import styled from "styled-components";
import PropTypes from "prop-types";

const SectionContentStyle = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 0 2rem;
`;
const SectionContent = ({ children }) => {
  return <SectionContentStyle>{children}</SectionContentStyle>;
};

SectionContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionContent;
