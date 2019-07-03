import React from "react";
import blackSmall1 from "../src/assets/images/blackShoe/blackSmall1.jpg";
import blackSmall2 from "../src/assets/images/blackShoe/blackSmall2.jpg";
import blackSmall3 from "../src/assets/images/blackShoe/blackSmall3.jpg";
import blackSmall4 from "../src/assets/images/blackShoe/blackSmall4.jpg";
import blackSmall5 from "../src/assets/images/blackShoe/blackSmall5.jpg";
import blackLarge1C from "../src/assets/images/blackShoe/blackLarge1C.jpg";
import blackLarge2C from "../src/assets/images/blackShoe/blackLarge2C.jpg";
import blackLarge3C from "../src/assets/images/blackShoe/blackLarge3C.jpg";
import blackLarge4C from "../src/assets/images/blackShoe/blackLarge4C.jpg";
import blackLarge5 from "../src/assets/images/blackShoe/blackLarge5.jpg";
// import { CenterBanner } from "./CenterBanner";

export default function BlackShoeImages() {
  return (
    <div className="left-banner">
      <h3>Black technical</h3>
      <h3>knit fabric high-tops</h3>
      <p>Running sneakers with thin</p>
      <p>elastic laces.</p>
      <div className="small-images">
        <a href={blackLarge1C} target="_blank">
          <img src={blackSmall1} alt="shoe image" />
        </a>
        <a href={blackLarge2C} target="_blank">
          <img src={blackSmall2} alt="shoe image" />
        </a>
        <a href={blackLarge3C} target="_blank">
          <img src={blackSmall3} alt="shoe image" />
        </a>
        <a href={blackLarge4C} target="_blank">
          <img src={blackSmall4} alt="shoe image" />
        </a>
        <a href={blackLarge5} target="_blank">
          <img src={blackSmall5} alt="shoe image" />
        </a>
        {/* <img src={blackSmall1} alt="shoe image" />
      <img src={blackSmall2} alt="shoe image" />
      <img src={blackSmall3} alt="shoe image" />
      <img src={blackSmall4} alt="shoe image" />
      <img src={blackSmall5} alt="shoe image" /> */}
      </div>
    </div>
  );
}
