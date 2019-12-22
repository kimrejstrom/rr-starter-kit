import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// const darkMode = false;

export const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <header className="border-b-2 border-indigo-200">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-indigo-900 mr-6">
          <span className="font-semibold text-xl tracking-tighter">
            RR Starter-kit
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm font-medium lg:flex-grow">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-indigo-700 hover:text-indigo-900 mr-4"
            >
              Home
            </Link>
            <Link
              to="/demo"
              className="block mt-4 lg:inline-block lg:mt-0 text-indigo-700 hover:text-indigo-900 mr-4"
            >
              Demo
            </Link>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-indigo-700 hover:text-indigo-900"
            >
              About
            </Link>
          </div>
          <div>
            {darkMode ? (
              <span className="border rounded-full border-green-400 flex items-center cursor-pointer w-12 bg-green-400 justify-end">
                <button
                  onClick={() => setDarkMode(false)}
                  className="rounded-full border w-6 h-6 border-green-400 bg-white focus:outline-none"
                ></button>
              </span>
            ) : (
              <span className="border rounded-full border-gray-300 flex items-center cursor-pointer bg-gray-300 w-12 justify-start">
                <button
                  onClick={() => setDarkMode(true)}
                  className="rounded-full border w-6 h-6 border-gray-300 bg-white focus:outline-none"
                ></button>
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
