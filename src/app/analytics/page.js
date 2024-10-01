'use client'
import React, { useEffect,useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Link from 'next/link'; // Import Link from next/link
// import React from 'react';

const AnalyticsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    company_name: '',
    your_name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
      setFormData({ company_name: '', your_name: '', phone: '', email: '', message: '' });
      setFormVisible(false);
    } catch (error) {
      console.error('Error sending message:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };


  // Styles for the container
  const containerStyle = {
      backgroundColor: 'rgb(243 244 246)',
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

      <main>
        {/* Hero Section */}
        <section className="text-center  py-24 bg-blue-50 mb-4" data-aos="zoom-in-up">
        <h1 className="text-3xl mt-16 font-bold mb-4 text-black">Transform Your Business with Expert Analytics Services</h1>
         <p className="text-lg text-black">
         We provide in-depth insights that empower you to make informed, data-driven decisions and enhance operational efficiency.
            </p>

          <div className="flex justify-center mt-8">
            <a href="/contact" className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold">
              Explore Our Services
            </a>
          </div>
        </section>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12" data-aos="zoom-in-up">
          {/* Web Analytics Card */}
          <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-6 text-center" data-aos="zoom-in-up">
            <h3 className="text-xl font-bold mb-2 text-white ">Web Analytics</h3>
            <p className="text-white mb-4">
              Track website traffic, user behavior, and conversion rates to optimize your online presence.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>User acquisition and retention</li>
              <li>Conversion rate optimization (CRO)</li>
              <li>A/B testing</li>
            </ul>
            <p className="text-white mb-4">
              With our web analytics services, you’ll gain actionable insights into how users interact with your site, allowing you to make data-driven decisions to improve user engagement and increase conversions.
            </p>
           
          </div>

          {/* Mobile App Analytics Card */}
          <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-6 text-center" data-aos="zoom-in-up">
            <h3 className="text-xl font-bold mb-2 text-white">Mobile App Analytics</h3>
            <p className="text-white mb-4">
              Understand how users interact with your mobile app and identify areas for improvement.
            </p>
            <ul className="list-disc text-white list-inside text-left mb-4">
              <li>User engagement analysis</li>
              <li>App store optimization (ASO)</li>
              <li>Crash reporting</li>
            </ul>
            <p className="text-white mb-4">
              Our mobile app analytics will help you monitor user interactions and performance metrics, enabling you to enhance app functionality, optimize user experience, and drive user retention.
            </p>
           
          </div>

          {/* Data Visualization Card */}
          <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-6 text-center" data-aos="zoom-in-up">
            <h3 className="text-xl font-bold mb-2 text-white">Data Visualization</h3>
            <p className="text-white mb-4">
              Transform raw data into actionable insights with visually appealing and informative dashboards.
            </p>
            <ul className="list-disc text-white list-inside text-left mb-4">
              <li>Custom dashboard development</li>
              <li>Data storytelling</li>
              <li>Interactive visualizations</li>
            </ul>
            <p className="text-white mb-4">
              Our data visualization solutions turn complex data into clear, visually engaging formats, making it easier for you to understand trends and make informed decisions quickly.
            </p>
            
          </div>

         
        </div>

        {/* Testimonial Section */}
        <section className="bg-gray-100 py-12 px-4" data-aos="zoom-in-up">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-950">What Our Clients Say</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-md">
                <p className="text-black mb-4">
                  “The insights provided by their analytics services have been invaluable to our business. We've seen a significant improvement in user engagement and conversions. Highly recommend!”
                </p>
                <p className="font-semibold text-black">Alex Johnson</p>
                <p className="text-black">CEO, Tech Innovations</p>
              </div>
              {/* Testimonial 2 */}
<div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-md">
    <p className="text-black mb-4">
        “Thanks to their analytics solutions, we have gained actionable insights that have streamlined our operations and boosted our overall performance. Their expertise is unmatched!”
    </p>
    <p className="font-semibold text-black">Maria Lopez</p>
    <p className="text-black">COO, Dynamic Solutions</p>
</div>


              {/* Testimonial 2 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-md">
                <p className="text-black mb-4">
                  “Their data visualization tools made it so much easier to understand our performance metrics. We now have a clearer picture of our business and can make more informed decisions.”
                </p>
                <p className="font-semibold text-black">Jessica Smith</p>
                <p className="text-black">Marketing Director, Creative Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-12 bg-blue-50 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-12" data-aos="zoom-in-up">
                <h3 className="text-xl font-semibold mb-4 text-white">E-Commerce Growth</h3>
                <p className="text-white mb-4">
                  Our client, an e-commerce store, saw a 30% increase in sales after implementing our web analytics and conversion rate optimization strategies.
                </p>
            
              </div>

              {/* Case Study 2 */}
              <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-12" data-aos="zoom-in-up">
                <h3 className="text-xl font-semibold mb-4 text-white">Mobile App Success</h3>
                <p className="text-white mb-4">
                  By utilizing our mobile app analytics services, a client saw a 50% improvement in user retention and engagement within six months.
                </p>
                
              </div>

              {/* Case Study 3 */}
              <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-12" data-aos="zoom-in-up">
                <h3 className="text-xl font-semibold mb-4 text-white">Data-Driven Decisions</h3>
                <p className="text-white mb-4">
                  Our data visualization tools helped a leading finance firm streamline their reporting process, resulting in faster and more accurate decision-making.
                </p>
              
              </div>
            </div>
          </div>
        </section>
       

       {/* Custom Contact Section */}
       <div style={containerStyle} data-aos="zoom-in-up">
            <div className="relative container mx-auto text-center py-18 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
    Ready to Transform Your Web Analytics?
     </h1>
        <p className="text-lg md:text-lg mb-8">
       Contact us today to explore how our web analytics solutions can provide valuable insights, optimize your user experience, and drive impactful results for your business.
         </p>
 



            </div>

                <div>
                    <button
                        type="button"
                        style={{
                            padding: '0.75rem 2.5rem',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            backgroundColor: 'blue',
                            color: 'white',
                            borderRadius: '0.5rem',
                            border: '1px solid #E5E7EB',
                            transition: 'background-color 0.2s, color 0.2s, transform 0.2s',
                        }}
                        onClick={() => setFormVisible(true)}
                    >
                        CONTACT US
                    </button>
                </div>

                
          {isFormVisible && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-slide-up">
              <form className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg shadow-lg w-80 relative transition-all duration-300" onSubmit={handleSubmit}>
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
                    value={formData.company_name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-800">Your Name</label>
                  <input
                    type="text"
                    name="your_name"
                    required
                    value={formData.your_name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-800">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-800">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-800">Query</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
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
        
        
      </main>
      <Footer />
    </div>
  );
};

export default AnalyticsPage;
