import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/rootReducer';
import { setThemeMode, ThemeMode } from 'features/theme/themeSlice';

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  // Open mobile menu open
  const [open, setOpen] = useState(false);

  // Get theme from Redux
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <header className="border-b-2 border-indigo-200 dark:border-indigo-700 bg-white dark:bg-gray-800">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-indigo-900 dark:text-indigo-200 mr-6">
          <span className="font-semibold text-xl tracking-tighter">
            RR Starter-kit
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center px-3 py-2 border rounded text-indigo-400 border-indigo-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            open ? 'block' : 'hidden'
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm font-medium lg:flex-grow">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-indigo-700 hover:text-indigo-900 dark:text-indigo-100 dark-hover:text-indigo-400 mr-4"
            >
              Home
            </Link>
            <Link
              to="/demo"
              className="block mt-4 lg:inline-block lg:mt-0 text-indigo-700 hover:text-indigo-900 dark:text-indigo-100 dark-hover:text-indigo-400 mr-4"
            >
              Demo
            </Link>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-indigo-700 hover:text-indigo-900 dark:text-indigo-100 dark-hover:text-indigo-400"
            >
              About
            </Link>
          </div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-indigo-700 hover:text-indigo-900 dark:text-indigo-100 dark-hover:text-indigo-400 mr-4">
            {theme === ThemeMode.DARK ? (
              <span className="border rounded-full border-green-400 flex items-center cursor-pointer w-12 bg-green-400 justify-end">
                <button
                  onClick={() => dispatch(setThemeMode(ThemeMode.LIGHT))}
                  className="rounded-full border w-6 h-6 border-green-400 bg-white focus:outline-none"
                ></button>
              </span>
            ) : (
              <span className="border rounded-full border-gray-300 flex items-center cursor-pointer bg-gray-300 w-12 justify-start">
                <button
                  onClick={() => dispatch(setThemeMode(ThemeMode.DARK))}
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
