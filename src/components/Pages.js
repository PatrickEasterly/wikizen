import React from 'react';

export default class Pages extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.newRef = React.createRef();
    }
    componentDidUpdate(){
        this.newRef.current.focus();
        console.log('updated')
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
            
            <ul className="inline-end">
                <html id="bootstrapno" tabIndex='0' ref={this.newRef} dangerouslySetInnerHTML={{__html: ` ${this.props.sections[this.props.currentTab].anchor} \n${this.props.sections[this.props.currentTab].section}`}}  style={{backgroundColor: 'black'}}/>
            
            </ul>

        )
    }
}