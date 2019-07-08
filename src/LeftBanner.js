import React from "react";

export class LeftBanner extends React.Component {
  render() {
    const shoe = this.props.selectedShoe;
    return (
      <div className="left-banner">
        <h4>{shoe.category.name}</h4>
        <h3>{shoe.titleText}</h3>
        <p>{shoe.introText}</p>
        <div className="small-images">
          {shoe.previewImages.map((image, index) => (
            <img
              src={image.url}
              alt={image.altText}
              onClick={() => this.props.HandleImageClick(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}
