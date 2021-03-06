import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }
     
    render() {
        let simple = this.props.isSimple===0 ? 'See Standard' : 'See Simple';
        return (
            <Container className="theNavBar" >
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <h1 className="lightText">WikiZen</h1>
                    </Col>
                    <Col 
                    className="autoComplete" xs lg="5">
                        {this.props.children}
                    </Col>
                    <Col className="buttons" xs lg="3">
                        <Row className="justify-content-md-center align-items-center">
                            <Col>
                                <Button 
                                onClick={(e)=>{this.props.handleReset(e)}} 
                                variant="success">Reset</Button>
                            </Col>
                            <Col>
                                <Button variant="light"
                                style={{width: "150px"}}
                                onClick={(e)=>{this.props.simpleToggle(e)}}
                                >{simple}</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}