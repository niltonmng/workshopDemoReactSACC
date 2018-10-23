import React, { Component } from "react";
import ProductSummary from "./ProductSummary";
export default class Gallery extends Component {
  render() {
    return (
      <div className="Products">
        {this.props.products.map(product => {
          return <ProductSummary key={product.productId} product={product} />;
        })}
      </div>
    );
  }
}
