import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const GiftCard = () => {
    return (
        <div>
            <Navbar />
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-12 px-4 sm:px-12 lg:px-8">
            
            <div className="max-w-3xl w-full py-24">
                <h1 className="text-4xl font-extrabold text-gray-800 text-center">
                    Company Gift Cards: Celebrating Our Team and Clients
                </h1>
                <p className="mt-2 text-lg text-gray-600 text-center">
                    At [AnbruchIT], we believe in recognizing hard work and fostering relationships. Our gift cards are a token of appreciation for our employees and clients, celebrating milestones, achievements, and special occasions.
                </p>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Who Receives Our Gift Cards?</h2>
                    <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Employees:</strong> To celebrate achievements, anniversaries, and outstanding performance.</li>
                        <li><strong>Clients:</strong> As a gesture of gratitude for their partnership and trust in our services.</li>
                        <li><strong>Partners:</strong> To strengthen business relationships and show appreciation.</li>
                        <li><strong>Community Contributors:</strong> Acknowledging those who support our initiatives and values.</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Why Our Gift Cards Matter</h2>
                    <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                        <li>**Recognition of Efforts**: Gift cards serve as a tangible acknowledgment of hard work and dedication.</li>
                        <li>**Boosts Morale**: Encourages a positive work environment and strengthens team spirit.</li>
                        <li>**Strengthens Relationships**: Fosters loyalty and appreciation between clients and the company.</li>
                        <li>**Versatile Usage**: Recipients can use the gift cards for various products or services that benefit them.</li>
                    </ul>
                </div>

                <div className="mt-8 text-center">
                    <a href="/about" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-colors duration-300">
                        Learn More About Our Company
                    </a>
                </div>
            </div>
            
        </div>
        <Footer/>
        </div>
    );
};

export default GiftCard;
