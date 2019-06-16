import React from "react";
import Shoe from "../src/assets/images/Shoe.jpg";

export class CenterBanner extends React.Component {
  render() {
    return (
      <div className="center-banner">
        <section>
          <img src={Shoe} alt="shoe image" />
        </section>
      </div>
    );
  }
}
