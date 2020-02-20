import React from 'react';
import './App.css';

// Components
import PageContainer from './components/PageContainer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Nav />
        <PageContainer />
      </div>
    </div>
  );
}

export default App;
