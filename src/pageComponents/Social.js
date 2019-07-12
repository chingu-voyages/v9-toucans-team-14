import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className="social-media-links">
      <a
        className="facebook social"
        href="https://www.facebook.com/Fendi"
        target="_blank"
        rel="noopener  noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>

      <a
        className="twitter social"
        href="https://twitter.com/Fendi"
        target="_blank"
        rel="noopener  noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>

      <a
        className="instagram social"
        href="https://www.instagram.com/Fendi/"
        target="_blank"
        rel="noopener  noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
    </div>
  );
}
