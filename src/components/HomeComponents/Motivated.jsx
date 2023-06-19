import React from 'react';

const Motivated = () => {
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-32'>
            <div className='flex items-center ml-10'>
                <div className='bg-red-300 p-10 '>
                    <img className='w-10' src="https://i.ibb.co/PGthV5T/icon-3.webp" alt="" />
                </div>
                <div className='ml-5'>
                    <h1 className='text-lg mb-4 text-gray-800 hover:text-cyan-500 duration-500'>Learn From The Experts</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='flex items-center ml-10'>
                <div className='bg-cyan-300 p-10 '>
                    <img className='w-10' src="https://i.ibb.co/R4q3dy1/icon-2.webp" alt="" />
                </div>
                <div className='ml-5'>
                    <h1 className='text-lg mb-4 text-gray-800 hover:text-cyan-500 duration-500'>Book Library & Store</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='flex items-center ml-10'>
                <div className='bg-green-300 p-10 '>
                    <img className='w-10' src="https://i.ibb.co/WfPpTRY/icon.webp" alt="" />
                </div>
                <div className='ml-5'>
                    <h1 className='text-lg mb-4 text-gray-800 hover:text-cyan-500 duration-500'>Online Education</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
           
        </div>
    );
};

export default Motivated;