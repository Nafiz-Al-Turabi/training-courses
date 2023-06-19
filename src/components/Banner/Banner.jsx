import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#01aaff1d]  pt-20'>
            <h1 className='text-center text-gray-700 text-4xl mb-8 uppercase font-semibold'>Find your best online courses</h1>
            <div className='text-center bg-white py-1 md:w-[1100px] mx-auto rounded-full shadow-lg'>
                <input className='text-gray-500 font-bold md:w-[950px] mx-auto p-4 rounded-l-full focus:outline-none' type="text" placeholder='What do you want to learn tody?' />
                <button className='text-lg text-white font-semibold uppercase bg-gradient-to-l to-[#0f8]  from-[#fe5e5e]  py-3 px-8 rounded-r-full border border-green-400
                hover:bg-none duration-500 ease-in-out hover:text-gray-700 '>Search</button>
            </div>
            <div class="flex justify-center">
                <img src="https://i.ibb.co/Hn7V3nd/header-search.webp" alt="" />
            </div>
        </div>
    );
};

export default Banner;