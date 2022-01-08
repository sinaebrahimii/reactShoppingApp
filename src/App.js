import React from "react";

import ProductList from "./components/productList/ProductList";
// import HookCounter from "./components/HookCounter";
class App extends React.Component {
  state = {
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
  render() {
    return (
      <div className="container" id="title ">
        <h1>Shopping App</h1>
        <ProductList></ProductList>
        <button onClick={this.countHandler}>Count{this.state.count} </button>
      </div>
    );
  }
}
export default App;
