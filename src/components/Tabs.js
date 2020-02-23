import React from 'react';
import {Button} from 'react-bootstrap';

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
                    return (<Button 
                        variant="secondary"
                        key={section.tab}
                        id={section.tab}
                        onClick={(e)=>this.props.handleTabSelect(e.target.id)}
                            >{section.anchor}
                            </Button>)
                })}
                </ul>
            </div>
        )
    }
}