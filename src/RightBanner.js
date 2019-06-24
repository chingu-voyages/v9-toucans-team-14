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
              <p><strong>SIZE</strong></p>
            </div>
            <div className="size-circles">
              <p className="circle s37 selected"><strong>37</strong></p>
              <p className="circle s38"><strong>38</strong></p>
              <p className="circle s39"><strong>39</strong></p>
              <p className="circle s40 na"><strong>40</strong></p>
              <p className="circle s41"><strong>41</strong></p>
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
          <div className="colour-wrapper">
            <p><strong>COLOUR</strong></p>
            <div className="colour-btns">
              <a href="btn" className="btn-color-black selected">
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
