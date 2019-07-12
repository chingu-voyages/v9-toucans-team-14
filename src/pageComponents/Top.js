import React from "react";

import { LeftBanner } from "./LeftBanner";
import { CenterBanner } from "./CenterBanner";
import { RightBanner } from "./RightBanner";
import { FootBanner } from "./FootBanner";
import { ShoeData } from "./ShoeData";

export class Top extends React.Component {
  state = {
    selectedShoeIndex: 0,
    previewImageIndex: 0
  };

  setPreviewImageIndex = index => {
    this.setState(() => ({
      previewImageIndex: index
    }));
  };

  selectNextShoe = () => {
    this.setState(() => ({
      previewImageIndex: 0
    }));

    if (this.state.selectedShoeIndex >= ShoeData.length - 1) {
      this.setState(() => ({
        selectedShoeIndex: 0
      }));
    } else {
      this.setState(prevState => ({
        selectedShoeIndex: prevState.selectedShoeIndex + 1
      }));
    }
  };

  selectPreviousShoe = () => {
    this.setState(() => ({
      previewImageIndex: 0
    }));

    if (this.state.selectedShoeIndex === 0) {
      this.setState(() => ({
        selectedShoeIndex: ShoeData.length - 1
      }));
    } else {
      this.setState(prevState => ({
        selectedShoeIndex: prevState.selectedShoeIndex - 1
      }));
    }
  };

  render() {
    return (
      <div className="top-kalli">
        <div className="left-banner">
          <LeftBanner
            selectedShoe={ShoeData[this.state.selectedShoeIndex]}
            onImageClick={this.setPreviewImageIndex}
          />
        </div>

        <div className="center-banner">
          <CenterBanner
            selectedImage={
              ShoeData[this.state.selectedShoeIndex].images[
                this.state.previewImageIndex
              ]
            }
          />
        </div>

        <div className="right-banner">
          <RightBanner selectedShoe={ShoeData[this.state.selectedShoeIndex]} />
        </div>

        <div className="foot-banner">
          <FootBanner
            onNextShoe={this.selectNextShoe}
            onPreviousShoe={this.selectPreviousShoe}
          />
        </div>
      </div>
    );
  }
}
