// import Link from 'next/link';
// import React from 'react';

// const CollaborateContact = () => {
//   // Inline styles for the background image
//   const containerStyle = {
//     backgroundImage: 'url(https://toppng.com/uploads/preview/textured-backgrounds-for-websites-11553984905o9plozryma.jpg)', // Replace with your image URL
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     height: '300px', // Full viewport height
//   };

//   return (
//     <div className="mt-8 flex justify-around items-center" style={containerStyle}>
//       <div className="text-center text-white">
//         <p className="text-xl mb-4 color:white">We Carry More Than Just Good Coding Skills</p>
//         <h1 className="text-4xl mb-4">Let's Collaborate for Some Good Work</h1>
//       </div>
//       <div className="text-center">
//         <Link href="/contact">
//         <button 
//           type="button" 
//           className="py-3 px-10 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//         >
//           CONTACT
//         </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default CollaborateContact;
'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
const CollaborateContact = () => {
  useEffect(()=>{
    const cleanupAOS=initializeAOS();
    return cleanupAOS

  },[])
  // Styles for the container
  const containerStyle = {
    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ubxy9371Fmh-AooL5vVDBQTCv0szAZhpiQ&s)',
    backgroundSize: 'cover',
    backgroundColor:'gray',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
   
  };

  // Initial button styles
  const [buttonStyle, setButtonStyle] = useState({
    padding: '0.75rem 2.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    backgroundColor: 'blue', // Default button color
    color: 'white', // Default text color
    borderRadius: '0.5rem',
    border: '1px solid #E5E7EB',
    transition: 'background-color 0.2s, color 0.2s, transform 0.2s',
  });

  // Styles for animation
  const fadeInStyle = {
    animation: 'fadeIn 2s ease-in-out',
  };

  // Button hover and active styles
  const buttonHoverStyle = {
    backgroundColor: '#F3F4F8',
    color: '#3B82F6',
  };

  const buttonActiveStyle = {
    transform: 'scale(0.95)',
  };

  // Define keyframes dynamically
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={containerStyle} data-aos="zoom-in-up">
      <div style={fadeInStyle}>
        <p style={{ fontSize: '2.25rem', marginBottom: '1rem',color: 'white' }}>We Carry More Than Just Good Coding Skills</p>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem',color: 'white' }}>Let's Collaborate for Some Good Work</h3>
      </div>
      <div>
        <Link href="/contact">
          <button
            type="button"
            style={buttonStyle}
            onMouseEnter={() => setButtonStyle(prevStyle => ({ ...prevStyle, ...buttonHoverStyle }))}
            onMouseLeave={() => setButtonStyle(prevStyle => ({ ...prevStyle, ...{ backgroundColor: '#FFFFFF', color: '#4B5563' } }))}
            onMouseDown={() => setButtonStyle(prevStyle => ({ ...prevStyle, ...buttonActiveStyle }))}
            onMouseUp={() => setButtonStyle(prevStyle => ({ ...prevStyle, ...buttonHoverStyle }))}
          >
            CONTACT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CollaborateContact;
