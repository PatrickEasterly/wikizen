import React from 'react';

export default class Pages extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* {React.createElement('HTML', {}, this.props.sections[0].section)} */}
                <html  dangerouslySetInnerHTML={{__html: `${this.props.sections[0].section}`}} />
            </div>
        )
    }
        
}