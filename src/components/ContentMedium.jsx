import styled from "styled-components";
import PropTypes from "prop-types";

import SubtitleMedium from "./SubtitleMedimun";
import TextInfo from "./TextInfo";

const ContentMediumStyle = styled.div`
  max-width: 250px;
  height: min-content;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ContentMedium = ({ title1, title2, description }) => {
  return (
    <ContentMediumStyle>
      <SubtitleMedium>{title1}</SubtitleMedium>
      <SubtitleMedium>{title2}</SubtitleMedium>
      <TextInfo text={description} />
    </ContentMediumStyle>
  );
};

ContentMedium.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ContentMedium;
