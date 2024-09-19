'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import OurLeader from '@/components/OurLeader';
import OurStory from '@/components/OurStory';
// import OurTeam from '@/components/OurTeam';
import ServiceProvide from '@/components/ServiceProvide';
// import React from 'react';
import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup'; // Adjust the path as necessary

const About = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
    }, []);

    return (
        <div>
            <Header />
            <Navbar />
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <div className="relative bg-black text-white overflow-hidden" data-aos="zoom-in-up">
                <div className="absolute inset-0">
                    <img
                        src="https://t3.ftcdn.net/jpg/03/91/46/10/360_F_391461057_5P0BOWl4lY442Zoo9rzEeJU0S2c1WDZR.jpg"
                        alt="IT Services Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative container mx-auto text-center py-20 px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Leading IT Solutions for Your Business
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Expert IT services to enhance your business operations with innovative technology solutions.
                    </p>
                </div>
            </div>
            <OurStory />

            {/* images section */}
            <div className="bg-white flex gap-2" data-aos="zoom-in-up">
                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
                    <img
                        src="https://www.betterup.com/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg"
                        alt="Team Collaboration"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-black text-1xl mt-2 font-bold text-center">Our Team Collaborating on Solutions</p>
                </div>

                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
                    <img
                        src="https://www.greetly.com/hubfs/visitor-management-system-guide-client-meetings-in-your-office.jpeg"
                        alt="Meeting with Clients"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-black text-1xl mt-2 font-bold text-center">Meeting with Clients to Understand Their Needs</p>
                </div>

                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
                    <img
                        src="https://miro.medium.com/v2/resize:fit:1400/1*2hwDUIUjKwBCkoP-KuBWYQ.jpeg"
                        alt="Tech Solutions"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-black text-1xl mt-2 font-bold text-center">Delivering Cutting-Edge Tech Solutions</p>
                </div>
            </div>

            {/* overView */}
            {/* <div className="bg-gray-100 mt-5 flex items-center justify-center">
                <div className="p-5 rounded-3xl">
                    <div className="bg-white p-8 max-w-2xl mx-auto rounded-xl">
                        <h2 className="text-3xl font-bold mb-4">Our IT Services</h2>
                        <p className="text-2lg">
                            We are a team of passionate developers who are committed to creating innovative and user-friendly web applications.
                            We believe that technology should be accessible to everyone, and we strive to make our products as easy to use as possible.

                            We are constantly learning and growing, and we are always looking for new ways to improve our products and services.
                            We are also committed to giving back to the community, and we participate in a number of open source projects.
                        </p>
                    </div>
                </div>
            </div> */}

            {/* our mission */}
            <div className="relative py-8 px-6 bg-black" data-aos="zoom-in-up">
            <h2 className="text-4xl text-center  text-blue-700 font-bold ">Our Mission</h2>
    <div className="relative py-12 px-6 bg-black" data-aos="zoom-in-up">
        
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Text Section */}
        <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left mb-8 lg:mb-0">
          
          <p className="text-md text-white mb-8">
            At <strong>ANBRUCH IT</strong>, our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
            We are committed to providing exceptional service and building long-lasting partnerships by understanding your unique needs and delivering tailored IT solutions.
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
              <h3 className="text-2xl text-blue-950 font-semibold mb-4">Innovation</h3>
              <p className="text-md text-blue-950">
                We stay at the forefront of technology to provide innovative solutions that meet the evolving needs of businesses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
              <h3 className="text-2xl  text-blue-950 font-semibold mb-4">Customer Focus</h3>
              <p className="text-md  text-blue-950">
                Our clients are at the heart of everything we do. We listen to your needs and tailor our services to exceed your expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
              <h3 className="text-2xl  text-blue-950 font-semibold mb-4">Excellence</h3>
              <p className="text-md  text-blue-950">
                We are dedicated to delivering the highest quality solutions and services with professionalism and expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
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


            {/* /Service Provide */}
            <ServiceProvide />
            {/* <OurLeader /> */}
            {/* <OurTeam /> */}

            {/* location and employee */}
            <div className="bg-white py-12 mt-10" data-aos="zoom-in-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        Discover the ANBRUCH IT Advantage: Excellence and Innovation at Our Core
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-blue-950 p-24 rounded-lg shadow-lg text-center">
                            <h3 className="text-4xl font-bold text-white">5+</h3>
                            <p className="text-lg font-semibold text-white">Locations</p>
                        </div>
                        <div className="bg-blue-950 p-24 rounded-lg shadow-lg text-center">
                            <h3 className="text-4xl font-bold text-white">200+</h3>
                            <p className="text-lg font-semibold text-white">Employees</p>
                        </div>
                        <div className="bg-blue-950 p-24 rounded-lg shadow-lg text-center">
                            <h3 className="text-4xl font-bold text-white">50+</h3>
                            <p className="text-lg font-semibold text-white">Technologies</p>
                        </div>
                        <div className="bg-blue-950 p-24 rounded-lg shadow-lg text-center">
                            <h3 className="text-4xl font-bold text-white">24/7</h3>
                            <p className="text-lg font-semibold text-white">Support</p>
                        </div>
                    </div>
                </div>
            </div>
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

            <Footer />
        </div>
    );
}

export default About;
