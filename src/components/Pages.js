import React from 'react';

export default class Pages extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <div>
                <ul className="inline-end" tabIndex='0' ref={this.newRef}>
                <html id="bootstrapno" dangerouslySetInnerHTML={{__html: ` <h1>${this.props.sections[this.props.currentTab].anchor.split('_').join(' ')}</h1> \n${this.props.sections[this.props.currentTab].section}`}} />
            </ul>
            </div>

        )
    }
}