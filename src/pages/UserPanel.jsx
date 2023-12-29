// import styled from "styled-components";
// import NavBarUser from "../sections/NavBarUser";

// import { useAuth } from "../context/authContext.jsx";
// import { db } from "../firebase/firebase.js";

// import { doc, getDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";

// const UserPanelStyle = styled.div`
//   background-color: red;
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   align-items: center;
// `;

// const UserPanel = () => {
//   const { user } = useAuth();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         // consulta a firestore para obtener datos
//         const usersCollection = doc(db, "usuarios", user.uid);
//         const userSnap = await getDoc(usersCollection);

//         if (userSnap.exists()) {
//           const userData = userSnap.data();
//           setUsers([userData]);
//         } else {
//           console.log("no existe un documento para este usuario");
//         }
//       } catch (error) {
//         console.log("error al obtener los datos", error);
//       }
//     };

//     if (user) {
//       fetchUsers();
//     }
//   }, [user]);

//   console.log(users);
//   return (
//     <UserPanelStyle>
//       <NavBarUser></NavBarUser>
//       <div>UserPanel</div>
//     </UserPanelStyle>
//   );
// };

// export default UserPanel;

const UserPanel = () => {
  return <div>UserPanel</div>;
};

export default UserPanel;
