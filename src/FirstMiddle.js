import React from "react";
import "./App.css";
import "./assets/stylesheets/components/first-middle.css";

export class FirstMiddle extends React.Component {
  render() {
    return (
      <div className="left-first-middle">
        <div className="first-middle-left">
          <h3 className="first-middle-left-title">
            Made of black technical knit fabric
          </h3>

          <div className="left-description desc">
            <ul>
              <li>
                <h4>Description</h4>
                <p>
                  {" "}
                  Running sneakers with thin elastic laces.Wavy rubber sole.Made
                  <br /> of black technical knit fabric.The rubberized film
                  details highlight <br /> the shape of the shoe.Customized with
                  detachable rubber tab <br />
                  appliqué on the heel.
                </p>
              </li>
            </ul>
          </div>

          <div className="composition-box desc">
            <ul>
              <li>
                <h4>Composition</h4>
                <p>
                  80% polyamide, 20% elastane,
                  <br /> 100% calf leather, inside: 100%
                  <br /> polyester.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="first-middle-right">
          <h4>Reviews</h4>

          <div className="right-description">
            <div className="reviews">
              <ul>
                <li>
                  <p className="name-tag">
                    <img src="./images/first-middle/David-Heart.jpg" alt="" />
                    <strong>David Heart</strong> - June 06, 2019
                  </p>
                  <p className="review-content">
                    Blogging twice a week, catching up with other people 's
                    writing getting back to...
                  </p>
                </li>
              </ul>
            </div>

            <div className="reviews">
              <ul>
                <li>
                  <p className="name-tag">
                    <img src="./images/first-middle/Kim-North.jpg" alt="" />
                    <strong>Kim North</strong>- May 15, 2019{" "}
                  </p>
                  <p className="review-content">
                    I went through a rollercoaster of contradictory emotions:
                    skepticism...
                  </p>
                </li>
              </ul>
            </div>

            <div className="reviews">
              <ul>
                <li>
                  <p className="name-tag">
                    <img
                      src="./images/first-middle/Lisa-Peters.jpg"
                      alt=""
                      width="28"
                      height="28"
                    />
                    <strong>Lisa Peters</strong> - January 21, 2019
                  </p>
                  <p className="review-content">
                    {" "}
                    Realization, happiness, guilt, elation, excitement,
                    curiosity.I remember you.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="social-first-footer">
          <div className="socials">
            <li>
              <a href="#" class="fa fa-facebook" />
              <a href="#" class="fa fa-twitter" />
              <a href="#" class="fa fa-instagram" />
            </li>
          </div>
          <div className="next-buttons">
            <div>
              <span className="fa fa-long-arrow-left" />
              <span className="fa fa-long-arrow-right" />
              <span className="number-page">45-50</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
