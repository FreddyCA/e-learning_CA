import { useEffect, useState } from "react";
import { useAuth } from "../firebase/Auth";
import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../firebase/firebase";
import styled from "styled-components";
import NavBarUser from "../sections/NavBarUser";

const UserPanelStyle = styled.div`
  background-color: rgb(28, 30, 53);
  display: flex;
  flex-direction: column;
`;

const UserPanel = () => {
  const { authUser } = useAuth();
  const [personalData, setPersonalData] = useState([]);
  const [personalRol, setPersonalRol] = useState(false);

  const [detailCurso, setDetailCurso] = useState("");

  // const userUID = authUser.uid;
  // console.log(authUser)
  // console.log(userUID);
  // console.log(personalData);
  console.log(detailCurso);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (authUser) {
          const userSnapshot = await getDoc(doc(firebaseDB, "usuarios", authUser.uid));
          const userData = userSnapshot.data();
          setPersonalData(userData);

          if (userData && userData.rol === "admin") {
            console.log("Es super admin");
            setPersonalRol(true);
            try {
              const cursoDetail = await getDoc(doc(firebaseDB, "cursos", "intoHtml"));
              const cursoData = cursoDetail.data();
              setDetailCurso(cursoData);

              // Obtén datos del profesor utilizando la referencia
              if (cursoData && cursoData.profesor instanceof DocumentReference) {
                const profesorSnapshot = await getDoc(cursoData.profesor);
                const profesorData = profesorSnapshot.data();
                console.log("Datos del profesor:", profesorData);
              }
            } catch (error) {
              console.log("Error al obtener detalles del curso:", error);
            }
          } else {
            console.log("Es usuario");
            try {
              const cursoDetail = await getDoc(doc(firebaseDB, "cursos", "intoHtml"));
              const cursoData = cursoDetail.data();
              setDetailCurso(cursoData);

              // Obtén datos del profesor utilizando la referencia
              if (cursoData && cursoData.profesor instanceof DocumentReference) {
                const profesorSnapshot = await getDoc(cursoData.profesor);
                const profesorData = profesorSnapshot.data();
                console.log("Datos del profesor:", profesorData);
              }
            } catch (error) {
              console.log("Error al obtener detalles del curso:", error);
            }
          }
        }
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    };

    fetchData();
  }, [authUser]);

  return (
    <UserPanelStyle>
      <NavBarUser></NavBarUser>
      {personalRol ? <h1>Super andim</h1> : <h1>Usuario</h1>}
    </UserPanelStyle>
  );
};

export default UserPanel;
