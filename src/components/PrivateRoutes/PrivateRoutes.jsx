
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from '../../Context/AuthContext';
import { use } from "react";


const PrivateRoutes = ({ children }) => {
   const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location)

  if (loading) return <p>Loading...</p>;

  if (!user) {
    // redirect to login page and save current path
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoutes;