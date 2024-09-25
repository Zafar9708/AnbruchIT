'use client';
import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const CarouselComponent = () => {
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
    fontSize: isMobile ? '1.4em' : '1.6em',
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

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'scale(1.00)',
  };

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
      swipeable={false}
    >
      {/* First Section */}
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h2 style={headingStyle}>Services</h2>
          <h1 style={middleTextStyle}>
            End to End Implementation & <br /> Integration Services
          </h1>
          <p style={paragraphStyle}>
            Our expert team specializes in seamless integration of Salesforce and Odoo. 
            We ensure that your business processes are optimized for success, with 
            tailored solutions that meet your unique needs.
          </p>
          <Link href="/sfdc">
            <button
              style={buttonStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Learn More
            </button>
          </Link>
        </div>
        {!isMobile && (
          <img
            src={'od-removebg.png'}
            alt='Service Image'
            style={imageStyle}
          />
        )}
      </div>

      {/* Second Section */}
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h2 style={headingStyle}>Resources</h2>
          <h1 style={middleTextStyle}>Develop Big with Our Qualified Tech Resources</h1>
          <p style={paragraphStyle}>
            Explore our range of resources to enhance your development projects. 
            From ReactJs to Angular, we provide the tools and frameworks that 
            empower your development teams to create outstanding applications.
          </p>
          <Link href="/mobileapp">
            <button
              style={buttonStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Learn More
            </button>
          </Link>
        </div>
        {!isMobile && (
          <img
            src={'edit-removebg-preview.png'}
            alt='Resources Image'
            style={imageStyle}
          />
        )}
      </div>

      {/* Third Section */}
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h2 style={headingStyle}>Solutions</h2>
          <h1 style={middleTextStyle}>Gifting Solutions for Every Occasion</h1>
          <p style={paragraphStyle}>
            Discover a wide range of gifting solutions tailored to every celebration. 
            Whether it’s for birthdays, anniversaries, or corporate events, we have 
            the perfect gifts to make your occasions memorable.
          </p>
          <Link href="/gift">
            <button
              style={buttonStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Learn More
            </button>
          </Link>
        </div>
        {!isMobile && (
          <img
            src={'gift-removebg-preview.png'}
            alt='Solutions Image'
            style={imageStyle}
          />
        )}
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
