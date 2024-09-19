import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
      {/* Left Side: Content */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-4">
          We are here to assist you with any questions or concerns you may have. Feel free to reach out to us and we will get back to you as soon as possible.
        </p>
        <p className="text-lg mb-4">
          Our team is committed to providing you with the best support and information. Whether you have a question about our services or just want to provide feedback, we're here to help.
        </p>
        <p className="text-lg">
          Follow us on our social media channels for updates and more information.
        </p>
      </div>

      {/* Right Side: Contact Form */}
      <div className="flex-1">
        <form className="bg-white p-6 rounded shadow-md">
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

      {/* Our */}
      <div>

      </div>
    </div>
  );
};

export default ContactUs;
