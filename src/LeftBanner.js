import React from "react";
import BlackShoeImages from "./BlackShoeImages";
import WhiteShoeImages from "./WhiteShoeImages";
import DarkBlueShoeImages from "./DarkBlueShoeImages";
import RedShoeImages from "./RedShoeImages";
import YellowShoeImages from "./YellowShoeImages";

export class LeftBanner extends React.Component {
  render() {
    return (
      <div className="left-banner">
        <h4>fendi -</h4>
        <h3>Black technical</h3>
        <h3>knit fabric high-tops</h3>
        <p>Running sneakers with thin</p>
        <p>elastic laces.</p>

        <div className="small-images">
          {/* <BlackShoeImages /> */}
          {/* <WhiteShoeImages /> */}
          {/* <DarkBlueShoeImages /> */}
          {/* <RedShoeImages /> */}
          <YellowShoeImages />
        </div>
      </div>
    );
  }
}
