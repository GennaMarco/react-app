import React, { Component } from 'react';
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

class ProductTable extends Component {

    render() {
        const products = this.props.products;
        const rows = getProductsRowsByCategories(products);

        return (
            <table className="ProductTable">
                <thead align="left">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

function getProductsRowsByCategories(products) {
    let rows = [];
    let categories = [];

    products.forEach(function (product) {
        if(!categories.find(cat => cat === product.category)) {
            categories.push(product.category)
        }
    });

    categories.forEach(function (category) {
        rows.push(
            <ProductCategoryRow key={category.toString()}
                                category={category}/>
        );
        products.forEach(function(product) {
            if (product.category === category) {
                rows.push(
                    <ProductRow key={product.name.toString()}
                                product={product}
                    />
                );
            }
        });
    });

    return rows;
}

export default ProductTable;
