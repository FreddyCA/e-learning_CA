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
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />

          {/* <Route path="/panel-de-usuario" element={<UserPanel />} /> */}

          {/* <Route path="/resetPassword" element={<ResetPassw />} /> */}
          <Route
            path="/panel-de-usuario"
            element={
              <ProtectedRoute>
                <UserPanel />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthUserProvider>
    </>
  );
};

export default App;
