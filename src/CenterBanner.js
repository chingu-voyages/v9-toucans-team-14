import React from "react";
import blackLarge1C from "../src/assets/images/blackShoe/blackLarge1C.jpg";
// import whiteLarge1C from "../src/assets/images/whiteShoe/whiteLarge1C.jpg";

export class CenterBanner extends React.Component {
  constructor() {
    super();
    this.onClickForward = this.onClickForward.bind(this);
    this.onClickBack = this.onClickBack.bind(this);

    const blackShoe = require("../src/assets/images/blackShoe/blackLarge1C.jpg");
    const whiteShoe = require("../src/assets/images/whiteShoe/whiteLarge1C.jpg");
    const redShoe = require("../src/assets/images/redShoe/redLarge1C.jpg");
    const whiteBrownShoe = require("../src/assets/images/whiteBrownShoe/whiteBrownLarge1C.jpg");
    const blackBrownShoe = require("../src/assets/images/blackBrownShoe/blackBrownLarge1C.jpg");

    this.state = {
      index: 0,
      imgList: [blackShoe, whiteShoe, redShoe, whiteBrownShoe, blackBrownShoe]
    };
  }

  onClickForward() {
    if (this.state.index + 1 === this.state.imgList.length) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: this.state.index + 1
      });
    }
  }

  onClickBack() {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.imgList.length - 1
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
  }

  render() {
    return (
      <div className="center-banner">
        {/* <img src={blackLarge1C} alt="shoe image" /> */}
        {/* <img src={whiteLarge1C} alt="shoe image" /> */}
        <img src={this.state.imgList[this.state.index]} alt="" />
        <div>
          {/* <img src={this.state.imgList[this.state.index]} alt="" /> */}
          {/* <br /> */}
          {/* <button onClick={this.onClickBack}>Back</button>
          <button onClick={this.onClickForward}>Forward</button> */}
        </div>
        <div>
          <button onClick={this.onClickBack}>
            <img src="https://img.icons8.com/small/22/000000/long-arrow-left.png" />
          </button>

          <button onClick={this.onClickForward}>
            <img src="https://img.icons8.com/small/22/000000/long-arrow-right.png" />
          </button>
        </div>
      </div>
    );
  }
}
