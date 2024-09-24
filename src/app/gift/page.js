'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link'; // Import Link
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GiftCardPage = () => {
  const giftCards = [
    {
      id: 1,
      image: 'https://lh3.googleusercontent.com/0fVh7YLw9Ir5g3Uj0iOErUTEwHITaAGX2Y83dUNuxob2q-4ZuDlcmMeDqj9XNJ0ny1m1uLw4bbzRtdEwhiyK8uXhEEY9-lZ3rPPtg4w=s750',
      title: 'Amazon E-Gift (Instant Voucher)',
      discount: '4% OFF',
      details: 'Flat 4% OFF | Applicable on payment via UPI',
    },
    {
      id: 2,
      image: 'https://www.jiomart.com/images/cms/offers/1697548436_Jio-mart-910.jpg',
      title: 'Reliance Jio Mart E-Gift (Instant Voucher)',
      details: 'Flat 5% OFF | Applicable on payment via UPI',
      discount: '5% OFF',
    },
    {
      id: 3,
      image: 'https://vouchervia.com/wp-content/uploads/2024/04/gift_voucher-5.png',
      title: 'MakeMyTrip E-Gift (Instant Voucher)',
      details: 'Flat 6% OFF | Applicable on payment via UPI',
      discount: '6% OFF',
    },
    {
      id: 4,
      image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/e-gift-voucher/2/v/u/open-anyone-reliance-smart-bazaar-1000-original-imagwyeg73yfg6dq.jpeg?q=90&crop=false',
      title: 'Reliance Smart Bazaar E-Gift (Instant Voucher)',
      details: 'Flat 3% OFF | Applicable on payment via UPI',
      discount: '3% OFF',
    },
    {
      id: 5,
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/8/442706795/LE/ZX/AA/224032380/big-basket-gift-voucher-service-500x500.jpg',
      title: 'Bigbasket E-Gift (Instant Voucher)',
      details: 'Flat 10% OFF | Applicable on payment via UPI',
      discount: '10% OFF',
    },
    {
      id: 6,
      image: 'https://www.crafin.in/wp-content/uploads/2023/10/1660820710-3.png',
      title: 'Yatra Hotels & Holidays Voucher (Instant Voucher)',
      details: 'Flat 6% OFF | Applicable on payment via UPI',
      discount: '6% OFF',
    },
    {
      id: 7,
      image: 'https://img.paisawapas.com/ovz3vew9pw/2023/08/28191918/Rectangle-2Myntra-Gift-Card.jpg',
      title: 'Myntra E-Gift (Instant Voucher)',
      details: 'Flat 9% OFF | Applicable on payment via UPI',
      discount: '9% OFF',
    },
    {
      id: 8,
      image: 'https://www.bestomart.com/cdn/shop/products/1000074080_large.jpg?v=1632552766',
      title: 'Nykaa E-Gift (Instant Voucher)',
      details: 'Flat 7.5% OFF | Applicable on payment via UPI',
      discount: '7.5% OFF',
    },
    {
      id: 9,
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/11/360943585/GN/KU/DY/144691471/zomato-e-gift.jpg',
      title: 'Zomato E-Gift(Instant Voucher)',
      details: 'Flat 8% OFF | Applicable on payment via UPI',
      discount: '8% OFF',
    },
    {
      id: 10,
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/3/401890609/CM/AB/NJ/154572410/tanishq-gift-card.jpeg',
      title: 'Tanishq Jewellery E-Gift(Instant Voucher)',
      details: 'Flat 12% OFF | Applicable on payment via UPI',
      discount: '12% OFF',
    },
    {
      id: 11,
      image: 'https://www.ezele.in/assets/products/136/Untitled%20design%20(60).png',
      title: 'AJIO E-Gift Card(Instant Voucher)',
      details: 'Flat 11% OFF | Applicable on payment via UPI',
      discount: '11% OFF',
    },
    {
      id: 12,
      image: 'https://m.media-amazon.com/images/I/41HXNSNOSfL.jpg',
      title: 'Reliance Trends E-Gift(Instant Voucher)',
      details: 'Flat 9.5% OFF | Applicable on payment via UPI',
      discount: '9.5% OFF',
    },
  ];

  const [visibleCards, setVisibleCards] = useState(8);

  const handleViewMore = () => {
    setVisibleCards((prev) => prev + 4);
  };

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div>
      <Navbar />

      {/* Carousel Section */}
      {/* Carousel Section */}
<div className="max-w-8xl">
  <Slider {...carouselSettings}>
    {giftCards.map((card) => (
      <div key={card.id} className="relative cursor-pointer">
        <Link href="/contact">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-96 object-cover object-center rounded-lg"
            style={{ imageRendering: 'crisp-edges' }} // Optional: improve rendering
          />
        </Link>
      </div>
    ))}
  </Slider>
</div>


      {/* Gift Cards Section */}
      <div className="max-w-8xl py-8 mx-auto p-0 mb-12">
        <h1 className="text-3xl font-bold text-left mb-6">Hot Deals and Best Sellers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {giftCards.slice(0, visibleCards).map((card) => (
            <Link key={card.id} href="/contact">
              <div className="relative border rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-14 left-0 bg-green-600 text-white text-xs font-normal py-1 px-2 rounded">
                  {card.discount}
                </div>
                <div className="p-3">
                  <h2 className="text-sm font-semibold mt-4">{card.title}</h2>
                  <p className="text-sm text-gray-600">{card.details}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        {visibleCards < giftCards.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleViewMore}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              View More
            </button>
          </div>
        )}
      </div>

      {/* Buy One Get One Section */}
      <div className="max-w-8xl mx-auto my-4">
        <h2 className="text-2xl font-bold text-left mb-4">Buy One Get One</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <Link href="/contact">
            <div className="relative border rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="https://img.cryptorefills.com/logos_v2/kaylyan-gold-jewellery.webp"
                alt="Kalyan Gold Jewellery E-Gift Card"
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h5 className="text-sm font-semibold">Kalyan Gold Jewellery E-Gift Card - Buy 1 Get 1</h5>
                <p className="text-sm text-gray-600">Use code KALYANGOLD to get a complimentary discount</p>
              </div>
            </div>
          </Link>
          <Link href="/contact">
            <div className="relative border rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="https://m.media-amazon.com/images/I/3104GYbY%2B7L.jpg"
                alt="Pantaloons E-Gift Card"
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h2 className="text-sm font-semibold">Pantaloons E-Gift Card - Buy 1 Get 1</h2>
                <p className="text-sm text-gray-600">Buy a Pantaloons E-Gift Card and get a Discount of 18%</p>
              </div>
            </div>
          </Link>
          <Link href="/contact">
            <div className="relative border rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="https://res-1.cloudinary.com/linkisin/image/upload/v1672394468/zingoy/SEO/Flipkart-GiftCard-SEO-Banner.jpg"
                alt="Flipkart E-Gift Card"
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h2 className="text-sm font-semibold">Flipkart E-Gift Card Voucher - Buy 1 Get 1</h2>
                <p className="text-sm text-gray-600">Use Voucher Code of Flipkart and get a Flat Discount of 17%</p>
              </div>
            </div>
          </Link>
          <Link href="/contact">
            <div className="relative border rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="https://www.tescogiftcards.com/product/30/faceplate"
                alt="Nike E-Gift Card"
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h2 className="text-sm font-semibold">Nike E-Gift Card Voucher - Buy 1 Get 1</h2>
                <p className="text-sm text-gray-600">Use Voucher Code and Get a complimentary Discount of 20%</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GiftCardPage;
