import React from "react";
import blackLarge1C from "../src/assets/images/blackShoe/blackLarge1C.jpg";
// import whiteLarge1C from "../src/assets/images/whiteShoe/whiteLarge1C.jpg";

export class CenterBanner extends React.Component {
  render() {
    return (
      <div className="center-banner">
        <img src={blackLarge1C} alt="shoe image" />
        {/* <img src={whiteLarge1C} alt="shoe image" /> */}
      </div>
    );
  }
}
