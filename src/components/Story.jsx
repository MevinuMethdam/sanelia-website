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

                        <div className="pt-6">
                            <a
                                href="https://instagram.com/sanelia.aura"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#b76e79]/40 text-[#8a4e56] hover:bg-[#b76e79] hover:text-white transition-all duration-300 group shadow-sm bg-white/30 backdrop-blur-sm"
                            >
                                <span className="font-medium tracking-wider text-sm uppercase">Follow our journey</span>
                                <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
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