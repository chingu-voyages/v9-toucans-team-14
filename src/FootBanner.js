import React from "react";
import LeftRightArrow from "./LeftRightArrow";
export class FootBanner extends React.Component {
  onClick() {
    window.open("https://dribbble.com/shots/6575439-Kalli-UI-Kit-II", "_blank");
  }

  render() {
    return (
      <div className="foot-banner">
        <div className="foot-button">
          <button className="play-button" onClick={this.onClick}>
            <img src="https://img.icons8.com/material/24/000000/circled-play.png" />
            <p>play video</p>
          </button>
          <LeftRightArrow />
          <div className="lines">
            <p>02</p>
            <img
              className="first-line"
              src="https://img.icons8.com/ios-glyphs/22/000000/horizontal-line.png"
            />
            <img
              className="second-line"
              src="https://img.icons8.com/ios-glyphs/22/000000/horizontal-line.png"
            />
            <img
              className="third-line"
              src="https://img.icons8.com/ios-glyphs/22/000000/horizontal-line.png"
            />
            <p>05</p>
          </div>
          <div className="add-heart">
            <button className="add-cart">add to cart</button>
            <img
              className="heart"
              src="https://img.icons8.com/windows/18/000000/like.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
