'use client'
import React, { useEffect, useState, useRef } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
// import React from 'react';

const WebDevelopmentPage = () => {
  useEffect(()=>{
    const cleanupAOS=initializeAOS();
    return cleanupAOS

  },[])
  const [isFormVisible, setFormVisible] = useState(false);

  // Styles for the container
  const containerStyle = {
      backgroundColor: 'rgb(243 244 246)',
      height: '350px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
  }; 
  return (
    <div>
      <Header />
      <Navbar />

      <main className="bg-gray-100">
        {/* Hero Section */}
        <section className="relative bg-blue-100 text-gray-950 py-24">
          <div className="absolute inset-0 bg-gray-100 opacity-50"></div> {/* Dark overlay */}
          <div className="relative container mt-16  text-center">
            <h1 className="text-5xl font-extrabold mb-4">Web Development</h1>
            <p className="text-xl mb-8">
              Crafting high-performance websites tailored to your business needs.
            </p>
            <a href="/contact" className="bg-blue-950 text-white py-3 px-6 rounded-lg font-semibold text-lg  transition duration-300">
                        Get Started
                    </a>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12" data-aos="zoom-in-up">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
            <p className="text-lg mb-8">
              We specialize in creating dynamic and engaging websites that drive results. From custom web development to responsive design, our team delivers top-notch solutions.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Service Card 1 */}
              <div className="bg-blue-950 text-white p-16 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4">Custom Web Development</h3>
                <p className="text-sm mb-4">
                  Tailored web solutions that fit your unique business needs. Our team builds scalable and robust applications from the ground up.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-blue-950 text-white p-16 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4">Responsive Design</h3>
                <p className="text-sm mb-4">
                  Ensure your website looks great on any device. Our responsive designs offer a seamless user experience across all platforms.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-blue-950 text-white p-16 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h3>
                <p className="text-sm mb-4">
                  Launch your online store with ease. We provide comprehensive e-commerce solutions to help you sell products and services effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="bg-gray-200 py-12">
  <div className="container mx-auto text-center" data-aos="zoom-in-up">
    <h2 className="text-3xl text-gray-950 font-semibold mb-6">Our Web Development Projects</h2>
    <p className="text-lg text-gray-950 mb-8">
      Explore our latest web development projects that showcase our expertise in creating innovative and responsive websites.
    </p>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Project 1 */}
      <div className="bg-white text-black p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <img
          src='https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg'
          alt='E-Commerce Platform'
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
        <p className="text-lg">
          Developed a fully responsive e-commerce site with user-friendly navigation and secure payment integration.
        </p>
      </div>

      {/* Project 2 */}
      <div className="bg-white text-black p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <img
          src='https://a.storyblok.com/f/99519/1100x619/1bd432fd52/website-project-management-build-phase.png'
          alt='Portfolio Website'
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
        <p className="text-lg">
          Crafted a sleek portfolio website for a photographer, highlighting their work with an interactive gallery.
        </p>
      </div>

      {/* Project 3 */}
      <div className="bg-white text-black p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <img
          src='https://www.bleap.in/public/home/images/corporate.png' // Replace with a real image URL
          alt='Corporate Website'
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Corporate Website</h3>
        <p className="text-lg">
          Built a modern corporate website that enhances brand presence and provides essential information to clients.
        </p>
      </div>

      {/* Project 4 */}
      <div className="bg-white text-black p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <img
          src='https://www.loa.it/editheme/img/features/05.jpg' // Replace with a real image URL
          alt='Blog Platform'
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Blog Platform</h3>
        <p className="text-lg">
          Developed a dynamic blog platform with robust CMS features for easy content management and publishing.
        </p>
      </div>

      {/* Project 5 */}
      <div className="bg-white text-black p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <img
          src='https://www.webindiamaster.com/assests/images/blog/real-estate-website-design-noida.jpg' // Replace with a real image URL
          alt='Real Estate Website'
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Real Estate Website</h3>
        <p className="text-lg">
          Created an interactive real estate platform with advanced search functionality and property listings.
        </p>
      </div>

      {/* Project 6 */}
      <div className="bg-white text-black p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <img
          src='https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg' // Replace with a real image URL
          alt='Online Learning Portal'
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Online Learning Portal</h3>
        <p className="text-lg">
          Developed a comprehensive online learning platform with course management and user engagement features.
        </p>
      </div>
    </div>
  </div>
</section>
<div style={containerStyle} data-aos="zoom-in-up">
            <div className="relative container mx-auto text-center py-18 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
  Ready to Transform Your Online Presence?
</h1>
<p className="text-lg md:text-lg mb-8">
  Connect with us today to explore our web development services and discover how we can help you create a stunning, user-friendly website that drives results and engages your audience.
</p>

 



            </div>

                <div>
                    <button
                        type="button"
                        style={{
                            padding: '0.75rem 2.5rem',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            backgroundColor: 'rgb(29 78 216)',
                            color: 'black',
                            borderRadius: '0.5rem',
                            border: '1px solid #E5E7EB',
                            transition: 'background-color 0.2s, color 0.2s, transform 0.2s',
                        }}
                        onClick={() => setFormVisible(true)}
                    >
                        CONTACT US
                    </button>
                </div>

                {isFormVisible && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                            <h2 className="text-xl mb-4">Contact Us</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                                <input type="text" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                                <input type="text" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" rows="4"></textarea>
                            </div>
                            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                Send Message
                            </button>
                            <button
                                type="button"
                                className="mt-2 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                onClick={() => setFormVisible(false)}
                            >
                                Close
                            </button>
                        </form>
                    </div>
                )}
            </div>


        

      </main>

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
