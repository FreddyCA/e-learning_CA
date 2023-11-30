import styled from "styled-components";
import SectionContent from "../components/SectionContent";
import ContentMedium from "../components/ContentMedium";
import FAQItem from "../components/FAQItem";

const FAQsStyle = styled.div`
  margin: 2rem 0 0;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
`;

const FAQsItemsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const FAQs = () => {
  const data = [
    {
      id: "faq1",
      title: "Este curso es realmente gratuito",
      response:
        "Se puede acceder a los cursos proporcionados de forma gratuita para satisfacer las necesidades educativas.",
    },
    {
      id: "faq2",
      title: "Para quién es este curso",
      response:
        "Está dirigido a personas que buscan entrar en el mundo TI. Ya sea que seas un principiante en programación, diseño o un profesional en busca de Skills para el desarrollo de software, nuestros cursos están estructurados para adaptarse a diversas necesidades y niveles de experiencia.",
    },
    {
      id: "faq3",
      title: "Este curso está certificado",
      response:
        "¡Sí! Al completar con éxito el curso, recibirás un certificado de EDUFREE. Este certificado reconoce tu dedicación y logros en el curso que tomes. Es una prueba tangible de las habilidades y conocimientos que has adquirido durante el programa.",
    },
    {
      id: "faq4",
      title: "Cuándo termina este curso",
      response:
        "La duración de cada curso es de acuerdo a la complejidad que tenga. Sin embargo, el aprendizaje es flexible y autodirigido, lo que te permite avanzar a tu propio ritmo. Puedes acceder al contenido del curso incluso después de completarlo, lo que te brinda la oportunidad de repasar y revisar los materiales en el futuro.",
    },
    {
      id: "faq5",
      title: "Existe una oportunidad laboral después de graduarse",
      response:
        "Sí, muchos de nuestros graduados han experimentado oportunidades laborales positivas después de completar el curso. Proporcionamos recursos y apoyo para la transición al ámbito laboral, que incluyen, por ejemplo, sesiones de asesoramiento profesional, acceso a redes de la industria, etc.",
    },
  ];

  return (
    <SectionContent>
      <FAQsStyle>
        <ContentMedium
          title1="Preguntas"
          title2="Frecuentes"
          description="¿Aún estás confundido o inseguro? Contáctenos"
        />
        <FAQsItemsContent>
          {data.map((item, index) => (
            <FAQItem
              key={item.id}
              title={item.title}
              response={item.response}
              number={index}
            />
          ))}
        </FAQsItemsContent>
      </FAQsStyle>
    </SectionContent>
  );
};

export default FAQs;
