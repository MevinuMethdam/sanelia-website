import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-soft-pink via-blush to-white text-center px-4 overflow-hidden">

            <div className="z-10 max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-serif text-rose-gold mb-4 tracking-wide">
                    The Collection Awaits
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 font-light">
                    Because every meaningful gift tells a beautiful story.
                </p>
                <a
                    href="#products"
                    className="bg-rose-gold text-white px-8 py-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300 ease-in-out text-lg tracking-wider"
                >
                    Shop the Collection
                </a>
            </div>
        </section>
    );
};

export default Hero;