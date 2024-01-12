import styled from "styled-components";
import SectionContent from "../components/SectionContent";
import Footer from "../sections/Footer";
import NavBar from "../sections/NavBar";
import CourseRecItem from "../components/CourseRecItem";
import { useEffect, useState } from "react";
import { useAuth } from "../firebase/Auth";
import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase/firebase";

import imagenPrueba from "../assets/png/courseProgramWeb.png";

const CursosStyle = styled.div`
  /* min-height: 100vh; */
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CursosContenStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 4rem 1rem;
`;
const Cursos = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(data);
  const { authUser } = useAuth();
  console.log(authUser);

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
    <>
      <NavBar />
      <SectionContent>
        <CursosStyle>
          <h1>Cursos </h1>

          <CursosContenStyle>
            {loading ? (
              <h3>Cargando...</h3>
            ) : (
              data.map((item) => (
                <CourseRecItem
                  key={item.id}
                  img={imagenPrueba}
                  alt="imagen de prueba"
                  title={item.nombre_curso}
                  description={item.descripcion}
                  hours={item.hours}
                  students={item.students}
                  videos={item.videos}
                />
              ))
            )}
          </CursosContenStyle>
        </CursosStyle>
      </SectionContent>
      <Footer />
    </>
  );
};

export default Cursos;
