import React, { Children } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config"; 

const ProtectedRoutes = ({children}) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) return <p>Loading...</p>;
     if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoutes;