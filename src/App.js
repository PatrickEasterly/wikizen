import React from 'react';
import './App.css';
import axios from 'axios';

// Components
import PageContainer from './components/PageContainer';
import Nav from './components/Nav';
import Searchbar from './components/Searchbar';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: null,
      selection: null,
    }
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
            <Nav 
            value={this.state.value}
            selection={this.state.selection}
            >
              <Searchbar 
                value={this.state.value}
                selection={this.props.selection}
                selectDropDown={this._selectDropDown}
              />
            </Nav>
            <PageContainer />
        </div>
      </div>
    );
  }
  _selectDropDown=(sel)=>{
    console.log(sel)
    this.setState({
      selection: sel
    })
  }
  _getWikiPage= async (title)=>{
    const data = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${title}`);

  }
}


export default App;
