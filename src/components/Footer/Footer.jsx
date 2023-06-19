import React from 'react';
import { Link } from 'react-router-dom';
import {  HiPhone,HiMail,HiLocationMarker } from "react-icons/hi";

const Footer = () => {
    return (
        <footer class="bg-gradient-to-l from-blue-600 to-50% to-violet-600 text-white pt-32 pb-10">
            <div className='max-w-7xl mx-auto px-2 md:px-0 md:flex items-center justify-between'>
                <div className='bg-white text-gray-600 py-10 mb-10 md:mb-0 px-16 rounded-2xl'>
                    <img className='w-40' src="https://i.ibb.co/JKbQhYd/logo.png" alt="" />
                    <p className='text-lg flex items-center gap-5 mb-3 mt-4'> < HiPhone/> (+800) 1755659843</p>
                    <p className='text-lg flex items-center gap-5 mb-3'>< HiMail />nafizalturabi@gmail.com</p>
                    <p className='text-lg flex items-center gap-5 mb-3'><HiLocationMarker/>Dhaka, Bangladesh</p>
                </div>
                <div className='md:flex gap-20 '>
                    <div>
                        <h1 className='text-2xl font-bold uppercase mb-8'>USEFUL LINKS</h1>
                        <Link className='block mb-6 hover:text-gray-950 duration-300'>About</Link>
                        <Link className='block mb-6 hover:text-gray-950 duration-300'>Blog</Link>
                        <Link className='block mb-6 hover:text-gray-950 duration-300'>Buddy Profile</Link>
                        <Link className='block mb-6 hover:text-gray-950 duration-300'>Membership</Link>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold uppercase mb-8'>CATEGORIES</h1>
                        <Link className='block mb-6 hover:text-gray-950 duration-300'>Web development</Link>
                        <Link className='block mb-6 hover:text-gray-950 duration-300'>Machine Learning</Link>
                        <Link className='block mb-6 hover:text-gray-950 duration-300'>Artificial Intelligence</Link>
                        <Link className='block mb-6 hover:text-gray-950 duration-300'>Python</Link>
                    </div>
                    <div className=''>
                        <button className='bg-gray-900 text-xl p-3'>Facebook</button>
                        <button className='text-blue-600 bg-gray-900 text-xl p-3 ml-6 '>LinkedIn</button>
                        <h1 className='text-xl uppercase my-4'>subscribe for news letter</h1>
                        <p className='mb-4'>Enter your email and we’ll send you more information.</p>
                        <div className='border p-2 rounded-full'>
                            <input className='w-[230px] md:w-60 p-2 bg-transparent focus:outline-none ' type="email" placeholder='Enter Email Address'/>
                            <button className='bg-white text-gray-950 py-2 px-6 rounded-r-full uppercase active:scale-95'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="max-w-7xl mx-auto border-gray-200 my-6"/>
                <p className="text-center text-gray-400">© 2023 Training center. All rights reserved.</p>
        </footer>

    );
};

export default Footer;