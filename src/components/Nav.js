import React from 'react';
import History from './History';
import Nav from 'react-bootstrap/Nav';

export default class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }
     
    render() {
        return (
            // <div>
            <Nav className="theNavBar" /*style={{backgroundColor: 'blue'}}*/>
                {this.props.children}
                <History />
            </Nav>
        )
    }
}