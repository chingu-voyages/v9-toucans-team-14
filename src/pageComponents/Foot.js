import React from "react";

import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

export class Foot extends React.Component {
  render() {
    return (
      <div className="last-foot">
        <h3 className="section-title">kalli</h3>

        <p className="copyright-text sub-title">
          Copyright @2019 Made with <span> 💗 </span> by{" "}
          <a
            href="https://github.com/chingu-voyages/v9-toucans-team-14/tree/master"
            target="_blank"
            rel="noopener  noreferrer"
          >
            Chingu-Toucans-team-14
          </a>
        </p>

        <li className="first-list lists">
          <p className="sub-title">customer care</p>
          <a
            href="https://www.fendi.com/us/info/customer-care/contact-us"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > contact us
          </a>
          <a
            href="https://www.fendi.com/us/info/customer-care/faq"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > FAQs
          </a>
          <a
            href="https://www.fendi.com/us/info/customer-care/shipping-and-delivery"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > orders and shipping
          </a>
          <a
            href="https://www.fendi.com/us/info/customer-care/returns-and-refunds"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > returns and refunds
          </a>
          <a
            href="https://www.fendi.com/us/info/customer-care/track-your-order"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > track your order
          </a>
          <a
            href="https://www.fendi.com/us/info/customer-care/return-form"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > return form
          </a>
        </li>

        <li className="second-list lists">
          <p className="sub-title">quick links</p>
          <a
            href="https://www.fendi.com/us/login"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > login / register
          </a>
          <a
            href="https://www.fendi.com/us/login"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > fendi 4 for
          </a>
          <a
            href="https://www.fendi.com/us/wishlist"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > wish list
          </a>
          <a
            href="https://www.fendi.com/us/store-locator"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > store locator
          </a>
          <a
            href="https://careers.fendi.com/"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > careers
          </a>
        </li>

        <li className="third-list lists">
          <p className="sub-title">legal area</p>
          <a
            href="https://www.fendi.com/us/info/legal-area/privacy-policy"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > privacy policy
          </a>
          <a
            href="https://www.fendi.com/us/info/legal-area/cookie-policy"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > cookie policy
          </a>
          <a
            href="https://www.fendi.com/us/info/legal-area/terms-sale"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > terms & condtitions
          </a>
          <a
            href="https://www.fendi.com/us/info/legal-area/terms-use"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > website terms of use
          </a>
          <a
            href="https://www.fendi.com/us/info/legal-area/compliance"
            target="_blank"
            rel="noopener  noreferrer"
          >
            > compliance
          </a>
        </li>

        <ScrollUpButton />
      </div>
    );
  }
}
