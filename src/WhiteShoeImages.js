import React from "react";
import whiteSmall1C from "../src/assets/images/whiteShoe/whiteSmall1C.jpg";
import whiteSmall2C from "../src/assets/images/whiteShoe/whiteSmall2C.jpg";
import whiteSmall3C from "../src/assets/images/whiteShoe/whiteSmall3C.jpg";
import whiteSmall4C from "../src/assets/images/whiteShoe/whiteSmall4C.jpg";
/* import whiteLarge1 from "../src/assets/images/whiteShoe/whiteLarge1.jpg";
import whiteLarge2 from "../src/assets/images/whiteShoe/whiteLarge2.jpg";
import whiteLarge3 from "../src/assets/images/whiteShoe/whiteLarge3.jpg";
import whiteLarge4 from "../src/assets/images/whiteShoe/whiteLarge4.jpg"; */

export default function WhiteShoeImages() {
  return (
    <div>
      <img src={whiteSmall1C} alt="shoe image" />
      <img src={whiteSmall2C} alt="shoe image" />
      <img src={whiteSmall3C} alt="shoe image" />
      <img src={whiteSmall4C} alt="shoe image" />
    </div>
  );
}
