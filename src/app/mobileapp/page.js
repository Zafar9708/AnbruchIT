'use client'
import Footer from '@/components/Footer';
import { initializeAOS } from '@/utils/AosSetup';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';
import CollaborateContact from '@/components/CollaborateContact';

const MobileAppDevelopmentPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

 // State for form visibility
 const [isFormVisible, setFormVisible] = useState(false);

 // Styles for the container
 const containerStyle = {
     backgroundColor: 'rgb(229 231 235)',
     height: '350px',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection: 'column',
     textAlign: 'center',
 };



  return (
    <div className='bg-white'>
      <Header />
      <Navbar />
      <header className="relative bg-blue-50 text-gray-800 py-8 bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/your-background-image.jpg')" }}>
        <div className="relative z-10 container mx-auto text-center mt-24 mb-1">
          <h1 className="text-5xl font-extrabold leading-tight relative">
            Design & Build Exceptional Solutions
            <span className="absolute inset-0 bg-gradient-to-r opacity-30 rounded-lg"></span>
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto font-semibold leading-relaxed">
            Transform your ideas into reality with our expert design and development services. We specialize in crafting tailored solutions that elevate your brand and enhance user experiences across all platforms.
          </p>
          <div className="mt-8">
            <button onClick={handleOpenModal} className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </header>

      
        {/* Hero Section */}
        <section className="text-center mb-16 mt-8">
          <h2 className="text-4xl font-bold mb-4">
            Turn Your Ideas into Stunning Apps
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold leading-relaxed">
            Our mobile app development services create feature-rich applications for both iOS and Android, tailored to your specific business needs.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[ 
              { title: 'Custom App Development', description: 'We build custom mobile applications from scratch, tailored to your specific needs.', imageUrl: 'https://www.tangenttek.com/storage/app/public/UploadedBlogs/3St8SGSqca9nI4is2lYDHdeX3Rwb5LVOaURLUZMs.jpg' },
              { title: 'Cross-Platform Development', description: 'Develop apps that work seamlessly on both iOS and Android platforms.', imageUrl: 'https://static.tildacdn.com/tild6561-6538-4663-b266-623435653439/cross-platform-app-d.png' },
              { title: 'UI/UX Design', description: 'Create intuitive and engaging designs that enhance user experience.', imageUrl: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051556.jpg' },
              { title: 'App Maintenance & Support', description: 'Ongoing maintenance to keep your app up-to-date and functional.', imageUrl: 'https://www.serole.com/wp-content/uploads/2018/09/2.Application-Maintenance-Support-banner-01.jpg' },
              { title: 'Consulting & Strategy', description: 'Provide expert advice and strategic planning to align technology with your business goals.', imageUrl: 'https://www.glueup.com/sites/default/files/image_1571.png' },
              { title: 'Integration & API Development', description: 'Build and integrate APIs to connect your app with other services and platforms.', imageUrl: 'https://media.excellentwebworld.com/wp-content/uploads/2022/03/17091451/best-api-development-services.webp' }
            ].map((service, index) => (
              <div key={index} className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden" data-aos="zoom-in-up">
                <img src={service.imageUrl} alt={service.title} className="w-full h-40 object-cover rounded-t-lg" />
                <div className="p-8 bg-blue-950">
                  <h3 className="text-xl text-white font-semibold mb-3">{service.title}</h3>
                  <p className="text-base text-white">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="bg-gray-300 py-16" data-aos="zoom-in-up">
          <h2 className="text-4xl font-extrabold text-blue-700 text-center mb-8 relative">
            Why Choose Us?
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-700 rounded-full"></span>
          </h2>
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/w/h/why_choose_us_for_your_app_development_ios_app_development_slide01.jpg" alt="Why Choose Us" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <p className="p-4 text-xl mb-6">
                Our team delivers high-quality mobile applications with a focus on exceptional user experience and comprehensive support.
              </p>
              <ul className="list-disc list-inside text-left mx-auto space-y-2 max-w-lg">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>High-quality, scalable apps</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Tailored solutions to meet your needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Expertise in iOS and Android platforms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Focus on user experience and design</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Comprehensive support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        
           

        {/* Custom Contact Section */}
        <div style={containerStyle} data-aos="zoom-in-up">
            <div className="relative container mx-auto text-center py-18 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold mt-12 mb-6">
    Designing Solutions That Inspire and Innovate
</h1>
<p className="text-lg md:text-lg mb-8">
    Custom design and development services that empower your brand and engage your audience.
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
                        CONTACT
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







      <Footer />
    </div>
  );
};

export default MobileAppDevelopmentPage;
