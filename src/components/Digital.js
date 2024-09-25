'use client';
import { initializeAOS } from '@/utils/AosSetup';
import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const Digital = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* <Header /> */}
            {/* <Navbar /> */}

            {/* Hero Section */}
            <section className="py-8 text-black text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Revolutionizing Business with Cutting-Edge Digital <br /> Solutions
                    </h1>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-8 px-4">
                <div className="container mx-auto" data-aos="zoom-in-up">

                    {/* First Row of Cards */}
                    <div className="flex flex-wrap gap-4 mb-4 text-center">
                        {/* Card 1 */}
                        <Link href='/card1' legacyBehavior>
                            <a className="relative bg-blue-50 text-black rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[250px] h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center p-4" data-aos="zoom-in-up">
                                <div className="text-center" data-aos="zoom-in-up">
                                    <div className="text-3xl md:text-4xl mb-4">📊</div> {/* Analytics Icon */}
                                    <h2 className="text-lg md:text-xl font-semibold mb-2">Advisory & Strategy</h2>
                                    <p className="text-sm md:text-base text-black">
                                        At Anbruch, we empower businesses to reach their goals with cutting-edge planning, execution, and optimisation strategies. Our solutions, crafted to fit each client’s unique needs, focus on maximising efficiency and fostering growth, ensuring long-term success in a dynamic market.
                                    </p>
                                </div>
                            </a>
                        </Link>

                        {/* Card 2 */}
                        <Link href='/card2' legacyBehavior>
                            <a className="relative bg-blue-50 text-black rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[250px] h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center p-4" data-aos="zoom-in-up">
                                <div className="text-center" data-aos="zoom-in-up">
                                    <div className="text-3xl md:text-4xl mb-4">💻</div> {/* Development Icon */}
                                    <h2 className="text-lg md:text-xl font-semibold mb-2">Design & Build</h2>
                                    <p className="text-sm md:text-base text-black">
                                        Empowering organisations to design and build transformative software solutions with ease. We craft user-centric interfaces and strategies to ensure optimal software utilisation, driving innovation and efficiency through customised implementations.
                                    </p>
                                </div>
                            </a>
                        </Link>

                        {/* Card 3 */}
                        <Link href='/card3' legacyBehavior>
                            <a className="relative bg-blue-50 text-black rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[250px] h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center p-4" data-aos="zoom-in-up">
                                <div className="text-center" data-aos="zoom-in-up">
                                    <div className="text-3xl md:text-4xl mb-4">☁️</div> {/* Cloud Icon for Integration */}
                                    <h2 className="text-lg md:text-xl font-semibold mb-2">End-to-End Integration</h2>
                                    <p className="text-sm md:text-base text-black">
                                        Unlocking business potential by seamlessly integrating our solutions with their existing systems. By enhancing ROI and streamlining operations, we ensure a smooth data flow and improved efficiency, driving greater effectiveness across the organisations.
                                    </p>
                                </div>
                            </a>
                        </Link>
                    </div>

                    {/* Second Row of Cards */}
                    <div className="flex flex-wrap gap-4 text-center" data-aos="zoom-in-up">
                        {/* Card 4 */}
                        <Link href='/card4' legacyBehavior>
                            <a className="relative bg-blue-50 text-black rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[250px] h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center p-4">
                                <div className="text-center" data-aos="zoom-in-up">
                                    <div className="text-3xl md:text-4xl mb-4">🖥️</div> {/* Server Icon for Managed Services */}
                                    <h2 className="text-lg md:text-xl font-semibold mb-2">Managed Services</h2>
                                    <p className="text-sm md:text-base text-black">
                                        Expertise in maintaining and enhancing services with agility, combined with comprehensive training solutions. Our flexibility guarantees seamless transitions and optimised performance, empowering your team to thrive and excel in their roles.
                                    </p>
                                </div>
                            </a>
                        </Link>

                        {/* Card 5 */}
                        <Link href='/card5' legacyBehavior>
                            <a className="relative bg-blue-50 text-black rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[250px] h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center p-4" data-aos="zoom-in-up">
                                <div className="text-center" data-aos="zoom-in-up">
                                    <div className="text-3xl md:text-4xl mb-4">🔍</div> {/* Bug Icon for Testing */}
                                    <h2 className="text-lg md:text-xl font-semibold mb-2">Testing Services</h2>
                                    <p className="text-sm md:text-base text-black">
                                        Leveraging the power of automation testing for functional and regression testing, including nightly runs, to ensure reliability. Optimising the businesses through seamless integration, performance, and security testing for robust software solutions.
                                    </p>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* <Footer /> */}

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

export default Digital;
