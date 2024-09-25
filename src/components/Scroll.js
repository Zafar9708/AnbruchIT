'use client';
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-orange-400 text-white rounded-full shadow-lg transition hover:bg-blue-700 z-50" // Added z-50
          aria-label="Scroll to top"
          style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' }} // Optional shadow for better visibility
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
