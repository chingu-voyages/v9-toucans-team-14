import React from "react";
import "./App.css";
import "./assets/stylesheets/components/second-middle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class SecondMiddle extends React.Component {
  render() {
    return (
      <div className="second-middle-style">
        <div className="second-middle-navbar">
          <h3>Style with &nbsp; &mdash;</h3>
          <div>
            <a href="btn" className="left-arrow-button">
              <FontAwesomeIcon icon="long-arrow-alt-left" />
            </a>
            <a href="btn" className="right-arrow-button">
            <FontAwesomeIcon icon="long-arrow-alt-right" />
            </a>
          </div>
        </div>

        <div className="accessories-wrapper">
          <div className="accessory-1">
            <img src="./images/second-middle/yellow-sunglasses.png" alt="" />
            <div className="accessory-details">
              <div className="circle-wrapper">
                <FontAwesomeIcon icon="circle"/>
                <FontAwesomeIcon icon="circle"  className="grey-circle" />
                <FontAwesomeIcon icon="circle" className="grey-circle" />
              </div>
              <p>$300</p>
            </div>
          </div>

          <div className="accessory-1">
            <img src="./images/second-middle/cropped-shirt.png" alt="" />
            <div className="accessory-details">
              <div className="circle-wrapper">
                <FontAwesomeIcon icon="circle"/>
                <FontAwesomeIcon icon="circle"  className="grey-circle" />
                <FontAwesomeIcon icon="circle" className="grey-circle" />
              </div>
              <p>$450</p>
            </div>
          </div>

          <div className="accessory-1">
            <img src="./images/second-middle/white-running.png" alt="" />
            <div className="accessory-details">
              <div className="circle-wrapper">
                <FontAwesomeIcon icon="circle"/>
                <FontAwesomeIcon icon="circle"  className="grey-circle" />
                <FontAwesomeIcon icon="circle" className="grey-circle" />
              </div>
              <p>$300</p>
            </div>
          </div>

          <div className="accessory-1">
            <img src="./images/second-middle/banana-bag.png" alt="" />
            <div className="accessory-details">
              <div className="circle-wrapper">
                <FontAwesomeIcon icon="circle"/>
                <FontAwesomeIcon icon="circle"  className="grey-circle" />
                <FontAwesomeIcon icon="circle" className="grey-circle" />
              </div>
              <p>$210</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
