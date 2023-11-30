import styled, { css } from "styled-components";
import SectionContent from "../components/SectionContent";
import FormRegistration from "../components/FormRegistration";
import bgForm from "../assets/png/bgForm.png";

const RegistrationStyle = styled.div`
  margin: 2rem 0 0;
  padding: 3rem 0;
  display: flex;
  width: 100%;
`;

const RegistrationBG = styled.div`
  background-image: url(${bgForm});
  background-repeat: no-repeat;
  background-size: cover;
  width: 450px;
`;
const RegistrationTextContent = styled.div`
  background-color: rgba(28, 30, 83, 0.65);
  height: 100%;
  width: inherit;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
const RegistrationText = styled.h4`
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

const Registration = () => {
  return (
    <SectionContent>
      <RegistrationStyle>
        <RegistrationBG>
          <RegistrationTextContent>
            <RegistrationText $head>Un paso más</RegistrationText>
            <RegistrationText $head>cerca de</RegistrationText>
            <RegistrationText $head>Tu sueño</RegistrationText>
            <RegistrationText $inf>
              Un servicio de aprendizaje electrónico gratuito que está listo
              para ayudarlo a convertirse en un experto
            </RegistrationText>
          </RegistrationTextContent>
        </RegistrationBG>
        <FormRegistration />
      </RegistrationStyle>
    </SectionContent>
  );
};

export default Registration;
