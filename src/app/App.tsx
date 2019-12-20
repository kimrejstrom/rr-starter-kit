import React from 'react';
import headerImage from 'app/appHeader.svg';
import 'app/App.css';
import { PoemsListPage } from 'features/poems/PoemsPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={headerImage} className="App-logo" alt="logo" />
        <h2>Welcome to RR Starter</h2>
        <PoemsListPage />
      </div>
    </div>
  );
};

export default App;
