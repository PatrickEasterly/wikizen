import React from 'react';

export default class Tabs extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul className="tabs">
                {this.props.sections.map((section)=>{
                    return (<li>{section.anchor}</li>)
                })}
                </ul>
            </div>
        )
    }
}