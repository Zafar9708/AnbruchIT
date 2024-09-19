'use client';
import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
// import React from 'react'

const services = [
  {
    title: 'Marketing Strategy',
    description: 'Develop comprehensive marketing strategies to help businesses reach their target audience and achieve their marketing goals.',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/54ea37dfe4b09706d4a8f4f8/1541185471679-XW4VHN50KE13DIBTGZ9J/griffin+marketing+david+arlington+alexandria+google.jpg'
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Optimize your website to rank higher in search engine results, increase visibility, and drive more organic traffic.',
    imageUrl: 'https://brandlume.com/wp-content/uploads/2019/10/960X540.png'
  },
  {
    title: 'UX/UI Design',
    description: 'Create engaging and user-friendly designs that enhance user experience and interface for digital products.',
    imageUrl: 'https://media.licdn.com/dms/image/D5612AQFwV7zzF8PreQ/article-cover_image-shrink_720_1280/0/1691465286767?e=2147483647&v=beta&t=glX0RA_O8iJ1zU1rwTikBf_oGzV9csXunhc-PwZbPnU'
  },
   {
    title: 'Project Management',
   description: 'Efficiently manage and oversee projects to ensure they are completed on time, within scope, and on budget.',
  imageUrl: 'https://c8.alamy.com/comp/K3NHFR/presentation-of-project-management-areas-of-knowledge-such-as-cost-K3NHFR.jpg'
  },
   {
   title: 'Business Consulting',
   description: 'Provide expert advice and strategies to help businesses improve their performance and achieve their objectives.',
   imageUrl: 'https://images.businessnewsdaily.com/app/uploads/2022/04/04074404/GettyImages-1133767597.jpg'
  },
   {
   title: 'Data Analysis',
   description: 'Analyze data to provide insights and recommendations for improving business performance.',
   imageUrl: 'https://c8.alamy.com/comp/H5E397/consultant-showing-data-analysis-concept-on-screen-with-charts-for-H5E397.jpg'
   }
];

const OtherService = () => {
  useEffect(()=>{
    const cleanupAOS=initializeAOS();
    return cleanupAOS

  },[])
  return (
    <div className="bg-white py-6 px-4" data-aos="zoom-in-up">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-4xl font-extrabold mb-2">Our Additional Services</h1>
        <h2 className="text-lg md:text-2xl mb-6">Explore our additional services designed to support your business needs.</h2>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-aos="zoom-in-up">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-950 text-white p-10 rounded-lg shadow-lg" data-aos="zoom-in-up">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-32 object-cover rounded-md mb-4" // Reduced image height
              />
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2> {/* Adjusted font size */}
              <p className="text-sm mb-4">{service.description}</p> {/* Adjusted font size */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OtherService
