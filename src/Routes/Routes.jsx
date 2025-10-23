import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllToys from "../Pages/AllToys";
import MyProfile from "../Pages/MyProfile";
import ToyDetails from "../Pages/ToyDetails";

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
            }
        ],
    },
]);


export default router;