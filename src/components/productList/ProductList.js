import React from "react";
import Product from "../product/Product";

class ProductList extends React.Component {
  renderProducts = () => {
    if (this.props.products.length === 0) {
      return <div>There is no products</div>;
    }

    return (
      <div className="product-list">
        {this.props.products.map((product) => {
          return (
            <Product
              title={product.title}
              price={product.price}
              key={product.id}
              quantity={product.quantity}
              onDelete={() => this.props.onDelete(product.id)}
              onIncrement={() => this.props.onIncrement(product.id)}
              onDecrement={() => this.props.onDecrement(product.id)}
              onChange={(e) => this.props.onChange(e, product.id)}
            ></Product>
          );
        })}
      </div>
    );
  };
  render() {
    return <React.Fragment>{this.renderProducts()}</React.Fragment>;
  }
}

export default ProductList;
