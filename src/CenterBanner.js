import React from "react";
import shoe1big1 from "../src/assets/images/blackShoe/shoe1big1.jpg";

export class CenterBanner extends React.Component {
  render() {
    return (
      <div className="center-banner">
        <img src={shoe1big1} alt="shoe image" />
      </div>
    );
  }
}
