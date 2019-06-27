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
          <p className="sub-title">customer care</p>
          <a
            href="https://www.fendi.com/us/info/customer-care/contact-us"
            target="_blank"
          >
            > contact us
          </a>
          <a
            href="https://www.fendi.com/us/info/customer-care/faq"
            target="_blank"
          >
            > FAQs
          </a>
          <a
            href="https://www.fendi.com/us/info/customer-care/shipping-and-delivery"
            target="_blank"
          >
            > orders and shipping
          </a>
          <a
            href="https://www.fendi.com/us/info/customer-care/returns-and-refunds"
            target="_blank"
          >
            > returns and refunds
          </a>
          <a
            href="https://www.fendi.com/us/info/customer-care/track-your-order"
            target="_blank"
          >
            > track your order
          </a>
          <a
            href="https://www.fendi.com/us/info/customer-care/return-form"
            target="_blank"
          >
            > return form
          </a>
        </li>

        <li className="second-list lists">
          <p className="sub-title">quick links</p>
          <a href="https://www.fendi.com/us/login" target="_blank">
            > login / register
          </a>
          <a href="https://www.fendi.com/us/login" target="_blank">
            > fendi 4 for
          </a>
          <a href="https://www.fendi.com/us/wishlist" target="_blank">
            > wish list
          </a>
          <a href="https://www.fendi.com/us/store-locator" target="_blank">
            > store locator
          </a>
          <a href="https://careers.fendi.com/" target="_blank">
            > careers
          </a>
        </li>

        <li className="third-list lists">
          <p className="sub-title">legal area</p>
          <a
            href="https://www.fendi.com/us/info/legal-area/privacy-policy"
            target="_blank"
          >
            > privacy policy
          </a>
          <a
            href="https://www.fendi.com/us/info/legal-area/cookie-policy"
            target="_blank"
          >
            > cookie policy
          </a>
          <a
            href="https://www.fendi.com/us/info/legal-area/terms-sale"
            target="_blank"
          >
            > terms & condtitions
          </a>
          <a
            href="https://www.fendi.com/us/info/legal-area/terms-use"
            target="_blank"
          >
            > website terms of use
          </a>
          <a
            href="https://www.fendi.com/us/info/legal-area/compliance"
            target="_blank"
          >
            > compliance
          </a>
        </li>

        <ScrollUpButton />
      </div>
    );
  }
}
