[![Netlify Status](https://api.netlify.com/api/v1/badges/e4fca50e-05f7-415e-950f-725bbabe781e/deploy-status)](https://app.netlify.com/sites/rr-starter-kit/deploys)

# RR Starter kit 2020

A front-end starter-kit for quickly getting a new UI up and running using React and Redux Toolkit.

## Getting started

To get started run `git clone git@github.com:kimrejstrom/rr-starter-kit.git && cd rr-starter-kit && npm ci`
in your terminal of choice.

## Purpose

A batteries included front-end starter-kit for 2020.
This is my personal go-to set of tools for bootstrapping new projects. It is a little bit more than simply some pre-installed packages and a barebones example, as this covers everything from development experience and CI to Github project management and continuous deployment.

## What's included
React and Redux Toolkit using Typescript is at the core of this starter kit (see Technologies section for details). The starter-kit is bootstrapped using Create-React-App, and has not been ejected. As the project uses Typescript, ESLint and Prettier have been configured to handle linting and autofixing syntax problems. The project comes bundled with a simple Github workflow for Continuous Integration and default Github Issues and Pull Request templates.

It is out-of-the-box compatible with deployments to static hosting providers such as Netlify and Zeit.

## Technologies

RR Starter-kit offers a streamlined development experience using the following technologies:

| **Tech** | **Description** |**Learn More**|
|--------|---------|-----|
| [Create React App](https://create-react-app.dev/)  | Modern build tools with zero-config for React apps. | [Official Docs](https://create-react-app.dev/docs/getting-started)  |
| [React](https://facebook.github.io/react/)  |   Fast, composable client-side components. | [Official Docs](https://reactjs.org/docs/getting-started.html)  |
| [Redux Toolkit](https://redux-toolkit.js.org/) |  The official, opinionated, batteries-included toolset for efficient Redux development. | [Official Docs](https://redux-toolkit.js.org/introduction/quick-start) |
| [React Router](https://github.com/ReactTraining/react-router) | A complete routing library for React. | [Official Docs](https://reacttraining.com/react-router/web/guides/quick-start) |
| [Axios](https://github.com/axios/axios) |  Promise based HTTP client for the browser and node.js  | [Official Docs](https://github.com/axios/axios) |
| [Tailwind CSS](https://webpack.js.org) | A utility-first CSS framework for rapidly building custom designs. | [Official Docs](https://tailwindcss.com/docs/installation) |
| [MDX](https://mdxjs.com/) | MDX is an authorable format that lets you seamlessly write JSX in your Markdown documents. | [Official Docs](https://mdxjs.com/getting-started/create-react-app)| 
| [Jest](https://jestjs.io/) | Automated tests with built-in expect assertions | [Official Docs](https://jestjs.io/docs/en/getting-started) |
| [Enzyme](https://airbnb.io/enzyme/) | DOM testing without a browser using Node. | [Official Docs](https://airbnb.io/enzyme/docs/installation/react-16.html)| 
| [ESLint](http://eslint.org/)| Lint Typescript. Reports syntax and style issues | |
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |

The starter kit includes a working example app that puts all of the above to use.

See the [About](https://rr-starter-kit.netlify.com/about) page for additional information.
---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Styles are built using [PostCSS](https://postcss.org/) as part of the `prestart` hook.
Hot reloading is not supported when making changes to the Tailwind styles, 

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm lint`

Check for syntax errors using ESLint.<br />
Run `npm lint:fix` to automatically fix any linting errors in the codebase.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

Styles are built using [PostCSS](https://postcss.org/) as part of the `prebuild` hook.

The build is minified and the filenames include the hashes.<br />

## TODO
- [x] Create folder structure
- [x] Create initial App 
- [x] Add Redux Toolkit 
- [x] Fetch data from external API
- [x] Add Routing
- [x] Add Tailwind CSS
- [x] Add dark/light mode switch
- [x] Add Github actions for CI
- [x] Add auto-deployment to Netlify
- [x] Add README
- [ ] Use custom fonts

# References
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).