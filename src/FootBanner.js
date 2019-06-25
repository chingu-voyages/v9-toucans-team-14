import React from "react";
export class FootBanner extends React.Component {
  render() {
    return (
      <div className="foot-banner">
        <div className="foot-button">
          <button className="play-button">
            <img src="https://img.icons8.com/material/24/000000/circled-play.png" />
            play video
          </button>
          <div className="foot-arrow">
            <img src="https://img.icons8.com/small/22/000000/long-arrow-left.png" />
            <img src="https://img.icons8.com/small/22/000000/long-arrow-right.png" />
          </div>
          <p className="lines">
            02
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
            06
          </p>
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
