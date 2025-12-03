import React from "react";
import { FaClock, FaGift, FaStar } from "react-icons/fa";


const OffersSection = () => {
    return (
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-20 px-6 text-center text-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">🎉 Seasonal Sale is Live!</h2>
                <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    Get up to <span className="font-bold">50% OFF</span> on selected toys. Don’t miss our exclusive <span className="underline">bundle offers</span>
                    and limited-time discounts!
                </p>

                {/* CTA Button */}
                <button className="bg-white text-pink-600 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-yellow-100 transition transform hover:scale-105">Shop Deals Now 🚀</button>

                {/* Extra Banner */}
                <div className="mt-14 grid md:grid-cols-3 gap-8">
                    
                        <div data-aos="fade-up" className="bg-white text-pink-600 rounded-xl p-8 shadow-md hover:shadow-2xl transition transform hover:-translate-y-1">
                            <FaGift className="w-10 h-10 mx-auto mb-4 text-pink-500" />
                            <h3 className="text-xl font-semibold mb-2">Bundle Offers</h3>
                            <p>Buy 2 toys, get 1 FREE!</p>
                        </div>
                        <div data-aos="zoom-in" className="bg-white text-pink-600 rounded-xl p-8 shadow-md hover:shadow-2xl transition transform hover:-translate-y-1">
                            <FaStar className="w-10 h-10 mx-auto mb-4 text-yellow-500" />
                            <h3 className="text-xl font-semibold mb-2">Holiday Discount</h3>
                            <p>Flat 30% OFF on puzzles & games.</p>
                        </div>
                        <div data-aos="fade-right" className="bg-white text-pink-600 rounded-xl p-8 shadow-md hover:shadow-2xl transition transform hover:-translate-y-1">
                            <FaClock className="w-10 h-10 mx-auto mb-4 text-red-500" />
                            <h3 className="text-xl font-semibold mb-2">Limited Time</h3>
                            <p>Exclusive toys available only this week!</p>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default OffersSection;
