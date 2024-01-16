import styled from "styled-components";
import PropTypes from "prop-types";

import ResizableImage from "./ResizableImage";
import TitleSec from "./TitleSec";
import TextInfo from "./TextInfo";
import CourseRecStatistics from "./CourseRecStatistics";

const CourseRecAdminStyle = styled.div`
  width: 100%;
  height: 400px;
  min-height: 200px;
  background-color: #f4f6fc;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CourseRecAdminInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
`;
const CourseRecAdmin = ({
  img,
  alt,
  title,
  description,
  hours,
  videos,
  students,
}) => {
  return (
    <CourseRecAdminStyle>
      <ResizableImage src={img} heigth={"200px"} width={"inherit"} alt={alt} />
      <CourseRecAdminInfo>
        <TitleSec>{title}</TitleSec>
        <TextInfo text={description} />
        <CourseRecStatistics
          hours={hours}
          videos={videos}
          students={students}
        ></CourseRecStatistics>
      </CourseRecAdminInfo>
    </CourseRecAdminStyle>
  );
};

CourseRecAdmin.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  videos: PropTypes.string.isRequired,
  students: PropTypes.string.isRequired,
};

export default CourseRecAdmin;

