import React from 'react';

const SuccessStory = () => {
  return (
    <div className="bg-white py-12 px-6 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-black mb-8">Success Story</h2>
        <p className="text-lg text-black mb-12 max-w-4xl mx-auto">
          Discover how our innovative solutions transformed our client’s operations. Here’s a detailed look at our successful collaboration and the impressive results we achieved.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Client Challenge Card */}
          <div className="bg-blue-950 p-24 rounded-lg shadow-xl border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl" data-aos="zoom-in-up">
            <h3 className="text-2xl font-semibold text-white mb-4">Client Challenge</h3>
            <p className="text-white">
              Our client faced significant challenges in modernizing their operations and scaling their business due to outdated technology and inefficient processes.
            </p>
          </div>

          {/* Our Solution Card */}
          <div className="bg-blue-950 p-24 rounded-lg shadow-xl border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl" data-aos="zoom-in-up">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Solution</h3>
            <p className="text-white">
              We implemented a cutting-edge solution that included a sophisticated software platform, optimized workflows, and ongoing support to greatly enhance their operational efficiency.
            </p>
          </div>

          {/* Results Achieved Card */}
          <div className="bg-blue-950 p-24 rounded-lg shadow-xl border border-gray-200 lg:col-span-2 transition-transform transform hover:scale-105 hover:shadow-2xl" data-aos="zoom-in-up">
            <h3 className="text-2xl font-semibold text-white mb-4">Results Achieved</h3>
            <ul className="list-disc list-inside text-white space-y-2">
              <li>Enhanced operational efficiency by 40%</li>
              <li>Increased revenue by 25%</li>
              <li>Improved customer satisfaction with a sleek, modern interface</li>
              <li>Reduced operational costs by 30%</li>
            </ul>
          </div>

          {/* Client Testimonial Card */}
          <div className="p-24 bg-blue-950 rounded-lg shadow-xl border border-gray-200 lg:col-span-2 transition-transform transform hover:scale-105 hover:shadow-2xl" data-aos="zoom-in-up">
            <h3 className="text-2xl font-semibold text-white mb-4">Client Testimonial</h3>
            <blockquote className="italic text-white  pl-6 py-4 bg-blue-950">
              "The team exceeded our expectations. Their solution revolutionized our operations and positioned us for future success. We are absolutely thrilled with the results!"
              <br />
              <span className="block mt-2 font-bold text-white">- Times Of India, CEO</span>
            </blockquote>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
