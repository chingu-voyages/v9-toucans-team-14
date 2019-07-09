import React from "react";
// import "../App.css";
import "../assets/stylesheets/components/first-middle.css";

export class FirstMiddle extends React.Component {
  render() {
    return (
      <div className="left-first-middle">
        <div className="first-middle-left">
          <h3 className="first-middle-left-title">
            Made of black technical knit fabric
          </h3>

          <div className="left-description desc">
            <h4>Description</h4>
            <p>
              Running sneakers with thin elastic laces. Wavy rubber sole. Made
              of black technical knit fabric. The rubberized film details
              highlight the shape of the shoe. Customized withdetachable rubber
              tab appliqué on the heel.
            </p>
          </div>

          <div className="composition-box desc">
            <h4>Composition</h4>
            <p>
              80% polyamide, 20% elastane, 100% calf leather, inside: 100%
              polyester.
            </p>
          </div>
        </div>

        <div className="first-middle-right">
          <h4>Reviews</h4>

          <div className="right-description">
            <div className="reviews">
              <div>
                <img
                  className="profile-pic david"
                  src="./images/first-middle/David-Heart2.jpg"
                  alt=""
                />
              </div>
              <div className="review-content">
                <p>
                  <strong>David Heart</strong> - June 06, 2019
                </p>
                <p>
                  Sneakers transform your body language and attitude. They lift
                  you physically and emotionally.
                </p>
              </div>
            </div>

            <div className="reviews">
              <div>
                <img
                  className="profile-pic"
                  src="./images/first-middle/Kim-North2.jpg"
                  alt=""
                />
              </div>
              <div className="review-content">
                <p>
                  <strong>Kim North</strong> - May 15, 2019
                </p>
                <p>
                  I firmly believe that with the right footwear one can rule the
                  world.
                </p>
              </div>
            </div>

            <div className="reviews">
              <div>
                <img
                  className="profile-pic"
                  src="./images/first-middle/Lisa-Peters2.jpg"
                  alt=""
                />
              </div>
              <div className="review-content">
                <p>
                  <strong>Lisa Peters</strong> - January 21, 2019
                </p>
                <p>
                  Craziness in a shoe is great – you can have much more freedom,
                  you can exaggerate and it doesn’t feel stupid. But to have too
                  much craziness near your face, that would just feel weird.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="social-first-footer">
          <div className="socials">
            <li>
              <a href="#" className="fa fa-facebook" />
              <a href="#" className="fa fa-twitter" />
              <a href="#" className="fa fa-instagram" />
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
