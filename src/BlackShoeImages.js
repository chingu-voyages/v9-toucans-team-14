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
import { CenterBanner } from "./CenterBanner";

export default function BlackShoeImages() {
  return (
    <div>
      <a href={blackLarge1C} target={CenterBanner}>
        <img src={blackSmall1} alt="shoe image" />
      </a>
      {/* <img src={blackSmall1} alt="shoe image" /> */}
      <img src={blackSmall2} alt="shoe image" />
      <img src={blackSmall3} alt="shoe image" />
      <img src={blackSmall4} alt="shoe image" />
      <img src={blackSmall5} alt="shoe image" />
    </div>
  );
}
