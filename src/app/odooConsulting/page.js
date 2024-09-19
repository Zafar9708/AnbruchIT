'use client'
import Footer from '@/components/Footer';
import { initializeAOS } from '@/utils/AosSetup';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';

const OdooConsultingPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  return (
    <div>
      <Header />
      <Navbar />

      {/* Updated Hero Section Design */}
      <header className="relative bg-blue-50 text-gray-950 py-24" data-aos="zoom-in-up">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-blue-50 to-blue-100"></div>
        <div className="relative z-10 container mx-auto text-center mt-14 mb-1">
          <h1 className="text-5xl font-bold leading-tight relative">
            Unlock the Full Potential of Your Business with Odoo
            <span className="absolute inset-0 bg-gradient-to-r opacity-30 rounded-lg"></span>
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-6xl mx-auto font-semibold leading-relaxed">
            Our expert Odoo consulting services are designed to help you optimize your operations, enhance productivity, and achieve your business goals. Leverage our experience to streamline your processes and drive significant growth.
          </p>
          <div className="mt-8">
            <a href="#services" className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold">
              Explore Our Services
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-4 px-2 bg-gray-100" data-aos="zoom-in-up">
        {/* Hero Section */}
        <section className="text-center mb-16 mt-1">
          <h2 className="text-4xl text-gray-950 font-bold mb-4">
            Elevate Your Operations with Expert Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-950 max-w-4xl mx-auto font-semibold leading-relaxed">
            Discover innovative Odoo strategies tailored to your specific business challenges. Our consulting services are designed to enhance productivity, optimize workflows, and drive measurable results.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Services
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { 
                title: 'Odoo ERP Integration', 
                description: 'Seamlessly integrate Odoo ERP with your current systems and platforms to streamline your operations.', 
                details: [
                  'Automate routine tasks and processes.',
                  'Improve data accuracy and consistency.',
                  'Enhance collaboration across departments.',
                  'Reduce operational costs through better resource management.'
                ],
              },
              { 
                title: 'Odoo Custom Development', 
                description: 'Develop custom Odoo modules tailored to your specific business needs for enhanced functionality.', 
                details: [
                  'Create bespoke features and functionalities.',
                  'Integrate with third-party applications.',
                  'Enhance user experience with custom interfaces.',
                  'Provide scalable solutions that grow with your business.'
                ],
              },
              { 
                title: 'Odoo Cloud Solutions', 
                description: 'Leverage the power of cloud technology with Odoo for scalable and secure solutions.', 
                details: [
                  'Access your ERP system from anywhere.',
                  'Ensure data security and backup.',
                  'Reduce IT infrastructure costs.',
                  'Benefit from automatic updates and maintenance.'
                ],
              },
              { 
                title: 'Odoo Business Analytics', 
                description: 'Utilize advanced analytics to gain insights into your business operations and make data-driven decisions.', 
                details: [
                  'Generate comprehensive reports and dashboards.',
                  'Track key performance indicators (KPIs).',
                  'Analyze trends and identify opportunities.',
                  'Enhance strategic planning with actionable insights.'
                ],
              },
              { 
                title: 'Odoo Workflow Automation', 
                description: 'Automate your business workflows to improve efficiency and reduce manual effort.', 
                details: [
                  'Streamline approval processes and task assignments.',
                  'Automate routine communications and notifications.',
                  'Reduce errors and delays through automation.',
                  'Enhance overall productivity and operational efficiency.'
                ],
              },
              { 
                title: 'Odoo Data Migration', 
                description: 'Ensure a smooth migration of your existing data to the Odoo platform with minimal disruption.', 
                details: [
                  'Safely transfer data from legacy systems.',
                  'Maintain data integrity and consistency.',
                  'Reduce downtime during the migration process.',
                  'Provide ongoing support for data-related issues.'
                ],
              }
            ].map((service, index) => (
              <div key={index} className="bg-royal-blue p-6 rounded-lg h-full shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="zoom-in-up">
                <div className="p-4">
                  <h3 className="text-xl text-white font-semibold mb-3">{service.title}</h3>
                  <p className="text-base text-white mb-4">{service.description}</p>
                  <ul className="list-disc list-inside text-white space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Content Section */}
        <section className="bg-gray-200 py-16" data-aos="zoom-in-up">
          <h2 className="text-4xl font-extrabold text-blue-700 text-center mb-8">
            Our Commitment to Excellence
            <span className="block w-24 h-1 bg-blue-700 rounded-full mx-auto mt-2"></span>
          </h2>
          <div className="container mx-auto text-center px-4">
            <p className="p-4 text-gray-950 text-xl mb-6">
              We are dedicated to delivering high-quality solutions that empower businesses to thrive in a competitive landscape.
            </p>
            <ul className="list-disc list-inside mx-auto space-y-2 max-w-xl">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-950">Innovative solutions tailored for modern businesses</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span  className="text-gray-950">Expertise in diverse industries and technologies</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span  className="text-gray-950">Commitment to continuous improvement and innovation</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-blue-50 py-16" data-aos="zoom-in-up">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl text-gray-950 font-semibold mb-6">Our Innovations</h2>
    <p className="text-lg text-gray-950 mb-8">
      Explore the innovative projects that showcase our expertise in Odoo consulting and development.
    </p>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Project 1 */}
      <div className="bg-royal-blue text-white p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Project: Inventory Management System</h3>
          <p>Developed a comprehensive inventory management system using Odoo to streamline stock control and improve accuracy.</p>
        </div>
      </div>
      {/* Project 2 */}
      <div className="bg-royal-blue text-white p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Project: E-commerce Integration</h3>
          <p>Integrated Odoo with a popular e-commerce platform to enhance online sales and automate order processing.</p>
        </div>
      </div>
      {/* Project 3 */}
      <div className="bg-royal-blue text-white p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Project: Customer Relationship Management</h3>
          <p>Implemented a robust CRM solution in Odoo to manage customer interactions and drive sales efficiency.</p>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className="bg-gray-100 text-gray-950 py-16 text-center" data-aos="zoom-in-up">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8">
            Contact us today to discuss your Odoo consulting needs and find out how we can help your business succeed.
          </p>
          <a href="#contact" className="bg-royal-blue text-white py-3 px-6 rounded-lg text-lg font-semibold">
            Get in Touch
          </a>
        </section>

        {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
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

export default OdooConsultingPage;
