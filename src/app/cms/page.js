'use client'
import React, { useEffect, useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const CMSDevelopmentServices = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
    }, []);
    
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
        <div className="bg-gray-100">
            <Header />
            <Navbar />

            {/* Hero Section */}
            <section className="bg-blue-50 text-gray-900 py-24" data-aos="zoom-in-up">
                <div className="container mt-12 px-4 text-center">
                    <h1 className="text-4xl font-extrabold mb-6 leading-tight">
                        Elevate Your Business with Our CMS Development Services
                    </h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Build a powerful content management system tailored to your needs. Streamline your content creation and management processes with our expert solutions.
                    </p>
                    <a href="/contact" className="bg-blue-950 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-300">
                        Get Started
                    </a>
                </div>
            </section>

           {/* Our Process */}
           <section className="py-12 bg-white" data-aos="zoom-in-up">
    <div className="container px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-950">Our CMS Development Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                <strong className="text-xl">1. Discovery Phase:</strong>
                <p className="text-gray-950 font-semibold mb-2">
                    We start with in-depth discussions to uncover your specific needs and challenges.
                </p>
                <ul className="list-disc pl-5 font-medium text-gray-950">
                    <li>Identify key features required</li>
                    <li>Understand user personas</li>
                    <li>Set project timelines and milestones</li>
                </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                <strong className="text-xl">2. Wireframing & Prototyping:</strong>
                <p className="text-gray-950 text-lg font-semibold mb-2">
                    Our design team creates wireframes and prototypes to visualize the CMS structure.
                </p>
                <ul className="list-disc font-medium pl-5 text-gray-950">
                    <li>Develop interactive wireframes</li>
                    <li>Gather client feedback on designs</li>
                    <li>Refine prototypes for final approval</li>
                </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                <strong className="text-xl">3. Agile Development:</strong>
                <p className="text-gray-950 font-semibold mb-2 text-lg">
                    Utilizing Agile methodologies, we develop the CMS in iterative cycles.
                </p>
                <ul className="list-disc font-medium pl-5 text-gray-950">
                    <li>Short development sprints</li>
                    <li>Regular demos and check-ins</li>
                    <li>Adaptations based on real-time feedback</li>
                </ul>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6" data-aos="zoom-in-up">
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                <strong className="text-xl">4. Quality Assurance:</strong>
                <p className="text-gray-950 font-semibold mb-2">
                    Comprehensive testing is conducted to ensure the CMS is secure and functional.
                </p>
                <ul className="list-disc pl-5 font-medium text-gray-950">
                    <li>Functional and regression testing</li>
                    <li>Cross-browser and device testing</li>
                    <li>Security vulnerability assessments</li>
                </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                <strong className="text-xl">5. Post-Launch Evaluation:</strong>
                <p className="text-gray-950 font-semibold mb-2">
                    After launch, we evaluate performance and gather user feedback for enhancements.
                </p>
                <ul className="list-disc pl-5 font-medium text-gray-950">
                    <li>Performance analytics review</li>
                    <li>User feedback sessions</li>
                    <li>Planning for future updates</li>
                </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                <strong className="text-xl">6. Continuous Improvement:</strong>
                <p className="text-gray-950 font-semibold mb-2">
                    We believe in continuous improvement to adapt to changing user needs and market trends.
                </p>
                <ul className="list-disc pl-5 font-medium text-gray-950">
                    <li>Regular feature updates</li>
                    <li>User experience enhancements</li>
                    <li>Ongoing training and support</li>
                </ul>
            </div>
        </div>
    </div>
</section>




            {/* Key Benefits */}
            <section className="py-12 bg-gray-50" data-aos="zoom-in-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Key Benefits of Our CMS Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-white">User-Friendly Interface</h3>
                            <p className="text-white">
                                Enjoy an intuitive interface that simplifies content management for your team.
                            </p>
                        </div>
                        <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Scalability</h3>
                            <p className="text-white">
                                Easily scale your CMS as your business grows, accommodating more content and users.
                            </p>
                        </div>
                        <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-white">SEO Optimized</h3>
                            <p className="text-white">
                                Our CMS solutions are built with SEO best practices to enhance your online visibility.
                            </p>
                        </div>
                        <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Secure & Reliable</h3>
                            <p className="text-white">
                                Benefit from robust security features that protect your content and user data.
                            </p>
                        </div>
                        <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Customizable</h3>
                            <p className="text-white">
                                Tailor the CMS to meet your unique business needs with custom features and plugins.
                            </p>
                        </div>
                        <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Expert Support</h3>
                            <p className="text-white">
                                Access our expert support team for ongoing assistance and troubleshooting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights & Resources */}
            <section className="py-12 bg-gray-200" data-aos="zoom-in-up">
                <div className="container mt-4 px-4">
                    <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Insights & Resources</h2>
                    <p className="text-lg mb-8 text-center text-gray-800">
                        Stay informed with our resources on CMS development. Explore best practices, trends, and expert advice to maximize your CMS's potential.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Latest Trends</h3>
                            <p className="text-gray-600">
                                Discover the latest trends in CMS development and how they can benefit your business.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Best Practices</h3>
                            <p className="text-gray-600">
                                Learn effective strategies for optimizing your CMS and improving content workflows.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Case Studies</h3>
                            <p className="text-gray-600">
                                Explore real-world examples of successful CMS implementations and their outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Contact Section */}
            <div style={containerStyle} data-aos="zoom-in-up">
                <div className="relative container mx-auto text-center py-18 px-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
                        Ready to Build Your Custom CMS?
                    </h1>
                    <p className="text-lg md:text-lg mb-8">
                        Get in touch with us today to learn more about our CMS development services and how we can help you achieve your goals.
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

            <Footer />
        </div>
    );
};

export default CMSDevelopmentServices;