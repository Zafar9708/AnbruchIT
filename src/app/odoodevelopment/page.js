'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
import { initializeAOS } from '@/utils/AosSetup';

const OdooDevelopmentPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-gray-100">

        {/* Hero Section */}
        <section className="bg-blue-50 py-32" data-aos="zoom-in-up">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Transform Your Business with Custom Odoo Solutions
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Unlock the full potential of your business with our expert Odoo development services. We provide tailored solutions to streamline your processes, enhance productivity, and drive growth.
            </p>
            <a href="#contact" className="bg-blue-950 text-white py-3 px-6 rounded-lg font-semibold text-lg">
              Get Started
            </a>
          </div>
        </section>

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

        {/* Contact / Call to Action */}
        <section id="contact" className="bg-gray-100 py-16" data-aos="zoom-in-up">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Ready to Transform Your Business with Odoo?</h2>
            <p className="text-lg mb-8 text-gray-900">
              Contact us today to learn more about our Odoo development services and how we can help optimize your business operations with customized solutions.
            </p>
            <a href="mailto:info@example.com" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300">
              Get in Touch
            </a>
          </div>
        </section>
        <section id="contact" className="py-16 px-4 bg-white"  data-aos="zoom-in-up">
                <div className="container mx-auto flex flex-col md:flex-row items-start">
                    {/* Contact Information */}
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
                        <p className="text-lg text-gray-900 mb-6">
                            We are here to answer your questions and help you get started on your path to automation excellence.
                        </p>
                        <ul className="text-gray-700">
                            <li className="flex items-center mb-4">
                                <svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" />
                                </svg>
                                <strong>Phone:</strong> +1 (123) 456-7890
                            </li>
                            <li className="flex items-center mb-4">
                                <svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" />
                                </svg>
                                <strong>Email:</strong> info@anbruchIT.com
                            </li>
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l4.293-4.293a1 1 0 011.414 0L12 5l3.293-3.293a1 1 0 011.414 0L21 7m-6 7l4.293-4.293a1 1 0 011.414 0L21 12m-6 7l4.293-4.293a1 1 0 011.414 0L21 19m-6 7l4.293-4.293a1 1 0 011.414 0L21 26" />
                                </svg>
                                <strong>Address:</strong> D-76, Noida Sector 62, Uttar Pradesh, 201301
                            </li>
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
      </div>
      <Footer />
    </div>
  )
}

export default OdooDevelopmentPage;
