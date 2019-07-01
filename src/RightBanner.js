import React from "react";
import "./App.css";
import "./assets/stylesheets/components/banner/right-banner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SizeButton } from "./SizeButton";


export class RightBanner extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="size-wrapper">
          <div>
            <p><strong>SIZE</strong></p>
          </div>
          <div>
            <SizeButton />
          </div>
        </div>
        <div className="reviews-wrapper">
          <div>
            <p><strong>REVIEWS</strong></p>
          </div>
          <div className="star-icons">
            <FontAwesomeIcon icon={['fas', 'star']} />
            <FontAwesomeIcon icon={['fas', 'star']} />
            <FontAwesomeIcon icon={['fas', 'star']} />
            <FontAwesomeIcon icon={['fas', 'star']} />
            <FontAwesomeIcon icon={['far', 'star']} />
          </div>
        </div>
        <div className="price-wrapper">
          <div>
            <p className="price"><strong>PRICE</strong></p>
          </div>
          <div>
            <p><strong>$450</strong></p>
          </div>
        </div>
        <div className="colour-wrapper-set1">
          <p><strong>COLOUR</strong></p>
          <div className="colour-btns-set1">
            <a href="btn" className="btn-color-black selected">
            </a>
            <a href="btn" className="btn-color-white">
            </a>
          </div>
        </div>
        <div className="colour-wrapper-set2">
          <p><strong>COLOUR</strong></p>
          <div className="colour-btns-set2">
            <a href="btn" className="btn-color-red">
            </a>
            <a href="btn" className="btn-color-white-brown selected">
            </a>
            <a href="btn" className="btn-color-black-brown">
            </a>
          </div>
        </div>
      </div>
    );
  }
}
