import React from "react";
import error4 from "../assets/error-404.png";
import { Link } from "react-router";

const Error404 = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="space-y-5 mt-10">
                <div className="flex justify-center items-center">
                    <img src={error4} alt="AppError" className="w-70" />
                </div>
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold">Oops, page not found </h1>
                    <p className="text-xl text-gray-400">The page you are looking for is not available</p>
                    <div className="flex justify-center items-center mb-5">
                        <Link to="/" className="btn btn-primary text-white">
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error404;
