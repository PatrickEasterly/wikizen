import React from 'react';
import History from './components/History';
import Searchbar from './components/Searchbar';

export default class Nav extends React.Component {
    constructor(props){
        super(props);
    }
     
    render() {
        return (
            <div>
                Nav
                <Searchbar />
                <History />
            </div>
        )
    }
}