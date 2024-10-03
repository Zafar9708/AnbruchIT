'use client';
import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { initializeAOS } from '@/utils/AosSetup';
import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const OdooCustomAppPage = () => {
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
      formRef.current.querySelector('input').focus();

      const focusableElements = formRef.current.querySelectorAll('input, textarea, button');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const trapFocus = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', trapFocus);
      
      return () => {
        document.removeEventListener('keydown', trapFocus);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isFormVisible]);

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
          <h2 className="text-4xl font-bold p-4 mb-8 text-center">Key Features of Our Odoo Custom Apps</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature Cards */}
            {[ 
              { title: "Customizable Modules", desc: "Build custom modules tailored to your specific processes, ensuring seamless integration with existing workflows." },
              { title: "User-Friendly Interfaces", desc: "Design intuitive user interfaces that enhance user experience and promote efficient navigation." },
              { title: "Advanced Reporting Tools", desc: "Utilize comprehensive reporting features to gain insights into your operations and make data-driven decisions." },
              { title: "API Integrations", desc: "Seamlessly connect with other systems and applications to create a unified tech ecosystem." },
              { title: "Mobile Accessibility", desc: "Access your Odoo apps on-the-go with mobile-friendly designs, enabling productivity anytime, anywhere." },
              { title: "Dedicated Support", desc: "Receive ongoing support and maintenance to ensure your custom app evolves with your business needs." },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-royal-blue rounded-lg shadow-md" data-aos="zoom-in-up">
                <h3 className="text-xl text-white font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-white">{feature.desc}</p>
              </div>
            ))}
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
              {[
                "Consultation: We begin by understanding your business needs and objectives.",
                "Planning: We create a roadmap detailing features, timelines, and milestones.",
                "Development: Our team builds the application, ensuring adherence to best practices and industry standards.",
                "Testing: Rigorous testing is conducted to identify and fix any issues before launch.",
                "Deployment: We assist with the smooth deployment of your custom app.",
                "Training & Support: We provide training for your team and ongoing support to maximize your app's effectiveness."
              ].map((step, index) => (
                <li key={index}><strong>{step.split(':')[0]}</strong> {step.split(':')[1]}</li>
              ))}
            </ol>
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

        <div className="min-h-screen bg-gray-100">
          {/* Odoo Development Overview */}
          <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Our Odoo Development Services</h2>
              <p className="text-lg mb-8 text-center text-gray-800 max-w-2xl mx-auto" data-aos="zoom-in-up">
                Odoo is an all-in-one business management software that integrates various applications into a single platform. Our Odoo development services are designed to customize and enhance your Odoo experience, ensuring it meets your unique business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Custom Module Development", desc: "Develop custom modules to extend the functionality of your Odoo instance. We create tailored solutions to address specific business requirements and improve operational efficiency." },
                  { title: "Odoo Implementation", desc: "Seamlessly implement Odoo into your business operations. Our team ensures a smooth deployment process, including data migration and system configuration." },
                  { title: "Odoo Integration", desc: "Integrate Odoo with other systems and applications to streamline your workflows. We ensure that Odoo works harmoniously with your existing tools and platforms." },
                  { title: "Odoo Customization", desc: "Customize the Odoo interface and functionality to better fit your business processes. We tailor Odoo to match your specific needs and preferences." },
                  { title: "Odoo Support & Maintenance", desc: "Receive ongoing support and maintenance to ensure your Odoo system runs smoothly. Our team is available for troubleshooting, updates, and enhancements." },
                  { title: "Training & Consultation", desc: "Get training and consultation services to empower your team to use Odoo effectively. We provide hands-on training and guidance to maximize your investment." },
                ].map((service, index) => (
                  <div key={index} className="p-6 bg-white rounded-lg shadow-md" data-aos="zoom-in-up">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div style={containerStyle} data-aos="zoom-in-up">
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">Ready to Transform Your Business with Odoo?</h1>
          <p className="text-lg md:text-lg mb-8">Comprehensive Salesforce consulting services designed to streamline your processes.</p>
          <button
            type="button"
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            onClick={() => setFormVisible(true)}
          >
            CONTACT US
          </button>
        </div>

        {isFormVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg w-full max-w-sm mx-4"
              data-aos="zoom-in-up"
            >
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={() => setFormVisible(false)}
              >
                &times;
              </button>
              <h2 className="text-lg font-semibold mb-2 text-center text-blue-700">Contact Us</h2>
              
              <InputField icon={<HiOutlineOfficeBuilding />} label="Company Name" name="company_name" required />
              <InputField icon={<HiOutlineUser />} label="Your Name" name="your_name" required />
              <InputField icon={<HiOutlinePhone />} label="Phone" name="phone" required />
              <InputField icon={<HiOutlineMail />} label="Email" name="email" required type="email" />
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-800">Query</label>
                <textarea
                  name="message"
                  required
                  className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
                  rows="3"
                  style={{ resize: 'none' }}
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
        )}
      </main>

      <Footer />
    </div>
  );
};

const InputField = ({ icon, label, name, required, type = "text" }) => (
  <div className="mb-4">
    <label className="flex items-center mb-1">
      {icon}
      <span className="text-sm font-medium text-gray-800">{label}</span>
    </label>
    <input
      type={type}
      name={name}
      required={required}
      className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
    />
  </div>
);

export default OdooCustomAppPage;
