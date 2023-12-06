import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const NavBarUser = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log("serrar sesion desde panel de usuarios");
    await logout();
    navigate("/");
  };
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        height: "100px",
        display: "flex",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <div>User ascasasc</div>

      <div
        onClick={handleLogout}
        style={{
          padding: "1rem",
          backgroundColor: "blueviolet",
          cursor: "pointer",
        }}
      >
        Cerrar sesions
      </div>
    </div>
  );
};

export default NavBarUser;
