import React from 'react';
import useData from '../Hooks/useData';
import LoadingAnimation from '../Components/LoadingAnimation/LoadingAnimation';
import ToysCard from '../Components/ToysCard/ToysCard';

const AllToys = () => {
    const {data, loading} = useData()
    
    return (
        <div>
            <h2 className="text-center mt-5 text-2xl font-bold">
                Buy Your <span className="text-orange-400">Favourite</span> <br />
                toy from these Items
            </h2>

            <div className="mx-auto my-5">
                <h2 className="w-11/12 mx-auto text-xl font-bold">All Toys are Here ({data.length})</h2>

                {loading ? (
                    <LoadingAnimation />
                ) : (
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid--cols-3 lg:grid-cols-4 gap-4 p-3 my-4">
                        {data.map((data) => (
                            <ToysCard key={data.toyId} data={data}></ToysCard>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllToys;