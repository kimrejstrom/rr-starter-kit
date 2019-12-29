import React from 'react';
import headerImage from 'pages/Home/header.svg';

export const Home: React.FC = () => (
  <div className="container mx-auto max-w-3xl p-6">
    <img src={headerImage} className="w-2/3 m-auto pt-10 pb-10" alt="logo" />
    <h1 className="text-center">RR Starter-kit 2020</h1>
    <div className="text-center p-4">
      <p className="text-lg p-4">An opinionated frontend starter-kit:</p>
      <ul className="font-mono">
        <li>Create-React-App</li>
        <li>Redux Toolkit</li>
        <li>Axios</li>
        <li>Tailwind CSS</li>
        <li>Dark/Light mode</li>
        <li>Github Actions</li>
        <li>Netlify</li>
      </ul>
    </div>
    <div className="text-center py-4 lg:px-4">
      <div
        className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
          New
        </span>
        <a href="#TODO" className="font-semibold mr-2 text-left flex-auto">
          Check out the full project on Github
        </a>
        <svg
          className="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </div>
  </div>
);
