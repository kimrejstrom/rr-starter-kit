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
              <>
                <a className="inline-block mr-4" href="TODO">
                  <img
                    src="https://icon.now.sh/github/24/fff"
                    alt="GitHub logo"
                  />
                </a>
                <button
                  className="inline-block"
                  title="Disable Dark Mode"
                  onClick={() => dispatch(setThemeMode(ThemeMode.LIGHT))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="24"
                    height="24"
                    className="fill-current text-yellow-300"
                  >
                    <path d="M 8 0 A 8 8 0 0 0 8 16 A 8 8 0 0 0 8 0"></path>
                  </svg>
                </button>
              </>
            ) : (
              <>
                <a className="inline-block mr-4" href="TODO">
                  <img
                    src="https://icon.now.sh/github/24/000"
                    alt="GitHub logo"
                  />
                </a>
                <button
                  className="inline-block"
                  onClick={() => dispatch(setThemeMode(ThemeMode.DARK))}
                  title="Enable Dark Mode"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="24"
                    height="24"
                    className="fill-current text-yellow-100"
                  >
                    <path
                      fill="black"
                      d="M 8 0 A 8 8 0 0 0 8 16 A 8 8 0 0 0 8 0"
                    ></path>
                    <path d="M 8 2 A 6 6 0 0 0 8 14 A 8 14 0 0 0 13.196152422706632,11 A 6 6 0 0 1 8 2 z"></path>
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
