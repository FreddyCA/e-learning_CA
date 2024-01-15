import styled from "styled-components";
import TextInfo from "../components/TextInfo";
import TitleSec from "../components/TitleSec";

const InscripcionesAdminStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const InscripcionesAdmin = () => {

  

  return (
    <InscripcionesAdminStyle>
      <TitleSec>Estudiantes Inscritos</TitleSec>
      <TextInfo text="Verifique el pago Qr (imagen o pdf) con su cuenta" />
    </InscripcionesAdminStyle>
  );
};

export default InscripcionesAdmin;
