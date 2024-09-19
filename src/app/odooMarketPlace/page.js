'use client'
import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
// import React from 'react';

const OdooMarketplacePage = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
      }, []);
  return (
    
    <div className="container mx-auto p-6">
        <Navbar />
      <section className="mb-16 py-24 bg-blue-50" data-aos="zoom-in-up">
        <h1 className="text-5xl font-bold text-center mb-8">Welcome to the Odoo Marketplace</h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Discover a comprehensive selection of applications tailored to enhance your Odoo experience and boost your business efficiency.
        </p>
        <div className="flex justify-center mt-8">
            <a href="#services" className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold">
              Explore Our Services
            </a>
          </div>
      </section>

      <section className="mb-16" data-aos="zoom-in-up">
        <h2 className="text-4xl font-bold mb-8 text-center">Why Odoo Marketplace Stands Out</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Diverse Application Range',
              description: 'From CRM to inventory management, find applications that cover a wide array of business functions, ensuring all your needs are met.',
              imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-digital-natives-illustration_23-2151254808.jpg', // Replace with your image path
            },
            {
              title: 'User-Friendly Interface',
              description: 'Navigate through the Marketplace effortlessly, making it easy to find and install apps without any technical expertise.',
              imageUrl: 'https://boomaff.com/wp-content/uploads/2024/03/snapedit_1711719541397-1024x512.webp', // Replace with your image path
            },
            {
              title: 'Reliable Updates & Support',
              description: 'Receive continuous updates and dedicated support from developers, ensuring your applications remain functional and relevant.',
              imageUrl: 'https://www.timetac.com/media/blog/blog-en-timetac-sso-cover-1-1.png', // Replace with your image path
            },
          ].map((item, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105" data-aos="zoom-in-up">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" data-aos="zoom-in-up" />
              <h3 className="text-xl text-gray-950 font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-950 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-gray-50 p-8 rounded-lg" data-aos="zoom-in-up">
  <h2 className="text-5xl font-extrabold mb-8 text-center text-indigo-600">Enhance Your Odoo Journey</h2>
  <p className="text-lg text-gray-950 text-center mb-6 max-w-2xl mx-auto">
    Discover the power of Odoo through our extensive Marketplace, tailored to elevate your business efficiency. Here are some tips to get started:
  </p>
  <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700 mx-auto max-w-4xl">
    <li className="flex items-start">
      <span className="text-indigo-600 text-xl mr-2">✔️</span>
      <span className='text-gray-950'>Explore featured apps to find innovative solutions for your unique challenges.</span>
    </li>
    <li className="flex items-start">
      <span className="text-indigo-600 text-xl mr-2">✔️</span>
      <span className='text-gray-950'>Read comprehensive guides and tutorials to fully leverage each tool.</span>
    </li>
    <li className="flex items-start">
      <span className="text-indigo-600 text-xl mr-2">✔️</span>
      <span className='text-gray-950'>Connect with a community of users to share experiences and best practices.</span>
    </li>
    <li className="flex items-start">
      <span className="text-indigo-600 text-xl mr-2">✔️</span>
      <span className='text-gray-950'>Take advantage of free trials to evaluate apps before committing.</span>
    </li>
  </ol>
</section>


      <section className="mb-16" data-aos="zoom-in-up">
        <h2 className="text-4xl font-bold mb-8 text-center">Join Our Community</h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Become part of a thriving community of Odoo users and developers. Share your experiences, get support, and collaborate on projects.
        </p>
        <div className="text-center">
          <a href="/community" className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold">
            Join the Community
          </a>
        </div>
      </section>
      <section id="contact" className="py-16 px-4 bg-blue-50" data-aos="zoom-in-up">
        <div className="container mx-auto flex flex-col md:flex-row items-start">
          {/* Contact Information */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are here to answer your questions and help you get started on your path to success.
            </p>
            <ul className="text-gray-700">
              <li className="flex items-center mb-4"><svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" /></svg><strong>Phone:</strong> +1 (123) 456-7890</li>
              <li className="flex items-center mb-4"><svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" /></svg><strong>Email:</strong> info@anbruchIT.com</li>
              <li className="flex items-center"><svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" /></svg><strong>Address:</strong>D-76,Noida Sector 62,Uttar Pradesh,201301</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 " data-aos="zoom-in-up">
            <form className="bg-royal-blue p-8 rounded-lg shadow-lg">
              <div className="flex flex-col mb-6">
                <label htmlFor="name" className="text-lg font-medium mb-2 text-white">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="text-lg font-medium mb-2 text-white">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="message" className="text-lg font-medium mb-2 text-white">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OdooMarketplacePage;
