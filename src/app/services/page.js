import Development from '@/components/Development';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import OtherService from '@/components/OtherService';
import OtherService1 from '@/components/OtherService1';
import SuccessStory from '@/components/SuccessStory';
import React from 'react';
import Development1 from '@/components/Development1';
const ServicePage = () => {

  return (
    <div className="bg-gray-200">
      <Header />
      <Navbar />
      {/* Development */}
      <Development />
      {/* <Development1 /> */}
      <OtherService />
      {/* <OtherService1 /> */}

      <div className="bg-black max-w-10xl mx-auto p-16 shadow-lg rounded-lg" data-aos="zoom-in-up">
    <h2 className="text-3xl font-bold mb-6 text-white">Progress Bars</h2>

    <div className="flex gap-8">
        {/* Progress Bars Section */}
        <div className="flex-1">
            <div className="bg-gray-200 rounded-full h-6 mb-6 shadow-inner">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-6 rounded-full text-center text-white font-semibold flex items-center justify-center" style={{ width: '40%' }}>
                    40%
                </div>
            </div>

            <div className="bg-gray-200 rounded-full h-6 mb-6 shadow-inner">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-6 rounded-full text-center text-white font-semibold flex items-center justify-center" style={{ width: '70%' }}>
                    70%
                </div>
            </div>

            <div className="bg-gray-200 rounded-full h-6 mb-6 shadow-inner">
                <div className="bg-gradient-to-r from-red-400 to-red-600 h-6 rounded-full text-center text-white font-semibold flex items-center justify-center" style={{ width: '90%' }}>
                    90%
                </div>
            </div>
        </div>

        {/* Right Side Content */}
        <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-white">Additional Information</h2>
            <p className="text-white mb-4">
                Here you can include additional details or context related to the progress bars. This could be explanations, summaries, or other relevant information to provide users with a better understanding.
            </p>
            {/* <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li className="flex items-center">
                    <input type="checkbox" id="item1" className="mr-2 text-blue-600" />
                    <label htmlFor="item1">Item 1</label>
                </li>
                <li className="flex items-center">
                    <input type="checkbox" id="item2" className="mr-2 text-blue-600" />
                    <label htmlFor="item2">Item 2</label>
                </li>
                <li className="flex items-center">
                    <input type="checkbox" id="item3" className="mr-2 text-blue-600" />
                    <label htmlFor="item3">Item 3</label>
                </li>
            </ul> */}
        </div>
    </div>
</div>



      <SuccessStory />
      
      <div className="bg-white container mx-auto text-center py-12 px-4" data-aos="zoom-in-up">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Contact us today to discuss how we can help your business thrive with our IT solutions.</p>
        <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">Get in Touch</a>
      </div>
      <section id="contact" className="py-16 px-4 bg-blue-50" data-aos="zoom-in-up">
        <div className="container mx-auto flex flex-col md:flex-row items-start">
          {/* Contact Information */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are here to answer your questions and help you get started on your path to success.
            </p>
            <ul className="text-gray-700">
              <li className="flex items-center mb-4"><svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" /></svg><strong>Phone:</strong> +1 (123) 456-7890</li>
              <li className="flex items-center mb-4"><svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" /></svg><strong>Email:</strong> info@anbruchIT.com</li>
              <li className="flex items-center"><svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" /></svg><strong>Address:</strong>D-76,Noida Sector 62,Uttar Pradesh,201301</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2" data-aos="zoom-in-up">
            <form className="bg-royal-blue p-8 rounded-lg shadow-lg">
              <div className="flex flex-col mb-6">
                <label htmlFor="name" className="text-lg font-medium mb-2 text-white">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="text-lg font-medium mb-2 text-white">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="message" className="text-lg font-medium mb-2 text-white">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
