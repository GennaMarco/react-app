import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {text: '', checked: false};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }

    handleTextChange(event) {
        const text = event.target.value;
        const checked = this.state.checked;
        this.setState({text: text, checked: checked});
        this.props.onSearchBarChange(text, checked);
    }

    handleCheckBoxChange(event) {
        const text = this.state.text;
        const checked = event.target.checked;
        this.setState({text: text, checked: checked});
        this.props.onSearchBarChange(text, checked);
    }

    render() {
        return (
            <div className="SearchBar">
                <div>
                    <input placeholder="Search..."
                           value={this.state.text}
                           onChange={this.handleTextChange}
                    />
                </div>
                <div>
                    <label>
                        <input type="checkbox"
                               checked={this.state.checked}
                               onChange={this.handleCheckBoxChange}
                        />
                        Only show products in stock
                    </label>
                </div>
            </div>
        );
    }
}

export default SearchBar;
