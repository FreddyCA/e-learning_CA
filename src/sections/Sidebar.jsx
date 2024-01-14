import styled from "styled-components";
import NavBarLogo from "../components/NavBarLogo";
import SidebarItems from "../components/SidebarItems";
import PropTypes from "prop-types";

const SidebarStyle = styled.div`
  width: 250px;
  background-color: #1c1e53;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const SidebarLogoContent = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar = ({ selectedItem, setSelectedItem }) => {
  return (
    <SidebarStyle>
      <SidebarLogoContent>
        <NavBarLogo />
      </SidebarLogoContent>
      <SidebarItems
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </SidebarStyle>
  );
};

Sidebar.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default Sidebar;
