import styled, { css } from "styled-components";
import SectionContent from "../components/SectionContent";
import FormContacto from "../components/FormContacto";
import bgForm from "../assets/png/bgForm.png";

const ContactoStyle = styled.div`
  margin: 2rem 0 0;
  padding: 3rem 0;
  display: flex;
  width: 100%;
`;

const ContactoBG = styled.div`
  background-image: url(${bgForm});
  background-repeat: no-repeat;
  background-size: cover;
  width: 450px;
`;
const ContactoTextContent = styled.div`
  background-color: rgba(28, 30, 83, 0.65);
  height: 100%;
  width: inherit;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
const ContactoText = styled.h4`
  color: var(--color--textPrimary);
  ${(props) =>
    props.$head &&
    css`
      font-size: 2.5rem;
      font-weight: 500;
      margin-bottom: 0.7rem;
    `}
  ${(props) =>
    props.$inf &&
    css`
      font-size: 1rem;
      font-weight: 300;
      margin: 2rem 4rem 0 0;
    `}
`;

const Contacto = () => {
  return (
    <SectionContent>
      <ContactoStyle id="Contacto">
        <ContactoBG>
          <ContactoTextContent>
            <ContactoText $head>Un paso más</ContactoText>
            <ContactoText $head>cerca de</ContactoText>
            <ContactoText $head>Tu sueño</ContactoText>
            <ContactoText $inf>
              Un servicio de aprendizaje electrónico gratuito que está listo
              para ayudarlo a convertirse en un experto
            </ContactoText>
          </ContactoTextContent>
        </ContactoBG>
        <FormContacto />
      </ContactoStyle>
    </SectionContent>
  );
};

export default Contacto;
