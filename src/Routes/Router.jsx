import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home ";
import Services from "../Pages/Services";


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
                path:"/Services/:Id",
                element:<Services></Services>
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


