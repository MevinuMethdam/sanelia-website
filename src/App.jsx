import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Products from './components/Products';
import FeedbackSection from './components/FeedbackSection';
import GiftAssistant from './components/GiftAssistant';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-soft-pink font-sans text-gray-800">
            <Navbar />
            <Hero />
            <Story />
            <Products />
            <FeedbackSection />
            <Footer />
            <GiftAssistant />
        </div>
    );
}

export default App;