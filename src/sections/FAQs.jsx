import styled from "styled-components";
import SectionContent from "../components/SectionContent";

const FAQsStyle = styled.div`
  min-height: 300px;
  padding: 2rem 0;
  background-color: #266155;
`;

const FAQs = () => {
  return (
    <SectionContent>
      <FAQsStyle>FAQ</FAQsStyle>
    </SectionContent>
  );
};

export default FAQs;
