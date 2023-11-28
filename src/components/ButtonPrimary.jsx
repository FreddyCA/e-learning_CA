import styled from "styled-components";

const ButtonPrimaryStyle = styled.button`
  padding: 1rem;
  width: 190px;
  border: none;
  background-color: var(--color--btnPrimary);
  cursor: pointer;
  border-radius: 5px;
  color: var(--color--textSecondary);
  font-weight: 1.2rem;
  font-weight: 700;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--color--textSecondary);
    color: var(--color--btnPrimary);
    border: 1px solid var(--color--btnPrimary);
  }
`;
const ButtonPrimary = () => {
  return <ButtonPrimaryStyle>Ver Cursos</ButtonPrimaryStyle>;
};

export default ButtonPrimary;
