import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect } from "react";

const SidebarItemsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(135, 206, 238, 0.5);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(135, 206, 238, 0.25);
  }
`;

const SidebarItemsStyle = styled.div`
  color: #fff;
  font-size: 1rem;
  padding: 0.875rem 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  transition: all 0.1s ease-in-out;
  &:hover {
    background: linear-gradient(to right, #2d3171, transparent);
    border-left: 4px solid #87ceef;
  }
  &.selected {
    background: linear-gradient(to right, #444999, transparent);
    border-left: 4px solid #87ceee;
    font-weight: 700;
  }
`;

const SidebarTitle = styled.p`
  color: #fff;
  font-size: 1.2rem;
  padding: 0.875rem 2rem;
  margin-top: 1rem;
`;

const SidebarContactStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SidebarFooter = styled.span`
  font-size: 0.7rem;
  text-align: center;
  font-weight: 300;
  padding: 10px;
  color: #fff;
  opacity: 0.8;

  background-color: #1c1e53;
  color: #fff;
  font-size: 14px;
  opacity: 0.8;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-top: 2px solid #2d3171;
`;
const SidebarItems = ({ selectedItem, setSelectedItem }) => {
  const elementos = [
    "Dashboard",
    "Cursos",
    "Estudiantes",
    "Inscripciones",
    "Informes",
    "Configuración",
  ];

  const handleItemClick = (item) => {
    sessionStorage.setItem("itemMenu", item);
    setSelectedItem(item);
  };

  useEffect(() => {
    const itemMenu = sessionStorage.getItem("itemMenu");
    if (itemMenu) {
      return setSelectedItem(itemMenu);
    }
  }, [setSelectedItem]);

  return (
    <>
      <SidebarItemsContent>
        {elementos.map((item) => (
          <SidebarItemsStyle
            key={item}
            onClick={() => handleItemClick(item)}
            className={selectedItem === item ? "selected" : ""}
          >
            {item}
          </SidebarItemsStyle>
        ))}
      </SidebarItemsContent>
      <SidebarContactStyle>
        <SidebarTitle>Desarrollo</SidebarTitle>
        <SidebarItemsStyle
          onClick={() => handleItemClick("Contacto")}
          className={selectedItem === "Contacto" ? "selected" : ""}
        >
          Contacto
        </SidebarItemsStyle>
      </SidebarContactStyle>
      <SidebarFooter>Desarrollado en 2024</SidebarFooter>
    </>
  );
};

SidebarItems.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SidebarItems;
