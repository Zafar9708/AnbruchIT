'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';

const CollaborateContact = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  // Styles for the container
  const containerStyle = {
    backgroundColor: '#e3f2fd',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };

  // State for form visibility
  const [isFormVisible, setFormVisible] = useState(false);

  // Initial button styles
  const [buttonStyle, setButtonStyle] = useState({
    padding: '0.75rem 2.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    backgroundColor: 'blue',
    color: 'black',
    borderRadius: '0.5rem',
    border: '1px solid #E5E7EB',
    transition: 'background-color 0.2s, color 0.2s, transform 0.2s',
  });

  // Button hover and active styles
  const buttonHoverStyle = {
    backgroundColor: '#F3F4F8',
    color: '#3B82F6',
  };

  const buttonActiveStyle = {
    transform: 'scale(0.95)',
  };

  // Handle form submission
  // Assume this is inside your handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
      company_name: e.target[0].value,
      your_name: e.target[1].value,
      email: e.target[2].value,
      message: e.target[3].value,
  };

  try {
      const response = await fetch('http://127.0.0.1:8000/api/contact/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          alert('Message sent!');
      } else {
          const errorData = await response.json();
          alert('Failed to send message: ' + JSON.stringify(errorData));
      }
  } catch (error) {
      alert('An error occurred: ' + error.message);
  }
};


  

  return (
    <div style={containerStyle} data-aos="zoom-in-up">
      <div>
        <p style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'black' }}>We Carry More Than Just Good Coding Skills</p>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'black' }}>Let's Collaborate for Some Good Work</h3>
      </div>
      <div>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setFormVisible(true)}
          onMouseEnter={() => setButtonStyle(prevStyle => ({ ...prevStyle, ...buttonHoverStyle }))}
          onMouseLeave={() => setButtonStyle(prevStyle => ({ ...prevStyle, ...{ backgroundColor: '#FFFFFF', color: '#4B5563' } }))}
          onMouseDown={() => setButtonStyle(prevStyle => ({ ...prevStyle, ...buttonActiveStyle }))}
          onMouseUp={() => setButtonStyle(prevStyle => ({ ...prevStyle, ...buttonHoverStyle }))}
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
  );
};

export default CollaborateContact;
