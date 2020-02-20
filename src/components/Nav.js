import React from 'react';
import History from './History'
import Searchbar from './Searchbar'

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }
     
    render() {
        return (
            // <div>
            <div style={{backgroundColor: 'blue'}}>
                Nav
                <Searchbar value={this.state.value}/>
                <History />
            </div>
        )
    }
}