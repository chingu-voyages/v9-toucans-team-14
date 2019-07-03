import React from "react";
import whiteBrownSmall1C from "../src/assets/images/whiteBrownShoe/whiteBrownSmall1C.jpg";
import whiteBrownSmall2C from "../src/assets/images/whiteBrownShoe/whiteBrownSmall2C.jpg";
import whiteBrownSmall3C from "../src/assets/images/whiteBrownShoe/whiteBrownSmall3C.jpg";
import whiteBrownSmall4C from "../src/assets/images/whiteBrownShoe/whiteBrownSmall4C.jpg";
import whiteBrownSmall5 from "../src/assets/images/whiteBrownShoe/whiteBrownSmall5.jpg";
import whiteBrownLarge1C from "../src/assets/images/whiteBrownShoe/whiteBrownLarge1C.jpg";
import whiteBrownLarge2C from "../src/assets/images/whiteBrownShoe/whiteBrownLarge2C.jpg";
import whiteBrownLarge3C from "../src/assets/images/whiteBrownShoe/whiteBrownLarge3C.jpg";
import whiteBrownLarge4C from "../src/assets/images/whiteBrownShoe/whiteBrownLarge4C.jpg";
import whiteBrownLarge5 from "../src/assets/images/whiteBrownShoe/whiteBrownLarge5.jpg";

// import { CenterBanner } from "./CenterBanner";

export default function WhiteBrownShoeImages() {
  return (
    <div className="left-banner">
      <h3>White Brown technical</h3>
      <h3>fabric low-tops</h3>
      <p>Running sneakers with thin</p>
      <p>elastic laces.</p>
      <div className="small-images">
        <a href={whiteBrownLarge1C} target="_blank">
          <img src={whiteBrownSmall1C} alt="shoe image" />
        </a>
        <a href={whiteBrownLarge2C} target="_blank">
          <img src={whiteBrownSmall2C} alt="shoe image" />
        </a>
        <a href={whiteBrownLarge3C} target="_blank">
          <img src={whiteBrownSmall3C} alt="shoe image" />
        </a>
        <a href={whiteBrownLarge4C} target="_blank">
          <img src={whiteBrownSmall4C} alt="shoe image" />
        </a>
        <a href={whiteBrownLarge5} target="_blank">
          <img src={whiteBrownSmall5} alt="shoe image" />
        </a>
        {/* <img src={whiteBrownSmall1C} alt="shoe image" />
      <img src={whiteBrownSmall2C} alt="shoe image" />
      <img src={whiteBrownSmall3C} alt="shoe image" />
      <img src={whiteBrownSmall4C} alt="shoe image" />
      <img src={whiteBrownSmall5} alt="shoe image" /> */}
      </div>
    </div>
  );
}
