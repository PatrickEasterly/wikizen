import React from 'react';
import './App.css';
import axios from 'axios';

// Components
import PageContainer from './components/PageContainer';
import Nav from './components/Nav';
import Searchbar from './components/Searchbar';
import Tabs from './components/Tabs';
import Pages from './components/Pages';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: null,
      selection: null,
      sections: [
        {
          tab: '',
          section: '',
          anchor: ''
        }
      ]
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
            <PageContainer 
              sections={this.state.sections}
            >
              <Tabs 
                sections={this.state.sections}
              />
              <Pages 
                sections={this.state.sections}
              />
            </PageContainer>
        </div>
      </div>
    );
  }
  _selectDropDown=(sel)=>{
    console.log(sel)
    this.setState({
      selection: sel
    })
    this._getWikiPage(sel)
  }
  _getWikiPage= async (title)=>{
    title = title.replace(/ /g, '_');
    // console.log(`new title: ${title}`);
    // console.log(this.state.selection)
    let data = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${title}`);
    // console.table(data)
    data = data.data.remaining.sections;
    // data[0] = {id: 1, text: "↵<div role="note" class="hatnote navigation-not-se…ss="mw-reflink-text">[13]</span></a></span></p>↵↵", toclevel: 1, line: "Name", anchor: "Name"}
    let sectionArr = [];
    data.map((item)=>{
      sectionArr.push({
        tab: item.id,
        section: item.text,
        anchor: item.anchor
      })
    })
    this.setState({
      sections: sectionArr
    })
  }
}


export default App;
