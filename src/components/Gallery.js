import React, { Component } from "react";

export default class Gallery extends Component {
  render() {
    return (
      <div className="Products">
        {this.props.products.map(product => {
          return <li key={product.productId}> {product.productName}</li>;
        })}
      </div>
    );
  }
}
