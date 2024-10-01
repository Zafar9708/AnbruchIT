'use client';
import React, { useEffect, useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const ManagedServicesPage = () => {
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
      <div className="bg-gray-100">

        {/* Hero Section */}
        <section className="bg-blue-50 text-black py-16" data-aos="zoom-in-up">
          <div className="container  px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-6 mt-14 leading-tight">
              Comprehensive Managed Services for Seamless Operations
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Optimize your IT operations and focus on your core business with our expert-managed services. We handle your IT infrastructure, support, and maintenance so you can achieve operational excellence without the hassle.
            </p>
            <a href="/contact" className="bg-blue-950 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-300">
              Learn More
            </a>
          </div>
        </section>

        {/* Introduction to Managed Services */}
        <section className="py-12 bg-gray-200">
          <div className="container mx-auto px-4" data-aos="zoom-in-up">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">What Are Managed Services?</h2>
            <div className="flex flex-col lg:flex-row items-center lg:justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <p className="text-lg mb-4 text-gray-800">
                  Managed services involve outsourcing the management of your IT infrastructure and operations to a specialized provider. This approach allows businesses to focus on their core functions while ensuring that their IT systems are handled by experts.
                </p>
                <p className="text-lg mb-4 text-gray-800">
                  Managed services can encompass a range of IT functions, including proactive monitoring, technical support, cloud services, data backup, and network management. The goal is to enhance your IT performance, reduce costs, and ensure reliable and secure operations.
                </p>
                <p className="text-lg text-gray-800">
                  By partnering with a managed services provider, you gain access to a team of skilled professionals who offer continuous support and expertise, ensuring your technology operates efficiently and aligns with your business objectives.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end bg-gray-200">
                <img src="https://images.spiceworks.com/wp-content/uploads/2023/03/16070722/pasted-image-0-1.png" alt="Managed Services" />
              </div>
            </div>
            <div className="mt-12 text-center">
              <a href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300">
                Explore Our Services
              </a>
            </div>
          </div>
        </section>

        {/* Benefits of Managed Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4" data-aos="zoom-in-up">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Benefits of Managed Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">Cost Efficiency</h3>
                <p className="text-white">
                  Managed services offer predictable costs with fixed monthly fees, helping businesses budget effectively and avoid unexpected expenses related to IT issues.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">Expertise and Experience</h3>
                <p className="text-white">
                  Gain access to a team of IT professionals with specialized skills and experience, ensuring high-quality service and the latest technological advancements.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">Focus on Core Business</h3>
                <p className="text-white">
                  By outsourcing IT management, you can focus on your core business activities and strategic initiatives, rather than dealing with day-to-day IT operations.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">Enhanced Security</h3>
                <p className="text-white">
                  Managed services providers implement robust security measures to protect your data and infrastructure from cyber threats and unauthorized access.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">Scalability</h3>
                <p className="text-white">
                  Easily scale your IT resources up or down based on your business needs without the need for significant capital investment.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">24/7 Support</h3>
                <p className="text-white">
                  Enjoy round-the-clock support from a dedicated team, ensuring that any IT issues are resolved promptly and minimizing downtime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies & Success Stories */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Case Studies & Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Case Study: Retail Success</h3>
                <p className="text-gray-800 mb-4">
                  A large retail chain adopted our managed services to streamline its IT operations. By implementing proactive monitoring and support, we reduced downtime by 40% and improved system performance, leading to a 25% increase in sales during peak seasons.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Success Story: Healthcare Efficiency</h3>
                <p className="text-gray-800 mb-4">
                  A healthcare provider faced challenges with data management and security. Our managed services ensured robust data backup solutions and 24/7 support, significantly reducing data loss incidents and improving compliance with healthcare regulations.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Case Study: Financial Sector Innovation</h3>
                <p className="text-gray-800 mb-4">
                  A financial services firm sought to upgrade its IT infrastructure. Through our managed services, we implemented a new cloud-based system, enhancing operational efficiency and reducing IT costs by 30% while ensuring top-notch security and compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog / Resources */}
        <section className="py-12 bg-blue-50" data-aos="zoom-in-up">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Blog & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-blue-950 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">The Future of Managed Services</h3>
                <p className="text-white mb-4">
                  Explore the evolving landscape of managed services and how emerging technologies are shaping the future of IT management.
                </p>
              </div>
              <div className="bg-blue-950 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">How to Choose a Managed Services Provider</h3>
                <p className="text-white mb-4">
                  Learn key factors to consider when selecting a managed services provider to ensure you get the best fit for your business needs.
                </p>
              </div>
              <div className="bg-blue-950 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">Top Benefits of Cloud Management</h3>
                <p className="text-white mb-4">
                  Discover the advantages of cloud management and how it can help streamline your IT operations and reduce costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Contact Section */}
        <div style={containerStyle} data-aos="zoom-in-up">
          <div className="relative container mx-auto text-center py-18 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold mt-12 mb-6">
              Streamlining Your Operations with Managed Services
            </h1>
            <p className="text-lg md:text-lg mb-8">
              Comprehensive managed services that ensure your IT infrastructure runs smoothly.
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
              GET IN TOUCH
            </button>
          </div>

          {isFormVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-slide-up">
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg shadow-lg w-80 relative transition-all duration-300"
                data-aos="zoom-in-up"
              >
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
      </div>
      <Footer />
    </div>
  );
};

export default ManagedServicesPage;
