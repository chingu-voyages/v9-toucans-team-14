import React from "react";
import redSmall1C from "../src/assets/images/redShoe/redSmall1C.jpg";
import redSmall2C from "../src/assets/images/redShoe/redSmall2C.jpg";
import redSmall3C from "../src/assets/images/redShoe/redSmall3C.jpg";
import redSmall4C from "../src/assets/images/redShoe/redSmall4C.jpg";
import redLarge1C from "../src/assets/images/redShoe/redLarge1C.jpg";
import redLarge2C from "../src/assets/images/redShoe/redLarge2C.jpg";
import redLarge3C from "../src/assets/images/redShoe/redLarge3C.jpg";
import redLarge4C from "../src/assets/images/redShoe/redLarge4C.jpg";

// import { CenterBanner } from "./CenterBanner";

export default function RedShoeImages() {
  return (
    <div className="left-banner">
      <h3>Red technical</h3>
      <h3>fabric low-tops</h3>
      <p>Running sneakers with thin</p>
      <p>elastic laces.</p>
      <div className="small-images">
        <a href={redLarge1C} target="_blank">
          <img src={redSmall1C} alt="shoe image" />
        </a>
        <a href={redLarge2C} target="_blank">
          <img src={redSmall2C} alt="shoe image" />
        </a>
        <a href={redLarge3C} target="_blank">
          <img src={redSmall3C} alt="shoe image" />
        </a>
        <a href={redLarge4C} target="_blank">
          <img src={redSmall4C} alt="shoe image" />
        </a>
        {/*<img src={redSmall1C} alt="shoe image" />
      <img src={redSmall2C} alt="shoe image" />
      <img src={redSmall3C} alt="shoe image" />
      <img src={redSmall4C} alt="shoe image" />*/}
      </div>
    </div>
  );
}
