import React from "react";
import "./App.css";

export class Foot extends React.Component {
  render() {
    return (
      <div className="last-foot">
        <h3 className="section-title">kalli</h3>
        <p className="copyright-text sub-title">
          Copyright @2019 Made with <span> 💗 </span> by Chingu-Toucans-team-14
        </p>
        <li className="first-list lists">
          <p className="sub-title">quick-links</p>
          <a href="https://chingu.io" target="_blank">
            my account
          </a>
          <a href="https://chingu.io" target="_blank">
            order history
          </a>
          <a href="https://chingu.io" target="_blank">
            my wishlist
          </a>
          <a href="https://chingu.io" target="_blank">
            order tracking
          </a>
          <a href="https://chingu.io" target="_blank">
            gift vouchers
          </a>
          <a href="https://chingu.io" target="_blank">
            checkout
          </a>
        </li>

        <li className="second-list lists">
          <p className="sub-title">style advisor</p>
          <a href="https://chingu.io" target="_blank">
            your account
          </a>
          <a href="https://chingu.io" target="_blank">
            additional information
          </a>
          <a href="https://chingu.io" target="_blank">
            discount
          </a>
          <a href="https://chingu.io" target="_blank">
            orders history
          </a>
          <a href="https://chingu.io" target="_blank">
            addresses
          </a>
          <a href="https://chingu.io" target="_blank">
            shipping informations
          </a>
        </li>

        <li className="third-list lists">
          <p className="sub-title">information</p>
          <a href="https://chingu.io" target="_blank">
            about us
          </a>
          <a href="https://chingu.io" target="_blank">
            delivery information
          </a>
          <a href="https://chingu.io" target="_blank">
            terms & condtitions
          </a>
          <a href="https://chingu.io" target="_blank">
            privacy policy
          </a>
          <a href="https://chingu.io" target="_blank">
            contact us
          </a>
          <a href="https://chingu.io" target="_blank">
            return policy
          </a>
        </li>
      </div>
    );
  }
}
