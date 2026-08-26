import React from 'react';

const Story = () => {
    return (
        <section id="story" className="py-24 bg-[#faece1] px-6 sm:px-12 relative overflow-hidden">

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    <div className="space-y-8 text-center lg:text-left">

                        <h3 className="text-[#8a4e56] tracking-[0.25em] uppercase text-sm md:text-base font-bold mb-2">
                            Our Story
                        </h3>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#703b44] leading-[1.15] drop-shadow-sm">
                            The Art of <br/>
                            <span className="italic text-[#b76e79]">Gifting</span> & Lifestyle
                        </h2>

                        <div className="space-y-5 text-[#703b44]/80 text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                            <p>
                                Because every meaningful gift tells a <span className="italic font-serif text-[#b76e79]">beautiful story</span>. At <strong className="font-semibold text-[#703b44] tracking-wide">SANÉLIA</strong>, we believe that a thoughtful gift isn’t just an item, it’s a memory, a smile, and a moment that lasts forever.
                            </p>
                            <p>
                                From elegant accessories to lifestyle pieces that add a touch of grace to your everyday life, we curate small things that create <span className="italic font-serif text-[#b76e79] text-xl">beautiful moments</span>.
                            </p>
                        </div>

                        <div className="pt-6 flex justify-center lg:justify-start">
                            <a
                                href="https://instagram.com/sanelia.aura"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Follow us on Instagram"
                                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/80 backdrop-blur-md border border-[#fce1ec]/80 text-[#8a4e56] text-xs font-bold tracking-[0.2em] uppercase shadow-[0_8px_25px_rgba(183,110,121,0.08)] hover:bg-[#b76e79] hover:text-white hover:border-[#b76e79] hover:shadow-[0_15px_35px_rgba(183,110,121,0.2)] hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <span style={{ fontFamily: '"varela round", "quicksand", sans-serif' }}>
                                    Follow our journey
                                </span>
                                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="relative mt-10 lg:mt-0 mx-auto w-full max-w-md lg:max-w-lg flex justify-center items-center">
                        <img
                            src="/assets/story-art.svg"
                            alt="SANÉLIA - Our Story Art"
                            className="w-full h-auto object-contain mix-blend-darken hover:-translate-y-2 transition-transform duration-700 ease-out"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Story;