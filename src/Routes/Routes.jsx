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
import Feedback from "../Pages/Feedback";
import TermsAndConditions from "../Pages/TermsAndConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import PrivateRoute from "../Provider/PrivateRoute";

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
                element: (
                    <PrivateRoute>
                        <AllToys />
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-profile",
                element: (
                    <PrivateRoute>
                        <MyProfile />
                    </PrivateRoute>
                ),
            },
            {
                path: "/toyDetails/:id",
                element: (
                    <PrivateRoute>
                        <ToyDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/resetpass",
                element: <ResetPass />,
            },
            {
                path: "/feedback",
                element: (
                    <PrivateRoute>
                        <Feedback />
                    </PrivateRoute>
                ),
            },
            {
                path: "/terms",
                element: <TermsAndConditions />,
            },
            {
                path: "/privacy",
                element: <PrivacyPolicy />,
            },
        ],
    },
    {
        path: "*",
        element: <Error404 />,
    },
]);


export default router;