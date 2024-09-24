import Development from '@/components/Development';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import OtherService from '@/components/OtherService';
import SuccessStory from '@/components/SuccessStory';
import React from 'react';
const ServicePage = () => {

  return (
    <div className="bg-gray-200">
      <Header />
      <Navbar />
      {/* Development */}
      <Development />
      {/* <Development1 /> */}
      <OtherService />
      {/* <OtherService1 /> */}

      <div className="bg-black max-w-10xl mx-auto p-16 shadow-lg rounded-lg" data-aos="zoom-in-up">
    <h2 className="text-3xl font-bold mb-6 text-white">Progress Bars</h2>

    <div className="flex gap-8">
        {/* Progress Bars Section */}
        <div className="flex-1">
            <div className="bg-gray-200 rounded-full h-6 mb-6 shadow-inner">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-6 rounded-full text-center text-white font-semibold flex items-center justify-center" style={{ width: '40%' }}>
                    40%
                </div>
            </div>

            <div className="bg-gray-200 rounded-full h-6 mb-6 shadow-inner">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-6 rounded-full text-center text-white font-semibold flex items-center justify-center" style={{ width: '70%' }}>
                    70%
                </div>
            </div>

            <div className="bg-gray-200 rounded-full h-6 mb-6 shadow-inner">
                <div className="bg-gradient-to-r from-red-400 to-red-600 h-6 rounded-full text-center text-white font-semibold flex items-center justify-center" style={{ width: '90%' }}>
                    90%
                </div>
            </div>
        </div>

        {/* Right Side Content */}
        <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-white">Additional Information</h2>
            <p className="text-white mb-4">
                Here you can include additional details or context related to the progress bars. This could be explanations, summaries, or other relevant information to provide users with a better understanding.
            </p>
            {/* <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li className="flex items-center">
                    <input type="checkbox" id="item1" className="mr-2 text-blue-600" />
                    <label htmlFor="item1">Item 1</label>
                </li>
                <li className="flex items-center">
                    <input type="checkbox" id="item2" className="mr-2 text-blue-600" />
                    <label htmlFor="item2">Item 2</label>
                </li>
                <li className="flex items-center">
                    <input type="checkbox" id="item3" className="mr-2 text-blue-600" />
                    <label htmlFor="item3">Item 3</label>
                </li>
            </ul> */}
        </div>
    </div>
</div>



      <SuccessStory />
      
      <div className="bg-white container mx-auto text-center py-12 px-4" data-aos="zoom-in-up">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Contact us today to discuss how we can help your business thrive with our IT solutions.</p>
        <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">Get in Touch</a>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
