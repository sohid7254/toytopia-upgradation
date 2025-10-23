import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import useData from "../../Hooks/useData";

const Slider = () => {
    const { data, loading } = useData();

    

    const slides = data.slice(0, 3); // ✅ only first 3 items

    return (
        <>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <div className="w-11/12 mx-auto mb-10">
                    <Swiper spaceBetween={10} slidesPerView={1} loop={true} navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]}>
                        {slides.map((item) => (
                            <SwiperSlide key={item.toyId}>
                                <div className="relative w-full h-[400px] ">
                                    <img src={item.pictureURL} alt={`Toy ${item.toyId}`} className="w-full h-full  object-cover rounded-lg " />
                                </div>
                                <div className="absolute inset-0 bg-black/50 rounded-lg z-10" />
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <h2 className="text-white text-xl md:text-5xl font-bold">{item.toyName}</h2>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </>
    );
};

export default Slider;
