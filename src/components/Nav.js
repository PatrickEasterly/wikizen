import React from 'react';
import History from './History'
import Searchbar from './Searchbar'

export default class Nav extends React.Component {
    constructor(props){
        super(props);
    }
     
    render() {
        return (
            // <div>
            <div style={{backgroundColor: 'blue'}}>
                Nav
                <Searchbar />
                <History />
            </div>
        )
    }
}