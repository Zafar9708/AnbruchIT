'use client';

import React, { useEffect, useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';

const CollaborateContact = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  const containerStyle = {
    backgroundColor: '#e3f2fd',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };

  const [isFormVisible, setFormVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState('Send Message');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = {
      company_name: e.target.company_name.value,
      your_name: e.target.your_name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
  
    try {
      const response = await fetch('https://anbruchit-backend-2.onrender.com/api/contact/', {
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
      console.error('Fetch error:', error);
      alert('An error occurred: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div style={containerStyle} data-aos="zoom-in-up">
      <div>
        <p style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'black' }}>
          We Carry More Than Just Good Coding Skills
        </p>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'black' }}>
          Let's Collaborate for Some Good Work
        </h3>
      </div>
      <div>
        <button
          type="button"
          style={{
            padding: '0.75rem 2.5rem',
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: '0.5rem',
            border: '1px solid #E5E7EB',
          }}
          onClick={() => setFormVisible(true)}
        >
          CONTACT US
        </button>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
            <h2 className="text-xl mb-4">Contact Us</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="company_name"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                name="your_name"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending...</span>
              ) : (
                messageStatus
              )}
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
  );
};

export default CollaborateContact;
