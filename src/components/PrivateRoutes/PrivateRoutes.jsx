// import React from 'react';
// import { Navigate, useLocation } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase/firebase.config";


// const PrivateRoutes = ({ children }) => {
//   const [user, loading] = useAuthState(auth);
//   const location = useLocation();

//   if (loading) return <p>Loading...</p>;

//   if (!user) {
//     // redirect to login page and save current path
//     return <Navigate to="/auth/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default PrivateRoutes;