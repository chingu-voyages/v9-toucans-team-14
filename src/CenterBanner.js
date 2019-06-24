import React from "react";
import shoe1big from "../src/assets/images/blackShoe/shoe1big.jpg";

export class CenterBanner extends React.Component {
  render() {
    return (
      <div className="center-banner">
          <img src={shoe1big} alt="shoe image" />
      </div>
    );
  }
}