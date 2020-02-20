import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { storeDefault } from './reducers';


// Components
import PageContainer from './components/PageContainer';
import Nav from './components/Nav';

const store = createStore(storeDefault, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;
store.subscribe(()=> {
  console.log(store.getState())
})

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Provider store={store}>
          <Nav 
          value={'f'}
          />
          <PageContainer />
        </Provider>
      </div>
    </div>
  );
}

export default App;
