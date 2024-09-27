'use client'
import React, { useEffect,useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
// import React from 'react';

const ManagedServicesPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

// State for form visibility
const [isFormVisible, setFormVisible] = useState(false);

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
        {/* <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold">Managed Services</h1>
          </div>
        </header> */}

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
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Expertise and Experience</h3>
                <p className="text-white">
                  Gain access to a team of IT professionals with specialized skills and experience, ensuring high-quality service and the latest technological advancements.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Focus on Core Business</h3>
                <p className="text-white">
                  By outsourcing IT management, you can focus on your core business activities and strategic initiatives, rather than dealing with day-to-day IT operations.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Enhanced Security</h3>
                <p className="text-white">
                  Managed services providers implement robust security measures to protect your data and infrastructure from cyber threats and unauthorized access.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Scalability</h3>
                <p className="text-white">
                  Easily scale your IT resources up or down based on your business needs without the need for significant capital investment.
                </p>
              </div>
              <div className="bg-blue-950 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
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
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Case Study: Retail Success</h3>
                <p className="text-gray-800 mb-4">
                  A large retail chain adopted our managed services to streamline its IT operations. By implementing proactive monitoring and support, we reduced downtime by 40% and improved system performance, leading to a 25% increase in sales during peak seasons.
                </p>
                {/* <a href="#" className="text-blue-600 hover:underline">Read Full Case Study</a> */}
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Success Story: Healthcare Efficiency</h3>
                <p className="text-gray-800 mb-4">
                  A healthcare provider faced challenges with data management and security. Our managed services ensured robust data backup solutions and 24/7 support, significantly reducing data loss incidents and improving compliance with healthcare regulations.
                </p>
                {/* <a href="#" className="text-blue-600 hover:underline">Read Full Success Story</a> */}
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Case Study: Financial Sector Innovation</h3>
                <p className="text-gray-800 mb-4">
                  A financial services firm sought to upgrade its IT infrastructure. Through our managed services, we implemented a new cloud-based system, enhancing operational efficiency and reducing IT costs by 30% while ensuring top-notch security and compliance.
                </p>
                {/* <a href="#" className="text-blue-600 hover:underline">Read Full Case Study</a> */}
              </div>
            </div>
          </div>
        </section>

        {/* Blog / Resources */}
        <section className="py-12 bg-blue-50" data-aos="zoom-in-up">
          <div className="container mx-auto px-4" data-aos="zoom-in-up">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Blog & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-blue-950 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">The Future of Managed Services</h3>
                <p className="text-white mb-4">
                  Explore the evolving landscape of managed services and how emerging technologies are shaping the future of IT management.
                </p>
                {/* <a href="#" className="text-blue-600 hover:underline">Read More</a> */}
              </div>
              <div className="bg-blue-950 p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">How to Choose a Managed Services Provider</h3>
                <p className="text-white mb-4">
                  Learn key factors to consider when selecting a managed services provider to ensure you get the best fit for your business needs.
                </p>
                {/* <a href="#" className="text-blue-600 hover:underline">Read More</a> */}
              </div>
              <div className="bg-blue-950 p-6 rounded-lg shadow-lg" data-aos="zoom-in-up">
                <h3 className="text-2xl font-semibold mb-4 text-white">Top Benefits of Cloud Management</h3>
                <p className="text-white mb-4">
                  Discover the advantages of cloud management and how it can help streamline your IT operations and reduce costs.
                </p>
                {/* <a href="#" className="text-blue-600 hover:underline">Read More</a> */}
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
                            color: 'black',
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
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
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
      
       
      </div>
      <Footer />
    </div>
  );
};

export default ManagedServicesPage;
