import React from 'react';

export default class Tabs extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <html  dangerouslySetInnerHTML={{__html: `${this.props.sections[0].anchor}`}}  style={{backgroundColor: 'white'}}/> */}
                <ul className="tabs">
                {this.props.sections.map((section)=>{
                    return (<li dangerouslySetInnerHTML={{__html: `${section.anchor}`}}/>)
                })}
                </ul>
            </div>
        )
    }
}