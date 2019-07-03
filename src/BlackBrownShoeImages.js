import React from "react";
import blackBrownSmall1C from "../src/assets/images/blackBrownShoe/blackBrownSmall1C.jpg";
import blackBrownSmall2C from "../src/assets/images/blackBrownShoe/blackBrownSmall2C.jpg";
import blackBrownSmall3C from "../src/assets/images/blackBrownShoe/blackBrownSmall3C.jpg";
import blackBrownSmall4C from "../src/assets/images/blackBrownShoe/blackBrownSmall4C.jpg";
import blackBrownSmall5 from "../src/assets/images/blackBrownShoe/blackBrownSmall5.jpg";
import blackBrownSmall6 from "../src/assets/images/blackBrownShoe/blackBrownSmall6.jpg";
import blackBrownLarge1C from "../src/assets/images/blackBrownShoe/blackBrownLarge1C.jpg";
import blackBrownLarge2C from "../src/assets/images/blackBrownShoe/blackBrownLarge2C.jpg";
import blackBrownLarge3C from "../src/assets/images/blackBrownShoe/blackBrownLarge3C.jpg";
import blackBrownLarge4C from "../src/assets/images/blackBrownShoe/blackBrownLarge4C.jpg";
import blackBrownLarge5 from "../src/assets/images/blackBrownShoe/blackBrownLarge5.jpg";
import blackBrownLarge6 from "../src/assets/images/blackBrownShoe/blackBrownLarge6.jpg";
// import { CenterBanner } from "./CenterBanner";

export default function BlackBrownShoeImages() {
  return (
    <div className="left-banner">
      <h3>Black Brown technical</h3>
      <h3>fabric low-tops</h3>
      <p>Running sneakers with thin</p>
      <p>elastic laces.</p>
      <div className="small-images">
        <a href={blackBrownLarge1C} target="_blank">
          <img src={blackBrownSmall1C} alt="shoe image" />
        </a>
        <a href={blackBrownLarge2C} target="_blank">
          <img src={blackBrownSmall2C} alt="shoe image" />
        </a>
        <a href={blackBrownLarge3C} target="_blank">
          <img src={blackBrownSmall3C} alt="shoe image" />
        </a>
        <a href={blackBrownLarge4C} target="_blank">
          <img src={blackBrownSmall4C} alt="shoe image" />
        </a>
        <a href={blackBrownLarge5} target="_blank">
          <img src={blackBrownSmall5} alt="shoe image" />
        </a>
        <a href={blackBrownLarge6} target="_blank">
          <img src={blackBrownSmall6} alt="shoe image" />
        </a>
        {/* <img src={blackBrownSmall1C} alt="shoe image" />
      <img src={blackBrownSmall2C} alt="shoe image" />
      <img src={blackBrownSmall3C} alt="shoe image" />
      <img src={blackBrownSmall4C} alt="shoe image" />
      <img src={blackBrownSmall5} alt="shoe image" />
      <img src={blackBrownSmall6} alt="shoe image" /> */}
      </div>
    </div>
  );
}
