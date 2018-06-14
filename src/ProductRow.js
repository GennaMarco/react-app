import React, {Component} from "react";

class ProductRow extends Component {

    render() {
        const product = this.props.product;
        const colorText = product.stocked ? '' : 'red';

        return (
            <tr className="ProductRow" style={{color: colorText}}>
                <td>
                    {product.name}
                </td>
                <td>
                    {product.price}
                </td>
            </tr>
        );
    }
}

export default ProductRow;