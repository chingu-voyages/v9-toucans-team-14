import React from "react";
export class CenterBanner extends React.Component {
  
  render() {
    return (
      <div className="center-banner">
        <div className="big-picture">
          <img src={this.props.selectedImage.url} alt={this.props.selectedImage.altText} />
        </div>
      </div>
    );
  }
}
