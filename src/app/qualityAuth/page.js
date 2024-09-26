'use client'
import React, { useEffect,useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
// import React from 'react';

const QualityAutoPage = () => {
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
        <div className="bg-white">
            <Header />
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-blue-50 text-black py-24">
                {/* <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}></div> */}
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-4xl mt-14 font-extrabold mb-6 leading-tight">
                        Revolutionize Your Quality Control with Our Automation Solutions
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                        Streamline your quality control processes with our cutting-edge automation services. Enhance efficiency, reduce errors, and achieve superior quality outcomes.
                    </p>
                    <a href="/contact" className="bg-blue-400 text-blue-900 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-300 transition duration-300">
                        Get Started
                    </a>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-12 bg-white">
                <div className="container  px-0 text-center" data-aos="zoom-in-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-black">Our Quality Automation Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Service Card 1 */}
                        <div className="bg-blue-950 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                            <div className="flex justify-center mb-4">
                                <img src="https://cdn.prod.website-files.com/5eb9845c0972c01cdaec8415/621849c186aee063ce193b47_article-test-automation-tools.jpg" alt="Automated Testing" className="w-60 h-40"/>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Automated Testing</h3>
                            <p className="text-white">
                                Implement automated testing frameworks to ensure consistent and reliable test coverage across your products.
                            </p>
                        </div>
                        {/* Service Card 2 */}
                        <div className="bg-blue-950 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                            <div className="flex justify-center mb-4">
                                <img src="https://www.shutterstock.com/image-vector/workflow-icon-line-style-your-600nw-1410673460.jpg" alt="Advanced Automation Tools" className="w-60 h-40"/>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Advanced Automation Tools</h3>
                            <p className="text-white">
                                Leverage state-of-the-art tools to automate complex workflows and enhance productivity in your quality control processes.
                            </p>
                        </div>
                        {/* Service Card 3 */}
                        <div className="bg-blue-950 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                            <div className="flex justify-center mb-4">
                                <img src="https://images.business.com/app/uploads/2022/03/23021742/Marketing-data-analytics_NicoElNino_BDC-3.png" alt="Real-Time Monitoring" className="w-60 h-40"/>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Real-Time Monitoring</h3>
                            <p className="text-white">
                                Implement real-time monitoring solutions to track and manage quality metrics continuously and proactively.
                            </p>
                        </div>

                        <div className="bg-blue-950 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                      <div className="flex justify-center mb-4">
                      <img src="https://media.istockphoto.com/id/1367967285/photo/automation-software-technology-process-system-business-concept.jpg?s=612x612&w=0&k=20&c=VnRZHYgIfInFhaShiStMroW7PnVyvAC4C9SodjBf4ns=" alt="Quality Automation" className="w-60 h-40"/>
                        </div>
                          <h3 className="text-2xl font-semibold mb-4 text-white">Quality Automation Solutions</h3>
                        <p className="text-white">
                           Streamline your testing processes with our quality automation solutions, ensuring precision and reliability in every release.
                             </p>
                       </div>

                    </div>
                </div>
            </section>

            {/* Industry Insights */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 text-center" data-aos="zoom-in-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-950">Industry Insights</h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        {/* Insight 1 */}
                        <div className="bg-blue-50 p-8 rounded-lg  max-w-xs">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-950">The Benefits of Quality Automation</h3>
                            <p className="text-gray-950 mb-4">
                                Quality automation enhances efficiency, reduces human error, and ensures consistent product quality by automating repetitive tasks.
                            </p>
                            {/* <a href="/insights/benefits" className="text-blue-600 hover:underline">Read More</a> */}
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg max-w-xs">
    <h3 className="text-2xl font-semibold mb-4 text-gray-950">Key Strategies for Quality Automation</h3>
    <p className="text-gray-950 mb-4">
        Discover essential strategies to implement quality automation effectively, including best practices for tool selection and workflow integration.
    </p>
    {/* <a href="/insights/strategies" className="text-blue-600 hover:underline">Read More</a> */}
</div>


                        {/* Insight 2 */}
                        <div className="bg-blue-50 p-8 rounded-lg  max-w-xs">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-950">Latest Trends in Automation</h3>
                            <p className="text-gray-950 mb-4">
                                Stay informed about the latest trends in automation technologies and how they are transforming quality control across industries.
                            </p>
                            {/* <a href="/insights/trends" className="text-blue-600 hover:underline">Read More</a> */}
                        </div>

                        {/* Insight 3 */}
                        <div className="bg-blue-50 p-8 rounded-lg  max-w-xs">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-950">Impact of Automation on Quality</h3>
                            <p className="text-gray-950 mb-4">
                                Discover how automation impacts quality assurance and the overall effectiveness of quality control processes.
                            </p>
                            {/* <a href="/insights/impact" className="text-blue-600 hover:underline">Read More</a> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-12 bg-blue-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-blue-950">Additional Resources</h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        {/* Resource 1 */}
                        <div className="bg-white p-12 rounded-lg shadow-lg max-w-xs" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-950">Automation Implementation Guide</h3>
                            <p className="text-gray-950 mb-4">
                                Download our guide to help you implement automation solutions effectively in your quality control processes.
                            </p>
                            {/* <a href="/resources/guide" className="text-blue-600 hover:underline">Download Now</a> */}
                        </div>

                        {/* Resource 2 */}
                        <div className="bg-white p-12 rounded-lg shadow-lg max-w-xs"  data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-950">Quality Automation Checklist</h3>
                            <p className="text-gray-950 mb-4">
                                Get our comprehensive checklist to ensure that your automation setup meets all necessary quality standards.
                            </p>
                            {/* <a href="/resources/checklist" className="text-blue-600 hover:underline">Download Now</a> */}
                        </div>

                        {/* Resource 3 */}
                        <div className="bg-white p-12 rounded-lg shadow-lg max-w-xs" data-aos="zoom-in-up">
                              <h3 className="text-2xl font-semibold mb-4 text-gray-950">Quality Automation Best Practices</h3>
                          <p className="text-gray-950 mb-4">
                             Explore essential best practices for implementing quality automation effectively, ensuring optimal results and efficiency.
                                 </p>
                           {/* <a href="/resources/best-practices" className="text-blue-600 hover:underline">Learn More</a> */}
                              </div>


                        {/* Resource 3 */}
                        <div className="bg-white p-12 rounded-lg shadow-lg max-w-xs"  data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-950">Webinar on Automation Best Practices</h3>
                            <p className="text-gray-950 mb-4">
                                Join our upcoming webinar to learn about the best practices in automation and how they can benefit your quality control processes.
                            </p>
                            {/* <a href="/resources/webinar" className="text-blue-600 hover:underline">Sign Up</a> */}
                        </div>
                    </div>
                </div>
            </section>

            
        

         {/* Custom Contact Section */}
         <div style={containerStyle} data-aos="zoom-in-up">
            <div className="relative container mx-auto text-center py-18 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
            Ready to Revolutionize Your Quality Control?
      </h1>
      <p className="text-lg md:text-lg mb-8">

        Contact us today to discover how our Quality Automation solutions can streamline your processes and boost your product quality.</p>



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

            <Footer />
        </div>
    );
}

export default QualityAutoPage;
