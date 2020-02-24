import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }
     
    render() {
        return (
            <Container className="theNavBar" >
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <h1 className="lightText">WikiZen</h1>
                    </Col>
                    <Col xs lg="5">
                        {this.props.children}
                    </Col>
                    <Col xs lg="2">
                        <h1 className="lightText">History</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}