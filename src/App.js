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
      // value: null,
      currentTab: 0,
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
      <div className="App" onKeyDown={this._handleKeyPress} tabIndex="0">
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
                currentTab={this.state.currentTab}
              />
              <Pages 
                sections={this.state.sections}
                currentTab={this.state.currentTab}
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
    // 
    // replace all whitespace with _
    title = title.replace(/ /g, '_');
    // 
    // give the sections a place to live
    let sectionArr = [];
    // 
    // First, try the simple wiki page. If there is no simple wiki, get the regular wiki page.
    try {
      var data = await axios.get(`https://simple.wikipedia.org/api/rest_v1/page/mobile-sections/${title}`);

    } catch(err) {
      var data = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${title}`);

    }
    // 
    // The first section appears in the lead. Put it in sections first. 
    let first = data.data.lead.sections[0];

    sectionArr.push({
      tab: first.id,
      section: first.text,
      anchor: data.data.lead.displaytitle
    })
    // 
    // Get the remaining sections
    data = data.data.remaining.sections;
    data.map((item)=>{
      sectionArr.push({
        tab: item.id,
        section: item.text,
        anchor: item.anchor
      })
    })
    
    sectionArr.forEach(section=>{
      // 
      // Take out all the a tags
      section.section = section.section.replace(/<\/?a[^>]*>/g, "");
      // 
      // Add the fill wikipedia image src
      section.section = section.section.replace(/src="\/w\/extensions/g, '/src="https://simple.m.wikipedia.org/w/extensions');
      // 
      // Replace all src

    })

    // 
    // Add them to state
    this.setState({
      sections: sectionArr
    })
  }
  _handleKeyPress=(event)=>{
    if(event.keyCode === 37){
      // do left
      const max = this.state.sections.length;
      let current = this.state.currentTab;
      if(current===0){
        current = max;
      }
      current--;
      this.setState({
        currentTab: current
      })
    }
    if(event.keyCode === 39){
      // do right
      const max = this.state.sections.length;
      let current = this.state.currentTab;
      current++;
      if(current===max){
        current = 0
      }
      this.setState({
        currentTab: current
      })
    }
  }
}

export default App;
