import React from 'react';

const products = [
    { id: 1, name: 'Moisturizing Hand Cream', price: 'Rs. 1,500', img: '/assets/1.jpeg' },
    { id: 2, name: 'Deep Cleansing Nose Strip', price: 'Rs. 800', img: '/assets/2.jpeg' },
    { id: 3, name: 'Hydrating Face Sheet Mask', price: 'Rs. 600', img: '/assets/3.jpeg' },
    { id: 4, name: 'Butterfly Charm Necklace', price: 'Rs. 1,200', img: '/assets/4.jpeg' },
    { id: 5, name: 'Luxury Satin Scrunchie', price: 'Rs. 700', img: '/assets/5.jpeg' },
    { id: 6, name: 'Heart Pocket Mirror', price: 'Rs. 1,000', img: '/assets/6.jpeg' },
    { id: 7, name: 'Rose Gold Minimalist Bracelet', price: 'Rs. 1,800', img: '/assets/7.jpeg' },
    { id: 8, name: 'Peach Extract Lip Balm', price: 'Rs. 900', img: '/assets/8.jpeg' },
    { id: 9, name: 'Scented Soy Candle', price: 'Rs. 2,500', img: '/assets/9.jpeg' },
    { id: 10, name: 'Pearl Hair Clips (Set of 3)', price: 'Rs. 1,200', img: '/assets/10.jpeg' },
    { id: 11, name: 'Velvet Jewelry Box', price: 'Rs. 3,500', img: '/assets/11.jpeg' },
    { id: 12, name: 'Exfoliating Bath Sponge', price: 'Rs. 500', img: '/assets/12.jpeg' },
    { id: 13, name: 'Jade Roller & Gua Sha Set', price: 'Rs. 2,800', img: '/assets/13.jpeg' },
    { id: 14, name: 'Floral Perfume Roll-on', price: 'Rs. 1,600', img: '/assets/14.jpeg' },
    { id: 15, name: 'Elegant Ring Bearer Box', price: 'Rs. 1,100', img: '/assets/15.jpeg' },
    { id: 16, name: 'Chamomile Soothing Soap', price: 'Rs. 850', img: '/assets/16.jpeg' }
];

const Products = () => {
    const whatsappNumber = "94770000000";

    const handleOrder = (productName) => {
        const message = `Hello SANÉLIA, I would like to order the ${productName}.`;
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section id="products" className="py-24 bg-[#fffcfb] px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#fce1ec]/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#faece1]/60 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/80 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-16">
                    <span className="text-sm text-rose-gold tracking-[0.25em] uppercase font-semibold">Curated with Love</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#8a4e56] mt-3 drop-shadow-sm">Our Collection</h2>
                    <div className="w-24 h-1 bg-blush mx-auto mt-6 rounded-full opacity-80"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {products.map((product) => (
                        <div key={product.id} className="group flex flex-col bg-white/40 backdrop-blur-xl p-4 rounded-3xl border border-white/60 shadow-[0_10px_30px_rgba(183,110,121,0.04)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/70 hover:shadow-[0_20px_40px_rgba(183,110,121,0.1)]">

                            <div className="relative w-full aspect-[4/5] bg-[#fdf0f0]/60 rounded-2xl overflow-hidden mb-5 shadow-sm">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />

                                <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <button
                                        onClick={() => handleOrder(product.name)}
                                        className="hidden lg:block bg-white text-[#8a4e56] font-medium px-6 py-2.5 rounded-full shadow-lg hover:bg-rose-gold hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
                                    >
                                        Quick Order
                                    </button>
                                </div>
                            </div>

                            <div className="text-center px-2 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 mb-1 leading-snug">{product.name}</h3>
                                    <p className="text-rose-gold font-bold text-lg mb-4">{product.price}</p>
                                </div>

                                <button
                                    onClick={() => handleOrder(product.name)}
                                    className="w-full lg:hidden bg-soft-pink text-[#8a4e56] border border-rose-gold border-opacity-30 py-2.5 rounded-full font-medium hover:bg-rose-gold hover:text-white transition duration-300"
                                >
                                    Order via WhatsApp
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Products;