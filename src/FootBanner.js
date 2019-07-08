import React from "react";
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

          <div className="foot-arrow">
            <img src="https://img.icons8.com/small/22/000000/long-arrow-left.png" onClick={this.props.onPreviousShoe} alt="Previous"/>

            <img src="https://img.icons8.com/small/22/000000/long-arrow-right.png" onClick={this.props.onNextShoe} alt="Next"/>
          </div>
          <div className="add-heart">
            <button className="add-cart">add to cart</button>
            <img className="heart" src="https://img.icons8.com/windows/18/000000/like.png" />
          </div>
        </div>
      </div>
    );
  }
}
