import React, { Component } from 'react';

class SearchBar extends Component {

    render() {
        return (
            <div className="SearchBar">
                <div>
                    <input placeholder="Search..."/>
                </div>
                <div>
                    <label>
                        <input type="checkbox"/>
                        Only show products in stock
                    </label>
                </div>
            </div>
        );
    }
}

export default SearchBar;
