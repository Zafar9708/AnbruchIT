'use client';
import React, { useEffect, useState, useRef } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { toast } from 'react-toastify'; // Assuming you're using toast for notifications

const UIUXPage = () => {
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

      toast.success('Message sent successfully!');
      e.target.reset();
      setFormVisible(false);
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setFormVisible(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setFormVisible(false);
    }
  };

  useEffect(() => {
    if (isFormVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      formRef.current.querySelector('input').focus();

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isFormVisible]);

  const containerStyle = {
    backgroundColor: 'rgb(219 234 254)',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };

  return (
    <div>
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="text-center bg-blue-50 py-20 mt-16 mb-2">
          <h1 className="text-5xl font-bold text-gray-950 mb-4">UI/UX Design Services</h1>
          <p className="text-lg text-gray-700 mb-6">
            We create user-centric designs that enhance user experience and engagement.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Get Started
          </button>
        </section>

        {/* Service Cards Section */}
        <section className="bg-gray-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 container mt-0 px-4">
          {/* Sample Service Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <img
              src="https://images.pexels.com/photos/18884203/pexels-photo-18884203/free-photo-of-buttons-on-screen-of-device.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
              alt="UI Design"
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-100 p-4">
              <h2 className="text-xl font-semibold text-gray-950">User Interface Design</h2>
              <p className="text-gray-950 mb-2">Crafting visually stunning interfaces tailored to your users' needs.</p>
              <p className="text-gray-950 text-sm">
                Our UI design focuses on aesthetics and usability, ensuring that every visual element serves a purpose.
              </p>
            </div>
          </div>

          {/* Sample Service Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <img
              src="https://images.pexels.com/photos/25312284/pexels-photo-25312284/free-photo-of-a-camera-with-a-purple-light-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
              alt="UX Design"
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-100 p-4">
              <h2 className="text-xl font-semibold text-gray-950">User Experience Design</h2>
              <p className="text-gray-950 mb-2">Ensuring a seamless and enjoyable experience for your users.</p>
              <p className="text-gray-950 text-sm">
                We conduct extensive user research and testing to create intuitive interfaces that users love.
              </p>
            </div>
          </div>

          {/* Sample Service Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <img
              src="https://cdn.sanity.io/images/599r6htc/regionalized/c0b37c91abda040890243c39c5973fde5b888a18-1081x541.png?w=1200&q=70&fit=max&auto=format"
              alt="Prototyping"
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-100 p-4">
              <h2 className="text-xl font-semibold text-gray-950">Prototyping</h2>
              <p className="text-gray-950 mb-2">Create interactive prototypes to validate ideas before development.</p>
              <p className="text-gray-950 text-sm">
                We build high-fidelity prototypes that allow stakeholders to visualize the end product.
              </p>
            </div>
          </div>

          {/* Sample Service Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <img
              src="https://storage.googleapis.com/twg-content/original_images/MobileLabs_Thumbnail_1280x720.png"
              alt="User Testing"
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-100 p-4">
              <h2 className="text-xl font-semibold text-gray-950">User Testing</h2>
              <p className="text-gray-950 mb-2">Gather feedback from real users to refine and enhance the design.</p>
              <p className="text-gray-950 text-sm">
                Our rigorous testing processes identify pain points and opportunities for improvement.
              </p>
            </div>
          </div>

          {/* Sample Service Card 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <img
              src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
              alt="UX Strategy"
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-100 p-4">
              <h2 className="text-xl font-semibold text-gray-950">UX Strategy</h2>
              <p className="text-gray-950 mb-2">Develop a strategy that aligns design with your business goals.</p>
              <p className="text-gray-950 text-sm">
                We create a roadmap that outlines user needs and design objectives.
              </p>
            </div>
          </div>

          {/* Sample Service Card 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
              alt="Visual Design"
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-100 p-4">
              <h2 className="text-xl font-semibold text-gray-950">Visual Design</h2>
              <p className="text-gray-950 mb-2">Transform your brand's vision into stunning visuals.</p>
              <p className="text-gray-950 text-sm">
                We ensure every visual element represents your brand's identity effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-20 text-center mb-4" data-aos="zoom-in-up">
          <h2 className="text-3xl font-semibold text-gray-950 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">Have questions? We’re here to help!</p>
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            onClick={() => setFormVisible(true)}
          >
            Contact Us
          </button>
        </section>
      </div>

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

      <Footer />
    </div>
  );
};

export default UIUXPage;
