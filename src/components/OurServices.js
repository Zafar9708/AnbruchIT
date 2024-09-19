import React from 'react';
import Development from './Development';
import Development1 from './Development1';

// const services = [
//     {
//         title: 'Web Development',
//         description: 'We carry more than just good coding skills. Our experience makes us stand out from other web development..',
//         icon: '🌐'
//     },
//     {
//         title: 'Mobile Development',
//         description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system..',
//         icon: '📱'
//     },
//     {
//         title: 'UI/UX Design',
//         description: 'Build the product you need on time with an experienced team that uses a clear and effective design process..',
//         icon: '🎨'
//     },
//     {
//         title: 'QA & Testing',
//         description: 'Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.',
//         icon: '✅'
//     },
//     {
//         title: 'IT Consultancy',
//         description: 'Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.',
//         icon: '💼'
//     },
//     {
//         title: 'Dedicated Team',
//         description: 'Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating.',
//         icon: '👥'
//     }
// ];

const OurServices = () => {
    return (
        <div className="py-10 px-4">
            {/* <div className="text-center mb-10">
                <h2 className="text-2xl font-bold inline-block mb-1">Our Services</h2>
                <hr className="border-gray-800 mx-auto mt-0 mb-5 w-1/6" />
                <h3 className="text-center text-lg font-medium">We Offer a Wide Variety of IT Services</h3>
            </div> */}
            <Development/>
            
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl hover:shadow-gray-400"
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default OurServices;
