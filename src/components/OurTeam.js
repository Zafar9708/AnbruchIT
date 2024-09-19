'use client';


import React, { useEffect } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for team members
const teamMembers = [
  {
    role: 'Founder',
    name: 'Jane Doe',
    bio: 'Jane is the visionary behind our company, with a passion for technology and innovation. Her leadership drives our strategic direction.',
    image: '/aseemsir.jpeg' // Replace with actual image URL
  },
  {
    role: 'Director',
    name: 'John Smith',
    bio: 'John leads our operations with a focus on excellence and efficiency. His extensive experience ensures our projects run smoothly.',
    image: '/AtulSir.jpeg' // Replace with actual image URL
  },
  {
    role: 'CTO',
    name: 'Alice Johnson',
    bio: 'Alice is our technology expert, driving innovation and overseeing the development of cutting-edge solutions.',
    image: '/director.jpeg' // Replace with actual image URL
  },
  {
    role: 'CFO',
    name: 'Michael Brown',
    bio: 'Michael manages our financial operations, ensuring we maintain a strong financial position and strategic growth.',
    image: '/director.jpeg' // Replace with actual image URL
  },
  {
    role: 'COO',
    name: 'Emily Davis',
    bio: 'Emily oversees our day-to-day operations, optimizing processes and ensuring we deliver exceptional results to our clients.',
    image: '/director.jpeg' // Replace with actual image URL
  },
  {
    role: 'Head of Marketing',
    name: 'Robert Wilson',
    bio: 'Robert leads our marketing efforts, developing strategies to promote our brand and connect with our audience effectively.',
    image: '/director.jpeg' // Replace with actual image URL
  }
];

// Custom arrow components
const PrevArrow = (props) => (
  <button
    className="slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full focus:outline-none z-10 hover:bg-gray-800"
    onClick={props.onClick}
    aria-label="Previous Slide"
    style={{backgroundColor:'black'}}
  >
    &#9664;
  </button>
);

const NextArrow = (props) => (
  <button
    className="slick-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full focus:outline-none z-10 hover:bg-gray-800"
    onClick={props.onClick}
    aria-label="Next Slide"
    style={{backgroundColor:'black'}}
  >
    &#9654;
  </button>
);

const OurTeam = () => {
  useEffect(()=>{
    const cleanupAOS=initializeAOS();
    return cleanupAOS

  },[])
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-900 relative p-6 bg-whitesmoke" data-aos="zoom-in-up">
      <h2 className="text-white text-2xl font-bold text-center mb-6">Meet Our Team</h2>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col p-6  hover:bg-blue-200"
            style={{ height: 'auto' }} // Adjust height as needed
          >
            {/* Container for image */}
            <div className="flex justify-center mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-32 h-32 rounded-full" // Adjust width and height as needed
                style={{ maxWidth: '100px', maxHeight: '100px' }} // Constrain image dimensions
              />
            </div>
            <div className="flex flex-col flex-grow ">
              <div className="text-center mb-2 flex-grow-0">
                <h3 className="text-xl font-semibold text-gray-700">{member.role}</h3>
                <h4 className="text-lg font-medium text-gray-600">{member.name}</h4>
              </div>
              <p className="italic text-gray-500 text-center flex-grow">{member.bio}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurTeam;
