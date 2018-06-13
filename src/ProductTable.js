import React, { Component } from 'react';

function ProductCategoryRow(props) {
    return (
        <tr>
            <td>
                <strong>{props.category}</strong>
            </td>
        </tr>
    );
}

function ProductRow(props) {
    const colorText = props.stocked ? '' : 'red';

    return (
        <tr style={{color: colorText}}>
            <td>
                {props.name}
            </td>
            <td>
                {props.price}
            </td>
        </tr>
    );
}

function getProductsRowsByCategories(products) {
    let rows = [];
    let categories = [];

    products.forEach(function (product) {
        if(!categories.find(cat => cat === product.category))
        {
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
                                name={product.name}
                                price={product.price}
                                stocked={product.stocked}
                    />
                );
            }
        });
    });

    return rows;
}

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

export default ProductTable;
