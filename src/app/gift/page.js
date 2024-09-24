import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const GiftCardPage = () => {
    
  const giftCards = [
    {
      id: 1,
      image: 'https://lh3.googleusercontent.com/0fVh7YLw9Ir5g3Uj0iOErUTEwHITaAGX2Y83dUNuxob2q-4ZuDlcmMeDqj9XNJ0ny1m1uLw4bbzRtdEwhiyK8uXhEEY9-lZ3rPPtg4w=s750', // Replace with your image URL
      title: 'Amazon E-Gift (Instant Voucher)',
      discount: '4% OFF',
      details: 'Flat 4% OFF | Applicable on payment via UPI',
    },
    {
      id: 2,
      image: 'https://www.jiomart.com/images/cms/offers/1697548436_Jio-mart-910.jpg', // Replace with your image URL
      title: 'Reliance Jio Mart E-Gift (Instant Voucher)',
      details: 'Flat 5% OFF | Applicable on payment via UPI',
      discount: '5% OFF',
    },
    {
      id: 3,
      image: '/path/to/make-my-trip-gift-card.jpg', // Replace with your image URL
      title: 'MakeMyTrip E-Gift (Instant Voucher)',
      details: 'Flat 6% OFF | Applicable on payment via UPI',
      discount: '6% OFF',
    },
    {
      id: 4,
      image: '/path/to/reliance-smart-bazaar-gift-card.jpg', // Replace with your image URL
      title: 'Reliance Smart Bazaar E-Gift (Instant Voucher)',
      details: 'Flat 3% OFF | Applicable on payment via UPI',
      discount: '3% OFF',
    },
  ];

  return (
    <div>
        <Navbar/>
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-6">Hot Deals and Best Sellers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {giftCards.map((card) => (
          <div key={card.id} className="relative border rounded-lg overflow-hidden shadow-lg">
            <img 
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
              {card.discount}
            </div>
            <div className="p-4">
              <h2 className="font-semibold">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default GiftCardPage;
