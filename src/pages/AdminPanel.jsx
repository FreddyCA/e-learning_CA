import styled from "styled-components";
import Sidebar from "../sections/Sidebar";
import { useState } from "react";
import AdminContent from "../sections/AdminContent";

const AdminPanelStyle = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1c1e53;
`;

const AdminPanel = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  return (
    <AdminPanelStyle>
      <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <AdminContent selectedItem={selectedItem} />
    </AdminPanelStyle>
  );
};

export default AdminPanel;
