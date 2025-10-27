import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Home/Home";
import Services from "../Pages/Services";

import LogIn from "../Pages/LogIn";

import SignUp from "../Pages/SignUp";
import AuthLayout from "../Layouts/AuthLayout";

import ServiceDetails from "../Pages/serviceDetails";
import ProfileLayout from "../Layouts/profileLayout";
import MyProfile from "../Pages/Myprofile";




const router = createBrowserRouter(
    [
    {
        path:"/",
        Component:HomeLayout,
        children :  [
            {
                index:true,
                path:"/",
                loader: () => fetch('public.json'),
                element:<Home></Home>,
            },
            {
                path:"/services",
                element:<Services></Services>,
            },
            {
                 path: "/services/:id",
                 
                 element:
                    <ServiceDetails></ServiceDetails>,
                   

            },   
            
           
        ],
    },

    {
    path: "/profile",
    Component: ProfileLayout,
    children: [
      { index: true, element: <MyProfile /> },
    ],
     },

    {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children :[
            {
                path :"/auth/login",
                Component:LogIn,
            },
            {
                path : "/auth/signUp",
                Component:SignUp,
            }
        ],
    },
    {
        path:"/services",
        element:<h3>Services Layout</h3>
    },
    {
        path:"*",
        element:<h3>404 Not Found</h3>
    },
    ]);

    export default router;


