'use client';
import React, { useEffect, useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';

const CollaborateContact = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  const [isFormVisible, setFormVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
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
      setFormVisible(false); // Hide the form after successful submission
    } catch (error) {
      console.error('Fetch error:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

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
      <p style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'black' }}>
        We Carry More Than Just Good Coding Skills
      </p>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'black' }}>
        Let's Collaborate for Some Good Work
      </h3>
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

      {isFormVisible && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-slide-up">
          <form onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg shadow-lg w-80 relative transition-all duration-300" data-aos="zoom-in-up">
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
              onClick={() => setFormVisible(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-3 text-center text-blue-700">Contact Us</h2>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-800">Company Name</label>
              <input
                type="text"
                name="company_name"
                required
                className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-800">Your Name</label>
              <input
                type="text"
                name="your_name"
                required
                className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-800">Phone</label>
              <input
                type="text"
                name="phone"
                required
                className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-800">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-800">Query</label>
              <textarea
                name="message"
                required
                className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CollaborateContact;
