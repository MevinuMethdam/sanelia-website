import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#ebdff2] via-[#fce1ec] to-[#ffe3e3] text-center px-6 sm:px-12">

            <div className="absolute top-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-60"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[25rem] h-[25rem] bg-[#ffb6c1] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-[#d8b4e2] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

            <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <span className="text-sm md:text-base text-[#8a4e56] tracking-[0.3em] uppercase mb-4 font-semibold opacity-90">
          SANÉLIA First Collection
        </span>

                <h1 className="text-5xl md:text-7xl font-serif text-[#703b44] mb-6 leading-tight drop-shadow-sm">
                    The Art of <br/> Gifting
                </h1>

                <p className="text-lg md:text-xl text-[#703b44] mb-10 font-medium max-w-xl leading-relaxed opacity-80">
                    Because every meaningful gift tells a beautiful story. Curated with love, crafted for every moment.
                </p>

                <a
                    href="#products"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-[#b76e79] rounded-full overflow-hidden transition-all duration-300 hover:bg-[#8a4e56] hover:shadow-[0_8px_30px_rgb(138,78,86,0.4)] focus:outline-none shadow-lg"
                >
                    <span className="relative tracking-wider">Explore Collection</span>
                </a>
            </div>
        </section>
    );
};

export default Hero;