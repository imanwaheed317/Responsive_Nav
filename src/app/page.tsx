import React from 'react';

const ResponsiveGrid = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="bg-[#1c3941] shadow-lg rounded-lg p-6 transform transition duration-300 text-white hover:scale-105">
          <h2 className="text-cyan-100 text-2xl font-bold mb-4">Welcome</h2>
          <p className="mb-4">
            Experience the best services tailored just for you. Start your journey today!
          </p>
          <button className="bg-white text-cyan-800 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-100">
            Learn More
          </button>
        </div>

        {/* Box 2 */}
        <div className="bg-blue-600 shadow-lg rounded-lg p-6 text-white transform transition duration-300 hover:scale-105">
          <h2 className="text-purple-950 text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4">
            Building a better tomorrow with innovative solutions and sustainable practices.
          </p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-blue-400">
            Read More
          </button>
        </div>

        {/* Box 3 */}
        <div className="bg-[#2adaf5] shadow-lg rounded-lg p-6 text-white transform transition duration-300 hover:scale-105">
          <h2 className="text-blue-900 text-2xl font-bold mb-4">Get Started</h2>
          <p className="mb-4">
            Join our community and explore unlimited opportunities to grow and succeed.
          </p>
          <button className="bg-white text-cyan-500 font-semibold py-2 px-4 rounded-lg hover:bg-slate-400">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveGrid;
