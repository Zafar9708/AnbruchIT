// // src/components/Header.tsx
// import React from 'react';
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
// const Header = () => {

//     return (
//         <header className="bg-gray-900 text-white shadow-md mb-1">
//             <div className="container mx-auto px-6 py-1 flex justify-between items-center">
//                 {/* Left side: Social Media Icons */}
//                 <div className="flex space-x-4">
//                     <a href="https://www.facebook.com/wrocustechnologies" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//                         <FaFacebook size={16} />
//                     </a>
//                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//                         <FaTwitter size={16} />
//                     </a>
//                     <a href="https://www.linkedin.com/company/wrocus/mycompany/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//                         <FaLinkedin size={16} />
//                     </a>
//                     <a href="https://www.instagram.com/wrocustechnologies/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//                         <FaInstagram size={16} />
//                     </a>
//                 </div>

//                 {/* Right side: Contact Information */}
//                 <div className="flex space-x-6">
//                     <a href="tel:+1234567890" className="hover:text-gray-400">0120-496-3453</a>
//                     <a href="mailto:info@example.com" className="hover:text-gray-400">info@wrocus.com

//                     </a>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;


// src/components/Header.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Left side: Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/wrocustechnologies" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={16} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={16} />
          </a>
          <a href="https://www.linkedin.com/company/wrocus/mycompany/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={16} />
          </a>
          <a href="https://www.instagram.com/wrocustechnologies/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={16} />
          </a>
        </div>

        {/* Right side: Contact Information */}
        <div className="flex space-x-6">
          <a href="tel:+1234567890" className="hover:text-gray-400">0120-496-3453</a>
          <a href="mailto:info@example.com" className="hover:text-gray-400">info@wrocus.com</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
