import React from 'react';
import './App.css';


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
                selectDropDown={this._dropDownSelect}
              />
            </Nav>
            <PageContainer />
        </div>
      </div>
    );
  }
  _dropDownSelect=(sel)=>{
    this.setState({
      selection: sel
    })
  }
}


export default App;
