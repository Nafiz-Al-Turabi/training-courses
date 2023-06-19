import React from 'react';
import { Link } from 'react-router-dom';

const TopCourse = () => {
    return (
        <div className='md:max-w-7xl px-1 md:px-0 mx-auto mb-20'>
            <div className='mb-20'>
                <h1 className='text-5xl text-center text-gray-800 mb-8'>Top Courses</h1>
                <p className='text-center wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:bg-cyan-300 duration-300 relative">
                <img src="https://i.ibb.co/tXPrhjs/CIO-Io-T-1.webp" alt="Product Image" className="w-full h-48 object-cover" />
                <h3 className="text-lg font-bold absolute top-2 right-2 text-white bg-cyan-500 px-2 py-1 rounded-lg">New Arrival</h3>
                <div className="p-4">
                    <Link className="text-lg font-bold mb-2 hover:text-white duration-200">Product Title</Link>
                    <p className="text-gray-600 mb-2">Product Description</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 1l2.928 6.638L19 7.383l-5 4.262 1.785 7.11L10 14.607l-5.785 4.148L6 11.645l-5-4.262 5.072-.745L10 1z" />
                            </svg>
                            <span className="text-gray-700">4.5</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-gray-700 font-bold">$29.99</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopCourse;
