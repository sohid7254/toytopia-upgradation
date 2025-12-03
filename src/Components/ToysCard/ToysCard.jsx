import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const ToysCard = ({data}) => {
    const { toyName, pictureURL, price, availableQuantity, description, toyId } = data;
    return (
        <div>
            <div className=" rounded-lg shadow-md overflow-hidden border border-gray-200 hover:scale-102 hover:shadow-lg transition-shadow ease-in-out p-3 h-[px]">
                <div>
                    <img src={pictureURL} alt="" className="overflow-hidden object-cover w-full h-[250px] rounded-lg" />
                </div>

                <div className="space-y-1">
                    <h2 className=" text-gray-800 mt-2">{toyName}</h2>
                    <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1 ">
                            <h2 className="font-bold">Available:</h2>
                            <span className="bg-[#e2eec5] text-[#14ce93] px-2 border border-gray-200 rounded text-[15px] font-bold">{availableQuantity}</span>
                        </div>
                        
                    </div>
                    <div>
                        <h2 className="font-bold">
                            Price: $ <span className="bg-[#e78c31] text-[#fafafa] px-2 border border-gray-200 rounded text-lg">{price}</span>
                        </h2>
                    </div>
                    <div>
                        <h2 className="font-bold">DesCription:</h2>
                        <div className="text-gray-500">{description.length > 200 ? <>{description.slice(0, 50)}......</> : description}</div>
                    </div>
                    <Link to={`/toyDetails/${toyId}`} className="btn btn-primary w-full mt-2">
                        View More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToysCard;