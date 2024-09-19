'use client';
import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const SfdcPage = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-blue-50 mt-12 text-black py-24">
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/images/sfdc-hero-bg.jpg)' }}></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Transform Your Business with Salesforce Solutions
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                        Leverage Salesforce's comprehensive suite of tools to optimize your customer relationship management, drive sales growth, and enhance service delivery.
                    </p>
                    <a href="#contact" className="bg-blue-400 text-blue-900 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-300 transition duration-300">
                        Get Started
                    </a>
                </div>
            </section>

            {/* Salesforce Solutions Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center" data-aos="zoom-in-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-black">Our Salesforce Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Solution Card 1 */}
                        <div className="bg-blue-950 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <div className="flex justify-center mb-4">
                                <img src="https://yt3.googleusercontent.com/ytc/AIdro_nxOvVCNGcmUGGF4S5p_ddrPTRTMQVHDfCsHrU5iSPk8Q=s900-c-k-c0x00ffffff-no-rj" alt="Sales Cloud" className="w-60 h-40"/>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Sales Cloud</h3>
                            <p className="text-white">
                                Boost your sales performance with Sales Cloud's advanced CRM tools. Streamline lead management, track opportunities, and drive revenue growth.
                            </p>
                        </div>
                        {/* Solution Card 2 */}
                        <div className="bg-blue-950 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                            <div className="flex justify-center mb-4">
                                <img src="https://techilaservices.com/wp-content/uploads/2024/02/Salesforce-Service-Cloud-400x400.png" alt="Service Cloud" className="w-60 h-40"/>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Service Cloud</h3>
                            <p className="text-white">
                                Enhance customer service with Service Cloud. Provide exceptional support, automate service processes, and improve customer satisfaction.
                            </p>
                        </div>
                        {/* Solution Card 3 */}
                        <div className="bg-blue-950 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                            <div className="flex justify-center mb-4">
                                <img src="https://png.pngitem.com/pimgs/s/290-2904179_for-cloud-software-vendors-like-salesforce-oracle-salesforce.png" alt="Marketing Cloud" className="w-60 h-40"/>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Marketing Cloud</h3>
                            <p className="text-white">
                                Drive marketing success with Marketing Cloud. Personalize customer engagement, automate campaigns, and analyze performance metrics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4 text-center" data-aos="zoom-in-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-white">Success Stories</h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        {/* Case Study 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-950">How Company X Increased Sales by 30%</h3>
                            <p className="text-blue-950 mb-4">
                                Discover how Company X leveraged Salesforce Sales Cloud to drive significant sales growth and optimize their sales processes.
                            </p>
                            <a href="/case-studies/company-x" className="text-blue-600 hover:underline">Read More</a>
                        </div>

                        {/* Case Study 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-950">Customer Service Excellence at Company Y</h3>
                            <p className="text-blue-950 mb-4">
                                Learn how Company Y improved their customer service experience with Salesforce Service Cloud, resulting in higher customer satisfaction.
                            </p>
                            <a href="/case-studies/company-y" className="text-blue-600 hover:underline">Read More</a>
                        </div>

                        {/* Case Study 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-950">Marketing Transformation at Company Z</h3>
                            <p className="text-blue-950 mb-4">
                                Explore how Company Z transformed their marketing strategy using Salesforce Marketing Cloud, driving impactful campaign results.
                            </p>
                            <a href="/case-studies/company-z" className="text-blue-600 hover:underline">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-blue-950">Additional Resources</h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        {/* Resource 1 */}
                        <div className="bg-blue-950 p-12 rounded-lg shadow-lg max-w-xs" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Salesforce Implementation Guide</h3>
                            <p className="text-white mb-4">
                                Access our comprehensive guide to effectively implement Salesforce solutions and maximize their benefits.
                            </p>
                            <a href="/resources/guide" className="text-blue-600 hover:underline">Download Now</a>
                        </div>

                        {/* Resource 2 */}
                        <div className="bg-blue-950 p-12 rounded-lg shadow-lg max-w-xs" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-white">CRM Best Practices Checklist</h3>
                            <p className="text-white mb-4">
                                Get our detailed checklist to ensure that your Salesforce CRM setup meets best practices for optimal performance.
                            </p>
                            <a href="/resources/checklist" className="text-blue-600 hover:underline">Download Now</a>
                        </div>

                        {/* Resource 3 */}
                        <div className="bg-blue-950 p-12 rounded-lg shadow-lg max-w-xs" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Webinar on Salesforce Strategies</h3>
                            <p className="text-white mb-4">
                                Join our webinar to learn about effective Salesforce strategies and how to leverage them for business growth.
                            </p>
                            <a href="/resources/webinar" className="text-blue-600 hover:underline">Sign Up</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact / Call to Action */}
            <section id="contact" className="bg-black py-16 text-center text-white" data-aos="zoom-in-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Transform Your Business with Salesforce?</h2>
                    <p className="text-lg mb-8">
                        Reach out to us to learn how our Salesforce solutions can drive your business success and streamline your operations.
                    </p>
                    <a href="mailto:info@example.com" className="bg-blue-400 text-blue-900 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-300 transition duration-300">
                        Contact Us
                    </a>
                </div>
            </section>

            {/* Contact Information and Form */}
            <section id="contact-form" className="py-16 px-4 bg-white" data-aos="zoom-in-up">
                <div className="container mx-auto flex flex-col md:flex-row items-start">
                    {/* Contact Information */}
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            We're here to assist with your Salesforce needs and answer any questions you may have.
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
                                <strong>Email:</strong> info@example.com
                            </li>
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" />
                                </svg>
                                <strong>Address:</strong> 123 Salesforce Avenue, San Francisco, CA, 94105
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="md:w-1/2" data-aos="zoom-in-up">
                        <form className="bg-blue-950 p-8 rounded-lg shadow-lg">
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
}

export default SfdcPage;
