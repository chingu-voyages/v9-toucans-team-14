import React from "react";
import Social from "./Social";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

export class Foot extends React.Component {
  render() {
    return (
      <div className="last-foot">
        <h3 className="section-title">kalli</h3>

        <li className="social-media">
          <Social />
        </li>

        <p className="copyright-text sub-title">
          Copyright @2019 Made with <span> 💗 </span> by{" "}
          <a
            href="https://github.com/chingu-voyages/v9-toucans-team-14/tree/master"
            target="_blank"
          >
            Chingu-Toucans-team-14
          </a>
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

        <ScrollUpButton />
      </div>
    );
  }
}
