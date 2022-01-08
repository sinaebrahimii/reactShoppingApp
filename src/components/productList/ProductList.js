import React from "react";
import Product from "../product/Product";
class ProductList extends React.Component {
  state = {
    products: [
      { title: "reactjs", price: "99$", id: 1, quantity: 1 },
      { title: "HTML", price: "50$", id: 2, quantity: 2 },
      { title: "angular", price: "80$", id: 3, quantity: 4 },
    ],
    count: 0,
  };

  clickHandler = () => {
    this.setState({
      products: [
        { title: "reactjs", price: "50$" },
        { title: "HTML", price: "50$" },
        { title: "angular", price: "50$" },
      ],
    });
  };
  countHandler = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("clicked", this.state.count);
  };
  deleteHandler = (id) => {
    console.log("clicked ", id);
    const newItems = this.state.products.filter((product) => product.id !== id);
    this.setState({ products: newItems });
  };
  incrementHandler = (id) => {
    const products = [...this.state.products];
    const selectedProduct = products.find((p) => p.id === id);
    selectedProduct.quantity++;
    this.setState({ products: products });
    console.log(selectedProduct, "clicked inc hanlder");
  };
  decrementHandler = (id) => {
    const products = [...this.state.products];
    const selectedProduct = products.find((p) => p.id === id);
    if (selectedProduct.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id);
      this.setState({ products: filteredProducts });
    } else {
      selectedProduct.quantity--;
      this.setState({ products: products });
    }
  };
  changeHandler = (e, id) => {
    const products = [...this.state.products];
    const selectedProduct = products.find((p) => p.id === id);
    selectedProduct.title = e.target.value;
    this.setState({ products: products });
  };
  renderProducts = () => {
    if (this.state.products.length === 0) {
      return <div>There is no products</div>;
    }

    return (
      <div className="product-list">
        {this.state.products.map((product) => {
          return (
            <Product
              title={product.title}
              price={product.price}
              key={product.id}
              quantity={product.quantity}
              onDelete={() => this.deleteHandler(product.id)}
              onIncrement={() => this.incrementHandler(product.id)}
              onDecrement={() => this.decrementHandler(product.id)}
              onChange={(e) => this.changeHandler(e, product.id)}
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
