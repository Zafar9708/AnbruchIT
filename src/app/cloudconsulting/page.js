'use client'
import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
// import React from 'react';

const CloudConsultingPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);
  return (
    <div className="bg-white">
      <Header />
      <Navbar />

      <main>
        <section className="text-center bg-blue-50 mb-16 py-12">
          <h1 className="text-4xl font-extrabold mb-6 text-black">Cloud Consulting Services</h1>
          <p className="text-xl text-black max-w-5xl mx-auto">
            Unlock the power of the cloud with our expert consulting services. We help businesses of all sizes leverage cloud technologies to optimize operations, reduce costs, and drive innovation.
          </p>
          <div className="flex justify-center mt-8">
            <a href="/services" className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold">
              Explore Our Services
            </a>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {/* Cloud Migration Card */}
          <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
            <img src="/Assets/cloudConsultant/cloud-migration-min.webp" alt="Cloud Migration" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Migration</h3>
            <p className="text-white mb-4">
              Seamlessly transition your IT infrastructure to the cloud, optimizing performance and cost-efficiency.
            </p>
            <ul className="list-disc list-inside text-left text-white mb-4">
              <li>Assessment and planning</li>
              <li>Data migration</li>
              <li>Cloud architecture design</li>
            </ul>
            <a href="#contact" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </a>
          </div>

          {/* Cloud Optimization Card */}
          <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
            <img  src="/Assets/cloudConsultant/cloud-cost-optimization-fb.png" alt="Cloud Optimization" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Optimization</h3>
            <p className="text-white mb-4">
              Maximize the value of your cloud investment through performance tuning, cost optimization, and security best practices.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>Cost analysis and reduction</li>
              <li>Performance optimization</li>
              <li>Security assessments</li>
            </ul>
            <a href="#contact" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </a>
          </div>

          {/* Cloud Security Card */}
          <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
            <img src="/Assets/cloudConsultant/EC_Data_Security_Lock_750.jpg" alt="Cloud Security" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Security</h3>
            <p className="text-white mb-4">
              Protect your sensitive data and ensure compliance with rigorous security standards.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>Risk assessments</li>
              <li>Security audits</li>
              <li>Incident response planning</li>
            </ul>
            <a href="#contact" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </a>
          </div>

          {/* Cloud Consulting Card */}
          <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
            <img src="/Assets/cloudConsultant/cloud_consulting.jpg" alt="Cloud Consulting" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Consulting</h3>
            <p className="text-white mb-4">
              Get expert guidance on your cloud journey, from strategy development to implementation and ongoing support.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>Cloud strategy development</li>
              <li>Technology selection</li>
              <li>Cloud migration planning</li>
            </ul>
            <a href="#contact" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </a>
          </div>

          {/* Cloud DevOps Card */}
          <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
            <img src="/Assets/cloudConsultant/cloud_devops.jpg" alt="Cloud DevOps" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud DevOps</h3>
            <p className="text-white mb-4">
              Integrate development and operations to streamline workflows, automate deployments, and improve efficiency.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>CI/CD pipeline setup</li>
              <li>Infrastructure as Code (IaC)</li>
              <li>Monitoring and logging</li>
            </ul>
            <a href="#contact" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </a>
          </div>

          {/* Cloud Analytics Card */}
          <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
            <img src="/Assets/cloudConsultant/cloud_Analaytics.jpg" alt="Cloud Analytics" className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Analytics</h3>
            <p className="text-white mb-4">
              Leverage cloud-based analytics to gain actionable insights and make data-driven decisions.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>Data warehousing</li>
              <li>Business intelligence</li>
              <li>Advanced analytics and reporting</li>
            </ul>
            <a href="#contact" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </a>
          </div>
        </div>

        <section className="bg-gray-200 p-8 mb-16 rounded-lg shadow-md" data-aos="zoom-in-up">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">What Our Clients Say</h2>
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="flex items-center space-x-4">
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client 1" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="text-gray-900 mb-2">
                  "The cloud migration service we received was outstanding. The team was professional, and the transition was seamless. We’ve already seen significant improvements in performance and cost savings."
                </p>
                <p className="font-semibold text-gray-900 ">John Doe</p>
                <p className="text-gray-900">CTO,Corp</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex items-center space-x-4">
              <img src="https://randomuser.me/api/portraits/women/80.jpg" alt="Client 2" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="text-gray-900 mb-2">
                  "Their cloud security solutions have been invaluable for our business. We now have peace of mind knowing our data is secure and compliant with industry standards."
                </p>
                <p className="font-semibold text-gray-900">Jane Smith</p>
                <p className="text-gray-900">CEO, Tech Innovations</p>
              </div>
            </div>
          </div>
        </section>

       
      </main>
      <Footer />
    </div>
  );
};

export default CloudConsultingPage;
