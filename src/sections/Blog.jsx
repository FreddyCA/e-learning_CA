import styled from "styled-components";
import BlogImgBg from "../components/BlogImgBg";
import BlogText from "../components/BlogText";
import ButtonPrimary from "../components/ButtonPrimary";

const BlogStyleContentStyle = styled.div`
  background-color: var(--color--bgPrincipal);
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BlogStyle = styled.div`
  width: 992px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BlogContentInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
`;
const Blog = () => {
  return (
    <BlogStyleContentStyle>
      <BlogStyle>
        <BlogContentInfoStyle>
          <BlogText />
          <ButtonPrimary />
        </BlogContentInfoStyle>
        <BlogImgBg />
      </BlogStyle>
    </BlogStyleContentStyle>
  );
};

export default Blog;
