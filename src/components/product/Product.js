import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const Product = (props) => {
  return (
    <div className="product">
      <p>{props.title}</p>
      <p>
        {props.price}
        {props.children}
      </p>
      <input
        type={"text"}
        onChange={props.onChange}
        value={props.title}
      ></input>
      <span>{props.quantity}</span>
      <button className={`${"btn"} ${"inc"}`} onClick={props.onIncrement}>
        +
      </button>
      <button
        className={`${"btn"} ${props.quantity === 1 && "remove"}`}
        onClick={props.onDecrement}
      >
        {props.quantity > 1 ? "-" : <FaTrashAlt></FaTrashAlt>}
      </button>
      <button className="btn" onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
};
export default Product;
