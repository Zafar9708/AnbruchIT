'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="relative mt-20">
      <Header />
      <Navbar />
      <div className="relative w-full">
        <img
          src='https://pestostop.com/wp-content/uploads/2020/07/contact_us_banner.jpg'
          alt="Descriptive Alt Text"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 overlay-animation" data-aos="zoom-in-up">
          <h1 className="text-white text-3xl font-bold bg-opacity-50 p-4 rounded mb-4">
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
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-100 hover:text-gray-200 transition duration-300 mb-2">
              <FaLinkedin className="mr-2 text-2xl" />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-gray-200 transition duration-300 mb-2">
              <FaFacebook className="mr-2 text-2xl" />
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center text-red-500 hover:text-gray-200 transition duration-300 mb-2">
              <FaInstagram className="mr-2 text-2xl" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        {/* Left Side: Content */}
        <div className="flex-1 mb-2 md:mb-0">
          <h2 className="text-4xl text-royal-blue font-bold mb-4">Get in Touch</h2>
          <p className="text-md mb-2 text-lg">
            We’re always excited to hear from you! Whether you have questions, feedback, or just want to chat, we’re here to help.
          </p>
          <h3 className="text-2xl font-bold mt-4">Why Reach Out?</h3>
          <ul className="list-disc text-lg list-inside mt-4 text-md mb-4">
            <li>Get personalized support tailored to your needs.</li>
            <li>Learn about our latest features and updates.</li>
            <li>Share your experiences and suggestions with us.</li>
            <li>Join our community of users and share insights.</li>
          </ul>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1">
          <form className="bg-royal-blue p-6 rounded shadow-md">
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
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Send Message
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

      <style jsx>{`
        .overlay-animation {
          opacity: 0;
          animation: fadeIn 2s ease-in forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default ContactPage;
