import React, { Component } from "react";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";

export default class ProductSummary extends Component {
  render() {
    return (
      <div>
        <img src={this.props.product.items[0].images[0].imageUrl} />
        <ProductName name={this.props.product.productName} />
        <ProductPrice
          price={this.props.product.items[0].sellers[0].commertialOffer.Price}
        />
      </div>
    );
  }
}
