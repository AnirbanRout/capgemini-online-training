import { Navigate } from "react-router-dom";

const ProtectedClass = ({ children }) => {
  const isAUthenticated = localStorage.getItem("isAuthenticated");

  if (isAUthenticated === "true") {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedClass;
