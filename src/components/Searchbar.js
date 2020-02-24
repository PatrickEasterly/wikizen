import React from 'react';
import Autocomplete from 'react-autocomplete';
export default class Searchbar extends React.Component {
constructor(props, context) {
    super(props, context);
    this.state = {
        // current value of selected field 
        value: this.props.value,
        // Data that will be rendered in the autocomplete
        // As it is asynchronous, it is initially empty
        autocompleteData: []
    };
    // bind `this` context to functions of the class
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.getItemValue = this.getItemValue.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
    this.myRef = React.createRef();
}

/**
     * Updates the state of the autocomplete data with the remote data obtained via AJAX.
     * 
     * @param {String} searchText content of the input that will filter the autocomplete data.
     * @return {Nothing} The state is updated but no value is returned
*/

retrieveDataAsynchronously(searchText) {
    let _this = this;
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    let url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchText}&format=json`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', proxyURL + url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        let status = xhr.status;
        // eslint-disable-next-line
        if(status == 200) {
            
            //// make an array of objects out of the response (an array of 4 arrays, with array[1] being titles and array[3] being links)
            let newAutocompleteData = [];
            for(let i = 0; i < 11; i++){
                newAutocompleteData.push({
                    label: xhr.response[1][i],
                    value: xhr.response[3][i]
                })
            }
            _this.setState({
                autocompleteData: newAutocompleteData
            });
            // console.table(xhr.response)
        } else {
            // console.error('Cannot load data from remote source');
        }
    };
    xhr.send();
}

/*
     * Callback triggered when the user types in the autocomplete field
     * 
     * @param {Event} e JavaScript Event
     * @return {Event} Event of JavaScript can be used as usual.
*/

onChange(e){
    this.setState({
        value: e.target.value
    });
    // eslint-disable-next-line
    if(e.target.value != '') {
        this.retrieveDataAsynchronously(e.target.value);
    } else {
        this.setState({
            autocompleteData: []
        })
    }
    // console.log('the input text has changed to ', e.target.value);
}

/*
     * Callback triggered when the autocomplete input changes.
     * 
     * @param {Object} val Value returned by the getItemValue function.
     * @return {Nothing} No value is returned
 */

onSelect(val) {
    this.props.selectDropDown(val);
    this.props.unBlank();
    this.setState({
        value: val
    });
    this.myRef.current.blur();
}

/*
     * Define the markup of every rendered item of the autocomplete.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @param {Boolean} isHighlighted declares wheter the item has been highlighted or not.
     * @return {Markup} Component
*/

renderItem(item, isHighlighted) {
    return (
        <div className="autoItem" style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.label}
        </div>   
    );
}

/**
     * Define which property of the autocomplete source will be show to the user.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @return {String} val
 */
getItemValue(item){
    // You can obviously only return the Label or the component you need to show
    // In this case we are going to show the value and the label that shows in the input
    // something like "1 - Microsoft"
    return `${item.label}`;
}

    render() {
        return (
                <Autocomplete 
                
                    

                    getItemValue={this.getItemValue}
                    items={this.state.autocompleteData}
                    renderItem={this.renderItem}
                    value={this.state.value}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                    ref={this.myRef}
                />
        )
    }
}