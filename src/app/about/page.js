'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import OurLeader from '@/components/OurLeader';
import OurStory from '@/components/OurStory';
import ServiceProvide from '@/components/ServiceProvide';
import React, { useEffect, useState,useRef } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';


const About = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
      }, []);
    
      const [isFormVisible, setFormVisible] = useState(false);
      const [isLoading, setLoading] = useState(false);
      const formRef = useRef();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const formData = {
          company_name: e.target.company_name.value,
          your_name: e.target.your_name.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
          message: e.target.message.value,
        };
    
        try {
          const response = await fetch('/api/email-send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.error || 'An error occurred.');
          }
    
          alert('Message sent successfully!');
          e.target.reset();
          setFormVisible(false);
        } catch (error) {
          console.error('Fetch error:', error);
          alert(`Error: ${error.message}`);
        } finally {
          setLoading(false);
        }
      };
    
      const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
          setFormVisible(false);
        }
      };
    
      useEffect(() => {
        if (isFormVisible) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isFormVisible]);

    // Styles for the container
    const containerStyle = {
        backgroundColor: 'rgb(229 231 235)',
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
            <div className="relative bg-blue-50 text-gray-950 overflow-hidden" data-aos="zoom-in-up">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
                </div>
                <div className="relative container mx-auto text-center py-20 px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold mt-20 mb-4">
                        Leading IT Solutions for Your Business
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Expert IT services to enhance your business operations with innovative technology solutions.
                    </p>
                </div>
            </div>
            <OurStory />

            {/* Images section */}
            <div className="bg-white flex justify-between p-4" data-aos="zoom-in-up">
                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="bg-gray-100 rounded-lg p-12 shadow-lg">
                        <h3 className="text-black text-xl font-bold text-center">Collaborating on Solutions</h3>
                        <p className="text-gray-700 mt-2 text-center">
                            Our team works closely to develop innovative solutions that meet the unique needs of our clients.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="bg-gray-100 rounded-lg p-12 shadow-lg">
                        <h3 className="text-black text-xl font-bold text-center">Understanding Client Needs</h3>
                        <p className="text-gray-700 mt-2 text-center">
                            We prioritize understanding our clients' requirements to deliver tailored services and solutions.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="bg-gray-100 rounded-lg p-12 shadow-lg">
                        <h3 className="text-black text-xl font-bold text-center">Delivering Tech Solutions</h3>
                        <p className="text-gray-700 mt-2 text-center">
                            Our focus on cutting-edge technology ensures that we provide the best solutions for your business.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Mission */}
            <div className="relative py-8 px-6 bg-blue-50" data-aos="zoom-in-up">
                <h2 className="text-4xl text-center text-blue-700 font-bold">Our Mission</h2>
                <div className="relative py-12 px-6 bg-blue-50">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left mb-8 lg:mb-0">
                            <p className="text-md text-gray-950 mb-8">
                                At <strong>ANBRUCH IT</strong>, our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
                                We are committed to providing exceptional service and building long-lasting partnerships by understanding your unique needs and delivering tailored IT solutions.
                            </p>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="bg-white p-6 rounded-lg flex flex-col items-start">
                                    <h3 className="text-2xl text-blue-950 font-semibold mb-4">Innovation</h3>
                                    <p className="text-md text-blue-950">
                                        We stay at the forefront of technology to provide innovative solutions that meet the evolving needs of businesses.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg flex flex-col items-start">
                                    <h3 className="text-2xl text-blue-950 font-semibold mb-4">Customer Focus</h3>
                                    <p className="text-md text-blue-950">
                                        Our clients are at the heart of everything we do. We listen to your needs and tailor our services to exceed your expectations.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg flex flex-col items-start">
                                    <h3 className="text-2xl text-blue-950 font-semibold mb-4">Excellence</h3>
                                    <p className="text-md text-blue-950">
                                        We are dedicated to delivering the highest quality solutions and services with professionalism and expertise.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex-shrink-0 mb-8 lg:mb-0">
                            <img
                                src='https://media.assettype.com/analyticsinsight%2F2024-07%2F275cca5c-3ac1-4f4b-8929-22ccb1e4a44d%2FTechnological_Innovation_1024x684.jpg'
                                alt="Innovation"
                                className="w-full h-auto object-fill rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Provide */}
            <ServiceProvide />

            {/* Location and Employee Statistics */}
            <div className="bg-white py-8 mt-10" data-aos="zoom-in-up">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Achievements</h2>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="bg-blue-50 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-100 duration-300 ease-in-out" data-aos="fade-up">
            <h3 className="text-4xl font-bold text-blue-950">50+</h3>
            <p className="text-lg font-semibold text-gray-600">Projects Completed</p>
            <p className="text-gray-500 mt-2">From innovative tech solutions to impactful community initiatives, we’ve delivered excellence across various sectors.</p>
        </div>
        <div className="bg-blue-50 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-100 duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-4xl font-bold text-blue-950">100+</h3>
            <p className="text-lg font-semibold text-gray-600">Happy Clients</p>
            <p className="text-gray-500 mt-2">Our commitment to client satisfaction has earned us long-lasting relationships and numerous referrals.</p>
        </div>
        <div className="bg-blue-50 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-100 duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-4xl font-bold text-blue-950">200+</h3>
            <p className="text-lg font-semibold text-gray-600">Employees</p>
            <p className="text-gray-500 mt-2">Our diverse and talented team drives our success, bringing a wealth of knowledge and experience to every project.</p>
        </div>
    </div>
</div>




            {/* Custom Contact Section */}
            <div style={containerStyle} data-aos="zoom-in-up">
            <div className="relative container mx-auto text-center py-18 px-4">
           <h1 className="text-3xl md:text-4xl font-extrabold mt-12 mb-6">
                     Transforming Businesses Through Technology
                     </h1>
                 <p className="text-lg md:text-lg mb-8">
                    Tailored IT solutions designed to streamline your processes and drive growth in a digital-first world.
                </p>
            </div>

                <div>
                    <button
                        type="button"
                        style={{
                            padding: '0.75rem 2.5rem',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            backgroundColor: 'blue',
                            color: 'black',
                            borderRadius: '0.5rem',
                            border: '1px solid #E5E7EB',
                            transition: 'background-color 0.2s, color 0.2s, transform 0.2s',
                        }}
                        onClick={() => setFormVisible(true)}
                    >
                        CONTACT
                    </button>
                </div>

                {isFormVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" />
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white p-4 rounded-lg w-full max-w-sm mx-4 " style={{paddingLeft:"30px",paddingRight:"30px"}}
              data-aos="zoom-in-up"
            >
              <button
                type="button"
                className="absolute top- right-2 text-gray-600 hover:text-gray-800 text-lg"
                onClick={() => setFormVisible(false)}
              >
                &times;
              </button>
              <h2 className="text-lg font-semibold mb-2 text-center text-blue-700">Contact Us</h2>

              <div className="mb-4">
                <label className="flex items-center mb-1">
                  <HiOutlineOfficeBuilding className="mr-2 text-gray-500" />
                  <span className="text-sm font-medium text-gray-800">Company Name</span>
                </label>
                <input
                  type="text"
                  name="company_name"
                  required
                  className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="flex items-center mb-1">
                  <HiOutlineUser className="mr-2 text-gray-500" />
                  <span className="text-sm font-medium text-gray-800">Your Name</span>
                </label>
                <input
                  type="text"
                  name="your_name"
                  required
                  className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="flex items-center mb-1">
                  <HiOutlinePhone className="mr-2 text-gray-500" />
                  <span className="text-sm font-medium text-gray-800">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="flex items-center mb-1">
                  <HiOutlineMail className="mr-2 text-gray-500" />
                  <span className="text-sm font-medium text-gray-800">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-800">Query</label>
                <textarea
                  name="message"
                  required
                  className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
                  rows="3"
                  style={{ resize: 'none' }} // Prevent resizing
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </>
      )}
            </div>
            <Footer />
        </div>
    );
}

export default About;
