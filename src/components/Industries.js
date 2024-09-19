'use client'
import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const Industries = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
      }, []);
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* <Header />
      <Navbar /> */}

      {/* Hero Section */}
      <section className="py-16 text-center text-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We Serve
          </h1>
          <p className="text-lg md:text-xl">
            Discover how our innovative solutions impact a diverse range of industries.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-8 px-2">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="zoom-in-up">
          {/* Card 1 */}
          <Link href='/industry1' legacyBehavior>
            <a className="relative block bg-blue-950 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src="https://www.dbswebsite.com/uploads/DBS-20240126-article-homepage-great-design-healthcare-website-PX-5505955421-min.jpg"
                  alt="Healthcare"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative z-10">
                <h2 className="text-2xl font-semibold mb-3">Healthcare</h2>
                <p>
                  Tailored solutions for the healthcare industry that enhance patient care and operational efficiency.
                </p>
              </div>
            </a>
          </Link>

          {/* Card 2 */}
          <Link href='/industry2' legacyBehavior>
            <a className="relative block bg-blue-950 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src="https://www.keyideasinfotech.com/wp-content/uploads/2022/10/finance-thumb.webp"
                  alt="Finance"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative z-10">
                <h2 className="text-2xl font-semibold mb-3">Finance</h2>
                <p>
                  Enhance security, compliance, and performance in the financial sector with our advanced solutions.
                </p>
              </div>
            </a>
          </Link>

          {/* Card 3 */}
          <Link href='/industry3' legacyBehavior>
            <a className="relative block bg-blue-950 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src="https://media.istockphoto.com/id/1405760376/vector/online-shopping-design-graphic-elements-signs-symbols-mobile-marketing-and-digital-marketing.jpg?s=612x612&w=0&k=20&c=2DSpkY9ktsAfzBOcZUMkZThW3B6kvGYG1cHQ3yeaPJg="
                  alt="Retail"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative z-10">
                <h2 className="text-2xl font-semibold mb-3">Retail</h2>
                <p>
                  Transform the retail experience with solutions designed to streamline operations and boost sales.
                </p>
              </div>
            </a>
          </Link>

          {/* Card 4 */}
          <Link href='/industry4' legacyBehavior>
            <a className="relative block bg-blue-950 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src="https://img.freepik.com/premium-photo/automation-hightech-machinery-factory-show-industrial-automation_1037297-54997.jpg"
                  alt="Manufacturing"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative z-10">
                <h2 className="text-2xl font-semibold mb-3">Manufacturing</h2>
                <p>
                  Improve productivity and supply chain management with our advanced manufacturing solutions.
                </p>
              </div>
            </a>
          </Link>

          {/* Card 5 */}
          {/* <Link href='/industry5' legacyBehavior>
            <a className="relative block bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src="https://source.unsplash.com/random/800x600?education"
                  alt="Education"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative z-10">
                <h2 className="text-2xl font-semibold mb-3">Education</h2>
                <p>
                  Enhance learning experiences and streamline administration with our innovative educational solutions.
                </p>
              </div>
            </a>
          </Link> */}
        </div>
      </section>

      

      {/* Inline Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Industries;
