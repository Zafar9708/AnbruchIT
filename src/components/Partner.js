'use client';
import { initializeAOS } from '@/utils/AosSetup';
import React, { useEffect } from 'react';
import Image from 'next/image';

const Partner = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  const clients = [
    { src: '/Aaj_tak_logo.jpg', alt: 'Car Dekho' },
    { src: '/delhivery-logo.jpg', alt: 'Delhivery' },
    { src: '/Logo-bureau-veritas.png', alt: 'Bureau Veritas' },
    { src: '/hindustan.jpg', alt: 'Hindustan Times' },
    { src: '/Hungama_logo.jpg', alt: 'Hungama' },
    { src: '/magiclogo.jpg', alt: 'Magic Bricks' },
    { src: '/Network18logo_K.png', alt: 'Network18' },
    { src: '/time.jpg', alt: 'Times Internet' },
  ];

  const containerStyle = {
    // background: 'linear-gradient(to right, #f0f0f0, #d9d9d9)',
    padding: '1rem 0',
    overflow: 'hidden',
  };

  const scrollContainerStyle = {
    display: 'flex',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'relative',
  };

  const scrollWrapperStyle = {
    display: 'flex',
    animation: 'scrollLeft 22s linear infinite',
  };

  const scrollItemStyle = {
    flex: '0 0 auto',
    padding: '2rem',
    margin: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const keyframes = `
    @keyframes scrollLeft {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  return (
    <section style={containerStyle}>
      <div className="container mx-auto py-12 px-8 bg-gray-100">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-extrabold text-black mb-2">Our Partners</h2>
          {/* <hr className="mx-auto mt-0 mb-4 w-1/6" /> */}
        </div>

        <style>{keyframes}</style>

        <div style={scrollContainerStyle}>
          <div style={scrollWrapperStyle}>
            {clients.map((client, index) => (
              <div key={index} style={scrollItemStyle}>
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={150} // Adjust width as needed
                  height={60} // Adjust height as needed
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
            {/* Duplicate the logos to ensure continuous scrolling */}
            {clients.map((client, index) => (
              <div key={index + clients.length} style={scrollItemStyle}>
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={150} // Adjust width as needed
                  height={60} // Adjust height as needed
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
