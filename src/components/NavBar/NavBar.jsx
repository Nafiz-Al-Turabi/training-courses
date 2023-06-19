import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const menuItems = {

    }
    return (
        <nav className="max-w-7xl mx-auto py-6">
            <div className=" px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="w-40"
                                src="https://i.ibb.co/JKbQhYd/logo.png"
                                alt="Logo"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#" className="text-gray-600 hover:text-green-500 duration-500 px-3 py-2 rounded-md text-lg font-medium">Home</a>
                                <a href="#" className="text-gray-600 hover:text-green-500 duration-500 px-3 py-2 rounded-md text-lg font-medium">Courses</a>
                                <a href="#" className="text-gray-600 hover:text-green-500 duration-500 px-3 py-2 rounded-md text-lg font-medium">About </a>
                                <a href="#" className="text-gray-600 hover:text-green-500 duration-500 px-3 py-2 rounded-md text-lg font-medium"> Contact </a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  hover:text-green-50800 focus:text-green-500 transition duration-150 ease-in-out"
                            aria-label="Main menu"
                            aria-expanded="false"
                        >
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <a href="#" className="text-gray-600 hover:text-green-500 duration-500 px-3 py-2 rounded-md text-lg font-medium">Login </a>
                            <div className="ml-3">
                                <a href="#" className="text-lg rounded-full border border-green-500  hover:bg-gradient-to-l
                                 to-[#0f8]  from-[#fe5e5e] duration-500  hover:text-white py-2 px-5 uppercase" >Buy Course </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 sm:px-3">
                    <a href="#" className="text-gray-600 hover:text-green-500 duration-500 px-3 py-2 block rounded-md font-medium">Home</a>
                    <a href="#" className="text-gray-600 hover:text-green-500 duration-500 px-3 py-2 block rounded-md font-medium">Courses</a>
                    <a href="#" className="text-gray-600 hover:text-green-500 duration-500 px-3 py-2 block rounded-md font-medium">About </a>
                    <a href="#" className="text-gray-600 hover:text-green-500 duration-500 px-3 py-2 block rounded-md font-medium"> Contact </a>
                    <a
                        href="#"
                        className="text-gray-600 hover:text-green-500 duration-500 block px-3 py-2 rounded-md font-medium"
                    >
                        Login
                    </a>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="ml-3">
                        <button className="text-lg font-medium leading-none text-gray-600">
                            Buy Courses
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
