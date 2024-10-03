'use client';
import React, { useEffect, useState, useRef } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const WebDevelopmentPage = () => {
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

      <main className="bg-gray-100">
        {/* Hero Section */}
        <section className="relative bg-blue-100 text-gray-950 py-24">
          <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
          <div className="relative container mt-16 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Web Development</h1>
            <p className="text-xl mb-8">
              Crafting high-performance websites tailored to your business needs.
            </p>
            <a href="/contact" className="bg-blue-950 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-300">
              Get Started
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12" data-aos="zoom-in-up">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
            <p className="text-lg mb-8">
              We specialize in creating dynamic and engaging websites that drive results. From custom web development to responsive design, our team delivers top-notch solutions.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Service Card 1 */}
              <div className="bg-blue-950 text-white p-16 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4">Custom Web Development</h3>
                <p className="text-sm mb-4">
                  Tailored web solutions that fit your unique business needs. Our team builds scalable and robust applications from the ground up.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-blue-950 text-white p-16 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4">Responsive Design</h3>
                <p className="text-sm mb-4">
                  Ensure your website looks great on any device. Our responsive designs offer a seamless user experience across all platforms.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-blue-950 text-white p-16 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h3>
                <p className="text-sm mb-4">
                  Launch your online store with ease. We provide comprehensive e-commerce solutions to help you sell products and services effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="bg-gray-200 py-12">
          <div className="container mx-auto text-center" data-aos="zoom-in-up">
            <h2 className="text-3xl text-gray-950 font-semibold mb-6">Our Web Development Projects</h2>
            <p className="text-lg text-gray-950 mb-8">
              Explore our latest web development projects that showcase our expertise in creating innovative and responsive websites.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="bg-white text-black p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <img
                  src='https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg'
                  alt='E-Commerce Platform'
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                <p className="text-lg">
                  Developed a fully responsive e-commerce site with user-friendly navigation and secure payment integration.
                </p>
              </div>

              {/* Project 2 */}
              <div className="bg-white text-black p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <img
                  src='https://a.storyblok.com/f/99519/1100x619/1bd432fd52/website-project-management-build-phase.png'
                  alt='Portfolio Website'
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                <p className="text-lg">
                  Crafted a sleek portfolio website for a photographer, highlighting their work with an interactive gallery.
                </p>
              </div>

              {/* Project 3 */}
              <div className="bg-white text-black p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <img
                  src='https://www.bleap.in/public/home/images/corporate.png'
                  alt='Corporate Website'
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Corporate Website</h3>
                <p className="text-lg">
                  Built a modern corporate website that enhances brand presence and provides essential information to clients.
                </p>
              </div>

              {/* Project 4 */}
              <div className="bg-white text-black p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <img
                  src='https://www.loa.it/editheme/img/features/05.jpg'
                  alt='Blog Platform'
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Blog Platform</h3>
                <p className="text-lg">
                  Developed a dynamic blog platform with robust CMS features for easy content management and publishing.
                </p>
              </div>

              {/* Project 5 */}
              <div className="bg-white text-black p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <img
                  src='https://www.webindiamaster.com/assests/images/blog/real-estate-website-design-noida.jpg'
                  alt='Real Estate Website'
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Real Estate Website</h3>
                <p className="text-lg">
                  Created an interactive real estate platform with advanced search functionality and property listings.
                </p>
              </div>

              {/* Project 6 */}
              <div className="bg-white text-black p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <img
                  src='https://cdn.thehackernews.com/8e/05/12259790/website-ecommerce.png'
                  alt='E-Learning Platform'
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">E-Learning Platform</h3>
                <p className="text-lg">
                  Developed an engaging e-learning platform with features like quizzes, course management, and user profiles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 text-center bg-gray-300" data-aos="zoom-in-up">
          <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Contact us today to discuss your web development project.</p>
          <button
            onClick={() => setFormVisible(true)}
            className="bg-blue-950 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-300"
          >
            Contact Us
          </button>
        </section>

        {/* Modal for Contact Form */}
        {isFormVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" />
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white p-4 rounded-lg w-full max-w-sm mx-4" style={{paddingLeft:"40px",paddingRight:"40px"}}
              data-aos="zoom-in-up"
            >
              <button
                type="button"
                className="absolute top- right-2 text-gray-600 hover:text-gray-800 text-lg"
                onClick={() => setFormVisible(false)}
                aria-label="Close form"
              >
                &times;
              </button>
              <h2 className="text-lg font-semibold mb-2 text-center text-blue-700">Contact Us</h2>

              {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}

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
      </main>

      <Footer />
    </div>
  );
};

const InputField = ({ icon, label, name, required, type = "text" }) => (
  <div className="mb-4">
    <label className="flex items-center mb-1">
      {icon}
      <span className="text-sm font-medium text-gray-800">{label}</span>
    </label>
    <input
      type={type}
      name={name}
      required={required}
      className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
    />
  </div>
);

export default WebDevelopmentPage;
