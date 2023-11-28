import styled from "styled-components";

const BlogTitleStyle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color--textPrimary);
`;

const BlogInfoStyle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: var(--color--textPrimary);
  margin: 2rem 0 3rem;
`;

const BlogText = () => {
  return (
    <>
      <BlogTitleStyle>Construye y crea sueños con EDUFREE</BlogTitleStyle>
      <BlogInfoStyle>
        EDUFREE es un servicio de capacitación y curso en línea gratuito que
        tiene como objetivo ayudarlo a alcanzar sus sueños en el campo de la
        tecnología.
      </BlogInfoStyle>
    </>
  );
};

export default BlogText;
