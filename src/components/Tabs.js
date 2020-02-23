import React from 'react';
import {Button} from 'react-bootstrap';

export default class Tabs extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.currentTab,
            blank: this.props.blank,
        }
    }

    render() {
        return (
            <div className="tabContain">

                <div hidden={this.props.blank ? '' : 'hidden'}>hide me</div>

                <ul className="tabs" hidden={this.props.blank ? 'hidden' : ''}>
                {this.props.sections.map((section)=>{
                    let selected;
                    let autofocus;
                    if(section.tab === this.props.currentTab) {
                        selected = "primary"
                        autofocus="autofocus"
                    } else {
                        selected = "secondary"
                        autofocus=""
                    }
                    return (
                        <Button 
                            key={section.tab}
                            variant={selected}
                            autofocus={autofocus}
                            id={section.tab}
                            onClick={(e)=>{

                                this.props.handleTabSelect(e.target.id)}
                            }
                                >{section.anchor.split('_').join(' ')}
                        </Button>
                    )
                })}
                </ul>
            </div>
        )
    }
}
