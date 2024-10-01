'use client';

import React, { useEffect,useState } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { initializeAOS } from '@/utils/AosSetup';

const OdooCustomAppPage = () => {
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
    backgroundColor: 'rgb(219 234 254)',
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

      <main className="bg-white">
        {/* Hero Section */}
        <section className="text-center py-28 bg-blue-50" data-aos="zoom-in-up">
          <h1 className="text-4xl mt-14 font-bold mb-4">Unlock Your Business Potential with Odoo Custom App Development</h1>
          <p className="text-lg md:text-xl mb-8">
            Tailor-made Odoo applications to fit your unique business needs, enhance productivity, and drive growth.
          </p>
          <a href="/contact" className="bg-blue-400 text-white py-3 px-6 rounded-lg">
            Discover Features
          </a>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16 bg-gray-100" data-aos="zoom-in-up">
          <h2 className="text-4xl font-bold  p-4 mb-8 text-center">Key Features of Our Odoo Custom Apps</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl text-white font-semibold mt-4 mb-2">Customizable Modules</h3>
              <p className="text-white">Build custom modules tailored to your specific processes, ensuring seamless integration with existing workflows.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl text-white font-semibold mb-2">User-Friendly Interfaces</h3>
              <p className='text-white'>Design intuitive user interfaces that enhance user experience and promote efficient navigation.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl text-white font-semibold mb-2">Advanced Reporting Tools</h3>
              <p className='text-white'>Utilize comprehensive reporting features to gain insights into your operations and make data-driven decisions.</p>
            </div>
            {/* Feature 4 */}
            <div className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl text-white font-semibold mb-2">API Integrations</h3>
              <p className='text-white'>Seamlessly connect with other systems and applications to create a unified tech ecosystem.</p>
            </div>
            {/* Feature 5 */}
            <div className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl  text-white font-semibold mb-2">Mobile Accessibility</h3>
              <p className='text-white'>Access your Odoo apps on-the-go with mobile-friendly designs, enabling productivity anytime, anywhere.</p>
            </div>
            {/* Feature 6 */}
            <div className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl text-white font-semibold mb-2">Dedicated Support</h3>
              <p className='text-white'>Receive ongoing support and maintenance to ensure your custom app evolves with your business needs.</p>
            </div>
          </div>
        </section>

       {/* Development Process Section */}
<section className="mb-16 flex flex-col md:flex-row items-center bg-gray-50" data-aos="zoom-in-up">
  <div className="md:w-1/2 p-4">
    <img 
      src="https://media.licdn.com/dms/image/D5612AQFvVi1RQi2s4A/article-cover_image-shrink_720_1280/0/1683108858545?e=2147483647&v=beta&t=vuDPF_SxmJR5QSAwLD1GpECwLw3FYiDw1z_eK1CrRBc" 
      alt="Development Process"
      className="rounded-lg shadow-lg" 
    />
  </div>
  <div className="md:w-1/2 p-4">
    <h2 className="text-5xl font-bold text-gray-950 mb-8 text-center md:text-left">Our Development Process</h2>
    <p className="mb-4 text-lg text-gray-950">
      Our development process is designed to deliver high-quality, custom solutions that align perfectly with your business objectives.
    </p>
    <ol className="list-decimal list-inside space-y-2">
      <li><strong>Consultation:</strong> We begin by understanding your business needs and objectives.</li>
      <li><strong>Planning:</strong> We create a roadmap detailing features, timelines, and milestones.</li>
      <li><strong>Development:</strong> Our team builds the application, ensuring adherence to best practices and industry standards.</li>
      <li><strong>Testing:</strong> Rigorous testing is conducted to identify and fix any issues before launch.</li>
      <li><strong>Deployment:</strong> We assist with the smooth deployment of your custom app.</li>
      <li><strong>Training & Support:</strong> We provide training for your team and ongoing support to maximize your app's effectiveness.</li>
    </ol>
  </div>
</section>



      <div className="min-h-screen bg-gray-100">

       

        {/* Odoo Development Overview */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Our Odoo Development Services</h2>
            <p className="text-lg mb-8 text-center text-gray-800 max-w-2xl mx-auto" data-aos="zoom-in-up">
              Odoo is an all-in-one business management software that integrates various applications into a single platform. Our Odoo development services are designed to customize and enhance your Odoo experience, ensuring it meets your unique business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Custom Module Development</h3>
                <p className="text-white">
                  Develop custom modules to extend the functionality of your Odoo instance. We create tailored solutions to address specific business requirements and improve operational efficiency.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Odoo Implementation</h3>
                <p className="text-white">
                  Seamlessly implement Odoo into your business operations. Our team ensures a smooth deployment process, including data migration and system configuration.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Odoo Integration</h3>
                <p className="text-white">
                  Integrate Odoo with other systems and applications to streamline your workflows. We ensure that Odoo works harmoniously with your existing tools and platforms.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Odoo Customization</h3>
                <p className="text-white">
                  Customize the Odoo interface and functionality to better fit your business processes. We tailor Odoo to match your specific needs and preferences.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Odoo Support & Maintenance</h3>
                <p className="text-white">
                  Receive ongoing support and maintenance for your Odoo system. We offer troubleshooting, updates, and performance enhancements to keep your system running smoothly.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Odoo Training</h3>
                <p className="text-white">
                  Equip your team with the knowledge and skills to effectively use Odoo. We provide training sessions and resources to ensure your staff can make the most of Odoo’s features.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Our Approach */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Our Approach to Odoo Development</h2>
            <p className="text-lg mb-8 text-center text-gray-600">
              Our approach to Odoo development is centered around understanding your specific business needs and delivering tailored solutions. Here’s how we do it:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in-up">
                <img src="https://elegantwebdesigns.org/wp-content/uploads/2022/07/apps_odoo.jpg" alt="Discovery & Analysis" className="w-40 h-40 mb-4"/>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Discovery & Analysis</h3>
                <p className="text-gray-600 text-center">
                  We begin with a comprehensive analysis of your business processes and requirements to identify the best Odoo solutions.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in-up">
                <img src="https://www.keyconcepts.co.in/Areas/Client/asset/images/Product/odoo/APPS.jpg" alt="Design & Planning" className="w-40 h-40 mb-4"/>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Design & Planning</h3>
                <p className="text-gray-600 text-center">
                  Our team creates a detailed project plan and design that aligns with your business objectives and ensures a successful implementation.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in-up">
                <img src="https://www.odoo.com/documentation/17.0/_images/web-design.png" alt="Development & Customization" className="w-40 h-40 mb-4"/>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Development & Customization</h3>
                <p className="text-gray-600 text-center">
                  We develop and customize Odoo modules to meet your specific needs, ensuring that the system functions seamlessly with your existing workflows.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in-up">
                <img src="https://img.freepik.com/premium-photo/project-task-management-effective-time-planning-tools-project-development-icon-3d-illustration-work-organizer-daily-plan_1240525-10405.jpg" alt="Testing & Quality Assurance" className="w-40 h-40 mb-4"/>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Testing & Quality Assurance</h3>
                <p className="text-gray-600 text-center">
                  Rigorous testing and quality assurance are conducted to ensure that the Odoo system performs as expected and meets all your requirements.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in-up">
                <img src="https://img.lovepik.com/photo/45009/0594.jpg_wh860.jpg" alt="Deployment & Training" className="w-40 h-40 mb-4"/>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Deployment & Training</h3>
                <p className="text-gray-600 text-center">
                  We handle the deployment of Odoo and provide training to your team to ensure a smooth transition and effective use of the system.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in-up">
                <img src="https://softhealer.com/theme_softhealer_website/static/src/img/images/odoo_support/about.webp" alt="Ongoing Support" className="w-40 h-40 mb-4"/>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ongoing Support</h3>
                <p className="text-gray-600 text-center">
                  Our support doesn’t end at deployment. We offer ongoing support and maintenance to keep your system running efficiently and address any issues that arise.
                </p>
              </div>
            </div>
          </div>
        </section>
                {/* Benefits of Odoo Development */}
                <section className="py-12 bg-gray-50" data-aos="zoom-in-up">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Benefits of Odoo Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-royal-blue p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Unified Business Processes</h3>
                <p className="text-white">
                  Odoo integrates all your business processes into one unified system, reducing complexity and improving efficiency.
                </p>
              </div>
              <div className="bg-royal-blue p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Scalability</h3>
                <p className="text-white">
                  Easily scale your business operations with Odoo’s modular architecture, adding or removing functionalities as needed.
                </p>
              </div>
              <div className="bg-royal-blue  p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Improved Decision-Making</h3>
                <p className="text-white">
                  Gain actionable insights with real-time data and advanced reporting features, helping you make informed business decisions.
                </p>
              </div>
              <div className="bg-royal-blue p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Enhanced Collaboration</h3>
                <p className="text-white">
                  Facilitate better collaboration across teams with integrated communication tools and shared data access.
                </p>
              </div>
              <div className="bg-royal-blue p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Cost Efficiency</h3>
                <p className="text-white">
                  Reduce operational costs with Odoo’s open-source nature and flexible pricing model, providing excellent value for your investment.
                </p>
              </div>
              <div className="bg-royal-blue p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Customizable to Your Needs</h3>
                <p className="text-white">
                  Tailor Odoo’s features to fit your unique business processes and industry requirements, ensuring a perfect fit.
                </p>
              </div>
            </div>
          </div>
        </section>
              </div>

                 {/* Custom Contact Section */}
         <div style={containerStyle} data-aos="zoom-in-up">
            <div className="relative container mx-auto text-center py-18 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
            Ready to Transform Your Business with Odoo?
</h1>
<p className="text-lg md:text-lg mb-8">
    Comprehensive Salesforce consulting services designed to streamline your processes.
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
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-slide-up">
    <form
      className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg shadow-lg w-80 relative transition-all duration-300"
      onSubmit={handleSubmit} // Ensure the handleSubmit is called on form submission
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
          value={formData.company_name} // Bind to state
          onChange={handleChange} // Handle state change
          required
          className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-800">Your Name</label>
        <input
          type="text"
          name="your_name"
          value={formData.your_name} // Bind to state
          onChange={handleChange} // Handle state change
          required
          className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-800">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone} // Bind to state
          onChange={handleChange} // Handle state change
          required
          className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-800">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email} // Bind to state
          onChange={handleChange} // Handle state change
          required
          className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-800">Query</label>
        <textarea
          name="message"
          value={formData.message} // Bind to state
          onChange={handleChange} // Handle state change
          required
          className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 transition-all duration-200"
          rows="3" 
        ></textarea>
      </div>
      <button
        type="submit" // Make sure this is set to submit
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

export default OdooCustomAppPage;
