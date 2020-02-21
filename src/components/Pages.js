import React from 'react';

export default class Pages extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <div>
            //     {/*  */}
            //     {/* Just shows all sections as one page */}
            //     {/* {this.props.sections.map((section)=>{
            //         return (<html dangerouslySetInnerHTML={{__html: ` ${section.anchor} \n${section.section}`}}  style={{backgroundColor: 'white'}}/>)
            //     })} */}
            //     {/*  */}

            // </div>
            
            <html dangerouslySetInnerHTML={{__html: ` ${this.props.sections[this.props.currentTab].anchor} \n${this.props.sections[this.props.currentTab].section}`}}  style={{backgroundColor: 'white'}}/>
            

        )
    }
}