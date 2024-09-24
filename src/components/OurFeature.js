'use client';
import { initializeAOS } from '@/utils/AosSetup';
import { useEffect } from 'react';

import React from 'react';
import { FaPaintBrush, FaLaptopCode, FaCheckCircle, FaRocket } from 'react-icons/fa'; // Import icons from react-icons

const OurFeature = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  return (
    <div className="relative py-4 px-6 bg-black" data-aos="zoom-in-up">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Why Choose Us</h1>
        <hr className="w-24 mx-auto border-blue-600 border-t-4 mb-6" />
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image */}
        <div className="md:w-1/2 flex-shrink-0">
          <img 
            src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700426881.jpg" 
            alt="Feature Image" 
            className="w-full h-[500px] object-cover rounded-lg shadow-lg" 
          />
        </div>
        
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          {/* Description */}
          <p className="text-white font-semibold  text-semibold text-xl leading-relaxed">Design the Concept of Your Business Idea Now</p>
          {/* Features List */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaPaintBrush className="text-3xl text-blue-500" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Product Design</h3>
                <p className="text-white text-lg">Crafting user-centric designs that make your product stand out and resonate with your audience, making it truly unique and impactful.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaLaptopCode className="text-3xl text-green-500" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Development</h3>
                <p className="text-white text-lg">Building scalable and robust solutions tailored to your needs. We ensure reliable software integration and modernize your legacy systems.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-3xl text-yellow-500" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Quality Assurance</h3>
                <p className="text-white text-lg">Ensuring your product is bug-free and meets the highest standards through comprehensive testing and validation processes.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaRocket className="text-3xl text-red-500" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Launch & Optimization</h3>
                <p className="text-white text-lg">Launching your product with a strategic approach and optimizing it for performance and user engagement to ensure long-term success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default OurFeature;
