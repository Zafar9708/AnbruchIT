'use client'
import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
// import React from 'react';

// Example data for leaders with updated titles
const leaders = [
  {
    name: 'Aseem Gupta',
    title: 'Director',
    bio: 'Aseem Gupta is a visionary leader with over 20 years of experience in the tech industry. He is passionate about driving innovation and growth.',
    imageUrl: 'aseemsir.jpeg', // Replace with actual image URL
    linkedIn: 'https://www.linkedin.com/in/aseemgupta04/' // Example link
  },
  {
    name: 'Atul Singhal',
    title: 'Associate Director',
    bio: 'Atul Singhal is an expert in technology and development, leading our tech team with a focus on cutting-edge solutions and engineering excellence.',
    imageUrl: 'AtulSir.jpeg', // Replace with actual image URL
    linkedIn: 'https://www.linkedin.com/in/atulsinghal789/' // Example link
  }
  // Add more leaders with these titles as needed
];

const OurLeader = () => {
  useEffect(()=>{
    const cleanupAOS=initializeAOS();
    return cleanupAOS

  },[])
  // Filter leaders based on title
  const filteredLeaders = leaders.filter(leader =>
    leader.title === 'Associate Director' || leader.title === 'Director'
  );

  return (
    <div className="bg-black py-5 mt-10"  data-aos="zoom-in-up">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          The Leaders Guiding Our Vision
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredLeaders.map((leader, index) => (
            <div
              key={index}
              className="bg-blue-950 rounded-lg shadow-lg overflow-hidden  "
            >
              <div className="w-40 h-40 overflow-hidden rounded-full  mx-auto mt-4">
                <img
                  src={leader.imageUrl}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center ">
                <h3 className="text-xl font-semibold text-white mb-1">{leader.name}</h3>
                <p className="text-white mb-2">{leader.title}</p>
                <p className="text-white mb-4">{leader.bio}</p>
                <a
                  href={leader.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLeader;
