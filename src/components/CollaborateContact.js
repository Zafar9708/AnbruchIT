'use client';
import React, { useEffect, useState, useRef } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const CollaborateContact = () => {
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

  return (
    <div
      style={{
        backgroundColor: '#e3f2fd',
        height: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        position: 'relative',
      }}
      data-aos="zoom-in-up"
    >
      <p className="text-2xl mb-2 text-black">We Carry More Than Just Good Coding Skills</p>
      <h3 className="text-lg mb-2 text-black">Let's Collaborate for Some Good Work</h3>
      <button
        type="button"
        className="py-2 px-8 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
        onClick={() => setFormVisible(true)}
      >
        CONTACT US
      </button>

      {isFormVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" />
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg w-full max-w-sm mx-4 shadow-lg"
              data-aos="zoom-in-up"
            >
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg"
                onClick={() => setFormVisible(false)}
                aria-label="Close form"
              >
                &times;
              </button>
              <h2 className="text-lg font-semibold mb-4 text-center text-blue-700">Contact Us</h2>

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
  );
};

export default CollaborateContact;
