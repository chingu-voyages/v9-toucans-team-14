import React from "react";
import { LeftBanner } from "./LeftBanner";
import { CenterBanner } from "./CenterBanner";
import { RightBanner } from "./RightBanner";
import { FootBanner } from "./FootBanner";

export class Top extends React.Component {
  render() {
    return (
      <div className="top-kalli">
        <div className="left-banner">
          <LeftBanner />
        </div>

        <div className="center-banner">
          <CenterBanner />
        </div>

        <div className="right-banner">
          <RightBanner />
        </div>

        <div className="foot-banner">
          <FootBanner />
        </div>
      </div>
    );
  }
}
