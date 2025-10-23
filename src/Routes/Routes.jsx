import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllToys from "../Pages/AllToys";
import MyProfile from "../Pages/MyProfile";
import ToyDetails from "../Pages/ToyDetails";
import Error404 from "../Pages/Error404";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ResetPass from "../Pages/ResetPass";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/allToys",
                element: <AllToys />,
            },
            {
                path: "/my-profile",
                element: <MyProfile/>,
            },
            {
                path: "/toyDetails/:id",
                element: <ToyDetails/>
            },
            {
                path: "/login",
                element:<LogIn/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/resetpass",
                element: <ResetPass/>
            }
        ],
    },
    {
        path: "*",
        element: <Error404/>
    }
]);


export default router;