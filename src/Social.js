import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className="social-media-links">
      <a className="facebook social" href="https://www.facebook.com">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      <a className="twitter social" href="https://www.twitter.com">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>

      <a className="youtube social" href="https://www.youtube.com">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>

      <a className="linkedin social" href="https://www.linkedin.com">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a className="instagram social" href="https://www.instagram.com">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
