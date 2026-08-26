import React, { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState('home');

    return (
        <nav className="absolute top-0 left-0 w-full px-8 py-6 bg-transparent flex justify-between items-center text-[#8a4e56] font-sans z-50">

            <div className="text-2xl font-serif font-bold tracking-widest drop-shadow-sm flex-1">
                SANÉLIA
            </div>

            <ul className="hidden md:flex justify-center space-x-12 flex-1 text-[15px] font-medium tracking-wider">
                <li>
                    <a
                        href="#"
                        onClick={() => setActive('home')}
                        className={`group relative pb-1 transition duration-300 hover:text-[#703b44] ${active === 'home' ? 'text-[#703b44]' : ''}`}
                    >
                        Home
                        <span className={`absolute left-0 bottom-0 h-[2px] bg-[#8a4e56] transition-all duration-300 ${active === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                </li>
                <li>
                    <a
                        href="#story"
                        onClick={() => setActive('story')}
                        className={`group relative pb-1 transition duration-300 hover:text-[#703b44] ${active === 'story' ? 'text-[#703b44]' : ''}`}
                    >
                        Our Story
                        <span className={`absolute left-0 bottom-0 h-[2px] bg-[#8a4e56] transition-all duration-300 ${active === 'story' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                </li>
                <li>
                    <a
                        href="#products"
                        onClick={() => setActive('products')}
                        className={`group relative pb-1 transition duration-300 hover:text-[#703b44] ${active === 'products' ? 'text-[#703b44]' : ''}`}
                    >
                        Collection
                        <span className={`absolute left-0 bottom-0 h-[2px] bg-[#8a4e56] transition-all duration-300 ${active === 'products' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                </li>
            </ul>

            <div className="flex-1"></div>

        </nav>
    );
};

export default Navbar;