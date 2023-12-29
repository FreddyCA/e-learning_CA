import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../firebase/Auth";
import { IoReload } from "react-icons/io5";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ProtectedRouteIcon = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  animation: ${rotate} 2s linear infinite;
`;

const ProtectedRoute = ({ children }) => {
  const { authUser, isLoading } = useAuth();

  if (isLoading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1C1E53",
        }}
      >
        <ProtectedRouteIcon>
          <IoReload
            style={{
              height: "100px",
              width: "100px",
              color: "fff",
            }}
          />
        </ProtectedRouteIcon>
      </div>
    );

  if (!authUser) return <Navigate to="/login" />;

  return <>{children}</>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
