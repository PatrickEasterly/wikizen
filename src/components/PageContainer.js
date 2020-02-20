import React from 'react';

export default class PageContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}