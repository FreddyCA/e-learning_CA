import styled from "styled-components";
import PropTypes from "prop-types";

import ResizableImage from "./ResizableImage";
import TitleSec from "./TitleSec";
import TextInfo from "./TextInfo";
import CourseRecStatistics from "./CourseRecStatistics";

const CourseRecItemStyle = styled.div`
  width: 280px;
  height: 400px;
  min-height: 200px;
  background-color: #f4f6fc;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CourseRecItemInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
`;
const CourseRecItem = ({
  img,
  alt,
  title,
  description,
  hours,
  videos,
  students,
}) => {
  return (
    <CourseRecItemStyle>
      <ResizableImage src={img} heigth={"200px"} width={"inherit"} alt={alt} />
      <CourseRecItemInfo>
        <TitleSec>{title}</TitleSec>
        <TextInfo text={description} />
        <CourseRecStatistics
          hours={hours}
          videos={videos}
          students={students}
        ></CourseRecStatistics>
      </CourseRecItemInfo>
    </CourseRecItemStyle>
  );
};

CourseRecItem.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  videos: PropTypes.string.isRequired,
  students: PropTypes.string.isRequired,
};

export default CourseRecItem;
