import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      setError("Bienvenido");
      setTimeout(() => {
        navigate("/panelUser");
      }, 5000);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      // error.code es unico e inidica el tipo de error
      // error.message muestra el mensaje de error de ahi podemos sacar su code
      // errores para correos invalidos, contraseas cortas y correos duplicados
      // if (error.code === "auth/weak-password") {
      //   setError("Su contraseña es muy corta");
      // }
    }
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <div>Login de usuarios</div>
      <div
        onClick={handleHome}
        style={{
          backgroundColor: "skyblue",
          padding: "2rem",
          cursor: "pointer",
          width:"min-content"
        }}
      >
        Volver
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Su nombre"
          onChange={handleChange}
          value={user.email}
        ></input>

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Su contraseña"
          onChange={handleChange}
          value={user.password}
        ></input>

        <button>Iniciar sesión</button>
      </form>

      {error && <span>{error}</span>}
    </>
  );
};

export default Login;
