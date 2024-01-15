import PropTypes from "prop-types";
import styled from "styled-components";
import DashboardAdmin from "../pages/DashboardAdmin";
import CursosAdmin from "../pages/CursosAdmin";
import EstudiantesAdmin from "../pages/EstudiantesAdmin";
import InscripcionesAdmin from "../pages/InscripcionesAdmin";
import DefaultAdmin from "../pages/DefaultAdmin";

const AdminContentStyle = styled.div`
  flex: 1;
  padding: 4rem 2rem;
  background-color: #e8eff6;
  overflow-y: auto;
`;
const AdminContent = ({ selectedItem }) => {
  const componentes = {
    Dashboard: <DashboardAdmin />,
    Cursos: <CursosAdmin />,
    Estudiantes: <EstudiantesAdmin />,
    Inscripciones: <InscripcionesAdmin />,
  };
  return (
    <AdminContentStyle>
      {componentes[selectedItem] || <DefaultAdmin />}
    </AdminContentStyle>
  );
};

AdminContent.propTypes = {
  selectedItem: PropTypes.string.isRequired,
};

export default AdminContent;
