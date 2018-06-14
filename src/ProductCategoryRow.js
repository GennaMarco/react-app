import React, {Component} from "react";

class ProductCategoryRow extends Component {

    render() {
        return (
            <tr className="ProductCategoryRow">
                <td>
                    <strong>{this.props.category}</strong>
                </td>
            </tr>
        );
    }
}

export default ProductCategoryRow;