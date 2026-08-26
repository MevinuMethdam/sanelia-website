import React from 'react';

const Navbar = () => {
    return (
        <nav className="p-6 bg-soft-pink flex justify-between items-center text-rose-gold font-sans shadow-sm">
            <div className="text-2xl font-serif font-bold tracking-widest">SANÉLIA</div>
            <ul className="flex space-x-6 text-sm md:text-base">
                <li><a href="#" className="hover:text-gray-500 transition duration-300">Home</a></li>
                <li><a href="#story" className="hover:text-gray-500 transition duration-300">Our Story</a></li>
                <li><a href="#products" className="hover:text-gray-500 transition duration-300">Collection</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;