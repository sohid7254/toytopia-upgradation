import React from "react";
import bgImage from "../../assets/bg-1.png"
import { FaBusAlt } from "react-icons/fa";
import { LuBaby } from "react-icons/lu";
import { GiSchoolBag } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";

const Banner = () => {
    return (
        <div
            className="relative w-full   bg-center bg-cover bg-no-repeat  text-white mb-10 "
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="relative w-11/12 mx-auto text-center py-5 px-4">
                <p className="text-xl md:text-2xl font-semibold mb-3">
                    Unlimited Opportunities <br />
                    With Toy Galore!
                </p>
                <p className="text-sm font-semibold mb-3">
                    From <span className="text-black font-bold">save 20% </span> off in this season
                </p>
                <button className="bg-blue-600 hover:bg-blue-400 text-white px-6 py-2 rounded-full text-lg transition">Explore</button>
            </div>
            
            <div className="absolute inset-0  " />

            <div className="relative w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-4 py-10">
                <div className="bg-white text-black rounded-lg shadow-md flex flex-col items-center justify-center py-6">
                    <div className="text-green-500 text-3xl mb-2">
                        <LuBaby />
                    </div>
                    <p className="text-sm font-semibold">0 to 3 years</p>
                </div>
                <div className="bg-white text-black rounded-lg shadow-md flex flex-col items-center justify-center py-6">
                    <div className="text-purple-500 text-3xl mb-2">
                        <FaBusAlt />
                    </div>
                    <p className="text-sm font-semibold">4 to 7 years</p>
                </div>
                <div className="bg-white text-black rounded-lg shadow-md flex flex-col items-center justify-center py-6">
                    <div className="text-orange-500 text-3xl mb-2">
                        <GiSchoolBag />
                    </div>
                    <p className="text-sm font-semibold">8 to 12 years</p>
                </div>
                <div className="bg-white text-black rounded-lg shadow-md flex flex-col items-center justify-center py-6">
                    <div className="text-red-500 text-3xl mb-2">
                        <IoRocketSharp />
                    </div>
                    <p className="text-sm font-semibold">Collective</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
