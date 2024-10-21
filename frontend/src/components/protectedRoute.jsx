import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  
  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }

  // If user is authenticated, allow access to the protected route
  return <Outlet />;
};

export default ProtectedRoute;
