import { Link } from "react-router-dom";
import styled from "styled-components";

const CourseRecButtonsStyle = styled.div`
  display: flex;
  gap: 1rem;
`;
const CourseRecButtonsCat = styled.div`
  padding: 1rem;
  background-color: #f5f5aa;
  font-weight: 700;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5aa;
    box-shadow: 0px 4px 6px #bbb;
  }
`;
const CourseRecButtons = () => {
  return (
    <CourseRecButtonsStyle>
      <Link to={"/cursos"} style={{ textDecoration: "none" }}>
        <CourseRecButtonsCat>Todos los Cursos</CourseRecButtonsCat>
      </Link>
    </CourseRecButtonsStyle>
  );
};

export default CourseRecButtons;
