'use client';
import React, { useEffect, useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import Link from 'next/link';

const Development = () => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="text-gray-950 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-royal-blue">V</span>
            isualize.
            <span className="text-royal-blue">E</span>
            xecute.
            <span className="text-royal-blue">G</span>
            uarantee - Our Services
          </h1>
          <p className="text-md font-medium md:text-lg mt-2">Explore our tailored solutions to elevate your business.</p>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-8 px-2" data-aos="zoom-in-up">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              href: '/webdevelop',
              title: 'Web Development',
              description: 'We provide custom software development solutions to help you build robust and scalable applications tailored to your business needs.',
              images: [
                'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/14011035/pexels-photo-14011035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              ],
            },
            {
              href: '/mobileapp',
              title: 'Mobile App Development',
              description: 'Our design services focus on creating user-friendly interfaces and experiences that align with your brand and enhance user engagement.',
              images: [
                'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/246684/pexels-photo-246684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              ],
            },
            {
              href: '/ui',
              title: 'UI/UX Design',
              description: 'Our design services focus on creating user-friendly interfaces and experiences that align with your brand and enhance user engagement.',
              images: [
                'https://images.pexels.com/photos/18884203/pexels-photo-18884203/free-photo-of-buttons-on-screen-of-device.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/25312284/pexels-photo-25312284/free-photo-of-a-camera-with-a-purple-light-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              ],
            },
            {
              href: '/qualityAuth',
              title: 'Testing',
              description: 'We offer comprehensive testing services to ensure your applications are reliable, secure, and perform optimally across various platforms.',
              images: [
                'https://media.istockphoto.com/id/1398473177/photo/questionnaire-with-checkboxes-filling-survey-form-online-answer-questions.jpg?s=612x612&w=0&k=20&c=sgZY6ojUqB0goVyn_9fKLfeyZ6lyWjSb3-FQjgeUPec=',
                'https://media.istockphoto.com/id/1273058761/vector/tiny-people-testing-quality-assurance-in-software.jpg?s=612x612&w=0&k=20&c=DsNlOqfMpPkHlVEavkrz8atzgOxVSRgZPkGHYH-e1-8=',
              ],
            },
            {
              href: '/cms',
              title: 'CMS Development',
              description: 'Develop a content management system to easily manage website content.',
              images: [
                'https://www.digitalsilk.com/wp-content/uploads/2022/07/what-is-cms-in-web-design-and-develoment-hero-image-blog.jpg',
                'https://www.digitalsilk.com/wp-content/uploads/2022/08/why-good-web-design-is-important.jpg',
              ],
            },
            {
              href: '/cloudconsulting',
              title: 'Cloud Strategy',
              description: 'Our cloud strategy focuses on facilitating moving data more securely and improving business processes.',
              images: [
                'https://media.istockphoto.com/id/1432660477/photo/cloud-computing-technology-big-data-concept.jpg?s=612x612&w=0&k=20&c=TJoGu_1HvnHpL1wZHLpQ_4sWO97LyCaIbWwd_ExZSFE=',
                'https://gigster.com/wp-content/uploads/2023/03/Unlocking-New-Potential-with-AI-Powered-Cloud-Computing.png',
              ],
            },
          ].map(({ href, title, description, images }, index) => (
            <div
              key={title}
              className="relative block bg-white rounded-lg shadow-md overflow-hidden group h-72 sm:h-80 md:h-96 transition-all duration-300"
              onMouseEnter={() => setActiveCard(index)} // Set active card on hover
              onMouseLeave={() => setActiveCard(null)} // Reset on mouse leave
            >
              <img
                src={activeCard === index ? images[1] : images[0]} // Change image based on hover state
                alt={title}
                className="w-full h-full object-cover transition-opacity duration-300"
                style={{ filter: activeCard === index ? 'brightness(0.50)' : 'brightness(0.70)' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 bg-gradient-to-t from-black via-transparent to-transparent transition-transform duration-300">
                <button className="text-black font-bold text-md w-40 sm:w-52 text-left bg-white rounded-md p-1 hover:bg-gray-200 transition mb-4">
                  {title}
                </button>
                <p className="text-gray-100 font-medium transition-transform duration-300">{description}</p>
                <Link href={href}>
                  <button className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-2 ${activeCard === index ? '' : 'opacity-0'}`}>
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Development;
