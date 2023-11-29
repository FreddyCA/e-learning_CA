import styled from "styled-components";
import TextInfo from "./TextInfo";
import Subtitle from "./Subtitle";

const AboutUsTextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  gap: 1.5rem;
`;

const AboutUsText = () => {
  return (
    <AboutUsTextContent>
      <TextInfo text="Sobre nosotros" />
      <Subtitle>
        Servicios gratuitos de aprendizaje electrónico EDUFREE para ayudarle a
        crecer
      </Subtitle>
      <TextInfo text="Se espera que Edufair pueda convertirse en un servicio útil en el futuro en el ámbito educativo."></TextInfo>
    </AboutUsTextContent>
  );
};

export default AboutUsText;
