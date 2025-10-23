import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar/Navbar";

import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div className=" bg-[#d2d2d23d] flex flex-col min-h-screen">
            <Navbar/>
            {navigation.state === "loading" ? (
                <LoadingAnimation />
            ) : (
                <div className="flex-1 max-w-screen mx-auto w-full">
                    <Outlet />
                </div>
            )}

            <Footer />

            
        </div>
    );
};

export default MainLayout;
