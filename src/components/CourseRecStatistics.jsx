import styled from "styled-components";
import PropTypes from "prop-types";

import countPeopleSVG from "../assets/svg/countPeople.svg";
import courseTimeSVG from "../assets/svg/courseTime.svg";
import countVideoSVG from "../assets/svg/countVideo.svg";
const CourseRecStatisticsStyle = styled.div`
  padding: 1rem 0 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const CourseRecStatisticContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const CourseRecStatisticIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.2rem;
`;
const CourseRecStatisticInfo = styled.p`
  font-size: 0.95rem;
  white-space: nowrap;
  color: var(--color--textSecondary);
`;

const CourseRecStatistics = ({ hours, videos, students }) => {
  return (
    <CourseRecStatisticsStyle>
      <CourseRecStatisticContent>
        <CourseRecStatisticIcon src={courseTimeSVG} alt="icon time course" />
        <CourseRecStatisticInfo>{hours} horas</CourseRecStatisticInfo>
      </CourseRecStatisticContent>
      <CourseRecStatisticContent>
        <CourseRecStatisticIcon src={countPeopleSVG} alt="icon cant people" />
        <CourseRecStatisticInfo>{students} estudiantes</CourseRecStatisticInfo>
      </CourseRecStatisticContent>
      <CourseRecStatisticContent>
        <CourseRecStatisticIcon src={countVideoSVG} alt="icon count video" />
        <CourseRecStatisticInfo>{videos} Video</CourseRecStatisticInfo>
      </CourseRecStatisticContent>
    </CourseRecStatisticsStyle>
  );
};

CourseRecStatistics.propTypes = {
  hours: PropTypes.string.isRequired,
  videos: PropTypes.string.isRequired,
  students: PropTypes.string.isRequired,
};

export default CourseRecStatistics;
