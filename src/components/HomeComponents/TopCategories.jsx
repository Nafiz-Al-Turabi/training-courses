import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const TopCategories = () => {
    return (
        <div className=" my-32 bg-[#1984e910] py-20 md:py-32">
            <div className="md:flex max-w-7xl mx-auto px-1 md:px-0 ">
                <div>
                    <h1 className="text-3xl text-center md:text-left md:text-5xl font-semibold text-gray-800 mb-5 ">Top Categories</h1>
                    <p className="text-center md:text-left text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="md:w-[50%] mt-2">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 50,
                            modifier: 2,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="bg-blue-200 rounded overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <a href="#" className="font-bold text-xl mb-2 uppercase text-white hover:text-slate-900 duration-500">Certification exam</a>
                                    <p className="text-gray-700 text-base">8 courses</p>
                                </div>
                                <div className="flex float-right">
                                    <img className="w-32" src="https://i.ibb.co/2vHnvtS/collection-1.webp" alt="Card Image" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-cyan-200 rounded overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <a href="#" className="font-bold text-xl mb-2 uppercase text-white hover:text-slate-900 duration-500">Advance career</a>
                                    <p className="text-gray-700 text-base">8 courses</p>
                                </div>
                                <div className="flex float-right">
                                    <img className="w-32" src="https://i.ibb.co/3FCYK8h/Pngtree-vector-code-optimization-icon-3994990.png" alt="Card Image" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-green-200 rounded overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <a href="#" className="font-bold text-xl mb-2 uppercase text-white hover:text-slate-900 duration-500">Certification exam</a>
                                    <p className="text-gray-700 text-base">8 courses</p>
                                </div>
                                <div className="flex float-right">
                                    <img className="w-32" src="https://i.ibb.co/2vHnvtS/collection-1.webp" alt="Card Image" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-yellow-200 rounded overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <a href="#" className="font-bold text-xl mb-2 uppercase text-white hover:text-slate-900 duration-500">Coding</a>
                                    <p className="text-gray-700 text-base">12 courses</p>
                                </div>
                                <div className="flex float-right">
                                    <img className="w-32" src="https://i.ibb.co/3FCYK8h/Pngtree-vector-code-optimization-icon-3994990.png" alt="Card Image" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default TopCategories;