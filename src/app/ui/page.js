'use client'
import React, { useEffect, useState, useRef } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
// import React from 'react';

const UIUXPage = () => {
    useEffect(()=>{
        const cleanupAOS=initializeAOS();
        return cleanupAOS
    
      },[])

      const [isFormVisible, setFormVisible] = useState(false);

      // Styles for the container
      const containerStyle = {
          backgroundColor: ' rgb(219 234 254)',
          height: '350px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
      };
  return (
    <div>
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="text-center bg-blue-50 py-20 mt-16 mb-2">
          <h1 className="text-5xl font-bold text-gray-950 mb-4">UI/UX Design Services</h1>
          <p className="text-lg text-gray-700 mb-6">
            We create user-centric designs that enhance user experience and engagement.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Get Started
          </button>
        </section>

        {/* Service Cards Section */}
        <section className="bg-gray-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mb-2 container mt-0 px-4">
          {/* Sample Service Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"  data-aos="zoom-in-up">
            <img
              src="https://images.pexels.com/photos/18884203/pexels-photo-18884203/free-photo-of-buttons-on-screen-of-device.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
              alt="UI Design"
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-100 p-4">
              <h2 className="text-xl font-semibold text-gray-950">User Interface Design</h2>
              <p className="text-gray-950 mb-2">Crafting visually stunning interfaces tailored to your users' needs.</p>
              <p className="text-gray-950 text-sm">
                Our UI design focuses on aesthetics and usability, ensuring that every visual element serves a purpose.
              </p>
            </div>
          </div>

          {/* Sample Service Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <img
              src="https://images.pexels.com/photos/25312284/pexels-photo-25312284/free-photo-of-a-camera-with-a-purple-light-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
              alt="UX Design"
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-100 p-4">
              <h2 className="text-xl font-semibold text-gray-950">User Experience Design</h2>
              <p className="text-gray-950 mb-2">Ensuring a seamless and enjoyable experience for your users.</p>
              <p className="text-gray-950 text-sm">
                We conduct extensive user research and testing to create intuitive interfaces that users love.
              </p>
            </div>
          </div>

          {/* Sample Service Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <img
              src="https://cdn.sanity.io/images/599r6htc/regionalized/c0b37c91abda040890243c39c5973fde5b888a18-1081x541.png?w=1200&q=70&fit=max&auto=format"
              alt="Prototyping"
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-100 p-4">
              <h2 className="text-xl font-semibold text-gray-950">Prototyping</h2>
              <p className="text-gray-950 mb-2">Create interactive prototypes to validate ideas before development.</p>
              <p className="text-gray-950 text-sm">
                We build high-fidelity prototypes that allow stakeholders to visualize the end product.
              </p>
            </div>
          </div>

          {/* Sample Service Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <img
              src="https://storage.googleapis.com/twg-content/original_images/MobileLabs_Thumbnail_1280x720.png"
              alt="User Testing"
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-100 p-4">
              <h2 className="text-xl font-semibold text-gray-950">User Testing</h2>
              <p className="text-gray-950 mb-2">Gather feedback from real users to refine and enhance the design.</p>
              <p className="text-gray-950 text-sm">
                Our rigorous testing processes identify pain points and opportunities for improvement.
              </p>
            </div>
          </div>

          {/* Sample Service Card 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"  data-aos="zoom-in-up">
            <img
              src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
              alt="UX Strategy"
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-100 p-4">
              <h2 className="text-xl font-semibold text-gray-950">UX Strategy</h2>
              <p className="text-gray-950 mb-2">Develop a strategy that aligns design with your business goals.</p>
              <p className="text-gray-950 text-sm">
                We create a roadmap that outlines user needs and design objectives.
              </p>
            </div>
          </div>

          {/* Sample Service Card 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"  data-aos="zoom-in-up">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
              alt="Visual Design"
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-100 p-4">
              <h2 className="text-xl font-semibold text-gray-950">Visual Design</h2>
              <p className="text-gray-95 mb-2">Enhance your brand’s identity with visually engaging designs.</p>
              <p className="text-gray-950 text-sm">
                Our visual design services encompass branding, color theory, and typography.
              </p>
            </div>
          </div>
        </section>

        {/* UI/UX Design Process Section */}
        <section className="bg-gray-100 mt=8 mb-2 py-12" data-aos="zoom-in-up">
          <h2 className="text-2xl font-bold text-center text-gray-950 mb-4">Our UI/UX Design Process</h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 mt-12 lg:grid-cols-3 gap-6 container mx-auto px-4">
            {/* Process Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl font-semibold text-gray-800">1. Discovery</h3>
              <p className="text-gray-600">
                We start by understanding your business goals and target audience through interviews and market research.
              </p>
            </div>

            {/* Process Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl font-semibold text-gray-800">2. User Research</h3>
              <p className="text-gray-600">
                We conduct surveys, interviews, and testing to understand user behaviors and pain points.
              </p>
            </div>

            {/* Process Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl font-semibold text-gray-800">3. Ideation</h3>
              <p className="text-gray-600">
                Our team brainstorms and sketches potential solutions focusing on user needs and feedback.
              </p>
            </div>

            {/* Process Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl font-semibold text-gray-800">4. Design</h3>
              <p className="text-gray-600">
                Using wireframes and prototypes, we create high-fidelity designs that reflect the final product.
              </p>
            </div>

            {/* Process Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl font-semibold text-gray-800">5. Testing</h3>
              <p className="text-gray-600">
                We conduct usability testing with real users to refine the product based on feedback.
              </p>
            </div>

            {/* Process Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in-up">
              <h3 className="text-xl font-semibold text-gray-800">6. Implementation</h3>
              <p className="text-gray-600">
                We collaborate with development teams to ensure the design vision is accurately implemented.
              </p>
            </div>
          </section>
        </section>

              

        <div style={containerStyle} data-aos="zoom-in-up">
            <div className="relative container  text-center py-18 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
  Ready to Enhance Your User Experience?
</h1>
<p className="text-lg md:text-lg mb-8">
  Connect with us today to explore our UI/UX design services and discover how we can help you create intuitive, user-friendly interfaces that captivate your audience and drive engagement.
</p>


 



            </div>

                <div>
                    <button
                        type="button"
                        style={{
                            padding: '0.75rem 2.5rem',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            backgroundColor: 'rgb(29 78 216)',
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

export default UIUXPage;
