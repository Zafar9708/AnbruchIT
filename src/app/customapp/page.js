import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceProvide from '@/components/ServiceProvide';

// Import Link from Next.js

const CustomAppDevelopmentPage = () => {
  return (
    <div className="bg-gray-50">
      {/* <Header /> */}
      <Navbar />

      <main className="p-6 md:p-10 lg:p-12 bg-white">
        {/* Hero Section */}
        <section className="text-center mb-12 mt-10" data-aos="zoom-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
            Our Development Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            We specialize in delivering high-quality mobile apps, web apps, and UX/UI designs. Discover our comprehensive services below.
          </p>
        </section>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Mobile App Card */}
          <div className="bg-blue-950 border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-6 md:p-8" data-aos="zoom-in-up">
            <img 
              src='https://digitalauthority.me/wp-content/uploads/2019/04/shutterstock_572886535.jpg' 
              alt="Mobile App Development"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-white">Mobile App Development</h3>
            <p className="text-white mb-4">
              We craft native mobile applications for Android and iOS, ensuring optimal performance and a seamless user experience.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white mb-4">
              <li>Android Native</li>
              <li>iOS Native</li>
              <li>Cross-Platform Solutions</li>
              <li>App Store Optimization (ASO)</li>
              <li>In-App Purchases & Monetization</li>
              <li>Maintenance & Updates</li>
              <li>Custom Integrations</li>
              <li>Push Notifications</li>
            </ul>
            <Link href="/mobileapp" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </Link>
          </div>

          {/* Web App Card */}
          <div className="bg-blue-950 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-6 md:p-8" data-aos="zoom-in-up">
            <img 
              src='https://essencesoftwares.com/wp-content/uploads/2020/10/Web-Development.jpeg' 
              alt="Web App Development"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-white">Web App Development</h3>
            <p className="text-white mb-4">
              Our web applications are designed to be responsive, scalable, and secure, addressing a wide array of business needs.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white mb-4">
              <li>Custom Web Applications</li>
              <li>eCommerce Solutions</li>
              <li>Progressive Web Apps (PWAs)</li>
              <li>Content Management Systems (CMS)</li>
              <li>API Development & Integration</li>
              <li>Database Management</li>
              <li>Web Application Security</li>
              <li>Cloud-Based Solutions</li>
              <li>Performance Optimization</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Responsive Design</li>
              <li>DevOps Integration</li>
            </ul>
            <Link href="/webdevelop" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </Link>
          </div>

          {/* UX/UI Design Card */}
          <div className="bg-blue-950 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-6 md:p-8" data-aos="zoom-in-up">
            <img 
              src='https://www.almondsolutions.com/images/blog-ui-ux-150223.jpg' 
              alt="UX/UI Design"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-white">UX/UI Design</h3>
            <p className="text-white mb-4">
              We design intuitive and visually appealing interfaces that enhance user engagement and satisfaction.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white mb-4">
              <li>UI/UX Research</li>
              <li>Wireframing & Prototyping</li>
              <li>Interactive Design</li>
              <li>User Testing & Feedback</li>
              <li>Design System Creation</li>
              <li>Branding & Identity Design</li>
              <li>Accessibility Design</li>
              <li>Visual & Graphic Design</li>
            </ul>
            <Link href="/mobileapp" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </main>

      <ServiceProvide />
      <section id="contact" className="py-16 px-4 bg-blue-50">
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
}

export default CustomAppDevelopmentPage;
