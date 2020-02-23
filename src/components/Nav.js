import React from 'react';
import History from './History';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Row className="theNavBar justify-content-center" /*style={{backgroundColor: 'blue'}}*/>
                    <Col lg>
                        {this.props.children}
                    </Col>
                    <Col lg>
                        <History />
                    </Col>
                </Row>
        )
    }
}