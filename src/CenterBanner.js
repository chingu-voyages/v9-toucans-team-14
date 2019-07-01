import React from "react";
import shoe1big1 from "../src/assets/images/blackShoe/shoe1big1.jpg";
import yellowLarge1 from "../src/assets/images/yellowShoe/yellowLarge1.jpg";
import yellowLarge2 from "../src/assets/images/yellowShoe/yellowLarge2.jpg";
import yellowLarge3 from "../src/assets/images/yellowShoe/yellowLarge3.jpg";
import yellowLarge4 from "../src/assets/images/yellowShoe/yellowLarge4.jpg";
import yellowLarge5 from "../src/assets/images/yellowShoe/yellowLarge5.jpg";

export class CenterBanner extends React.Component {
  render() {
    return (
      <div className="center-banner">
        <img src={shoe1big1} alt="shoe image" />
      </div>
    );
  }
}
