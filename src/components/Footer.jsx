import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-soft-pink py-12 text-center text-rose-gold border-t border-blush">
            <p className="font-serif text-3xl mb-2">SANÉLIA</p>
            <p className="text-sm text-gray-500 mb-6 font-light tracking-widest uppercase">Gifts • Accessories • Lifestyle</p>
            <div className="flex justify-center space-x-4 mb-8">
                <a
                    href="https://instagram.com/sanelia.aura"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white px-6 py-2 rounded-full shadow-sm text-gray-600 hover:text-rose-gold transition duration-300"
                >
                    Follow @sanelia.aura
                </a>
            </div>
            <p className="text-xs text-gray-400">© 2026 SANÉLIA. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;