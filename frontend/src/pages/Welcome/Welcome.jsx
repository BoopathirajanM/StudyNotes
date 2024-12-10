import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import laptopImage from "/src/images/Nature writing.jpg"; // Import the image

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-950 min-h-screen bg-cover">
      <div className="flex flex-col lg:flex-row items-center bg-sky-200 shadow-lg overflow-hidden w-full flex-grow">
        
        {/* Left Section */}
        <div className="flex-1 bg-gray-30 p-8 flex justify-center items-center bg-cover">
          <div className="relative">
            <img
              src={laptopImage} // Use the imported image
              alt="Laptop with sticky notes"
              className="max-w-full h-auto rounded hover:shadow-md"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 text-center p-15">
          <h1 className="text-purple-900 shadow-2xl mb-10 p-3 shadow-black bg-green-200 mr-4 text-4xl font-mono">
            Welcome Everyone!
          </h1>
          <h2 className="wave-text text-bl-700 text-6xl font-extrabold mt-2 mb-10">
            {["S", "t", "u", "d", "y", "N", "o", "t", "e", "s"].map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </h2>
          <p className="text-gray-900 mt-4 text-xl font-bold font-mono">
            SIMPLE - DIGITAL NOTES MANAGING WEBSITE
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            {/* LOGIN Button */}
            <Link to="/login">
              <button className="bg-lime-500 text-white font-semibold py-2 px-6 rounded shadow-lg shadow-black hover:bg-cyan-600 transition">
                LOGIN
              </button>
            </Link>
            {/* SIGN UP Button */}
            <Link to="/signup">
              <button className="bg-yellow-500 text-white font-semibold py-2 px-6 rounded shadow-lg shadow-black hover:bg-cyan-600 transition">
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="w-full bg-gray-800 text-center text-white py-4 mt-0 border-0">
        &copy; {new Date().getFullYear()} All rights reserved by StudyNotes Education Private Limited
      </footer>
    </div>
  );
};

export default Welcome;
