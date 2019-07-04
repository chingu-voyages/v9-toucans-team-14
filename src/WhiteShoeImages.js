import React from "react";
import whiteSmall1C from "../src/assets/images/whiteShoe/whiteSmall1C.jpg";
import whiteSmall2C from "../src/assets/images/whiteShoe/whiteSmall2C.jpg";
import whiteSmall3C from "../src/assets/images/whiteShoe/whiteSmall3C.jpg";
import whiteSmall4C from "../src/assets/images/whiteShoe/whiteSmall4C.jpg";
import whiteLarge1C from "../src/assets/images/whiteShoe/whiteLarge1C.jpg";
import whiteLarge2C from "../src/assets/images/whiteShoe/whiteLarge2C.jpg";
import whiteLarge3C from "../src/assets/images/whiteShoe/whiteLarge3C.jpg";
import whiteLarge4C from "../src/assets/images/whiteShoe/whiteLarge4C.jpg";

// import { CenterBanner } from "./CenterBanner";

export default function WhiteShoeImages() {
  return (
    <div className="left-banner">
      <h3>White technical</h3>
      <h3>knit fabric high-tops</h3>
      <p>Running sneakers with thin</p>
      <p>elastic laces.</p>
      <div className="small-images">
        <a href={whiteLarge1C} target="_blank">
          <img src={whiteSmall1C} alt="shoe image" />
        </a>
        <a href={whiteLarge2C} target="_blank">
          <img src={whiteSmall2C} alt="shoe image" />
        </a>
        <a href={whiteLarge3C} target="_blank">
          <img src={whiteSmall3C} alt="shoe image" />
        </a>
        <a href={whiteLarge4C} target="_blank">
          <img src={whiteSmall4C} alt="shoe image" />
        </a>
        {/* <img src={whiteSmall1C} alt="shoe image" />
      <img src={whiteSmall2C} alt="shoe image" />
      <img src={whiteSmall3C} alt="shoe image" />
      <img src={whiteSmall4C} alt="shoe image" /> */}
      </div>
    </div>
  );
}
