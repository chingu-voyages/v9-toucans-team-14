import React from "react";
import "./App.css";

export class Foot extends React.Component {
  render() {
    return (
      <div className="last-foot">
        <h3 className="section-title">kalli</h3>
        <p className="copyright-text sub-title">Copyright</p>
        <li className="first-list lists">
          <p className="sub-title">Category</p>
          <a href="https://chingu.io" target="_blank">
            One
          </a>
          <a href="https://chingu.io" target="_blank">
            Two
          </a>
          <a href="https://chingu.io" target="_blank">
            Three
          </a>
          <a href="https://chingu.io" target="_blank">
            Four
          </a>
          <a href="https://chingu.io" target="_blank">
            Five
          </a>
        </li>

        <li className="second-list lists">
          <p className="sub-title">Something</p>
          <a href="https://chingu.io" target="_blank">
            One
          </a>
          <a href="https://chingu.io" target="_blank">
            Two
          </a>
          <a href="https://chingu.io" target="_blank">
            Three
          </a>
          <a href="https://chingu.io" target="_blank">
            Four
          </a>
          <a href="https://chingu.io" target="_blank">
            Five
          </a>
        </li>

        <li className="third-list lists">
          <p className="sub-title">Feature</p>
          <a href="https://chingu.io" target="_blank">
            One
          </a>
          <a href="https://chingu.io" target="_blank">
            Two
          </a>
          <a href="https://chingu.io" target="_blank">
            Three
          </a>
          <a href="https://chingu.io" target="_blank">
            Four
          </a>
        </li>
      </div>
    );
  }
}
