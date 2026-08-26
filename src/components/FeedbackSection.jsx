import React from 'react';

const feedbacks = [
    {
        id: 1,
        name: "Mevinu Methdam",
        handle: "via WhatsApp",
        platform: "WhatsApp",
        text: "Great product, Received the necklace today! It's even more beautiful in person. The packaging was so lovely. Thank you Sanélia! ❤️",
        date: "2 days ago"
    },
    {
        id: 2,
        name: "Devindi A.",
        handle: "via Instagram",
        platform: "Instagram",
        text: "Thank you really nice and such a good package🩷",
        date: "1 day ago"
    }
];

const FeedbackSection = () => {
    return (
        <section id="feedback" className="pt-8 pb-24 bg-[#fffcfb] px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#fce1ec]/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#faece1]/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">

                <div className="text-center mb-16">
                    <span className="text-sm text-[#b76e79] tracking-[0.25em] uppercase font-semibold">Hearts of SANÉLIA</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#8a4e56] mt-3 drop-shadow-sm">Client Love Notes</h2>
                    <div className="w-24 h-1 bg-[#fce1ec] mx-auto mt-6 rounded-full opacity-80"></div>
                    <p className="text-[#703b44]/70 mt-6 max-w-xl mx-auto font-light leading-relaxed">
                        Because every meaningful gift tells a beautiful story. Here's what our wonderful community has to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {feedbacks.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col bg-white/40 backdrop-blur-xl p-6 rounded-3xl border border-white/60 shadow-[0_10px_30px_rgba(183,110,121,0.03)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/70 hover:shadow-[0_20px_40px_rgba(183,110,121,0.08)]"
                        >

                            <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#fce1ec]/50">
                                <div className="w-12 h-12 rounded-full bg-[#fce1ec] flex items-center justify-center text-[#8a4e56] font-bold text-lg shadow-sm border-2 border-white shrink-0">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                    <p className="text-xs text-[#b76e79] font-medium tracking-wide">
                                        {item.handle}
                                        <span className="text-gray-400 font-light mx-1.5">|</span>
                                        <span className={`font-normal ${item.platform === 'WhatsApp' ? 'text-green-600' : 'text-purple-600'}`}>
                        {item.platform}
                    </span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex-grow relative">
                                <span className="absolute -top-3 -left-2 text-5xl text-[#fce1ec] font-serif opacity-70">“</span>
                                <p className="text-gray-700 text-[15px] font-light leading-relaxed relative z-10 pt-1 px-1 italic">
                                    {item.text}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-[#fce1ec]/30 text-right">
                                <p className="text-xs text-gray-400 font-light tracking-wide">{item.date}</p>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="https://instagram.com/sanelia.aura"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2.5 bg-white px-7 py-3 rounded-full border border-[#fce1ec] text-[#8a4e56] text-sm font-medium shadow-sm hover:bg-[#b76e79] hover:text-white transition-all duration-300"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        View More Reviews on Instagram
                    </a>
                </div>

            </div>
        </section>
    );
};

export default FeedbackSection;