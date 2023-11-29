import styled from "styled-components";
import SectionContent from "../components/SectionContent";
import Subtitle from "../components/Subtitle";
import CourseRecButtons from "../components/CourseRecButtons";
import CourseRecItem from "../components/CourseRecItem";
import IMGcursoProgramWeb from "../assets/png/courseProgramWeb.png";
import IMGcursoMarketingDigital from "../assets/png/courseMarketing.png";
import IMGcursoDataScience from "../assets/png/courseDataScience.png";

const CourseRecommendationsStyle = styled.div`
  margin: 2rem 0 0;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const CourseRecommendationsTitle = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 5rem;
  justify-content: space-between;
  border-bottom: 1px solid #ececf1;
`;
const CourseRecommendationsItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;

const CourseRecommendations = () => {
  const data = [
    {
      id: "item1",
      img: IMGcursoProgramWeb,
      alt: "imagen relacionada con programacion web",
      title: "Fundamentos de programación WEB",
      description:
        "Material de aprendizaje sobre la creación de sitios web para principiantes.",
      hours: "4,5",
      videos: "20",
      students: "1.900",
    },
    {
      id: "item2",
      img: IMGcursoMarketingDigital,
      alt: "imagen relacionada con marketing digital",
      title: "Marketing Digital 101",
      description:
        "Material sobre estrategias y conceptos de marketing para principiantes.",
      hours: "6,2",
      videos: "32",
      students: "930",
    },
    {
      id: "item3",
      img: IMGcursoDataScience,
      alt: "imagen relacionada con ciencia de datos",
      title: "Ciencia de datos básica",
      description:
        "Material de aprendizaje sobre los conceptos básicos de la ciencia de datos.",
      hours: "8",
      videos: "46",
      students: "1.043",
    },
  ];
  return (
    <SectionContent>
      <CourseRecommendationsStyle>
        <CourseRecommendationsTitle>
          <Subtitle>Recomendaciones de cursos Para ti</Subtitle>
          <CourseRecButtons />
        </CourseRecommendationsTitle>
        <CourseRecommendationsItems>
          {data.map((item) => (
            <CourseRecItem
              key={item.id}
              img={item.img}
              alt={item.alt}
              title={item.title}
              description={item.description}
              hours={item.hours}
              videos={item.videos}
              students={item.students}
            />
          ))}
        </CourseRecommendationsItems>
      </CourseRecommendationsStyle>
    </SectionContent>
  );
};

export default CourseRecommendations;
