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
                {/* This is the div that displays before a search is entered */}
                <div hidden={this.props.blank ? '' : 'hidden'}>
                    <h1 className="justify-content-center">Wikizen</h1>
                    <hr></hr>
                    <h3 className="justify-content-center">
                        Enter a search term to see the wikipedia page. 
                        <br/>
                        Click the "See Simple/See Standard" button to toggle between the simple version and the standard version of the page.
                    </h3>
                </div>

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
