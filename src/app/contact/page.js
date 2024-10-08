'use client';
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const ContactPage = () => {
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = {
            company_name: e.target.company_name.value,
            your_name: e.target.your_name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const response = await fetch('/api/email-send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.error || 'An error occurred.');
            }

            alert('Message sent successfully!');
            e.target.reset();
        } catch (error) {
            console.error('Fetch error:', error);
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative">
            <Header />
            <Navbar />
            <div className="relative w-full mt-[-1rem] md:mt-0">
                <img
                    src='https://pestostop.com/wp-content/uploads/2020/07/contact_us_banner.jpg'
                    alt="Descriptive Alt Text"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 overlay-animation" data-aos="zoom-in-up">
                    <h1 className="text-white text-3xl md:text-4xl mt-8 font-bold bg-opacity-50 p-4 rounded mb-4">
                        We're Here to Help!
                    </h1>
                    <button className="bg-blue-100 text-black text-lg font-bold px-6 py-3 rounded shadow-lg hover:bg-gray-200 transition duration-300">
                        We'd Love to Hear from You
                    </button>
                    <div className="mt-6 flex space-x-4 flex-wrap justify-center">
                        <a href="tel:+1234567890" className="flex items-center text-yellow-200 hover:text-gray-200 transition duration-300 mb-2">
                            <FaPhoneAlt className="mr-2 text-2xl" />
                            <span>Call Us</span>
                        </a>
                        <a href="mailto:info@example.com" className="flex items-center text-purple-200 hover:text-gray-200 transition duration-300 mb-2">
                            <FaEnvelope className="mr-2 text-2xl" />
                            <span>Email Us</span>
                        </a>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-950 hover:text-gray-200 transition duration-300 mb-2">
                            <FaLinkedin className="mr-2 text-2xl" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
                <div className="flex-1 mb-2 md:mb-0">
                    <h2 className="text-3xl md:text-4xl text-royal-blue font-bold mb-4">Get in Touch</h2>
                    <p className="text-md mb-2 text-lg">
                        We’re always excited to hear from you! Whether you have questions, feedback, or just want to chat, we’re here to help.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold mt-4">Why Reach Out?</h3>
                    <ul className="list-disc text-lg list-inside mt-4 text-md mb-4">
                        <li>Get personalized support tailored to your needs.</li>
                        <li>Learn about our latest features and updates.</li>
                        <li>Share your experiences and suggestions with us.</li>
                        <li>Join our community of users and share insights.</li>
                    </ul>
                </div>

                <div className="flex-1">
                    <form onSubmit={handleSubmit} className="bg-royal-blue p-4 rounded shadow-md py-6">
                        <h2 className="text-xl text-white font-semibold mb-4">Contact Form</h2>
                        <div className="mb-4">
                            <label className="block text-white mb-2" htmlFor="company_name">Company Name</label>
                            <input
                                type="text"
                                id="company_name"
                                name="company_name"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Your Company Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2" htmlFor="your_name">Your Name</label>
                            <input
                                type="text"
                                id="your_name"
                                name="your_name"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2" htmlFor="your_name">Phone</label>
                            <input
                                type="text"
                                id="your_name"
                                name="your_name"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="4"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="bg-gray-200 py-12 text-center">
                <h2 className="text-2xl text-gray-950 font-bold mb-4">Join Our Newsletter</h2>
                <p className="text-lg text-gray-950 mb-4">
                    Stay updated with the latest news, tips, and offers. Subscribe to our newsletter today!
                </p>
                <form className="flex justify-center">
                    <input
                        type="email"
                        className="p-2 border border-gray-300 rounded-l"
                        placeholder="Your Email"
                        required
                    />
                    <button className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition duration-300">
                        Subscribe
                    </button>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default ContactPage;
