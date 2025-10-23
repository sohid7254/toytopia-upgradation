import React from 'react';
import Banner from '../Components/Banner/Banner';
import Slider from '../Components/Slider/Slider';
import FeaturedCategory from '../Components/FeaturedCategory/FeaturedCategory';
import useData from '../Hooks/useData';
import LoadingAnimation from '../Components/LoadingAnimation/LoadingAnimation';
import { Link } from 'react-router';
import ToysCard from '../Components/ToysCard/ToysCard';

const Home = () => {

    const {data, loading} = useData()
    const toyData = data.slice(0, 8)
    return (
        <>
            <Banner />
            <Slider />
            <FeaturedCategory />

            <div>
                <div className="w-11/12 mx-auto mb-5">
                    <h2 className="text-2xl font-bold">Popular Toys</h2>
                </div>
                {loading ? (
                    <LoadingAnimation />
                ) : (
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid--cols-3 lg:grid-cols-4 gap-4 p-3 my-4">
                        {toyData.map((data) => (
                            <ToysCard key={data.toyId} data={data}></ToysCard>
                        ))}
                    </div>
                )}
                <div className="flex justify-center items-center mb-5">
                    <Link to="/allToys" className="btn btn-primary">
                        Show All
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
