import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const LinkContentStyle = styled(Link)`
  text-decoration: none;
`;

const LinkContent = ({ children, to }) => {
  return <LinkContentStyle to={to}>{children}</LinkContentStyle>;
};

LinkContent.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
export default LinkContent;
