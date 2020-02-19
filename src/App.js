import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

// given a string, search that shit
// https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=CHANGE***ME&limit=1&namespace=0
// gives you ["pet",["Pet"],[""],["https://en.wikipedia.org/wiki/Pet"]]

// given the title, use https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=1&explaintext&titles=CHAMGE***ME
// to get a raw text version of the page