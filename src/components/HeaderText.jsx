import styled from "styled-components";

const HeaderTitleStyle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color--textPrimary);
`;

const HeaderInfoStyle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4rem;
  color: var(--color--textPrimary);
  margin: 2rem 0 3rem;
`;

const HeaderText = () => {
  return (
    <>
      <HeaderTitleStyle>Construye y crea sueños con EDUFREE</HeaderTitleStyle>
      <HeaderInfoStyle>
        EDUFREE es un servicio de capacitación y curso en línea gratuito que
        tiene como objetivo ayudarlo a alcanzar sus sueños en el campo de la
        tecnología.
      </HeaderInfoStyle>
    </>
  );
};

export default HeaderText;
