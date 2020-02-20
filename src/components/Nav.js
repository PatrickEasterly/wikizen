import React from 'react';
import History from './History'

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
                {this.props.children}
                <History />
            </div>
        )
    }
}