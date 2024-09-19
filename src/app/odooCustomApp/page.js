'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { initializeAOS } from '@/utils/AosSetup';

const OdooCustomAppPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  return (
    <div>
      <Header />
      <Navbar />

      <main className="container mx-auto py-8 px-4 bg-white">
        {/* Hero Section */}
        <section className="text-center py-24 bg-blue-50" data-aos="zoom-in-up">
          <h1 className="text-5xl font-bold mb-4">Unlock Your Business Potential with Odoo Custom App Development</h1>
          <p className="text-lg md:text-xl mb-8">
            Tailor-made Odoo applications to fit your unique business needs, enhance productivity, and drive growth.
          </p>
          <a href="#features" className="bg-blue-400 text-white py-3 px-6 rounded-lg">
            Discover Features
          </a>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16 bg-gray-100" data-aos="zoom-in-up">
          <h2 className="text-4xl font-bold  p-4 mb-8 text-center">Key Features of Our Odoo Custom Apps</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl text-white font-semibold mt-4 mb-2">Customizable Modules</h3>
              <p className="text-white">Build custom modules tailored to your specific processes, ensuring seamless integration with existing workflows.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl text-white font-semibold mb-2">User-Friendly Interfaces</h3>
              <p className='text-white'>Design intuitive user interfaces that enhance user experience and promote efficient navigation.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl text-white font-semibold mb-2">Advanced Reporting Tools</h3>
              <p className='text-white'>Utilize comprehensive reporting features to gain insights into your operations and make data-driven decisions.</p>
            </div>
            {/* Feature 4 */}
            <div className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl text-white font-semibold mb-2">API Integrations</h3>
              <p className='text-white'>Seamlessly connect with other systems and applications to create a unified tech ecosystem.</p>
            </div>
            {/* Feature 5 */}
            <div className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl  text-white font-semibold mb-2">Mobile Accessibility</h3>
              <p className='text-white'>Access your Odoo apps on-the-go with mobile-friendly designs, enabling productivity anytime, anywhere.</p>
            </div>
            {/* Feature 6 */}
            <div className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl text-white font-semibold mb-2">Dedicated Support</h3>
              <p className='text-white'>Receive ongoing support and maintenance to ensure your custom app evolves with your business needs.</p>
            </div>
          </div>
        </section>

       {/* Development Process Section */}
<section className="mb-16 flex flex-col md:flex-row items-center bg-gray-50" data-aos="zoom-in-up">
  <div className="md:w-1/2 p-4">
    <img 
      src="https://media.licdn.com/dms/image/D5612AQFvVi1RQi2s4A/article-cover_image-shrink_720_1280/0/1683108858545?e=2147483647&v=beta&t=vuDPF_SxmJR5QSAwLD1GpECwLw3FYiDw1z_eK1CrRBc" 
      alt="Development Process"
      className="rounded-lg shadow-lg" 
    />
  </div>
  <div className="md:w-1/2 p-4">
    <h2 className="text-5xl font-bold text-gray-950 mb-8 text-center md:text-left">Our Development Process</h2>
    <p className="mb-4 text-lg text-gray-950">
      Our development process is designed to deliver high-quality, custom solutions that align perfectly with your business objectives.
    </p>
    <ol className="list-decimal list-inside space-y-2">
      <li><strong>Consultation:</strong> We begin by understanding your business needs and objectives.</li>
      <li><strong>Planning:</strong> We create a roadmap detailing features, timelines, and milestones.</li>
      <li><strong>Development:</strong> Our team builds the application, ensuring adherence to best practices and industry standards.</li>
      <li><strong>Testing:</strong> Rigorous testing is conducted to identify and fix any issues before launch.</li>
      <li><strong>Deployment:</strong> We assist with the smooth deployment of your custom app.</li>
      <li><strong>Training & Support:</strong> We provide training for your team and ongoing support to maximize your app's effectiveness.</li>
    </ol>
  </div>
</section>


        
        <section className="bg-gray-50 text-white py-16 text-center" data-aos="zoom-in-up">
          <h2 className="text-3xl text-gray-950 font-semibold mb-4">Ready to Develop Your Custom Odoo App?</h2>
          <p className="mb-8 text-gray-950 ">Contact us today to discuss how we can help you create tailored Odoo solutions that drive your business forward.</p>
          <a href="mailto:info@yourcompany.com" className="bg-blue-500 text-gray-800 py-3 px-6 rounded-lg">
            Email Us
          </a>
        </section>
         {/* Contact Section */}
       <section id="contact" className="py-16 px-4 bg-blue-50">
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

export default OdooCustomAppPage;
