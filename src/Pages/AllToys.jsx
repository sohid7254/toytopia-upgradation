import React, { useState } from "react";
import useData from "../Hooks/useData";
import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";
import ToysCard from "../Components/ToysCard/ToysCard";

const AllToys = () => {
    const { data, loading } = useData();
    const [sortOrder, setSortOrder] = useState("asc"); // sorting state
    const [filterCategory, setFilterCategory] = useState("all"); // filtering state

    // Filtering
    const filteredData = filterCategory === "all" ? data : data.filter((toy) => toy.subCategory === filterCategory);

    // Sorting (price দিয়ে)
    const sortedData = [...filteredData].sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

    return (
        <>
            <title>Toy-Topia | All-toys</title>

            <div>
                <h2 className="text-center mt-5 text-2xl font-bold">
                    Buy Your <span className="text-orange-400">Favourite</span> <br />
                    toy from these Items
                </h2>

                <div className="mx-auto my-5 w-11/12">
                    {/* Controls */}
                    <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                        <h2 className="text-xl font-bold">All Toys are Here ({data.length})</h2>

                        {/* Sorting Dropdown */}
                        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="select select-bordered select-sm">
                            <option value="asc">Price: Low to High</option>
                            <option value="desc">Price: High to Low</option>
                        </select>

                        {/* Filtering Dropdown */}
                        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="select select-bordered select-sm">
                            <option value="all">All Categories</option>
                            <option value="Educational Toys">Educational Toys</option>
                            <option value="Vehicles & Tracks">Vehicles & Tracks</option>
                            <option value="Arts & Crafts">Arts & Crafts</option>
                            <option value="Board & Family Games">Board & Family Games</option>
                        </select>
                    </div>

                    {loading ? (
                        <LoadingAnimation />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 my-4">
                            {sortedData.map((toy) => (
                                <ToysCard key={toy.toyId} data={toy}></ToysCard>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AllToys;
