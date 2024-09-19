'use client'
import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
// import React from 'react'

const OdooSEOPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-50 text-gray-900 py-32" data-aos="zoom-in-up">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Boost Your Online Presence with Odoo SEO Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Enhance your website’s visibility and drive more traffic with our specialized Odoo SEO services. We optimize your Odoo website to improve search engine rankings and attract more potential customers.
          </p>
          <a href="#contact" className="bg-blue-950 text-white py-3 px-6 rounded-lg font-semibold text-lg">
            Get Started
          </a>
        </div>
      </section>

      {/* Odoo SEO Services Overview */}
      <section className="py-12 bg-gray-100" data-aos="zoom-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Tailored Odoo SEO Solutions</h2>
          <p className="text-lg mb-8 text-center text-gray-900 max-w-2xl mx-auto">
            Our Odoo SEO services are designed to elevate your digital presence with a focus on your unique business needs. We offer customized strategies that drive meaningful results and foster growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-royal-blue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">Local SEO Optimization</h3>
              <p className="text-white">
                For businesses aiming to attract local customers, we optimize your Odoo site for local search. This includes setting up and managing Google My Business profiles and ensuring your local listings are accurate and up-to-date.
              </p>
            </div>
            <div className="bg-royal-blue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">Voice Search Optimization</h3>
              <p className="text-white">
                With the rise of voice search, we optimize your content to capture voice search queries. This involves creating conversational content and optimizing for long-tail keywords.
              </p>
            </div>
            <div className="bg-royal-blue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">SEO Audits & Analysis</h3>
              <p className="text-white">
                We conduct comprehensive SEO audits to identify issues and opportunities for improvement. Our detailed analysis helps in refining strategies and achieving better search engine performance.
              </p>
            </div>
            <div className="bg-royal-blue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">User Experience (UX) Optimization</h3>
              <p className="text-white">
                Enhancing user experience is crucial for SEO. We focus on improving site navigation, load times, and mobile responsiveness to ensure a seamless user journey and higher engagement rates.
              </p>
            </div>
            <div className="bg-royal-blue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">Competitor Analysis</h3>
              <p className="text-white">
                Understanding your competitors is key to developing effective SEO strategies. We analyze your competitors’ SEO efforts to identify gaps and opportunities for your own website.
              </p>
            </div>
            <div className="bg-royal-blue p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-white">Content Marketing & Strategy</h3>
              <p className="text-white">
                We create and implement content strategies that drive traffic and engagement. This includes crafting high-quality blog posts, infographics, and other content types that resonate with your target audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100" data-aos="zoom-in-up">
  <div className="container mx-auto px-4">
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      
      {/* <img
        src="/images/seo-performance.jpg"
        alt="SEO Performance"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      /> */}
      
      <div className="relative p-8 bg-gray-200 bg-opacity-90">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900">Transform Your Online Presence with Our Odoo SEO Expertise</h2>
        
        <p className="text-lg mb-6 text-gray-900">
          Our Odoo SEO services are designed to unlock the true potential of your website by enhancing visibility and driving meaningful traffic. Here’s how we achieve remarkable results:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Boost Your Search Rankings</h3>
            <p className="text-gray-900">
              We use advanced techniques to improve your site’s search engine rankings. By targeting the right keywords and optimizing your content, we ensure your site stands out in search results.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Drive Quality Traffic</h3>
            <p className="text-gray-900">
              Our strategies focus on attracting high-quality traffic that converts. We analyze user behavior and refine our tactics to bring visitors who are genuinely interested in your offerings.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Enhance User Experience</h3>
            <p className="text-gray-900">
              A well-optimized site provides a better user experience. We ensure your site is fast, responsive, and easy to navigate, keeping visitors engaged and reducing bounce rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Contact / Call to Action */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Ready to Elevate Your Online Presence?</h2>
          <p className="text-lg mb-8 text-gray-600">
            Connect with us today to discover how our Odoo SEO services can transform your online visibility and drive more traffic to your website. Let’s work together to achieve your SEO goals.
          </p>
          <a href="mailto:info@example.com" className="bg-royal-blue text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-300">
            Get in Touch
          </a>
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

      <Footer />
    </div>
  )
}

export default OdooSEOPage
