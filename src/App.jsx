import GlobalStyle from "./style/reset";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Curso from "./pages/Curso";
import UserPanel from "./pages/UserPanel";
import { AuthProvider } from "./context/authContext";
// import AuthProvider from "./context/authContext";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curso:" element={<Curso />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/panelUser" element={<UserPanel />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
