import React from "react";
import "./App.css";
import "./assets/stylesheets/components/banner/right-banner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class RightBanner extends React.Component {
  render() {
    return (
      <div className="right-banner">
        <div className="wrapper">
          <div className="size-wrapper">
            <div>
              <p> SIZE </p>
            </div>
            <div className="size-circles">
              <p className="circle s37 selected">37</p>
              <p className="circle s38">38</p>
              <p className="circle s39">39</p>
              <p className="circle s40 na">40</p>
              <p className="circle s41">41</p>
            </div>
          </div>
          <div className="reviews-wrapper">
            <div>
              <p>REVIEWS</p>
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
              <p className="price">PRICE</p>
            </div>
            <div>
              <p>$450</p>
            </div>
          </div>
          <div className="colour-wrapper">
            <p>COLOUR</p>
            <div className="colour-btns">
              <a href="btn" className="btn-color-black">
              </a>
              <a href="btn" className="btn-color-white">
              </a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
