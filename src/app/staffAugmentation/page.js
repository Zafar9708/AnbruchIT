'use client'
import React, { useEffect, useState, useRef } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
// import React from 'react';

const StaffAugmentationServices = () => {
    useEffect(()=>{
        const cleanupAOS=initializeAOS();
        return cleanupAOS
    
      },[])
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <Navbar />

            {/* Hero Section */}
            <section className="bg-blue-50 text-gray-900 py-16" data-aos="zoom-in-up">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                        Enhance Your Team with Our Staff Augmentation Services
                    </h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Access top talent quickly and efficiently with our staff augmentation services. Scale your team on demand and fill skill gaps without the long-term commitment.
                    </p>
                    <a href="#contact" className="bg-blue-950 text-white py-3 px-6 rounded-lg font-semibold text-lg  transition duration-300">
                        Get Started
                    </a>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-12 bg-white" data-aos="zoom-in-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Our Staff Augmentation Process</h2>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <p className="text-lg mb-4 text-gray-800">
                                At <strong>[AnbruchIT],</strong> we follow a structured process to ensure that we meet your staffing needs efficiently and effectively. Our approach includes:
                            </p>
                            <ol className="list-decimal pl-5 space-y-4 text-gray-800">
                                <li>
                                    <strong>Understanding Your Needs:</strong> We begin by conducting a detailed consultation to understand your project requirements, team dynamics, and specific skill needs.
                                </li>
                                <li>
                                    <strong>Talent Matching:</strong> Leveraging our extensive network and resources, we match your needs with qualified candidates who possess the required skills and experience.
                                </li>
                                <li>
                                    <strong>Candidate Screening:</strong> We thoroughly vet candidates through interviews, technical assessments, and reference checks to ensure they meet our high standards.
                                </li>
                                <li>
                                    <strong>Integration and Onboarding:</strong> Once a candidate is selected, we facilitate a smooth onboarding process to integrate them into your team effectively.
                                </li>
                                <li>
                                    <strong>Ongoing Support:</strong> We provide continuous support and check-ins to ensure that the candidate is meeting expectations and address any issues promptly.
                                </li>
                            </ol>
                        </div>
                        <div className="lg:w-1/2 flex justify-center lg:justify-end">
                            <img src="https://ewzduhvhjkj.exactdn.com/wp-content/uploads/2022/08/07160431/Augment-your-team-1-2.png?strip=all&lossy=1&ssl=1"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-12 bg-gray-50" data-aos="zoom-in-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Key Benefits of Staff Augmentation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="zoom-in-up">
                        <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Access to Top Talent</h3>
                            <p className="text-white">
                                Quickly tap into a pool of highly skilled professionals who can deliver exceptional results and bring valuable expertise to your projects.
                            </p>
                        </div>
                        <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Flexibility and Scalability</h3>
                            <p className="text-white">
                                Scale your team up or down based on project demands, ensuring you have the right resources at the right time without long-term commitments.
                            </p>
                        </div>
                        <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Cost Efficiency</h3>
                            <p className="text-white">
                                Optimize your budget by hiring professionals for specific projects or short-term needs, avoiding the overhead costs of permanent hires.
                            </p>
                        </div>
                        <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Speed to Market</h3>
                            <p className="text-white">
                                Accelerate project timelines by quickly integrating skilled professionals into your team, helping you meet deadlines and achieve goals faster.
                            </p>
                        </div>
                        <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Enhanced Focus</h3>
                            <p className="text-white">
                                Allow your core team to focus on strategic initiatives and high-priority tasks while specialized professionals handle specific aspects of your projects.
                            </p>
                        </div>
                        <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Reduced Risk</h3>
                            <p className="text-white">
                                Minimize risks associated with hiring and training permanent staff by leveraging experienced professionals who are ready to contribute immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights & Resources */}
            <section className="py-12 bg-gray-50" data-aos="zoom-in-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Insights & Resources</h2>
                    <p className="text-lg mb-8 text-center text-gray-800">
                        Stay informed and make better decisions with our curated insights and resources on staff augmentation. Explore industry trends, best practices, and valuable content to enhance your understanding of how staff augmentation can benefit your organization.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" data-aos="zoom-in-up">
                        <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Industry Trends</h3>
                            <p className="text-gray-600">
                                Discover the latest trends in staff augmentation and how they can impact your business. Stay ahead with insights into market dynamics and evolving workforce strategies.
                            </p>
                            <a href="#" className="text-blue-600 hover:underline mt-4 block">Read More</a>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Best Practices</h3>
                            <p className="text-gray-600">
                                Learn best practices for implementing staff augmentation effectively. From selecting the right talent to integrating them into your team, get practical tips and guidelines.
                            </p>
                            <a href="#" className="text-blue-600 hover:underline mt-4 block">Read More</a>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Case Studies & White Papers</h3>
                            <p className="text-gray-600">
                                Access detailed case studies and white papers that showcase real-world examples and research on staff augmentation. Understand how other organizations have benefited from similar solutions.
                            </p>
                            <a href="#" className="text-blue-600 hover:underline mt-4 block">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact / Call to Action */}
            <section id="contact" className="bg-gray-100 py-16 text-center" data-aos="zoom-in-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Ready to Enhance Your Team?</h2>
                    <p className="text-lg mb-8 text-gray-600">
                        Get in touch with us today to learn more about our staff augmentation services and how we can help you achieve your business objectives with the right talent.
                    </p>
                    <a href="mailto:info@example.com" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300">
                        Contact Us
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default StaffAugmentationServices;
