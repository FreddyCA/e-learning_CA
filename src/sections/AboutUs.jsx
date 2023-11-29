import styled from "styled-components";
import SectionContent from "../components/SectionContent";
import AboutUsText from "../components/AboutUsText";
import ResizableImage from "../components/ResizableImage";
import aboutUsImg from "../assets/png/imgAboutUs.png";

const AboutUsStyle = styled.div`
  margin: 2rem 0 0;
  padding: 3rem 0;
  display: flex;
  align-items: center;
`;

const AboutUs = () => {
  return (
    <SectionContent>
      <AboutUsStyle>
        <AboutUsText></AboutUsText>
        <ResizableImage
          src={aboutUsImg}
          alt="imagen grupo de trabajo About Us"
          heigth="300px"
          width="450px"
        />
      </AboutUsStyle>
    </SectionContent>
  );
};

export default AboutUs;
