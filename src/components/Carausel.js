'use client';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

// Define the component
const Carausel = () => {
  // Style for the container
  const containerStyle = (imageUrl) => ({
    position: 'relative',
    height: '750px',
    backgroundColor: '#333',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  // Style for the text overlay
  const textOverlayStyle = {
    position: 'absolute',
    bottom: '15%',
    left: '5%',
    top: '25%',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '80%',
    textAlign: 'left',
    opacity: 0,
    fontFamily: '"Poppins", sans-serif', // Apply Poppins font
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Adds a subtle shadow for better readability
  };

  // Styles for text elements
  const headingStyle = {
    fontSize: '1.2em',
    marginBottom: '10px',
    fontWeight: 'bold',
  };

  const middleTextStyle = {
    fontSize: '6em',
    fontWeight: 'bold',
    lineHeight: '1.1',
    margin: '5px 0',
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '20px', // Make button more rounded
    fontSize: '1.2em',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add subtle shadow to button
    fontFamily: '"Poppins", sans-serif', // Apply Poppins font
  };

  // CSS for animations
  const animationStyle = `
    @keyframes fadeInScaleUp {
      0% { opacity: 0; transform: translateY(20%) scale(0.9); }
      50% { opacity: 0.5; transform: translateY(10%) scale(1.05); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    .fadeInScaleUp-1 { animation: fadeInScaleUp 2s forwards; animation-delay: 0.5s; }
    .fadeInScaleUp-2 { animation: fadeInScaleUp 2s forwards; animation-delay: 1s; }
    .fadeInScaleUp-3 { animation: fadeInScaleUp 2s forwards; animation-delay: 1.5s; }
    .fadeInScaleUp-4 { animation: fadeInScaleUp 2s forwards; animation-delay: 2s; }
  `;

  return (
    <>
      <style>{animationStyle}</style>
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
        <div style={containerStyle('https://img.freepik.com/free-photo/close-up-empty-business-space-with-conference-desk-briefing-meeting-nobody-startup-space-with-technology-plan-project-presentation-with-data-charts-analysis-no-people_482257-33711.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726012800&semt=ais_hybrid')}>
          <div className='fadeInScaleUp-1' style={textOverlayStyle}>
            <p style={headingStyle}>// Full cycle software development</p>
            <h2 style={middleTextStyle}>From Idea<br />To Product</h2>
            <h2 style={paragraphStyle}>Consulting services from an idea to strategy and enhancement</h2>
            <button style={buttonStyle}>Learn More</button>
          </div>
        </div>
        <div style={containerStyle('https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2019-09/adults-analysis-brainstorming-1661004.jpg?h=4d74e45d&itok=MPiXdM6L')}>
          <div className='fadeInScaleUp-2' style={textOverlayStyle}>
            <p style={headingStyle}>// Innovative Solutions</p>
            <p style={middleTextStyle}>Unlock Your<br />Potential</p>
            <p style={paragraphStyle}>Strategic insights and innovative solutions for growth</p>
            <button style={buttonStyle}>Learn More</button>
          </div>
        </div>
        <div style={containerStyle('https://static8.depositphotos.com/1003580/1042/i/450/depositphotos_10421643-stock-photo-business-discussion-at-meeting-room.jpg')}>
          <div className='fadeInScaleUp-3' style={textOverlayStyle}>
            <p style={headingStyle}>// Collaborative Workspaces</p>
            <p style={middleTextStyle}>Effective Team<br />Collaboration</p>
            <p style={paragraphStyle}>Fostering innovation through collaborative environments</p>
            <button style={buttonStyle}>Learn More</button>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Carausel;
