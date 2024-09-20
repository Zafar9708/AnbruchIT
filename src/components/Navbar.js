'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedOdoo, setSelectedOdoo] = useState(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const handleServiceDropdownToggle = () => {
    setSelectedService(selectedService ? null : 'services');
  };

  const handleOdooDropdownToggle = () => {
    setSelectedOdoo(selectedOdoo ? null : 'odoo');
  };

  const handleMoreMenuToggle = () => {
    setShowMoreMenu(!showMoreMenu);
  };

  return (
    <header className="bg-white text-lg text-gray-950 text-center mb-2 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-1 flex items-center">
        <div className="flex-shrink-0 p-2">
          <Link href="/">
            <Image
              src="/ANBRUCH IT_transparent_bg.png"
              width={160}
              height={540}
              alt="Website Logo"
            />
          </Link>
        </div>
        <nav className="mx-auto flex-grow">
          <ul className="flex space-x-10">
            <li>
              <Link href="/" className="hover:text-blue-300 transition-colors duration-300 ml-80">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-300 transition-colors duration-300">About</Link>
            </li>
            <li className="relative group">
              <button onClick={handleServiceDropdownToggle} className="flex items-center hover:text-blue-300 transition-colors duration-300">
                <Link href="/services">
                  Services
                </Link>
                <FontAwesomeIcon icon={faChevronDown}
                  className={`ml-2 transition-transform duration-300`}
                  size='xs'
                />
              </button>
              <ul className={`absolute left-0 top-4 mt-2 bg-white text-black shadow-lg border border-white w-64 ${selectedService ? 'block' : 'hidden'} group-hover:block z-10 rounded-lg`}>
                {/* <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-300 text-sm">
                    <Link href="/customapp">Custom App Development</Link><br></br>   
                  </button>
                </li> */}
                {/* Other service items */}
            
            
                <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">
                    <Link href="/mobileapp">Design & Build</Link><br></br>
                    {/* <Link href="/customapp">Mobile App Development</Link> */}
                  </button>
                </li>
                {/* <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">
                    <Link href="/techconsulting">Tech Consulting</Link><br></br>
                  </button>
                </li> */}
                {/* <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">
                    <Link href="/webdevelop">Web Development</Link><br></br>
                  </button>
                </li> */}
                <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">
                    <Link href="/cloudconsulting">Cloud Consulting</Link><br></br>
                    {/* <Link href="/customapp">Mobile App Development</Link> */}
                  </button>
                </li>
                <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">
                    <Link href="/managedservice">Advisory & Managed Services</Link><br></br>
                    {/* <Link href="/customapp">Mobile App Development</Link> */}
                  </button>
                </li>

                <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">
                    <Link href="/sfdc">Salesforce Services</Link><br></br>
                    {/* <Link href="/customapp">Mobile App Development</Link> */}
                  </button>
                </li>

                <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">
                    <Link href="/odooCustomApp">Odoo Services</Link><br></br>
                    {/* <Link href="/customapp">Mobile App Development</Link> */}
                  </button>
                </li>

                <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">
                    <Link href="/qualityAuth">Quality Automation</Link><br></br>
                    {/* <Link href="/customapp">Mobile App Development</Link> */}
                  </button>
                </li>

                <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">
                    <Link href="/analytics">Web Analytics</Link><br></br>
                    {/* <Link href="/customapp">Mobile App Development</Link> */}
                  </button>
                </li>
                
                
                
                <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">
                    <Link href="/staffAugmentation">Staff Augmentation Services</Link><br></br>
                    {/* <Link href="/customapp">Mobile App Development</Link> */}
                  </button>
                </li>
                {/* Other service items */}
              </ul>
              
            </li>
            {/* <li className="relative group">
              <button onClick={handleOdooDropdownToggle} className="flex items-center hover:text-blue-300 transition-colors duration-300">
                Odoo
                <FontAwesomeIcon icon={faChevronDown}
                  className={`ml-2 ${selectedOdoo ? 'rotate-180' : ''} transition-transform duration-300`}
                  size='xs'
                />
              </button>
              <ul className={`absolute top-4 mt-2 bg-white text-black shadow-lg border border-gray-200 w-64 ${selectedOdoo ? 'block' : 'hidden'} group-hover:block z-10 rounded-lg`}>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo1')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/odoodevelopment">Odoo Development </Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo1')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/odoomigration">Odoo Migration Services</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo1')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/odooseo">Odoo SEO Services</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo1')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/odooConsulting">Odoo Consulting Services</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo1')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/odooCustomApp">Odoo Custom App Development</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo1')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/odooMobileApp">Odoo Mobile App Development</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo1')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/odooImplementation">Odoo Implementation Services</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo1')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/odooMarketPlace">Odoo Markeplace Pioneers</Link></button>
                </li>
              
              </ul>
            </li> */}
            <li>
              <Link href="/gift" className="hover:text-blue-300 transition-colors duration-300">Gift Card</Link>
            </li>
            {/* <li>
              <Link href="/careerpage" className="hover:text-blue-300 transition-colors duration-300">Careers</Link>
            </li> */}
          </ul>
        </nav>
        {/* <div className="relative ml-4">
          <button onClick={handleMoreMenuToggle} className="flex items-center hover:text-gray-500 transition-colors duration-300">
            <FontAwesomeIcon icon={faBars} size='lg' />
          </button>
          <ul className={`absolute right-0 top-12 mt-2 bg-white text-black shadow-lg border border-gray-200 w-48 ${showMoreMenu ? 'block' : 'hidden'} z-10 rounded-lg`}>
            <li>
              <Link href="/gallery" className="block px-4 py-2 bg-white text-black hover:bg-gray-100 transition-colors duration-300 text-2xl">Gallery</Link>
            </li>
            <li>
              <Link href="/services" className="block px-4 py-2  bg-white text-black hover:bg-gray-100 transition-colors duration-300 text-2xl">Services</Link>
            </li>
            <li>
              <Link href="/blog" className="block px-4 py-2  bg-white text-black hover:bg-gray-100 transition-colors duration-300 text-2xl">Blog</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
