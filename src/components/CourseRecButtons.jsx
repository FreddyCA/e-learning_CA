import styled from "styled-components";
import ButtonPrimary from "./ButtonPrimary";

const CourseRecButtonsStyle = styled.div`
  display: flex;
  gap: 1rem;
`;
const CourseRecButtonsCat = styled.div`
  padding: 1rem;
  background-color: beige;
  font-weight: 700;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CourseRecButtons = () => {
  return (
    <CourseRecButtonsStyle>
      <CourseRecButtonsCat>Category</CourseRecButtonsCat>
      <ButtonPrimary></ButtonPrimary>
    </CourseRecButtonsStyle>
  );
};

export default CourseRecButtons;
