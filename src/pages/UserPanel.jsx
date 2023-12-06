import styled from "styled-components";
import NavBar from "../sections/NavBar";
import NavBarUser from "../sections/NavBarUser";

const UserPanelStyle = styled.div`
  background-color: red;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;

const UserPanel = () => {
  return (
    <UserPanelStyle>
      <NavBarUser></NavBarUser>
      <div>UserPanel</div>
    </UserPanelStyle>
  );
};

export default UserPanel;
