import PropTypes from "prop-types";
import styled from "styled-components";

const ResizableImageStyle = styled.img`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;

const ResizableImage = ({ width, heigth, src, alt }) => {
  return (
    <ResizableImageStyle src={src} alt={alt} width={width} height={heigth} />
  );
};

ResizableImage.propTypes = {
  width: PropTypes.string,
  heigth: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ResizableImage;
