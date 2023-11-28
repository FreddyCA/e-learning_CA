import styled from "styled-components";
import imgBlog from "../assets/svg/blogImg.svg";

const BlogImgBgStyle = styled.img`
  width: 400px;
  height: 250px;
`;

const BlogImgBg = () => {
  return <BlogImgBgStyle src={imgBlog} alt="imagen fondo blog" />;
};

export default BlogImgBg;
