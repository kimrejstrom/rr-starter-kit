import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import headerImage from 'app/appHeader.svg';
import 'app/App.css';
import { PoemsListPage } from 'features/poems/PoemsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home: React.FC = () => (
  <div className="App">
    <div className="App-header">
      <img src={headerImage} className="App-logo" alt="logo" />
      <h2>Welcome to RR Starter</h2>
      <PoemsListPage />
    </div>
  </div>
);

const About: React.FC = () => (
  <div className="App">
    <div className="App-header">
      <img src={headerImage} className="App-logo" alt="logo" />
      <h2>About the RR Starter</h2>
      <p>TODO</p>
    </div>
  </div>
);

export default App;
