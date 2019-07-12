import React from "react";

export class LeftBanner extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: 1,
      scale: 1
    };
  }

  onHide() {
    this.setState({
      opacity: 0
    });
  }

  onScale() {
    this.setState({
      scale: this.state.scale > 1 ? 1 : 1.3
    });
  }

  render() {
    const shoe = this.props.selectedShoe;
    const pStyle = {
      transition: "all 1s ease-out"
    };
    return (
      <div className="left-banner">
        <h4>{shoe.category.name}</h4>
        <h3>{shoe.titleText}</h3>
        <p>{shoe.introText}</p>

        <div className="small-images">
          {shoe.previewImages.map((image, index) => (
            <img
              key={index}
              style={{
                ...pStyle,
                cursor: "pointer",
                opacity: this.state.opacity,
                transform: "scale(' + this.state.scale + ')"
              }}
              src={image.url}
              alt={image.altText}
              onClick={() => this.props.onImageClick(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}
