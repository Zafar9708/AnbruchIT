'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-100 shadow-lg p-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img 
              src='newlogo.PNG'
              alt='Logo'
              style={{ height: '35px' }}
            />
          </Link>
        </div>
        <div className="mr-20 hidden text-lg md:flex text flex-grow justify-center space-x-12">
          <Link href="/" className="text-gray-800 hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600 transition">About</Link>
          <div 
            className="relative"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button className="text-gray-800 hover:text-blue-600 transition">
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute text-sm left-0 mt-2 w-96 bg-white shadow-md rounded-lg z-20">
                <Link href="/mobileapp" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Design & Build</Link>
                <Link href="/cloudconsulting" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Cloud Consulting</Link>
                <Link href="/managedservice" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Advisory & Managed Services</Link>
                <Link href="/sfdc" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Salesforce Services</Link>
                <Link href="/odooCustomApp" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Odoo Services</Link>
                <Link href="/qualityAuth" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Quality Automation</Link>
                <Link href="/analytics" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Web Analytics</Link>
                <Link href="/staffAugmentation" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Staff Augmentation</Link>
              </div>
            )}
          </div>
          <Link href="/gift" className="text-gray-800 hover:text-blue-600 transition">Gift Card</Link>
        </div>
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col space-y-2 mt-2 items-center absolute right-0 z-30 bg-white shadow-md p-8 rounded-lg" style={{ width: '200px' }}>
          <Link href="/" className="text-gray-800 hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600 transition">About</Link>
          <div 
            className="relative"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button className="text-gray-800 hover:text-blue-600 transition">
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-lg z-20">
                {/* <Link href="/services" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Services</Link> */}
                <Link href="/mobileapp" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Design & Build</Link>
                <Link href="/cloudconsulting" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Cloud Consulting</Link>
                <Link href="/managedservice" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Advisory & Managed Services</Link>
                <Link href="/sfdc" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Salesforce Services</Link>
                <Link href="/odooCustomApp" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Odoo Services</Link>
                <Link href="/qualityAuth" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Quality Automation</Link>
                <Link href="/analytics" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Web Analytics</Link>
                <Link href="/staffAugmentation" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition">Staff Augmentation</Link>
              </div>
            )}
          </div>
          <Link href="/gift" className="text-gray-800 hover:text-blue-600 transition">Gift Card</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
