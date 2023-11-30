import styled, { css } from "styled-components";
import avatarWomenUnk from "../assets/png/avatarWomenUNKBig.png";

const TestimonieItemStyle = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const TestimonieItemText = styled.p`
  color: var(--color--textSecondary);
  font-weight: 500;
  ${(props) =>
    props.$fontSize &&
    css`
      font-size: ${props.$fontSize};
    `}
`;
const TestimonieItemAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 500%;
`;
const TestimonieItemPerson = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const TestimonieItem = () => {
  return (
    <TestimonieItemStyle>
      <TestimonieItemText $fontSize={"24px"}>
        {`"El material presentado es fácil de entender, la calidad de los
        instructores es muy buena y las respuestas son rápidas. ¡¡Así que
        recomiendo ampliamente los cursos aquí!!"`}
      </TestimonieItemText>
      <TestimonieItemPerson>
        <TestimonieItemAvatar
          src={avatarWomenUnk}
          alt="imagen de perfil de Testimonio"
        />
        <div>
          <TestimonieItemText $fontSize={"18px"}>
            Jenny Wilson
          </TestimonieItemText>
          <TestimonieItemText $fontSize={"12px"}>
            Vice President
          </TestimonieItemText>
        </div>
      </TestimonieItemPerson>
    </TestimonieItemStyle>
  );
};

export default TestimonieItem;
