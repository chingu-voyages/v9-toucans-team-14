import React from "react";
import "./App.css";

export class SecondMiddle extends React.Component {
  render() {
    return (
      <div className="second-middle-style">
        <div className="second-middle-navbar">
          <h3>Style with... </h3>
          <div>
            <a href="" className="add-to-cart-button">Add</a>
            <a href="" className="remove-to-cart-button">Remove</a>
          </div>
        </div>

       <div>
        <div className="accessory-sunglasses">
          <img src="https://cache.mrporter.com/images/products/1156205/1156205_mrp_in_xl.jpg" width="150" height="150" alt="" />
        </div>
        <div></div>
        <div></div>
        <div></div>
       </div>


      </div>
    );
  }
}
