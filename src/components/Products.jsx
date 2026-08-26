import React from 'react';

const products = [
    { id: 1, name: 'Moisturizing Hand Cream', img: '/assets/1.jpeg' },
    { id: 2, name: 'Hand Creams', img: '/assets/2.jpeg' },
    { id: 3, name: 'Chamomile Hand Cream', img: '/assets/3.jpeg' },
    { id: 4, name: 'GrapeFruit Hand Cream', img: '/assets/4.jpeg' },
    { id: 5, name: 'Peach Moisturizing', img: '/assets/5.jpeg' },
    { id: 6, name: 'Cherry Blossom', img: '/assets/6.jpeg' },
    { id: 7, name: 'Rose Hand Cream', img: '/assets/7.jpeg' },
    { id: 8, name: 'Moisture mud mask', img: '/assets/8.jpeg' },
    { id: 9, name: 'Peach Hand Cream', img: '/assets/9.jpeg' },
    { id: 10, name: 'Colorful Hair Claws', img: '/assets/10.jpeg' },
    { id: 11, name: 'Heart Pocket Mirror', img: '/assets/11.jpeg' },
    { id: 12, name: 'Luxury Satin Scrunchie', img: '/assets/12.jpeg' },
    { id: 13, name: 'Hydrating Face Sheet Mask', img: '/assets/13.jpeg' },
    { id: 14, name: 'Butterfly Charm Necklace', img: '/assets/14.jpeg' },
    { id: 15, name: 'Deep Cleansing Nose Strip', img: '/assets/15.jpeg' },
    { id: 16, name: 'Chamomile Soothing Soap', img: '/assets/16.jpeg' }
];

const Products = () => {
    const instagramUrl = "https://www.instagram.com/sanelia.aura";

    const handleCardClick = () => {
        window.open(instagramUrl, '_blank');
    };

    return (
        <section id="products" className="py-24 bg-[#fffcfb] px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#fce1ec]/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#faece1]/60 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/80 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-sm text-[#b76e79] tracking-[0.25em] uppercase font-semibold">Curated with Love</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#8a4e56] mt-3 drop-shadow-sm">Our Collection</h2>
                    <div className="w-24 h-1 bg-[#fce1ec] mx-auto mt-6 rounded-full opacity-80"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            onClick={handleCardClick}
                            className="group flex flex-col bg-white/40 backdrop-blur-xl p-4 rounded-3xl border border-white/60 shadow-[0_10px_30px_rgba(183,110,121,0.04)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/70 hover:shadow-[0_20px_40px_rgba(183,110,121,0.1)] cursor-pointer"
                        >
                            <div className="relative w-full aspect-[4/5] bg-[#fdf0f0]/60 rounded-2xl overflow-hidden mb-5 shadow-sm">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />

                                <div className="absolute inset-x-0 bottom-6 flex justify-center">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleCardClick();
                                        }}
                                        className="bg-white text-[#8a4e56] font-medium px-6 py-2.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-colors duration-300 hover:bg-[#8a4e56] hover:text-white"
                                    >
                                        Quick Order
                                    </button>
                                </div>
                            </div>

                            <div className="text-center px-2 flex-grow">
                                <h3 className="text-lg font-medium text-black mb-1 leading-snug">{product.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;