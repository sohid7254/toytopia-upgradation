import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const ToyDetailsCard = ({ toy }) => {
    if (!toy) {
        return <div className="text-center text-gray-500 py-10">No toy data found. Please check the ID or try again.</div>;
    }

    const {
        toyName,
        sellerName,
        sellerEmail,
        price,
        availableQuantity,
        pictureURL,
        rating,
        subCategory,
        description,
        
    } = toy;

   

    
    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 max-w-4xl mx-auto">
            {/* Image */}
            <div className="flex justify-center">
                <img src={pictureURL} alt={toyName} className="w-full max-w-[300px] h-auto object-cover rounded-lg mb-6 shadow-md" />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">{toyName}</h2>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base text-gray-700 mb-6">
                <p>
                    <span className="font-bold">Seller:</span> {sellerName}
                </p>
                <p>
                    <span className="font-bold">Email:</span> <span className="underline">{sellerEmail}</span>
                </p>
                <p>
                    <span className="font-bold">Category:</span> <span className="bg-green-100 text-green-600 px-2 py-1 rounded-xl font-semibold">{subCategory}</span>
                </p>
                <p>
                    <span className="font-bold">Available:</span> <span className="bg-green-100 text-green-600 px-2 py-1 rounded-xl font-semibold">{availableQuantity}</span>
                </p>
                <p>
                    <span className="font-bold">Price:</span> <span className="bg-orange-500 text-white px-3 py-1 rounded-lg font-bold">${price}</span>
                </p>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Ratings:</span>

                    <div className="flex items-center bg-[#fff0e1] text-[#ff8811] px-2 border border-gray-200 rounded">
                        <FaStarHalfAlt />
                        <span className="text-lg font-semibold ml-1">{rating}</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mb-8">
                <h3 className="font-semibold text-lg mb-2">Description:</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            {/* Back Button */}
            <div className="text-center">
                <Link to="/allToys" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md  ">
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default ToyDetailsCard;
