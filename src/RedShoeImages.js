import React from "react";
import redSmall1C from "../src/assets/images/redShoe/redSmall1C.jpg";
import redSmall2C from "../src/assets/images/redShoe/redSmall2C.jpg";
import redSmall3C from "../src/assets/images/redShoe/redSmall3C.jpg";
import redSmall4C from "../src/assets/images/redShoe/redSmall4C.jpg";
/* import redLarge1 from "../src/assets/images/redShoe/redLarge1.jpg";
import redLarge2 from "../src/assets/images/redShoe/redLarge2.jpg";
import redLarge3 from "../src/assets/images/redShoe/redLarge3.jpg";
import redLarge4 from "../src/assets/images/redShoe/redLarge4.jpg"; */

export default function RedShoeImages() {
  return (
    <div>
      <img src={redSmall1C} alt="shoe image" />
      <img src={redSmall2C} alt="shoe image" />
      <img src={redSmall3C} alt="shoe image" />
      <img src={redSmall4C} alt="shoe image" />
    </div>
  );
}
