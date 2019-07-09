import React from "react";
export class CenterBanner extends React.Component {
  render() {
    const shoeImage = this.props.selectedImage;
    return (
      <div className="center-banner">
        <div className="big-picture">
          <img src={shoeImage.url} alt={shoeImage.altText} />
        </div>
      </div>
    );
  }
}
