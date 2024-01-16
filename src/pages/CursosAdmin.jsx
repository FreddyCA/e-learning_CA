import styled from "styled-components";
import TitleSec from "../components/TitleSec";
import TextInfo from "../components/TextInfo";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase/firebase";
import ButtonPrimary from "../components/ButtonPrimary";
import CourseRecAdmin from "../components/CourseRecAdmin";

const CursosAdminStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const CursosContenStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem 1rem;
  margin: 2rem 0;
`;

const CursosAdminTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const CursosAdminTitleContentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const ButtonModify = styled.button`
  border: none;
  padding: 0.75rem 2rem;
  background-color: #1c1e53;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #1c1e53;
    box-shadow: -2px 2px 5px #1c1e53;
  }
`;

// construir otra interfaz de targetas, y agregar funcionalidad de button

const CursosAdmin = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClickModify = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cursosSnapshot = await getDocs(collection(firebaseDB, "cursos"));
        const cursosData = cursosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(cursosData);
        setLoading(false);
      } catch (error) {
        console.log("error al recuperar datos firestore", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <CursosAdminStyle>
      <CursosAdminTitleContentStyle>
        <CursosAdminTitleStyle>
          <TitleSec>Cursos</TitleSec>
          <TextInfo text="Verifique el estado de los cursos" />
        </CursosAdminTitleStyle>
        <ButtonPrimary text={"Agregar Nuevo"} />
      </CursosAdminTitleContentStyle>
      <CursosContenStyle>
        {loading ? (
          <h3>Cargando...</h3>
        ) : (
          data.map((item) => (
            <div key={item.id}>
              <CourseRecAdmin
                key={item.id}
                // img={imagenPrueba}
                alt="imagen de prueba s"
                title={item.nombre_curso}
                description={item.descripcion}
                hours={item.hours}
                students={item.students}
                videos={item.videos}
              />
              <ButtonModify onClick={handleClickModify}>Modificar</ButtonModify>
            </div>
          ))
        )}
      </CursosContenStyle>
    </CursosAdminStyle>
  );
};

export default CursosAdmin;
