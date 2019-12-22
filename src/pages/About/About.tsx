import React, { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
import headerImage from 'pages/About/header.svg';

const Content = lazy(() => importMDX('./About.mdx'));

export const About: React.FC = () => (
  <div className="container mx-auto max-w-3xl">
    <img src={headerImage} className="w-2/3 m-auto pt-10 pb-10" alt="logo" />
    <div className="mb-6 rounded shadow bg-white p-10">
      <Suspense fallback={<div className="spinner"></div>}>
        <Content />
      </Suspense>
    </div>
  </div>
);
