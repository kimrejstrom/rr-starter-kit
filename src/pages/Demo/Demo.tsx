import React from 'react';
import headerImage from 'pages/Demo/header.svg';
import { JokesListPage } from 'features/jokes/JokesFeature';

export const Demo: React.FC = () => (
  <div className="container mx-auto max-w-3xl p-6">
    <img src={headerImage} className="w-2/3 m-auto pt-10 pb-10" alt="logo" />
    <h1 className="text-center m-4">Random Jokes Demo</h1>
    <JokesListPage />
  </div>
);
