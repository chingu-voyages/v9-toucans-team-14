import React from "react";
import "./App.css";
import "./assets/stylesheets/components/second-middle.css"

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

       <div className="accessories-wrapper">
        <a href="#">
          <div className="accessory-1">
            <img src="https://www.visiofactory.com/70358/giorgio-armani-frames-of-life-yellow-matte-ar8093-5006-31-47-23-medium.jpg" alt="" />
            <div className="accessory-details">
              <p>$350</p>
              <p>Reviews</p>
            </div>
          </div>
        </a>
        <div></div>
        <div></div>
        <div></div>
       </div>


      </div>
    );
  }
}
