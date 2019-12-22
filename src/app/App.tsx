import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Demo } from 'pages/Demo/Demo';
import { Home } from 'pages/Home/Home';
import { About } from 'pages/About/About';
import { Footer } from 'components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <main className="bg-gray-100 flex-grow">
        <Switch>
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
