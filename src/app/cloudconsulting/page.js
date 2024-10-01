'use client';
import React, { useEffect, useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const CloudConsultingPage = () => {
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
    backgroundColor: 'rgb(239 246 255)',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };

  return (
    <div className="bg-white">
      <Header />
      <Navbar />

      <main>
        <section className="text-center bg-blue-50 mb-8 py-28">
          <h1 className="text-4xl mt-8 font-extrabold mb-6 text-black">Cloud Consulting Services</h1>
          <p className="text-xl text-black max-w-5xl mx-auto">
            Unlock the power of the cloud with our expert consulting services. We help businesses of all sizes leverage cloud technologies to optimize operations, reduce costs, and drive innovation.
          </p>
          <div className="flex justify-center mt-8">
            <a href="/contact" className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold">
              Explore Our Services
            </a>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Cloud Migration Card */}
          <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
            <img src="/Assets/cloudConsultant/cloud-migration-min.webp" alt="Cloud Migration" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Migration</h3>
            <p className="text-white mb-4">
              Seamlessly transition your IT infrastructure to the cloud, optimizing performance and cost-efficiency.
            </p>
            <ul className="list-disc list-inside text-left text-white mb-4">
              <li>Assessment and planning</li>
              <li>Data migration</li>
              <li>Cloud architecture design</li>
            </ul>
          </div>

          {/* Cloud Optimization Card */}
          <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
            <img src="/Assets/cloudConsultant/cloud-cost-optimization-fb.png" alt="Cloud Optimization" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Optimization</h3>
            <p className="text-white mb-4">
              Maximize the value of your cloud investment through performance tuning, cost optimization, and security best practices.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>Cost analysis and reduction</li>
              <li>Performance optimization</li>
              <li>Security assessments</li>
            </ul>
          </div>

          {/* Cloud Security Card */}
          <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
            <img src="/Assets/cloudConsultant/EC_Data_Security_Lock_750.jpg" alt="Cloud Security" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Security</h3>
            <p className="text-white mb-4">
              Protect your sensitive data and ensure compliance with rigorous security standards.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>Risk assessments</li>
              <li>Security audits</li>
              <li>Incident response planning</li>
            </ul>
          </div>

          {/* Cloud Consulting Card */}
          <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
            <img src="/Assets/cloudConsultant/cloud_consulting.jpg" alt="Cloud Consulting" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Consulting</h3>
            <p className="text-white mb-4">
              Get expert guidance on your cloud journey, from strategy development to implementation and ongoing support.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>Cloud strategy development</li>
              <li>Technology selection</li>
              <li>Cloud migration planning</li>
            </ul>
          </div>

          {/* Cloud DevOps Card */}
          <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
            <img src="/Assets/cloudConsultant/cloud_devops.jpg" alt="Cloud DevOps" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud DevOps</h3>
            <p className="text-white mb-4">
              Integrate development and operations to streamline workflows, automate deployments, and improve efficiency.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>CI/CD pipeline setup</li>
              <li>Infrastructure as Code (IaC)</li>
              <li>Monitoring and logging</li>
            </ul>
          </div>

          {/* Cloud Analytics Card */}
          <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
            <img src="/Assets/cloudConsultant/cloud_Analaytics.jpg" alt="Cloud Analytics" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Analytics</h3>
            <p className="text-white mb-4">
              Leverage cloud-based analytics to gain actionable insights and make data-driven decisions.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>Data warehousing</li>
              <li>Business intelligence</li>
              <li>Advanced analytics and reporting</li>
            </ul>
          </div>
        </div>

        <section className="bg-gray-200 p-8 mb-8 rounded-lg " data-aos="zoom-in-up">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">What Our Clients Say</h2>
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="flex items-center space-x-4">
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client 1" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="text-gray-900 mb-2">
                  "The cloud migration service we received was outstanding. The team was professional, and the transition was seamless. We’ve already seen significant improvements in performance and cost savings."
                </p>
                <p className="font-semibold text-gray-900 ">John Doe</p>
                <p className="text-gray-900">CTO, Corp</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex items-center space-x-4">
              <img src="https://randomuser.me/api/portraits/women/80.jpg" alt="Client 2" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="text-gray-900 mb-2">
                  "Their cloud security solutions have been invaluable for our business. We now have peace of mind knowing our data is secure and compliant with industry standards."
                </p>
                <p className="font-semibold text-gray-900">Jane Smith</p>
                <p className="text-gray-900">CEO, Tech Innovations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Contact Section */}
        <div style={containerStyle} data-aos="zoom-in-up">
          <div className="relative container mx-auto text-center py-18 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold mt-20 mb-6">
              Elevating Your Business with Cloud Solutions
            </h1>
            <p className="text-lg md:text-lg mb-8">
              Expert cloud consulting services designed to optimize your operations, enhance scalability.
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
              CONTACT
            </button>
          </div>

          {isFormVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-slide-up">
              <form
                className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg shadow-lg w-80 relative transition-all duration-300"
                data-aos="zoom-in-up"
                onSubmit={handleSubmit} // Set the onSubmit handler
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
                    onChange={handleChange} // Bind the input value to formData
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
                    onChange={handleChange} // Bind the input value to formData
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
                    onChange={handleChange} // Bind the input value to formData
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
                    onChange={handleChange} // Bind the input value to formData
                    className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-800">Query</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange} // Bind the input value to formData
                    className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
                    rows="3" // Reduced the height by decreasing row count
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

export default CloudConsultingPage;
