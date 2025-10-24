import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home ";
import Services from "../Pages/Services";
import ServiceDetails from "../Pages/serviceDetails";


const router = createBrowserRouter(
    [
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children :  [
            {
             path:"",
             element:<Home></Home>,
            },
            {
                path:"/Services/",
                element:<Services></Services>
            },
            {
            path:"/services/:Id",
            element:<ServiceDetails></ServiceDetails>
            },
        ],
    },

    {
        path:"/auth",
        element:<h3>Auth Layout</h3>
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


