'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const [isLoading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('http://localhost:8000/api/contactus/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        const errorResponse = await response.json();
        alert(`Error: ${errorResponse.error || 'An error occurred.'}`);
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="relative">
      <Header />
      <Navbar />
      <div className="relative w-full mt-[-1rem] md:mt-0">
        <img
          src='https://pestostop.com/wp-content/uploads/2020/07/contact_us_banner.jpg'
          alt="Descriptive Alt Text"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 overlay-animation" data-aos="zoom-in-up">
          <h1 className="text-white text-3xl md:text-4xl mt-8 font-bold bg-opacity-50 p-4 rounded mb-4">
            We're Here to Help!
          </h1>
          <button className="bg-blue-100 text-black text-lg font-bold px-6 py-3 rounded shadow-lg hover:bg-gray-200 transition duration-300">
            We'd Love to Hear from You
          </button>
          <div className="mt-6 flex space-x-4 flex-wrap justify-center">
            <a href="tel:+1234567890" className="flex items-center text-yellow-200 hover:text-gray-200 transition duration-300 mb-2">
              <FaPhoneAlt className="mr-2 text-2xl" />
              <span>Call Us</span>
            </a>
            <a href="mailto:info@example.com" className="flex items-center text-purple-200 hover:text-gray-200 transition duration-300 mb-2">
              <FaEnvelope className="mr-2 text-2xl" />
              <span>Email Us</span>
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-950 hover:text-gray-200 transition duration-300 mb-2">
              <FaLinkedin className="mr-2 text-2xl" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        <div className="flex-1 mb-2 md:mb-0">
          <h2 className="text-3xl md:text-4xl text-royal-blue font-bold mb-4">Get in Touch</h2>
          <p className="text-md mb-2 text-lg">
            We’re always excited to hear from you! Whether you have questions, feedback, or just want to chat, we’re here to help.
          </p>
          <h3 className="text-xl md:text-2xl font-bold mt-4">Why Reach Out?</h3>
          <ul className="list-disc text-lg list-inside mt-4 text-md mb-4">
            <li>Get personalized support tailored to your needs.</li>
            <li>Learn about our latest features and updates.</li>
            <li>Share your experiences and suggestions with us.</li>
            <li>Join our community of users and share insights.</li>
          </ul>
        </div>

        <div className="flex-1">
          <form onSubmit={handleSubmit} className="bg-royal-blue p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center">
                  <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full border-t-transparent border-white"></div>
                  <span className="ml-2">Sending...</span>
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-200 py-12 text-center">
        <h2 className="text-2xl text-gray-950 font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-lg text-gray-950 mb-4">
          Stay updated with the latest news, tips, and offers. Subscribe to our newsletter today!
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            className="p-2 border border-gray-300 rounded-l"
            placeholder="Your Email"
            required
          />
          <button className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition duration-300">
            Subscribe
          </button>
        </form>
      </div>

      <Footer />
      <style jsx>{`
        .spinner-border {
          border-width: 0.2em;
          border-color: transparent;
          border-top-color: #fff;
          animation: spin 0.75s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
