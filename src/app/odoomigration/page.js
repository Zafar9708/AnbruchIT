'use client'
import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
// import React from 'react'

const OdooMigrationPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-50 text-black py-32" data-aos="zoom-in-up">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:tracking-tighter">
            Seamless Salesforce Migration Services
          </h1>
          <p className="text-lg mt-2  text-gray-700 max-w-6xl mx-auto">
            Our Salesforce migration services are designed to handle every aspect of the transition, from initial assessment to final deployment. Whether you're upgrading to a new Salesforce version or migrating from a different CRM, we ensure a seamless and efficient process to help you achieve your business goals with minimal disruption.
          </p>
          <a href="#contact" className="inline-block mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300">
            Get Started
          </a>
        </div>
      </section>

      {/* Odoo Migration Overview */}
      <section className="p-4 bg-gray-100" data-aos="zoom-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Why Odoo Migration?</h2>
          <p className="text-lg mb-8 text-center font-semibold text-gray-900 max-w-2xl mx-auto">
            Migrating to a new version of Odoo or moving from another ERP system can bring significant benefits, including improved features, better performance, and enhanced security. Our migration services are designed to make this transition as smooth and efficient as possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-royal-blue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">Assessment & Planning</h3>
              <p className="text-white">
                We start with a thorough assessment of your current system and business needs. Our team develops a detailed migration plan to ensure a smooth transition and minimal downtime.
              </p>
            </div>
            <div className="bg-royal-blue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">Data Migration</h3>
              <p className="text-white">
                Our experts handle the secure migration of your data to the new Odoo system. We ensure data integrity and accuracy throughout the migration process.
              </p>
            </div>
            <div className="bg-royal-blue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">System Configuration</h3>
              <p className="text-white">
                We configure your new Odoo system according to your specific business requirements, ensuring that all modules and features are tailored to your needs.
              </p>
            </div>
            <div className="bg-royal-blue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">Customization & Integration</h3>
              <p className="text-white">
                We offer customization services to adapt the new Odoo system to your unique business processes. We also integrate it with other systems to ensure seamless operation.
              </p>
            </div>
            <div className="bg-royal-blue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">Testing & Quality Assurance</h3>
              <p className="text-white">
                Rigorous testing is conducted to ensure that the new system operates flawlessly. We address any issues before going live to ensure a smooth transition.
              </p>
            </div>
            <div className="bg-royal-blue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">Training & Support</h3>
              <p className="text-white">
                We provide training for your team to get acquainted with the new system and offer ongoing support to address any questions or issues post-migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Success Metrics */}
      <section className="py-12 bg-blue-50 flex items-center" data-aos="zoom-in-up">
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
            <img src="https://softhealer.com/theme_softhealer_website/static/src/img/images/odoo_migration/sh_odoo_migration_new_1.webp" alt="Migration Success Metrics" className="w-full h-auto object-cover rounded-lg"/>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 ml-24">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Migration Success Metrics</h2>
            <div className="space-y-12">
              <div className="flex items-center">
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Increased Efficiency</h3>
                  <p className="text-gray-600">
                    Clients have reported up to a 30% increase in operational efficiency after migrating to Odoo.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Enhanced Data Accuracy</h3>
                  <p className="text-gray-600">
                    Odoo migration helps improve data accuracy and integrity, reducing errors and improving decision-making.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
               
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cost Savings</h3>
                  <p className="text-gray-600">
                    Clients often see significant cost savings through streamlined processes and reduced operational costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Call to Action */}
      <section id="contact" className="bg-gray-100 py-16" data-aos="zoom-in-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Ready to Upgrade Your Odoo System?</h2>
          <p className="text-lg mb-8 text-gray-600">
            Contact us today to learn more about our Odoo migration services and how we can facilitate a smooth transition to enhance your business operations.
          </p>
          <a href="mailto:info@example.com" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300">
            Get in Touch
          </a>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-white"  data-aos="zoom-in-up">
                <div className="container mx-auto flex flex-col md:flex-row items-start">
                    {/* Contact Information */}
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            We are here to answer your questions and help you get started on your path to automation excellence.
                        </p>
                        <ul className="text-gray-700">
                            <li className="flex items-center mb-4">
                                <svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" />
                                </svg>
                                <strong>Phone:</strong> +1 (123) 456-7890
                            </li>
                            <li className="flex items-center mb-4">
                                <svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" />
                                </svg>
                                <strong>Email:</strong> info@anbruchIT.com
                            </li>
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" />
                                </svg>
                                <strong>Address:</strong> D-76, Noida Sector 62, Uttar Pradesh, 201301
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="md:w-1/2">
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
  )
}

export default OdooMigrationPage
