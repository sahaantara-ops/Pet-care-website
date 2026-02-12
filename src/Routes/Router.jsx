import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Home/Home";
import Services from "../Pages/Services";

import LogIn from "../Pages/SignIn";

import SignUp from "../Pages/SignUp";
import AuthLayout from "../Layouts/AuthLayout";

import ServiceDetails from "../Pages/serviceDetails";
import ProfileLayout from "../Layouts/profileLayout";
import MyProfile from "../Pages/Myprofile";
import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";
import SignIn from "../Pages/SignIn";
import ServiceLayout from "../Layouts/ServiceLayout";




const router = createBrowserRouter(
    [
    {
        path:"/",
        Component:HomeLayout,
        children :  [
            {
                index:true,
                path:"/",
                loader: () => fetch('/public.json'),
                element:<Home></Home>,
            },
         {
                path:"/services",
                element:<Services></Services>,
               loader: async () => {
               const res = await fetch("/public.json");
                return res.json();
            }

            },
            
        
],
    },
    {
        path:"service",
        element: <PrivateRoutes><ServiceLayout /></PrivateRoutes>,
        children:[
            {

            path: "/service/:id",
            element: (
            <ServiceDetails />
          
            ),
            }
            ], 
    },

    {
    path: "/profile",
    element:<ProfileLayout></ProfileLayout>,
    children: [
      { index: true, element: <MyProfile /> },
    ],
     },

    {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children :[
            {
                path :"signin",
                element:<SignIn></SignIn>,
            },
            {
                path : "signup",
                element:<SignUp></SignUp>,
            }
        ],
    },
   
    {
        path:"*",
        element:<h3>404 Not Found</h3>
    },
    ]);

    export default router;


