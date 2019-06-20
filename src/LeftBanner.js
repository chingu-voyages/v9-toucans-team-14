import React from "react";
import shoe1small from "../src/assets/images/blackShoe/shoe1small.jpg";
import shoe2small from "../src/assets/images/blackShoe/shoe2small.jpg";
import shoe3small from "../src/assets/images/blackShoe/shoe3small.jpg";

export class LeftBanner extends React.Component {
  render() {
    return (
      <div className="left-banner">
        <h4>fendi -</h4>
        <h3>Black technical</h3>
        <h3>knit fabric high-tops</h3>
        <p>Running sneakers with thin</p>
        <p>elastic laces.</p>

        <div className="small-images">
          <img src={shoe1small} alt="shoe image" />
          <img src={shoe2small} alt="shoe image" />
          <img src={shoe3small} alt="shoe image" />
        </div>
      </div>
    );
  }
}
