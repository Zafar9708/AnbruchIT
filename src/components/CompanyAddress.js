import React from 'react'

const CompanyAddress = () => {
  return (
    <div>
      
    </div>
  )
}

export default CompanyAddress



// import React from 'react';

// // Example location data
// const locations = [
//   {
//     id: 1,
//     image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg', // Update with actual paths
//     address: [
//       '1234 Elm Street',
//       'Suite 567',
//       'Cityville, ST 12345',
//       'USA'
//     ],
//   },
//   {
//     id: 2,
//     image: 'https://img.freepik.com/premium-photo/commercial-real-estate-image-office-building-image-commercial-property-image-business-park-image_1012565-12713.jpg',
//     address: [
//       '5678 Oak Avenue',
//       'Suite 123',
//       'Townsville, ST 67890',
//       'USA'
//     ],
//   },
//   {
//     id: 3,
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReefbg4CU14rLGg-1RgR8jzcODF54jzqEA6w&s',
//     address: [
//       '9101 Maple Drive',
//       'Suite 456',
//       'Villageville, ST 34567',
//       'USA'
//     ],
//   },
//   {
//     id: 4,
//     image: './path-to-image4.jpg',
//     address: [
//       '1213 Pine Road',
//       'Suite 789',
//       'Metropolis, ST 45678',
//       'USA'
//     ],
//   }
// ];

// const CompanyAddress = () => {
//   return (
//     <div className="p-6 max-w-6xl mx-auto bg-gray-100">
//       <h2 className="text-3xl font-bold mb-8 text-center">Company Addresses</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {locations.map(location => (
//           <div key={location.id} className="bg-white border rounded-lg shadow-md overflow-hidden">
//             <img 
//               src={location.image} 
//               alt={`Office ${location.id}`} 
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <address className="text-lg">
//                 {location.address.map((line, index) => (
//                   <p key={index} className="mb-2">{line}</p>
//                 ))}
//               </address>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompanyAddress;
