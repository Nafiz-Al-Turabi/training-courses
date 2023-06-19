import React from 'react';

const CourseKit = () => {
    return (
        <div className='max-w-7xl mx-auto md:flex items-center'>
            <div>
                <img className='w-[1200px]' src="https://i.ibb.co/GH0q15C/10798281-19362653.jpg" alt="" />
            </div>
            <div>
                <h3 className='text-center md:text-left text-2xl text-gray-800'>Welcome to</h3>
                <h1 className='text-center md:text-left text-gray-800 text-4xl font-semibold mb-5'>Training Center</h1>
                <p className='text-center md:text-left text-gray-500 md:w-[550px] mx-2 mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae aliquam veritatis sint expedita repellendus deserunt, accusamus ad doloribus ducimus laborum. Sed cumque hic labore eos tenetur officiis aspernatur dignissimos ipsum.</p>
                <div className='text-center md:text-left'>
                    <button className='text-lg text-gray-800  font-semibold uppercase hover:bg-gradient-to-l to-[#0f8]  from-[#fe5e5e] hover:text-white active:scale-95 duration-300  py-3 px-8 rounded-full border-b-2 border-green-400'>View all</button>
                </div>
            </div>
        </div>
    );
};

export default CourseKit;