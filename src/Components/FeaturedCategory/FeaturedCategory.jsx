import React from "react";
import bgImage2 from "../../assets/bg-2.png";
import image1 from "../../assets/Rectangle-2-1.png";
import image2 from "../../assets/Rectangle-2-2.png";
import image3 from "../../assets/Rectangle-2-3.png";
import image4 from "../../assets/Rectangle-2-4.png";
import image5 from "../../assets/Rectangle-2-5.png";

const FeaturedCategory = () => {
    return (
        <div className="relative w-full bg-center bg-cover bg-no-repeat py-10 mb-10" style={{ backgroundImage: `url(${bgImage2})` }}>
            {/* Title */}
            <div className="text-center mb-8">
                <p className="text-2xl md:text-3xl font-bold text-white">Featured Categories</p>
            </div>

            {/* Category Cards */}
            <div className="w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
                {/* 1st */}
                <div className="flex flex-col items-center space-y-3 ">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                        <img src={image2} alt="Baby & Toddler Toys" className="object-contain w-24 h-24 sm:w-28 sm:h-28" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-white hover:text-orange-400">Baby & Toddler Toys</p>
                </div>

                {/* 2nd */}
                <div className="flex flex-col items-center space-y-3 ">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                        <img src={image3} alt="Building & Construction Toys" className="object-contain w-24 h-24 sm:w-28 sm:h-28" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-white text-center hover:text-orange-400">Building & Construction Toys</p>
                </div>

                {/* 3rd */}
                <div className="flex flex-col items-center space-y-3 ">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                        <img src={image4} alt="Learning & Education" className="object-contain w-24 h-24 sm:w-28 sm:h-28" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-white hover:text-orange-400">Learning & Education</p>
                </div>

                {/* 4th */}
                <div className="flex flex-col items-center space-y-3 ">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                        <img src={image1} alt="Radio & Remote Control" className="object-contain w-24 h-24 sm:w-28 sm:h-28" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-white text-center hover:text-orange-400">Radio & Remote Control</p>
                </div>

                {/* 5th */}
                <div className="flex flex-col items-center space-y-3 ">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                        <img src={image5} alt="Sport & Outdoor" className="object-contain w-24 h-24 sm:w-28 sm:h-28" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-white hover:text-orange-400">Sport & Outdoor</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCategory;
