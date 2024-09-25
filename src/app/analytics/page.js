'use client'
import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Link from 'next/link'; // Import Link from next/link
// import React from 'react';

const AnalyticsPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);
  return (
    <div>
      <Header />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="text-center  py-28 bg-blue-50 mb-4" data-aos="zoom-in-up">
          <h1 className="text-3xl font-bold mb-4 text-black">Analytics Services</h1>
          <p className="text-lg  text-black">
            Gain valuable insights into your business performance with our comprehensive analytics solutions. We help you make data-driven decisions and optimize your operations.
          </p>
          <div className="flex justify-center mt-8">
            <a href="/services" className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold">
              Explore Our Services
            </a>
          </div>
        </section>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12" data-aos="zoom-in-up">
          {/* Web Analytics Card */}
          <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-6 text-center" data-aos="zoom-in-up">
            <h3 className="text-xl font-bold mb-2 text-white ">Web Analytics</h3>
            <p className="text-white mb-4">
              Track website traffic, user behavior, and conversion rates to optimize your online presence.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>User acquisition and retention</li>
              <li>Conversion rate optimization (CRO)</li>
              <li>A/B testing</li>
            </ul>
            <p className="text-white mb-4">
              With our web analytics services, you’ll gain actionable insights into how users interact with your site, allowing you to make data-driven decisions to improve user engagement and increase conversions.
            </p>
            <Link href="/web-analytics" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </Link>
          </div>

          {/* Mobile App Analytics Card */}
          <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-6 text-center" data-aos="zoom-in-up">
            <h3 className="text-xl font-bold mb-2 text-white">Mobile App Analytics</h3>
            <p className="text-white mb-4">
              Understand how users interact with your mobile app and identify areas for improvement.
            </p>
            <ul className="list-disc text-white list-inside text-left mb-4">
              <li>User engagement analysis</li>
              <li>App store optimization (ASO)</li>
              <li>Crash reporting</li>
            </ul>
            <p className="text-white mb-4">
              Our mobile app analytics will help you monitor user interactions and performance metrics, enabling you to enhance app functionality, optimize user experience, and drive user retention.
            </p>
            <Link href="/mobile-app-analytics" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </Link>
          </div>

          {/* Data Visualization Card */}
          <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-6 text-center" data-aos="zoom-in-up">
            <h3 className="text-xl font-bold mb-2 text-white">Data Visualization</h3>
            <p className="text-white mb-4">
              Transform raw data into actionable insights with visually appealing and informative dashboards.
            </p>
            <ul className="list-disc text-white list-inside text-left mb-4">
              <li>Custom dashboard development</li>
              <li>Data storytelling</li>
              <li>Interactive visualizations</li>
            </ul>
            <p className="text-white mb-4">
              Our data visualization solutions turn complex data into clear, visually engaging formats, making it easier for you to understand trends and make informed decisions quickly.
            </p>
            <Link href="/data-visualization" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </Link>
          </div>

          {/* Predictive Analytics Card */}
          {/* <div className="bg-blue-950 border-gray-200 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">Predictive Analytics</h3>
            <p className="text-white mb-4">
              Leverage data-driven insights to forecast future trends and make informed decisions.
            </p>
            <ul className="list-disc text-white list-inside text-left mb-4">
              <li>Machine learning models</li>
              <li>Customer churn prediction</li>
              <li>Sales forecasting</li>
            </ul>
            <p className="text-gray-700 mb-4">
              With predictive analytics, you can anticipate future trends, identify potential risks, and seize opportunities before they arise, giving your business a competitive edge.
            </p>
            <Link href="/predictive-analytics" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </Link>
          </div> */}
        </div>

        {/* Testimonial Section */}
        <section className="bg-black py-16 px-4" data-aos="zoom-in-up">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">What Our Clients Say</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-md">
                <p className="text-black mb-4">
                  “The insights provided by their analytics services have been invaluable to our business. We've seen a significant improvement in user engagement and conversions. Highly recommend!”
                </p>
                <p className="font-semibold text-black">Alex Johnson</p>
                <p className="text-black">CEO, Tech Innovations</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-md">
                <p className="text-black mb-4">
                  “Their data visualization tools made it so much easier to understand our performance metrics. We now have a clearer picture of our business and can make more informed decisions.”
                </p>
                <p className="font-semibold text-black">Jessica Smith</p>
                <p className="text-black">Marketing Director, Creative Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-12" data-aos="zoom-in-up">
                <h3 className="text-xl font-semibold mb-4 text-white">E-Commerce Growth</h3>
                <p className="text-white mb-4">
                  Our client, an e-commerce store, saw a 30% increase in sales after implementing our web analytics and conversion rate optimization strategies.
                </p>
                <Link href="/case-studies/e-commerce-growth" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Read More
                </Link>
              </div>

              {/* Case Study 2 */}
              <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-12" data-aos="zoom-in-up">
                <h3 className="text-xl font-semibold mb-4 text-white">Mobile App Success</h3>
                <p className="text-white mb-4">
                  By utilizing our mobile app analytics services, a client saw a 50% improvement in user retention and engagement within six months.
                </p>
                <Link href="/case-studies/mobile-app-success" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Read More
                </Link>
              </div>

              {/* Case Study 3 */}
              <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-12" data-aos="zoom-in-up">
                <h3 className="text-xl font-semibold mb-4 text-white">Data-Driven Decisions</h3>
                <p className="text-white mb-4">
                  Our data visualization tools helped a leading finance firm streamline their reporting process, resulting in faster and more accurate decision-making.
                </p>
                <Link href="/case-studies/data-driven-decisions" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        
      </main>
      <Footer />
    </div>
  );
};

export default AnalyticsPage;
