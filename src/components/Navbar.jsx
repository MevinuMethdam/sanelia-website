import React from 'react';

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full p-6 bg-transparent flex justify-between items-center text-[#8a4e56] font-sans z-50">
            <div className="text-2xl font-serif font-bold tracking-widest drop-shadow-sm">SANÉLIA</div>
            <ul className="flex space-x-6 text-sm md:text-base font-medium">
                <li><a href="#" className="hover:text-[#703b44] transition duration-300">Home</a></li>
                <li><a href="#story" className="hover:text-[#703b44] transition duration-300">Our Story</a></li>
                <li><a href="#products" className="hover:text-[#703b44] transition duration-300">Collection</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;