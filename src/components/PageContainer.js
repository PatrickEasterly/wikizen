import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default class PageContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <div className="thePages">
                        {this.props.children}
                    </div>
                </Container>
            </Jumbotron>
        )
    }
}