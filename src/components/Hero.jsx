import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#fdf0f0] via-[#f9e4e4] to-white text-center px-6 sm:px-12 overflow-hidden">

            <div className="absolute top-0 left-0 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <span className="text-sm md:text-base text-rose-gold tracking-[0.3em] uppercase mb-4 font-semibold">
          SANÉLIA First Collection
        </span>

                <h1 className="text-5xl md:text-7xl font-serif text-[#8a4e56] mb-6 leading-tight">
                    The Art of <br/> Gifting
                </h1>

                <p className="text-lg md:text-xl text-gray-500 mb-10 font-light max-w-xl leading-relaxed">
                    Because every meaningful gift tells a beautiful story. Curated with love, crafted for every moment.
                </p>

                <a
                    href="#products"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-[#b76e79] rounded-full overflow-hidden transition-all duration-300 hover:bg-[#a35e68] hover:shadow-[0_8px_30px_rgb(183,110,121,0.3)] focus:outline-none"
                >
                    <span className="relative tracking-wider">Explore Collection</span>
                </a>
            </div>
        </section>
    );
};

export default Hero;