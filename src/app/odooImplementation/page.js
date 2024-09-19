'use client'
import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
// import React from 'react';

const OdooImplementationServicesPage = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
      }, []);
  return (
    <div>
      <Header />
      <Navbar />

      <main className="container mx-auto p-6">
        <section className="mb-2 p-20 bg-blue-50" data-aos="zoom-in-up">
          <h1 className="text-5xl font-bold text-center mb-8">Odoo Implementation Services</h1>
          <p className="text-lg text-gray-700 text-center mb-6">
            Elevate your business processes with our tailored Odoo implementation solutions that fit your unique operational needs.
          </p>
          <div className="flex justify-center mt-8">
            <a href="#services" className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold">
              Explore Our Services
            </a>
          </div>
        </section>

        {/* Odoo Implementation Overview */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg" data-aos="zoom-in-up">
  <h2 className="text-4xl font-bold mb-6 text-center text-blue-900">What We Offer</h2>
  <div className="flex flex-col md:flex-row md:space-x-8">
    <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-4 md:mb-0 md:w-1/2" data-aos="zoom-in-up">
      <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
      <p className="text-lg text-gray-700 mb-4">
        Our Odoo implementation services focus on delivering a robust and flexible ERP solution that enhances your business efficiency. Our approach includes:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Comprehensive needs assessment to understand your requirements.</li>
        <li>Strategic planning to outline the implementation roadmap.</li>
      </ul>
    </div>
    <div className="bg-blue-100 p-6 rounded-lg shadow-md md:w-1/2" data-aos="zoom-in-up">
      <h3 className="text-2xl font-semibold mb-4">Customization & Integration</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Full customization to adapt Odoo to your specific workflows.</li>
        <li>Integration with existing systems for a unified experience.</li>
        <li>Post-implementation reviews to ensure satisfaction and performance.</li>
      </ul>
    </div>
  </div>
</section>


        {/* Key Features Section */}
        <section className="mb-16" data-aos="zoom-in-up">
          <h2 className="text-4xl font-bold mb-8 text-center">Key Features of Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                feature: 'Tailored Solutions',
                details: 'Custom solutions designed to fit your unique business processes and goals.',
              },
              {
                feature: 'Expert Team',
                details: 'A dedicated team of Odoo experts with deep knowledge and experience.',
              },
              {
                feature: 'Comprehensive Support',
                details: 'Ongoing support to ensure your system runs smoothly and efficiently.',
              },
              {
                feature: 'Flexible Integration',
                details: 'Integrate with various third-party applications for seamless operation.',
              },
              {
                feature: 'Data Security',
                details: 'Robust data protection measures to keep your information secure.',
              },
              {
                feature: 'Scalability',
                details: 'Solutions that grow with your business, adapting to changing needs.',
              },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
                <h3 className="text-xl text-white font-semibold mb-2">{item.feature}</h3>
                <p className="text-white">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        
        <section className="mb-4 p-8 bg-white rounded-lg" data-aos="zoom-in-up">
  <h2 className="text-4xl font-bold mb-6 text-center text-blue-900">Unlock the Power of Odoo for Your Business</h2>
  <p className="text-lg text-gray-950 text-center mb-8">
    Discover how Odoo can streamline your operations, enhance productivity, and drive growth.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
      <h3 className="text-xl font-semibold mb-4 text-blue-900">Tailored ERP Solutions</h3>
      <p className="text-gray-950">
        Get a customized ERP experience designed specifically for your business needs.
      </p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
      <h3 className="text-xl font-semibold mb-4 text-blue-900">Seamless Integration</h3>
      <p className="text-gray-950">
        Easily integrate Odoo with your existing systems for a smooth transition.
      </p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
      <h3 className="text-xl font-semibold mb-4 text-blue-900">User-Friendly Interface</h3>
      <p className="text-gray-950">
        Enjoy a clean and intuitive interface that boosts user adoption and engagement.
      </p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
      <h3 className="text-xl font-semibold mb-4 text-blue-900">Robust Analytics</h3>
      <p className="text-gray-950">
        Utilize powerful analytics tools to make informed decisions based on real-time data.
      </p>
    </div>
  </div>
</section>


        {/* Call to Action Section */}
        <section className="bg-gray-100 text-gray-950 p-16 text-center rounded-lg" data-aos="zoom-in-up">
          <h2 className="text-3xl font-semibold mb-4">Start Your Odoo Journey Today!</h2>
          <p className="mb-6">Let us help you implement a solution that empowers your business. Get in touch with our experts!</p>
          <a href="#contact" className="bg-blue-500 text-gray-800 py-3 px-6 rounded-lg text-lg font-semibold">
            Contact Us
          </a>
        </section>
         {/* Contact Section */}
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
          <div className="md:w-1/2" data-aos="zoom-in-up">
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
      </main>

      <Footer />
    </div>
  );
};

export default OdooImplementationServicesPage;
