import GlobalStyle from "./style/reset";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import Curso from "./pages/Curso";
import PageNotFound from "./pages/PageNotFound";
import { AuthUserProvider } from "./firebase/Auth";
import Register from "./pages/Register";
import UserPanel from "./pages/UserPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteLogin from "./components/ProtectedRouteLogin";
import Cursos from "./pages/Cursos";
import AdminPanel from "./pages/AdminPanel";
// import UserPanel from "./pages/UserPanel";
// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthUserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curso:" element={<Curso />} />
          <Route
            path="/login"
            element={
              <ProtectedRouteLogin>
                <Login />
              </ProtectedRouteLogin>
            }
          />
          <Route
            path="/registro"
            element={
              <ProtectedRouteLogin>
                <Register />
              </ProtectedRouteLogin>
            }
          />

          <Route path="/cursos" element={<Cursos />} />

          <Route path="*" element={<PageNotFound />} />

          {/* <Route path="/panel-de-usuario" element={<UserPanel />} /> */}

          <Route
            path="/panel-de-usuario"
            element={
              <ProtectedRoute>
                <UserPanel />
              </ProtectedRoute>
            }
          />

          <Route
            path="/panel-admin"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthUserProvider>
    </>
  );
};

export default App;
