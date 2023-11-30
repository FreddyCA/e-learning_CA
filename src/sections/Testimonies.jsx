import styled from "styled-components";
import SectionContent from "../components/SectionContent";
import TestimonieItem from "../components/TestimonieItem";
import ContentMedium from "../components/ContentMedium";

const TestimoniesStyle = styled.div`
  margin: 2rem 0 0;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;


const Testimonies = () => {
  return (
    <div style={{ backgroundColor: "#EEF4FA" }}>
      <SectionContent>
        <TestimoniesStyle>
          <ContentMedium
            title1="Lo que dicen sobre"
            title2="Cursos EDUFREE"
            description="Más de 10.000 estudiantes han confiado en EDUFREE"
          ></ContentMedium>
          <TestimonieItem />
        </TestimoniesStyle>
      </SectionContent>
    </div>
  );
};

export default Testimonies;
