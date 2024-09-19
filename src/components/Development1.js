'use client';
import { initializeAOS } from '@/utils/AosSetup';
import React, { useEffect, useState, useRef } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const Development = () => {
  useEffect(()=>{
    const cleanupAOS=initializeAOS();
    return cleanupAOS

  },[])
  
  // const [isVisible, setIsVisible] = useState(false);
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         observer.disconnect(); // Stop observing once visible
  //       }
  //     },
  //     {
  //       threshold: 0.1 // Trigger when 10% of the element is visible
  //     }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

  // const slideUpStyle = {
  //   opacity: isVisible ? 1 : 0,
  //   transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  //   transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  // };

  return (
    <div>
      <Header />
      <Navbar />
      

       <div className="relative bg-white text-black py-6 px-4">
        <div className="absolute inset-0 bg-white opacity-50"></div> {/* Dark overlay for better text contrast */}
        <div className="relative container mx-auto text-center">
         

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          

         

            

            {/* Testing Card */}
            <div className="bg-blue-950 text-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl" data-aos="zoom-in-up">
              <img
                src='https://www.thinktank.de/wp-content/uploads/2022/12/Tests-in-Softwareentwicklung.webp'
                alt='Testing'
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">Testing</h2>
              <p className="text-sm mb-4">
                We offer comprehensive testing services to ensure your applications are reliable, secure, and perform optimally across various platforms.
              </p>
            </div>

            {/* CMS Development Card */}
            <div className="bg-blue-950 text-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl" data-aos="zoom-in-up">
              <img
                src='https://a1websolution.com/wp-content/uploads/2019/11/cms-web-development-company.png'
                alt='CMS Development'
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">CMS Development</h2>
              <p className="text-sm mb-4">
                Develop a content management system to easily manage website content.
              </p>
            </div>

            {/* API Development Card */}
            <div className="bg-blue-950 text-white p-4 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl" data-aos="zoom-in-up">
              <img
                src='https://www.shutterstock.com/image-photo/api-application-programming-interface-concept-600nw-2488695785.jpg'
                alt='API Development'
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">API Development</h2>
              <p className="text-sm mb-4">
                Integrate with third-party applications to extend functionality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Development;
