import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Home/Home";
import Services from "../Pages/Services";

import LogIn from "../Pages/LogIn";

import SignUp from "../Pages/SignUp";
import AuthLayout from "../Layouts/AuthLayout";

import ServiceDetails from "../Pages/serviceDetails";


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
                Component:Home,
            },
            {
                path:"/Services",
                Component:Services,
            },
            {
                 path: "/services/:id", // 👈 dynamic route for details page
                element: (
                <ServiceDetails></ServiceDetails>
        ),
        }
           
           
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


