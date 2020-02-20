import React from 'react';

export default class Pages extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.sections.map((section)=>{
                    return (<html dangerouslySetInnerHTML={{__html: ` ${section.anchor} \n${section.section}`}}  style={{backgroundColor: 'white'}}/>)
                })}
            </div>
        )
    }
}