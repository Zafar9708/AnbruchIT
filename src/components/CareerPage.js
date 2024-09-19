'use client';
import Footer from '@/components/Footer';
import React, { useEffect, useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import { jobs } from '../JobData/Job';

const CareerPage = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
    }, []);

    const [search, setSearch] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase())
    );

    const handleApplyNow = (job) => {
        alert(`You have applied for the position: ${job.title}`);
        setSelectedJob(null);
    };

    return (
        <div className="max-w-8xl mx-auto px-6 py-24">
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold mb-2 text-gray-800">Join Our Team</h1>
                <p className="text-lg text-gray-950">We’re on the lookout for creative and driven individuals to join our innovative team.</p>
            </header>

            {/* Search Bar */}
            <section className="mb-6">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
            </section>

            {/* Job Listings */}
            <section className="mb-12">
                <h2 className="text-3xl text-center font-semibold mb-6 text-gray-700">Current Openings</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredJobs.map((job, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg p-6  shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            data-aos="zoom-in-up"
                        >
                            <h3 className="text-2xl font-bold text-black mb-2">{job.title}</h3>
                            <p className="text-black mb-1">Location: <span className="font-medium">{job.location}</span></p>
                            <p className="text-black mb-2">Salary: <span className="font-medium">{job.ctc}</span></p>
                            <p className="text-black mb-4">{job.description}</p>
                            <button
                                onClick={() => setSelectedJob(job)}
                                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Job Detail Modal */}
            {selectedJob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
                        <h3 className="text-2xl font-bold mb-4">{selectedJob.title}</h3>
                        <p className="text-gray-600 mb-2">Location: <span className="font-medium">{selectedJob.location}</span></p>
                        <p className="text-gray-800 mb-2">Salary: <span className="font-medium">{selectedJob.ctc}</span></p>
                        <p className="text-gray-700 mb-4">{selectedJob.description}</p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => handleApplyNow(selectedJob)}
                                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                            >
                                Apply Now
                            </button>
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Employee Testimonials Section */}
            <section className="text-center p-12 bg-gray-100 mb-4" data-aos="zoom-in-up">
                <h2 className="text-3xl font-semibold mb-6 text-gray-700">What Our Employees Say</h2>
                <div className="space-y-4">
                    <div className="p-4 border bg-blue-100 border-gray-300 rounded-lg shadow-md">
                        <p className="italic text-gray-950">"ANBRUCH IT has been a transformative place for my career. The support and opportunities for growth are unmatched!"</p>
                        <p className="font-semibold text-gray-800">— Sarah J., Software Engineer</p>
                    </div>
                    <div className="p-4 border bg-blue-100 border-gray-300 rounded-lg shadow-md">
                        <p className="italic text-gray-950">"I love the collaborative culture here! It's inspiring to work with such talented individuals."</p>
                        <p className="font-semibold text-gray-800">— Mark T., Product Manager</p>
                    </div>
                </div>
            </section>

            {/* Benefits Overview Section */}
            <section className="mb-12" data-aos="zoom-in-up">
    <h2 className="text-3xl text-center font-semibold mb-10 text-gray-800">Why Work With Us?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-royal-blue shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <h3 className="text-xl font-bold text-white mb-2">Competitive Salary</h3>
            <p className="text-white">We offer attractive salary packages and performance bonuses to reward your hard work.</p>
        </div>
        <div className="bg-royal-blue shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <h3 className="text-xl font-bold text-white mb-2">Flexible Hours</h3>
            <p className="text-white">Enjoy flexible working hours and remote work options to maintain a healthy work-life balance.</p>
        </div>
        <div className="bg-royal-blue shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <h3 className="text-xl font-bold text-white mb-2">Health & Wellness</h3>
            <p className="text-white">Comprehensive health and wellness programs to keep you healthy and motivated.</p>
        </div>
        <div className="bg-royal-blue shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <h3 className="text-xl font-bold text-white mb-2">Professional Development</h3>
            <p className="text-white">Access to training opportunities and mentorship programs to enhance your skills.</p>
        </div>
        <div className="bg-royal-blue shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <h3 className="text-xl font-bold text-white mb-2">Inclusive Environment</h3>
            <p className="text-white">We foster a supportive and inclusive workplace culture for everyone.</p>
        </div>
        <div className="bg-royal-blue shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
            <h3 className="text-xl font-bold text-white mb-2">Career Growth</h3>
            <p className="text-white">Regular performance reviews and personalized growth plans to help you advance your career.</p>
        </div>
    </div>
</section>



            {/* Application Process Section */}
            <section className="bg-gray-100 mb-12" data-aos="zoom-in-up">
    <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Application Process</h2>
    <p className="text-gray-700 text-center mb-8">We believe in a streamlined and transparent hiring process. Here’s how it works:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
                <span className="text-blue-600 text-2xl mr-3">📄</span>
                <h3 className="text-xl font-bold text-gray-800">Step 1: Submit Application</h3>
            </div>
            <p className="text-gray-600">Submit your application through our website.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
                <span className="text-blue-600 text-2xl mr-3">🔍</span>
                <h3 className="text-xl font-bold text-gray-800">Step 2: Resume Review</h3>
            </div>
            <p className="text-gray-600">Our recruitment team will review your resume.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
                <span className="text-blue-600 text-2xl mr-3">📞</span>
                <h3 className="text-xl font-bold text-gray-800">Step 3: Initial Interview</h3>
            </div>
            <p className="text-gray-600">Qualified candidates will be contacted for an initial interview.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
                <span className="text-blue-600 text-2xl mr-3">💬</span>
                <h3 className="text-xl font-bold text-gray-800">Step 4: Second Interview</h3>
            </div>
            <p className="text-gray-600">If successful, you'll have a second interview with the team.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
                <span className="text-blue-600 text-2xl mr-3">📩</span>
                <h3 className="text-xl font-bold text-gray-800">Step 5: Offer Letter</h3>
            </div>
            <p className="text-gray-600">Once selected, you'll receive an offer letter to join our team!</p>
        </div>
    </div>
</section>
 
            {/* Career Development Section */}
            <section className="mb-12 text-center p-6 bg-gray-50 shadow-md rounded-lg">
    <h2 className="text-4xl font-bold mb-4 text-gray-800">Career Development</h2>
    <p className="text-gray-950 text-lg mb-6">We invest in our employees' futures through various development programs:</p>
    <ul className="list-disc list-inside space-y-4 text-gray-700">
        <li className="flex items-start">
            <span className="mr-2 text-xl text-blue-500">✔️</span>
            <span>Mentorship programs with senior leadership</span>
        </li>
        <li className="flex items-start">
            <span className="mr-2 text-xl text-blue-500">✔️</span>
            <span>Access to workshops and conferences</span>
        </li>
        <li className="flex items-start">
            <span className="mr-2 text-xl text-blue-500">✔️</span>
            <span>Tuition reimbursement for relevant education</span>
        </li>
        <li className="flex items-start">
            <span className="mr-2 text-xl text-blue-500">✔️</span>
            <span>Regular performance reviews with personalized growth plans</span>
        </li>
    </ul>
</section>
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

            {/* <Footer /> */}
        </div>
    );
};

export default CareerPage;
