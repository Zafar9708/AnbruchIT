'use client';
import React, { useEffect, useState, useRef } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Scroll from '@/components/Scroll';
import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import 'react-toastify/dist/ReactToastify.css';

const SfdcPage = () => {
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
    backgroundColor: 'rgb(239 246 255)',
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
      <Scroll />

      {/* Hero Section */}
      <section className="relative bg-blue-50 text-black py-20">
        <div className="relative container mt-14 mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-4xl font-extrabold mb-6 leading-tight">
            Transform Your Business with Salesforce Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Leverage Salesforce's comprehensive suite of tools to optimize your customer relationship management, drive sales growth, and enhance service delivery.
          </p>
          <a href="/contact" className="bg-blue-400 text-blue-900 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-300 transition duration-300">
            Get Started
          </a>
        </div>
      </section>

      {/* Salesforce Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 text-center" data-aos="zoom-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-black">Our Salesforce Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Solution Card 1 */}
            <div className="bg-blue-50 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <img src="https://yt3.googleusercontent.com/ytc/AIdro_nxOvVCNGcmUGGF4S5p_ddrPTRTMQVHDfCsHrU5iSPk8Q=s900-c-k-c0x00ffffff-no-rj" alt="Sales Cloud" className="w-60 h-40"/>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-950">Sales Cloud</h3>
              <p className="text-gray-950">
                Boost your sales performance with Sales Cloud's advanced CRM tools. Streamline lead management, track opportunities, and drive revenue growth.
              </p>
            </div>
            {/* Solution Card 2 */}
            <div className="bg-blue-50 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <img src="https://techilaservices.com/wp-content/uploads/2024/02/Salesforce-Service-Cloud-400x400.png" alt="Service Cloud" className="w-60 h-40"/>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-950">Service Cloud</h3>
              <p className="text-gray-950">
                Enhance customer service with Service Cloud. Provide exceptional support, automate service processes, and improve customer satisfaction.
              </p>
            </div>
            {/* Solution Card 3 */}
            <div className="bg-blue-50 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <img src="https://png.pngitem.com/pimgs/s/290-2904179_for-cloud-software-vendors-like-salesforce-oracle-salesforce.png" alt="Marketing Cloud" className="w-60 h-40"/>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-950">Marketing Cloud</h3>
              <p className="text-gray-950">
                Drive marketing success with Marketing Cloud. Personalize customer engagement, automate campaigns, and analyze performance metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Industry Solutions Section */}
<section className="py-16 bg-gray-50" data-aos="zoom-in-up">
  <div className="container px-4 text-center" data-aos="zoom-in-up">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">Salesforce for Every Industry</h2>
    <p className="text-lg mb-12 font-semibold max-w-3xl mx-auto">
      Tailored solutions for various industries to leverage Salesforce's full potential.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Card 1 */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <h3 className="text-2xl font-semibold mb-4 text-gray-950">Healthcare</h3>
        <p className="text-gray-950 mb-2">Streamline patient care and enhance engagement through integrated solutions.</p>
        <p className="text-gray-950">Utilize patient data to improve treatment plans, manage appointments effectively, and provide personalized care experiences.</p>
      </div>
      {/* Card 2 */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <h3 className="text-2xl font-semibold mb-4 text-gray-950">Finance</h3>
        <p className="text-gray-950 mb-2">Boost customer relationships while ensuring compliance with industry regulations.</p>
        <p className="text-gray-950">Leverage Salesforce tools to automate reporting, enhance customer insights, and streamline financial processes.</p>
      </div>
      {/* Card 3 */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <h3 className="text-2xl font-semibold mb-4 text-gray-950">Retail</h3>
        <p className="text-gray-950 mb-2">Enhance sales with personalized marketing strategies and superior customer service.</p>
        <p className="text-gray-950">Utilize analytics to track consumer behavior, manage inventory, and deliver tailored promotions to drive sales.</p>
      </div>
      {/* Card 4 */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <h3 className="text-2xl font-semibold mb-4 text-gray-950">Manufacturing</h3>
        <p className="text-gray-950 mb-2">Optimize supply chain management and improve production efficiency.</p>
        <p className="text-gray-950">Implement real-time tracking, predictive maintenance, and streamlined communication to enhance operations.</p>
      </div>
      {/* Card 5 */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <h3 className="text-2xl font-semibold mb-4 text-gray-950">Education</h3>
        <p className="text-gray-950 mb-2">Enhance student engagement and streamline administration for better learning outcomes.</p>
        <p className="text-gray-950">Use Salesforce to manage enrollment, track student performance, and improve communication with parents.</p>
      </div>
      {/* Card 6 */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
        <h3 className="text-2xl font-semibold mb-4 text-gray-950">Non-Profit</h3>
        <p className="text-gray-950 mb-2">Manage donations and improve outreach efforts effectively with Salesforce solutions.</p>
        <p className="text-gray-950">Track donor engagement, optimize fundraising campaigns, and enhance community impact through better data management.</p>
      </div>
    </div>
  </div>
</section>


      {/* Case Studies */}
      <section className="py-14 bg-gray-100">
        <div className="container mx-auto px-4 text-center" data-aos="zoom-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-950">Success Stories</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Case Study 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-2xl font-semibold mb-4 text-gray-950">How TimesNow Increased Sales by 30%</h3>
              <p className="text-gray-950 mb-4">
                Discover how TimesNow leveraged Salesforce Sales Cloud to drive significant sales growth and optimize their sales processes.
              </p>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-2xl font-semibold mb-4 text-gray-950">Customer Service Excellence at Times Of India</h3>
              <p className="text-gray-950 mb-4">
                Learn how Times Of India improved their customer service experience with Salesforce Service Cloud, resulting in higher customer satisfaction.
              </p>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-2xl font-semibold mb-4 text-gray-950">Marketing Transformation at CeaseFire</h3>
              <p className="text-gray-950 mb-4">
                Explore how CeaseFire transformed their marketing strategy using Salesforce Marketing Cloud, driving impactful campaign results.
              </p>
            </div>

            {/* Additional Case Study */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-2xl font-semibold mb-4 text-gray-950">Elevating Customer Engagement with Salesforce</h3>
              <p className="text-gray-950 mb-4">
                Uncover the strategies that helped companies elevate customer engagement and achieve success through Salesforce solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={containerStyle} data-aos="zoom-in-up">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">Contact us today to learn how Salesforce can transform your business.</p>
        <button
          onClick={() => setFormVisible(true)}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300"
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

      <Footer />
    </div>
  );
};

export default SfdcPage;
