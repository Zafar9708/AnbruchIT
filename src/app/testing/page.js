'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { initializeAOS } from '@/utils/AosSetup';

const TestingPage = () => {
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
    <div>
      <Header />
      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="text-center py-28 bg-blue-50" data-aos="zoom-in-up">
          <h1 className="text-4xl mt-14 font-bold mb-4">Ensure Quality with Our Testing Services</h1>
          <p className="text-lg md:text-xl mb-8">
            Comprehensive testing solutions to verify functionality, performance, and security for your applications.
          </p>
          <a href="/contact" className="bg-blue-400 text-white py-3 px-6 rounded-lg">
            Get in Touch
          </a>
        </section>

        {/* Testing Services Overview */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Our Testing Services</h2>
            <p className="text-lg mb-8 text-center text-gray-800 max-w-2xl mx-auto">
              We offer a range of testing services tailored to your software development needs. From manual testing to automated solutions, we ensure your product meets the highest standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Functional Testing</h3>
                <p className="text-white">
                  Validate that the software operates according to specifications, ensuring every feature works as intended.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Performance Testing</h3>
                <p className="text-white">
                  Evaluate the responsiveness, speed, and scalability of your application under varying loads.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Security Testing</h3>
                <p className="text-white">
                  Identify vulnerabilities and ensure your application is secure against potential threats.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Usability Testing</h3>
                <p className="text-white">
                  Assess how user-friendly and intuitive your application is for its target audience.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Automated Testing</h3>
                <p className="text-white">
                  Implement automated testing frameworks to enhance efficiency and reduce manual testing efforts.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Regression Testing</h3>
                <p className="text-white">
                  Ensure new updates don’t adversely affect existing functionalities through comprehensive regression tests.
                </p>
              </div>
            </div>
          </div>
        </section>

       

        {/* Benefits of Testing */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Benefits of Our Testing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-gray-950">Enhanced Quality</h3>
                <p className="text-gray-950">
                  Improve the overall quality of your software through meticulous testing and defect prevention.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-gray-950">Increased Efficiency</h3>
                <p className="text-gray-950">
                  Identify and fix issues early in the development process, reducing time and costs.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-gray-950">Customer Satisfaction</h3>
                <p className="text-gray-950">
                  Deliver a better user experience and gain customer trust with a well-tested product.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-gray-950">Risk Mitigation</h3>
                <p className="text-gray-950">
                  Minimize potential risks and failures by ensuring thorough testing before launch.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-gray-950">Continuous Improvement</h3>
                <p className="text-gray-950">
                  Foster a culture of continuous improvement by regularly testing and updating your software.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-gray-950">Compliance Assurance</h3>
                <p className="text-gray-950">
                  Ensure your software complies with industry standards and regulations through rigorous testing.
                </p>
              </div>
            </div>
          </div>
        </section>

              
        <div style={containerStyle} data-aos="zoom-in-up">
            <div className="relative container mx-auto text-center py-18 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
  Ready to Ensure the Quality of Your Software?
</h1>
<p className="text-lg md:text-lg mb-8">
  Connect with us today to explore our comprehensive testing services and discover how we can help you deliver a reliable, high-performing application that meets the highest standards and delights your users.
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

export default TestingPage;
