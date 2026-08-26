import React from 'react';

const products = [
    { id: 1, name: 'Moisturizing Hand Cream', price: 'Rs. 1,500', img: '/assets/handcream.jpg' },
    { id: 2, name: 'Luxury Satin Scrunchie', price: 'Rs. 800', img: '/assets/scrunchie.jpg' },
    { id: 3, name: 'Heart Pocket Mirror', price: 'Rs. 1,200', img: '/assets/mirror.jpg' },
];

const Products = () => {
    const whatsappNumber = "94770000000";

    const handleOrder = (productName) => {
        const message = `Hello SANÉLIA, I would like to order the ${productName}.`;
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section id="products" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-serif text-center text-rose-gold mb-12">Our Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-soft-pink p-5 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">

                            <div className="h-64 bg-blush rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                                <span className="text-gray-400 font-light">Image goes here</span>
                            </div>
                            <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                            <p className="text-rose-gold font-bold mb-4">{product.price}</p>
                            <button
                                onClick={() => handleOrder(product.name)}
                                className="w-full bg-white text-rose-gold border border-rose-gold py-2 rounded-full hover:bg-rose-gold hover:text-white transition duration-300"
                            >
                                Order via WhatsApp
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;