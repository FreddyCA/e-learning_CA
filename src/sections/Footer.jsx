import styled, { css } from "styled-components";
import TitleSec from "../components/TitleSec";
import TextInfo from "../components/TextInfo";
import iconGithub from "../assets/svg/github.svg";
import iconLinkedin from "../assets/svg/linkedin.svg";
import iconFigma from "../assets/svg/figma.svg";

const FooterStyle = styled.div`
  padding: 3rem;
  background-color: #1c1e53;
  display: flex;
  justify-content: space-between;
`;

const FooterLefthStyle = styled.div`
  max-width: 420px;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const FooterRigthStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const FooterTextStyle = styled.p`
  color: var(--color--textPrimary);
  ${(props) =>
    props.$principal &&
    css`
      font-size: 24px;
      font-weight: 700;
    `}
  ${(props) =>
    props.$description &&
    css`
      font-size: 1rem;
      font-weight: 300;
    `}
  ${(props) =>
    props.$subtitle &&
    css`
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 0.5rem;
    `}
  ${(props) =>
    props.$item &&
    css`
      font-size: 18px;
      font-weight: 400;
    `}
`;

const FooterItemsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${(props) =>
    props.$lefth &&
    css`
      margin-right: 2rem;
    `}
`;

const FooterContactContent = styled.div`
  background-color: var(--color--btnPrimary);
  padding: 1rem 2rem;
  width: 100%;
  margin: -3rem;
`;

const FooterDev = styled.div`
  background-color: #1c1e53;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  border-top: 5px solid #004080;
`;

const FooterDevItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterDevContentLink = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;
  width: min-content;
`;

const FooterDevLink = styled.a``;
const FooterDevLinkImg = styled.img`
  width: 40px;
  height: 40px;
`;

const Footer = () => {
  const data = [
    {
      id: "colum1",
      subtitle: "Sosial Media",
      items: ["Instagram", "Twitter", "LinkedIn"],
    },
    {
      id: "colum2",
      subtitle: "Program",
      items: ["Libertad de aprender", "Emprendedor financiero"],
    },
    {
      id: "colum3",
      subtitle: "APOYO",
      items: ["Acerca de nosotros", "Disposición", "Politica de Privacidad"],
    },
  ];
  return (
    <>
      <FooterStyle>
        <FooterLefthStyle>
          <FooterItemsContent $lefth>
            <FooterTextStyle $principal>[EDUFREE]</FooterTextStyle>
            <FooterTextStyle $description>
              Crea y construye sueños con edufree
            </FooterTextStyle>
          </FooterItemsContent>
          <FooterContactContent>
            <TitleSec>Email</TitleSec>
            <TextInfo text="contact@website.com"></TextInfo>
          </FooterContactContent>
        </FooterLefthStyle>

        <FooterRigthStyle>
          {data.map((item) => (
            <FooterItemsContent key={item.id}>
              <FooterTextStyle $subtitle>{item.subtitle}</FooterTextStyle>
              {item.items.map((item, index) => (
                <FooterTextStyle $item key={index}>
                  {item}
                </FooterTextStyle>
              ))}
            </FooterItemsContent>
          ))}
        </FooterRigthStyle>
      </FooterStyle>
      <FooterDev>
        <FooterDevItem>
          <FooterTextStyle $subtitle>
            UI Design by Dimas Rizky | Figma
          </FooterTextStyle>
          <FooterDevContentLink>
            <FooterDevLink
              href="https://www.figma.com/@dimasrizkym"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterDevLinkImg src={iconFigma} alt="icon figma" />
            </FooterDevLink>
          </FooterDevContentLink>
        </FooterDevItem>
        <FooterDevItem>
          <FooterTextStyle $subtitle>
            Development by Carlos Ari | 2023
          </FooterTextStyle>
          <FooterDevContentLink>
            <FooterDevLink
              href="https://github.com/FreddyCA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterDevLinkImg src={iconGithub} alt="icon github" />
            </FooterDevLink>
            <FooterDevLink
              href="https://www.linkedin.com/in/carlosari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterDevLinkImg src={iconLinkedin} alt="icon linkedin" />
            </FooterDevLink>
          </FooterDevContentLink>
        </FooterDevItem>
      </FooterDev>
    </>
  );
};

export default Footer;
