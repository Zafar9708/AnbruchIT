// 'use client';
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // Sample data for testimonials including image URLs
// const testimonials = [
//   {
//     role: 'Success Manager',
//     name: 'John Doe',
//     text: 'This company exceeded my expectations. Their attention to detail and customer service is unparalleled.',
//     image: '/carDekho.webp' // Placeholder image URL
//   },
//   {
//     role: 'Manager',
//     name: 'Jane Smith',
//     text: 'Working with this team has been a fantastic experience. Their professionalism and dedication are top-notch.',
//     image: '/delhivery-logo.jpg' // Placeholder image URL
//   },
//   {
//     role: 'Company Owner',
//     name: 'Michael Johnson',
//     text: 'I am incredibly proud of the work we do. Our commitment to excellence is reflected in every project we undertake.',
//     image: '/hungama-logo-aa-3-2.jpg' // Placeholder image URL
//   },
//   {
//     role: 'Client',
//     name: 'John Doe',
//     text: 'This company exceeded my expectations. Their attention to detail and customer service is unparalleled.',
//     image: '/Logo-bureau-veritas.png' // Placeholder image URL
//   },
//   {
//     role: 'Manager',
//     name: 'Jane Smith',
//     text: 'Working with this team has been a fantastic experience. Their professionalism and dedication are top-notch.',
//     image: '/Network18logo_K.png' // Placeholder image URL
//   },
//   {
//     role: 'Company Owner',
//     name: 'Michael Johnson',
//     text: 'I am incredibly proud of the work we do. Our commitment to excellence is reflected in every project we undertake.',
//     image: '/timeInternet.jpg' // Placeholder image URL
//   }
// ];

// // Custom arrow components
// const PrevArrow = (props) => (
//   <button
//     className="slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-4 rounded-full focus:outline-none z-10 hover:bg-gray-800"
//     onClick={props.onClick}
//     aria-label="Previous Slide"
//     style={{backgroundColor:'black'}}
//   >
//     &#9664;
//   </button>
// );

// const NextArrow = (props) => (
//   <button
//     className="slick-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-4 rounded-full focus:outline-none z-10 hover:bg-gray-800"
//     onClick={props.onClick}
//     aria-label="Next Slide"
//     style={{backgroundColor:'black'}}
//   >
//     &#9654;
//   </button>
// );

// const ClientTestimonial = () => {
//   // Settings for the carousel
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="relative p-6" style={{backgroundColor:'whitesmoke'}}>
//       <h2 className="text-2xl font-bold text-center mb-6">Success Stories of Innovation and Excellence</h2>
//       <Slider {...settings}>
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col p-6"
//             style={{ height: '350px', display: 'flex', flexDirection: 'column' }} // Fixed height and flexbox layout
//           >
//             {/* Container for image */}
//             <div className="flex justify-center mb-4">
//               <img src={testimonial.image} alt={testimonial.name} className="object-contain w-24 h-24" />
//             </div>
//             <div className="flex flex-col flex-grow">
//               <div className="text-center mb-2 flex-grow-0">
//                 <h3 className="text-xl font-semibold text-gray-700">{testimonial.role}</h3>
//                 <h4 className="text-lg font-medium text-gray-600">{testimonial.name}</h4>
//               </div>
//               <p className="italic text-gray-500 text-center flex-grow">{testimonial.text}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default ClientTestimonial;


'use client';

import React, { useState } from 'react';
import { initializeAOS } from '@/utils/AosSetup';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for testimonials including image URLs
const testimonials = [
  {
    role: 'Success Manager',
    name: 'John Doe',
    text: 'This company exceeded my expectations. Their attention to detail and customer service is unparalleled.',
    image: '/carDekho.webp'
  },
  {
    role: 'Manager',
    name: 'Jane Smith',
    text: 'Working with this team has been a fantastic experience. Their professionalism and dedication are top-notch.',
    image: '/delhivery-logo.jpg'
  },
  {
    role: 'Company Owner',
    name: 'Michael Johnson',
    text: 'I am incredibly proud of the work we do. Our commitment to excellence is reflected in every project we undertake.',
    image: '/hungama-logo-aa-3-2.jpg'
  },
  {
    role: 'Client',
    name: 'John Doe',
    text: 'This company exceeded my expectations. Their attention to detail and customer service is unparalleled.',
    image: '/Logo-bureau-veritas.png'
  },
  {
    role: 'Manager',
    name: 'Jane Smith',
    text: 'Working with this team has been a fantastic experience. Their professionalism and dedication are top-notch.',
    image: '/Network18logo_K.png'
  },
  {
    role: 'Company Owner',
    name: 'Michael Johnson',
    text: 'I am incredibly proud of the work we do. Our commitment to excellence is reflected in every project we undertake.',
    image: '/timeInternet.jpg'
  }
];

// Custom arrow components
const PrevArrow = (props) => (
  <button
    className="slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-4 rounded-full focus:outline-none z-10 hover:bg-gray-800"
    onClick={props.onClick}
    aria-label="Previous Slide"
  >
    &#9664;
  </button>
);

const NextArrow = (props) => (
  <button
    className="slick-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-4 rounded-full focus:outline-none z-10 hover:bg-gray-800"
    onClick={props.onClick}
    aria-label="Next Slide"
  >
    &#9654;
  </button>
);

const ClientTestimonial = () => {
  useEffect(()=>{
    const cleanupAOS=initializeAOS();
    return cleanupAOS
    },[])
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="relative p-6" style={{ backgroundColor: 'whitesmoke' }} data-aos="zoom-in-up">
      <h2 className="text-2xl font-bold text-center mb-6">Success Stories of Innovation and Excellence</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`relative bg-white border border-gray-200 rounded-lg shadow-md flex flex-col p-6 transition-transform duration-500 ease-in-out hover:bg-blue-400 hover:text-white hover:scale-105 hover:shadow-lg`}
            style={{ height: '350px' }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex justify-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="object-contain w-24 h-24 transition-transform duration-300 ease-in-out"
                style={{
                  transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                }}
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-center mb-2 flex-grow-0">
                <h3 className="text-xl font-semibold">{testimonial.role}</h3>
                <h4 className="text-lg font-medium">{testimonial.name}</h4>
              </div>
              <p className="italic text-center flex-grow">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ClientTestimonial;
