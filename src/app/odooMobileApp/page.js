'use client';
import { initializeAOS } from '@/utils/AosSetup';
import React, { useEffect } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
// import React from 'react';

const OdooMobileAppDevelopmentPage = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
      }, []);
  return (
    <div>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <header className="relative bg-blue-50 text-gray-950 py-24" data-aos="zoom-in-up">
        <div className="absolute inset-0 opacity-40 "></div>
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-5xl font-bold leading-tight">
            Transform Your Business with Odoo Mobile Apps
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto font-semibold">
            Our Odoo mobile app development services empower your business with custom, user-friendly mobile solutions that enhance productivity and engagement.
          </p>
          <div className="mt-8">
            <a href="#services" className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold">
              Explore Our Services
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-4 px-2 bg-gray-100">
        {/* Services Section */}
       
        <section id="services" className="mb-16 bg-white p-8 rounded-lg " data-aos="zoom-in-up">
  <h2 className="text-4xl font-bold mb-8 text-center">Our Odoo Mobile App Development Services</h2>
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: 'Custom Mobile App Development',
        description: 'Tailor-made mobile applications that align with your specific business needs and processes.',
        imageUrl: 'https://cdnwebkul.webkul.com/wp-content/uploads/2022/01/odoo_mobile__app_development.png'
      },
      {
        title: 'Odoo Integration',
        description: 'Seamlessly integrate mobile apps with your existing Odoo ERP system for real-time data access.',
        imageUrl: 'https://www.flowgear.net/wp-content/uploads/2022/06/Odoo@4x.png'
      },
      {
        title: 'UI/UX Design',
        description: 'Intuitive and user-friendly designs to enhance user engagement and satisfaction.',
        imageUrl: 'https://odoocdn.com/web/image/4778165'
      },
      {
        title: 'Maintenance & Support',
        description: 'Ongoing support and updates to ensure optimal performance of your mobile applications.',
        imageUrl: 'https://softhealer.com/theme_softhealer_website/static/src/img/images/odoo_support/about.webp'
      },
      {
        title: 'Cross-Platform Development',
        description: 'Build apps that work seamlessly on both iOS and Android platforms, maximizing your reach.',
        imageUrl: 'https://cdnwebkul.webkul.com/wp-content/uploads/2021/09/Odoo-Connector-og.png'
      },
      {
        title: 'App Testing & Quality Assurance',
        description: 'Rigorous testing to ensure your mobile app is bug-free and performs optimally.',
        imageUrl: 'https://testorigen.com/wp-content/uploads/2023/06/imgpsh_fullsize_anim-24-800x389-1.jpg'
      },
    ].map((service, index) => (
      <div key={index} className="rounded-lg overflow-hidden shadow-lg" data-aos="zoom-in-up">
        <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
        <div className="p-3 bg-blue-50" data-aos="zoom-in-up">
          <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
          <p className="text-base text-gray-900 text-center">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>



        {/* Development Process Section */}
        <section className="mb-16 p-2 bg-gray-100 rounded-lg " data-aos="zoom-in-up">
  <h2 className="text-4xl font-bold mb-8 text-gray-950 text-center">Exploring Innovative Technology Trends</h2>
  <p className="mb-6 text-lg text-gray-950 text-center">
    In the rapidly evolving world of mobile applications, staying ahead of technology trends is essential for success.
  </p>
  <div className="grid gap-4 md:grid-cols-2">
    <div className="p-6 bg-royal-blue rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl text-white font-semibold mb-2">Artificial Intelligence</h3>
      <p className="text-white">
        Integrating AI for enhanced personalization and user experience.
      </p>
    </div>
    <div className="p-6 bg-royal-blue rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl  text-white font-semibold mb-2">Augmented Reality</h3>
      <p className="text-white">
        Utilizing AR to create immersive and engaging app experiences.
      </p>
    </div>
    <div className="p-6 bg-royal-blue rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl text-white font-semibold mb-2">Internet of Things (IoT)</h3>
      <p className="text-white">
        Connecting devices to enable seamless interaction and data sharing.
      </p>
    </div>
    <div className="p-6 bg-royal-blue rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl text-white font-semibold mb-2">Cloud Computing</h3>
      <p className="text-white">
        Leveraging cloud solutions for scalability and accessibility of apps.
      </p>
    </div>
    <div className="p-6 bg-royal-blue rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl text-white font-semibold mb-2">5G Technology</h3>
      <p className="text-white">
        Harnessing the power of 5G for faster and more reliable mobile connectivity.
      </p>
    </div>
    <div className="p-6 bg-royal-blue rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl text-white font-semibold mb-2">Blockchain</h3>
      <p className="text-white">
        Implementing blockchain for enhanced security and transparency in transactions.
      </p>
    </div>
    <div className="p-6 bg-royal-blue rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl text-white font-semibold mb-2">Voice Assistants</h3>
      <p className="text-white">
        Integrating voice technology for hands-free user interactions and convenience.
      </p>
    </div>
    <div className="p-6 bg-royal-blue rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl text-white font-semibold mb-2">Wearable Technology</h3>
      <p className="text-white">
        Developing apps that connect with wearable devices for health tracking and monitoring.
      </p>
    </div>
  </div>
</section>


        {/* Benefits Section */}
        <section className="bg-blue-50 py-16 text-center" data-aos="zoom-in-up">
          <h2 className="text-4xl font-extrabold text-gray-950 mb-8">
            Why Choose Us for Odoo Mobile App Development?
          </h2>
          <ul className="list-disc list-inside space-y-2 mx-auto max-w-2xl text-lg text-gray-950">
            <li>In-depth expertise in Odoo and mobile app development.</li>
            <li>Custom solutions tailored to your unique business needs.</li>
            <li>Commitment to quality and user satisfaction.</li>
            <li>Timely delivery and adherence to budgets.</li>
            <li>Ongoing support to ensure your app's success.</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 text-gray-950 py-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg mb-8">
            Contact us today to discuss your Odoo mobile app development needs!
          </p>
          <a href="#contact" className="bg-blue-500 text-gray-800 py-3 px-6 rounded-lg text-lg font-semibold">
            Get in Touch
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

export default OdooMobileAppDevelopmentPage;
