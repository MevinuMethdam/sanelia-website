import React, { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Mobile menu link click handler
    const handleNavClick = (section) => {
        setActive(section);
        setIsMobileMenuOpen(false); // Close menu after clicking
    };

    return (
        <nav className="absolute top-0 left-0 w-full px-6 md:px-8 py-6 bg-transparent flex justify-between items-center text-[#8a4e56] font-sans z-50">

            {/* Logo */}
            <div className="text-2xl font-serif font-bold tracking-widest drop-shadow-sm flex-1 z-50 relative">
                SANÉLIA
            </div>

            {/* Desktop Menu */}
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
                {/* New Feedback Link */}
                <li>
                    <a
                        href="#feedback"
                        onClick={() => setActive('feedback')}
                        className={`group relative pb-1 transition duration-300 hover:text-[#703b44] ${active === 'feedback' ? 'text-[#703b44]' : ''}`}
                    >
                        Feedback
                        <span className={`absolute left-0 bottom-0 h-[2px] bg-[#8a4e56] transition-all duration-300 ${active === 'feedback' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                </li>
            </ul>

            <div className="hidden md:flex flex-1"></div>

            {/* Mobile Menu Hamburger Button */}
            <button
                className="md:hidden flex flex-col justify-center items-end w-8 h-8 space-y-1.5 z-50 relative focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
            >
                <span className={`block h-[2px] bg-[#8a4e56] transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                <span className={`block h-[2px] bg-[#8a4e56] transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-4'}`}></span>
                <span className={`block h-[2px] bg-[#8a4e56] transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
            </button>

            {/* Mobile Menu Full-Screen Overlay */}
            <div className={`fixed inset-0 w-full h-screen bg-white/90 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-40 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className="flex flex-col items-center space-y-8 text-lg font-medium tracking-[0.2em] uppercase text-[#8a4e56]">
                    <li>
                        <a
                            href="#"
                            onClick={() => handleNavClick('home')}
                            className={`transition duration-300 ${active === 'home' ? 'text-[#b76e79] scale-110 block' : 'hover:text-[#b76e79]'}`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#story"
                            onClick={() => handleNavClick('story')}
                            className={`transition duration-300 ${active === 'story' ? 'text-[#b76e79] scale-110 block' : 'hover:text-[#b76e79]'}`}
                        >
                            Our Story
                        </a>
                    </li>
                    <li>
                        <a
                            href="#products"
                            onClick={() => handleNavClick('products')}
                            className={`transition duration-300 ${active === 'products' ? 'text-[#b76e79] scale-110 block' : 'hover:text-[#b76e79]'}`}
                        >
                            Collection
                        </a>
                    </li>
                    {/* New Feedback Link for Mobile */}
                    <li>
                        <a
                            href="#feedback"
                            onClick={() => handleNavClick('feedback')}
                            className={`transition duration-300 ${active === 'feedback' ? 'text-[#b76e79] scale-110 block' : 'hover:text-[#b76e79]'}`}
                        >
                            Feedback
                        </a>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;