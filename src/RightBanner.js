import React from "react";
import "./App.css";
import "./assets/stylesheets/components/banner/right-banner.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class RightBanner extends React.Component {
  render() {
    return (
      <div className="right-banner">
        <div className="size-wrapper">
          <div>
            <p> SIZE </p>
          </div>
          <div className="size-circles">
            <p className="circle 37">37</p>
            <p className="circle 38">38</p>
            <p className="circle 39">39</p>
            <p className="circle 40">40</p>
            <p className="circle 41">41</p>
          </div>
        </div>
        <div className="reviews-wrapper">
        </div>
        <div className="price-wrapper">
        </div>
        <div className="color-wrapper">
        </div>
      </div>
    );
  }
}
