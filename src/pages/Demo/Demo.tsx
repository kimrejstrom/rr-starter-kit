import React from 'react';
import headerImage from 'pages/Demo/header.svg';
import { PoemsListPage } from 'features/poems/PoemsFeature';

export const Demo: React.FC = () => (
  <div className="container mx-auto max-w-3xl p-6">
    <img src={headerImage} className="w-2/3 m-auto pt-10 pb-10" alt="logo" />
    <h1 className="text-center m-4">Poetry Demo</h1>
    <PoemsListPage />
  </div>
);
