// <<<<<<< HEAD:src/RightBanner.js
// import React from 'react';
// import './App.css';
// import './assets/stylesheets/components/banner/right-banner.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { SizeButtons } from './SizeButtons';
// import { ColorButtons } from './ColorButtons';
// =======
import React from 'react';
import '../assets/stylesheets/components/banner/right-banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeButtons } from './SizeButtons';
import { ColorButtons } from '../ColorButtons';

export class RightBanner extends React.Component {
  render() {
    const shoe1 = this.props.selectedShoe;
    return (
      <div className="wrapper">
        <div className="size-wrapper">
          <div>
            <p>
              <strong>SIZE</strong>
            </p>
          </div>
          <SizeButtons />
        </div>
        <div className="reviews-wrapper">
          <div>
            <p>
              <strong>REVIEWS</strong>
            </p>
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
            <p className="price">
              <strong>PRICE</strong>
            </p>
          </div>
          <div>
            <p>
              {/* <strong>$450</strong> */}
              <strong>{shoe1.price}</strong>
            </p>
          </div>
        </div>
        <div className="colour-wrapper-set1">
          <p>
            <strong>COLOUR</strong>
          </p>
          <ColorButtons />
        </div>

        {/* <div className="colour-wrapper-set2">
          <p>
            <strong>COLOUR</strong>
          </p>
          <div className="colour-btns-set2">
            <button type="button" className="btn-color red" />
            <button type="button" className="btn-color white-brown selected" />
            <button type="button" className="btn-color black-brown" />
          </div>
        </div> */}
      </div>
    );
  }
}
