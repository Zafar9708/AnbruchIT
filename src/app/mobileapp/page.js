// Import necessary components and hooks at the top of your file
'use client'
import Footer from '@/components/Footer';
import { initializeAOS } from '@/utils/AosSetup';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';

const MobileAppDevelopmentPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <header className="relative bg-blue-50 text-gray-800 py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/your-background-image.jpg')" }}>
        {/* <div className="absolute inset-0 bg-gray-300 opacity-50"></div> */}
        <div className="relative z-10 container mx-auto text-center mt-14 mb-1">
          <h1 className="text-5xl font-extrabold leading-tight relative">
            Mobile App Development
            <span className="absolute inset-0 bg-gradient-to-r opacity-30 rounded-lg"></span>
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto font-semibold leading-relaxed">
            We create powerful mobile applications that drive your business forward, providing top-notch solutions for iOS and Android.
          </p>
          <div className="mt-8">
            <a href="/contact" className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4 bg-gray-200">
        {/* Hero Section */}
        <section className="text-center mb-16 mt-1">
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
            {/* Service Card */}
            {[ 
              { title: 'Custom App Development', description: 'We build custom mobile applications from scratch, tailored to your specific needs.', imageUrl: 'https://www.tangenttek.com/storage/app/public/UploadedBlogs/3St8SGSqca9nI4is2lYDHdeX3Rwb5LVOaURLUZMs.jpg' },
              { title: 'Cross-Platform Development', description: 'Develop apps that work seamlessly on both iOS and Android platforms.', imageUrl: 'https://static.tildacdn.com/tild6561-6538-4663-b266-623435653439/cross-platform-app-d.png' },
              { title: 'UI/UX Design', description: 'Create intuitive and engaging designs that enhance user experience.', imageUrl: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051556.jpg' },
              { title: 'App Maintenance & Support', description: 'Ongoing maintenance to keep your app up-to-date and functional.', imageUrl: 'https://www.serole.com/wp-content/uploads/2018/09/2.Application-Maintenance-Support-banner-01.jpg' },
              { title: 'Consulting & Strategy', description: 'Provide expert advice and strategic planning to align technology with your business goals.', imageUrl: 'https://www.glueup.com/sites/default/files/image_1571.png' },
              { title: 'Integration & API Development', description: 'Build and integrate APIs to connect your app with other services and platforms.', imageUrl: 'https://media.excellentwebworld.com/wp-content/uploads/2022/03/17091451/best-api-development-services.webp' }
            ].map((service, index) => (
              <div key={index} className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden" data-aos="zoom-in-up">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-8 bg-blue-950">
                  <h3 className="text-xl text-white font-semibold mb-3">{service.title}</h3>
                  <p className="text-base text-white ">{service.description}</p>
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
            {/* Image */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://www.slideteam.net/media/catalog/product/cache/1280x720/w/h/why_choose_us_for_your_app_development_ios_app_development_slide01.jpg"
                alt="Why Choose Us"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Text Content */}
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
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl text-black font-semibold mb-6">Our Work</h2>
            <p className="text-lg text-black mb-8">
              Check out some of our recent projects to see how we bring our clients' visions to life.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="bg-gray-100 text-black p-6 rounded-lg shadow-lg">
                <img
                  src='https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg'
                  alt='Gourmet Guide
'
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Gourmet Guide</h3>
                <p className="text-lg">
                  A brief description of the project highlighting the key aspects and technologies used.
                </p>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-100 text-black p-6 rounded-lg shadow-lg">
                <img
                  src='https://a.storyblok.com/f/99519/1100x619/1bd432fd52/website-project-management-build-phase.png'
                  alt='Tech Trends
'
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Tech Trends</h3>
                <p className="text-lg">
                  A brief description of the project highlighting the key aspects and technologies used.
                </p>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-100 text-black p-6 rounded-lg shadow-lg">
                <img
                  src='https://www.zilliondesigns.com/blog/wp-content/uploads/Web-Design-Trend-2024-1280x720.jpg'
                  alt='Civic Connect'
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Civic Connect</h3>
                <p className="text-lg">
                  A brief description of the project highlighting the key aspects and technologies used.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Portfolio
          </h2>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-lg font-semibold mb-12">
              Explore some of the standout projects we’ve delivered, demonstrating our expertise and the results we've achieved.
            </p>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3" data-aos="zoom-in-up">
              {/* Portfolio Item */}
              {[ 
                { title: 'Quantum Leap', description: 'Quantum Leap redefines mobile technology with its groundbreaking features and advanced functionality.', imageUrl: 'https://www.orientsoftware.com/Themes/Content/Images/blog/2023-11-07/practical-quantum-app-what-is.jpg' },
                { title: 'Horizon X', description: 'Horizon X pushes the boundaries of mobile innovation, offering a futuristic and immersive experience.', imageUrl: 'https://img.freepik.com/premium-photo/smartphone-with-colorful-app-icons-connected-by-lines_885831-167966.jpg' },
                { title: 'Infinity Hub', description: 'Infinity Hub creates a seamless, interconnected mobile ecosystem that enhances user productivity and connectivity.', imageUrl: 'https://www.mindinventory.com/blog/wp-content/uploads/2018/12/benefits-of-mobile-app-for-business.webp' },
              ].map((project, index) => (
                <div key={index} className="bg-blue-950 p-12 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                  />
                  <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                  <p className="text-base text-white ">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


{/* Contact Section */}
<section id="contact" className="py-16 px-4 bg-white">
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
          <div className="md:w-1/2">
            <form className="bg-blue-950 p-8 rounded-lg shadow-lg">
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
      </section>      </main>

      <Footer />
    </div>
  );
};

export default MobileAppDevelopmentPage;
