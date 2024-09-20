'use client';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

// Define the component
const Carausel = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '750px',
    backgroundColor: 'white', // Light background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  };

  const textContainerStyle = {
    flex: 1,
    padding: '40px',
    color: '#333', // Darker text color for contrast
    textAlign: 'left',
    fontFamily: '"Poppins", sans-serif',
  };

  const imageStyle = {
    maxWidth: '700px', // Set a maximum width for the image
    width: '100%', // Allow it to scale responsively
    height: 'auto', // Maintain aspect ratio
    objectFit: 'cover',
    borderRadius: '10px',
    marginLeft: '20px', // Margin to separate text and image
  };

  const headingStyle = {
    fontSize: '1.8em',
    marginBottom: '10px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px', // Spacing between letters
    color: '#0056b3', // Primary color
  };

  const middleTextStyle = {
    fontSize: '3.2em',
    fontWeight: 'bold',
    lineHeight: '1.1',
    margin: '10px 0',
    color: '#007bff', // Primary color for the main text
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    marginBottom: '20px',
    lineHeight: '1.6', // Increased line height for readability
    color: '#555', // Softer color for the paragraph
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
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow on button
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3', // Darker shade for hover effect
    transform: 'scale(1.05)', // Slightly grow button on hover
  };

  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={4000}
      showIndicators={false}
      swipeable={false}
    >
      {/* First Section */}
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h2 style={headingStyle}>Services</h2>
          <h1 style={middleTextStyle}>End to End Implementation & <br /> Integration Services</h1>
          <p style={paragraphStyle}>Salesforce & Odoo</p>
          <button style={buttonStyle} 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Learn More
          </button>
        </div>
        <img 
          src='https://eshopsync.com/wp-content/uploads/2021/04/Odoo-salesforce-Connector.png' 
          alt='Service Image' 
          style={imageStyle} 
        />
      </div>

      {/* Second Section */}
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h2 style={headingStyle}>Resources</h2>
          <h1 style={middleTextStyle}>Develop big with our qualified Tech Resources</h1>
          <p style={paragraphStyle}>ReactJs, NextJs, Angular, VueJs, React Native</p>
          <button style={buttonStyle} 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Learn More
          </button>
        </div>
        <img 
          src='https://media.licdn.com/dms/image/D4E12AQELnQ0rQAGR_w/article-cover_image-shrink_600_2000/0/1693798220141?e=2147483647&v=beta&t=JJziKBJBls3syZ5MBKYRMBpeZSIqWjkKRx82S8xJpWk' 
          alt='Resources Image' 
          style={imageStyle} 
        />
      </div>

      {/* Third Section */}
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h2 style={headingStyle}>Solutions</h2>
          <h1 style={middleTextStyle}>Gifting Solutions for Every Occasion</h1>
          <button style={buttonStyle} 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Learn More
          </button>
        </div>
        <img 
          src='https://www.kindpng.com/picc/m/578-5780272_gift-cards-png-transparent-png.png' 
          alt='Solutions Image' 
          style={imageStyle} 
        />
      </div>
    </Carousel>
  );
};

export default Carausel;
