import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

const WebDevelopmentPage = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <main className="bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24">
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
          <div className="relative container mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-4">Web Development</h1>
            <p className="text-xl mb-8">
              Crafting high-performance websites tailored to your business needs.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
            <p className="text-lg mb-8">
              We specialize in creating dynamic and engaging websites that drive results. From custom web development to responsive design, our team delivers top-notch solutions.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Service Card 1 */}
              <div className="bg-blue-950 text-white p-16 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Custom Web Development</h3>
                <p className="text-sm mb-4">
                  Tailored web solutions that fit your unique business needs. Our team builds scalable and robust applications from the ground up.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-blue-950 text-white p-16 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Responsive Design</h3>
                <p className="text-sm mb-4">
                  Ensure your website looks great on any device. Our responsive designs offer a seamless user experience across all platforms.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-blue-950 text-white p-16 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h3>
                <p className="text-sm mb-4">
                  Launch your online store with ease. We provide comprehensive e-commerce solutions to help you sell products and services effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="bg-black py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl text-white font-semibold mb-6">Our Work</h2>
            <p className="text-lg text-white mb-8">
              Check out some of our recent projects to see how we bring our clients' visions to life.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="bg-white text-black p-6 rounded-lg shadow-lg">
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
              <div className="bg-white text-black p-6 rounded-lg shadow-lg">
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
              <div className="bg-white text-black p-6 rounded-lg shadow-lg">
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
      </section>

      </main>

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
