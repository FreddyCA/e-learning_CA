import styled from "styled-components";
import SectionContent from "../components/SectionContent";
import Subtitle from "../components/Subtitle";
import BenefitItem from "../components/BenefitItem";

const BenefitsStyle = styled.div`
  margin: 2rem 0 0;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const BenefitsItemsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Benefits = () => {
  const data = [
    {
      id: "elemento1",
      position: "1",
      title: "Cursos Gratis",
      description:
        "Brindamos varios cursos gratuitos para apoyar la disponibilidad de educación para comunidades desfavorecidas.",
    },
    {
      id: "elemento2",
      position: "2",
      title: "Acceso para siempre",
      description:
        "Podrás acceder siempre a todos los cursos que tengas registrados para que tu aprendizaje sea más cómodo y sin prisas",
    },
    {
      id: "elemento3",
      position: "3",
      title: "Grupo de consultoría",
      description:
        "Hay un grupo de consulta que es útil si desea hacer una pregunta y también puede abrir una nueva discusión.",
    },
    {
      id: "elemento4",
      position: "4",

      title: "Certificados y Portafolios",
      description:
        "Después de completar el curso, recibirá un certificado y un portafolio de los proyectos del curso completados.",
    },
    {
      id: "elemento5",
      position: "5",

      title: "Aprendizaje más orientado",
      description:
        "El curso brinda cursos desde nivel básico hasta experto para que todos puedan aprender con los servicios que brindamos.",
    },
    {
      id: "elemento6",
      position: "6",
      title: "Instructor con experiencia",
      description:
        "Contamos con profesores experimentados del mundo industrial cuya experiencia va más allá de lo común.",
    },
  ];
  return (
    <SectionContent>
      <BenefitsStyle>
        <Subtitle>Beneficios de unirse a EDUFREE E-Learning</Subtitle>
        <BenefitsItemsStyle>
          {data.map((item) => (
            <BenefitItem
              key={item.id}
              position={item.position}
              title={item.title}
              description={item.description}
            ></BenefitItem>
          ))}
        </BenefitsItemsStyle>
      </BenefitsStyle>
    </SectionContent>
  );
};

export default Benefits;
