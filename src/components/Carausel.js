'use client';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
// 
import { initializeAOS } from '@/utils/AosSetup';

import Link from 'next/link';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    height: isMobile ? 'auto' : '700px',
    backgroundColor: '#e3f2fd',
    padding: '12px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  };

  const textContainerStyle = {
    flex: 1,
    padding: isMobile ? '20px' : '40px',
    color: '#333',
    textAlign: 'left',
    fontFamily: '"Poppins", sans-serif',
  };

  const imageStyle = {
    maxWidth: '100%',
    width: isMobile ? '100%' : '750px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
    marginLeft: isMobile ? '0' : '20px',
    marginTop: isMobile ? '20px' : '0',
  };

  const headingStyle = {
    fontSize: isMobile ? '1.9em' : '1.9em',
    marginBottom: '10px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#0056b3',
  };

  const middleTextStyle = {
    fontSize: isMobile ? '2em' : '2.5em',
    fontWeight: '700',
    lineHeight: '1.3',
    margin: '10px 0',
    color: '#007bff',
  };

  const paragraphStyle = {
    fontSize: isMobile ? '1em' : '1.2em',
    marginBottom: '20px',
    lineHeight: '1.6',
    color: '#555',
  };

  const buttonStyle = {
    padding: '12px 25px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    fontSize: '1.2em',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  };

  const animationProps = (delay) => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay }, // Adjusted duration for smoother animations
  });

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={4000}
      swipeable={false}
      onChange={(index) => {
        const elements = document.querySelectorAll('.carousel-text');
        elements.forEach((element, i) => {
          const delay = i * 0.1; // Reduced delay
          element.style.opacity = 0;
          element.style.transform = 'translateY(-20px)'; // Adjusted position
          setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
          }, delay * 1000);
        });
      }}
    >
      {/* First Section */}
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h1 className="carousel-text" style={headingStyle}>
            Services
          </h1>
          <h1 className="carousel-text" style={middleTextStyle} data-aos="zoom-in">
            End to End Implementation & <br /> Integration Services
          </h1>
          <p className="carousel-text" style={paragraphStyle} data-aos="zoom-in">
            Our expert team specializes in seamless integration of Salesforce and Odoo. 
            We ensure that your business processes are optimized for success, with 
            tailored solutions that meet your unique needs.
          </p>
          <Link href="/sfdc">
            <button style={buttonStyle}>Learn More</button>
          </Link>
        </div>
        {!isMobile && <img src={'od-removebg.png'} alt='Service Image' style={imageStyle} />}
      </div>

      {/* Second Section */}
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h1 style={headingStyle}>
            Resources
          </h1>
          <h1 className="carousel-text" style={middleTextStyle} data-aos="zoom-in">
            Develop Big with Our Qualified Tech Resources
          </h1>
          <p className="carousel-text" style={paragraphStyle} data-aos="zoom-in">
            Explore our range of resources to enhance your development projects. 
            From ReactJs to Angular, we provide the tools and frameworks that 
            empower your development teams to create outstanding applications.
          </p>
          <Link href="/mobileapp">
            <button style={buttonStyle}>Learn More</button>
          </Link>
        </div>
        {!isMobile && <img src={'edit-removebg-preview.png'} alt='Resources Image' style={imageStyle} />}
      </div>

      {/* Third Section */}
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h1 style={headingStyle}>
            Solutions
          </h1>
          <h1 className="carousel-text" style={middleTextStyle} data-aos="zoom-in">
            Gifting Solutions for Every Occasion
          </h1>
          <p className="carousel-text" style={paragraphStyle} data-aos="zoom-in">
            Discover a wide range of gifting solutions tailored to every celebration. 
            Whether it’s for birthdays, anniversaries, or corporate events, we have 
            the perfect gifts to make your occasions memorable.
          </p>
          <Link href="/gift">
            <button style={buttonStyle}>Learn More</button>
          </Link>
        </div>
        {!isMobile && <img src={'gift-removebg-preview.png'} alt='Solutions Image' style={imageStyle} />}
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
