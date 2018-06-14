import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function filterProductsByValuesSearched(products, filterText, stocked) {
    filterText = filterText.toLowerCase();

    if (stocked) {
        products = products.filter(function (product) {
            return product.stocked;
        });
    }
    return products.filter(function (product) {
        return product.name.toLowerCase().indexOf(filterText) > -1 || product.price.indexOf(filterText) > -1;
    });
}

class FilterableProductTable extends Component {

    constructor(props) {
        super(props);

        this.state = {filterText: '', stocked: false};
        this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    }

    handleSearchBarChange(text, checked) {
        this.setState({filterText: text, stocked: checked});
    }

    render() {

        const filterText = this.state.filterText;
        const stocked = this.state.stocked;
        const products = filterProductsByValuesSearched(this.props.products, filterText, stocked);

        return (
            <div className="FilterableProductTable">
                <SearchBar onSearchBarChange={this.handleSearchBarChange}/>
                <ProductTable products={products}/>
            </div>
        );
    }
}

export default FilterableProductTable;
