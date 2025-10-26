import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Router";


function App() {
  return (
    <>
     <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
     
    </>
  );
}

export default App;

