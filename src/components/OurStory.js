'use client'
// import React from 'react';
import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup';

const OurStory = () => {
    useEffect(()=>{
        const cleanupAOS=initializeAOS();
        return cleanupAOS
      },[])
    return (
        <div className="bg-gray-50 py-10" data-aos="zoom-in-up">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-950 mb-8 text-center">Our Story</h2>
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Side: Our Story */}
                    <div className="lg:w-1/2  p-10 rounded-lg" data-aos="zoom-in-up">
                    <p className="text-gray-950">
                     Founded in 2016, <strong>ANBRUCH IT</strong> has been at the forefront of delivering exceptional technology solutions and services. From our humble beginnings, we have grown into a trusted partner for businesses seeking innovative and reliable solutions. Our journey began with a vision to transform the industry through cutting-edge technology and a commitment to excellence. Over the years, we have proudly provided top-tier services in software development, IT consulting, and more, consistently exceeding client expectations. In line with our commitment to client success, we also offer bespoke corporate gifting solutions that enhance relationships and foster a positive company culture. Our thoughtfully selected gifts are designed to express gratitude and strengthen bonds with clients and employees alike. As we continue to grow and evolve, our mission remains steadfast: to drive success for our clients through innovation, expertise, and unwavering dedication.
                    </p>

                    </div>

                    {/* Right Side: Images */}
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4" >
                            {/* First row: Two images */}
                            <div className="relative w-full h-40 overflow-hidden rounded-lg" data-aos="zoom-in-up">
                                <img
                                    src="director.jpeg"
                                    alt="Company Image 1"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative w-full h-40 overflow-hidden rounded-lg" data-aos="zoom-in-up">
                                <img
                                    src="https://5.imimg.com/data5/DV/VM/VA/SELLER-7549240/corporate-gifting-solution-500x500.jpg"
                                    alt="Company Image 2"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            {/* Second row: Full-width image */}
                            <div className="relative col-span-2 w-full h-64 overflow-hidden rounded-lg" data-aos="zoom-in-up">
                                <img
                                    src="https://img.omnicard.in/blog_images/2023120112044098791592-CORPORATE-GIFITING-CARD-01_2.png"
                                    alt="Company Image 3"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;
