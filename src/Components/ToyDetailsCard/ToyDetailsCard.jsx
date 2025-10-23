
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";


const ToyDetailsCard = ({ toy }) => {
    if (!toy) {
        return <div className="text-center text-gray-500 py-10">No toy data found. Please check the ID or try again.</div>;
    }
    const { toyName, sellerName, sellerEmail, price, availableQuantity, pictureURL, rating, subCategory, description } = toy;

    return (
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200">
            {/* Responsive image */}
            <div className="flex justify-center">
                <img src={pictureURL} alt={toyName} className="w-full max-w-[250px] md:max-w-[300px] h-auto object-cover rounded-lg mb-4 shadow-sm mx-auto" />
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">{toyName}</h2>

            {/* Grid info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
                <p>
                    <span className="font-bold">Seller:</span> <span className="text-gray-500 text-base font-bold">{sellerName}</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-bold">Email:</span>
                    <span className="underline sm:ml-2 text-gray-500">{sellerEmail}</span>
                </p>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Category:</span>
                    <span className="bg-[#e2eec5] text-[#14ce93] px-2 border border-gray-200 rounded-xl text-[15px] font-bold">{subCategory}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Available:</span>
                    <span className="bg-[#e2eec5] text-[#14ce93] px-2 border border-gray-200 rounded text-[15px] font-bold">{availableQuantity}</span>
                </div>
                <div>
                    <span className="font-bold">Price:</span> <span className="bg-[#e78c31] text-[#fafafa] px-2 border border-gray-200 rounded text-lg">${price}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Ratings:</span>
                    <div className="flex items-center bg-[#fff0e1] text-[#ff8811] px-2 border border-gray-200 rounded">
                        <FaStarHalfAlt />
                        <span className="text-lg font-semibold ml-1">{rating}</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div>
                <h3 className="font-semibold text-lg mb-1">Description:</h3>
                <p className="text-gray-500 leading-relaxed">{description}</p>
            </div>
            <Link to={"/allToys"} className="btn bg-amber-500 w-40 text-white mt-2">
                Go Back
            </Link>
        </div>
    );
};

export default ToyDetailsCard;
