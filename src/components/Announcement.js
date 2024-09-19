// src/app/announcement/page.tsx
import React from 'react';

const Announcement = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Announcement Title</h1>
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Details</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Key Point 1 about the announcement.</li>
              <li>Key Point 2 about the announcement.</li>
              <li>Key Point 3 about the announcement.</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 p-4 text-center">
          <a href="/" className="text-blue-500 hover:text-blue-700 font-medium">Back to Homepage</a>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
