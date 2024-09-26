'use client'
import React, { useEffect,useState } from 'react';
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

      <main>
        {/* Hero Section */}
        <section className="text-center  py-24 bg-blue-50 mb-4" data-aos="zoom-in-up">
        <h1 className="text-3xl mt-16 font-bold mb-4 text-black">Transform Your Business with Expert Analytics Services</h1>
         <p className="text-lg text-black">
         We provide in-depth insights that empower you to make informed, data-driven decisions and enhance operational efficiency.
            </p>

          <div className="flex justify-center mt-8">
            <a href="/contact" className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold">
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
            {/* <Link href="/web-analytics" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </Link> */}
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
            {/* <Link href="/mobile-app-analytics" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </Link> */}
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
            {/* <Link href="/data-visualization" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </Link> */}
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
        <section className="bg-gray-100 py-12 px-4" data-aos="zoom-in-up">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-950">What Our Clients Say</h2>
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
        “Thanks to their analytics solutions, we have gained actionable insights that have streamlined our operations and boosted our overall performance. Their expertise is unmatched!”
    </p>
    <p className="font-semibold text-black">Maria Lopez</p>
    <p className="text-black">COO, Dynamic Solutions</p>
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
        <section className="py-12 bg-blue-50 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-12" data-aos="zoom-in-up">
                <h3 className="text-xl font-semibold mb-4 text-white">E-Commerce Growth</h3>
                <p className="text-white mb-4">
                  Our client, an e-commerce store, saw a 30% increase in sales after implementing our web analytics and conversion rate optimization strategies.
                </p>
                {/* <Link href="/case-studies/e-commerce-growth" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Read More
                </Link> */}
              </div>

              {/* Case Study 2 */}
              <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-12" data-aos="zoom-in-up">
                <h3 className="text-xl font-semibold mb-4 text-white">Mobile App Success</h3>
                <p className="text-white mb-4">
                  By utilizing our mobile app analytics services, a client saw a 50% improvement in user retention and engagement within six months.
                </p>
                {/* <Link href="/case-studies/mobile-app-success" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Read More
                </Link> */}
              </div>

              {/* Case Study 3 */}
              <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-12" data-aos="zoom-in-up">
                <h3 className="text-xl font-semibold mb-4 text-white">Data-Driven Decisions</h3>
                <p className="text-white mb-4">
                  Our data visualization tools helped a leading finance firm streamline their reporting process, resulting in faster and more accurate decision-making.
                </p>
                {/* <Link href="/case-studies/data-driven-decisions" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Read More
                </Link> */}
              </div>
            </div>
          </div>
        </section>
       

       {/* Custom Contact Section */}
       <div style={containerStyle} data-aos="zoom-in-up">
            <div className="relative container mx-auto text-center py-18 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
    Ready to Transform Your Web Analytics?
     </h1>
        <p className="text-lg md:text-lg mb-8">
       Contact us today to explore how our web analytics solutions can provide valuable insights, optimize your user experience, and drive impactful results for your business.
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
                        CONTACT US
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
        
        
      </main>
      <Footer />
    </div>
  );
};

export default AnalyticsPage;
