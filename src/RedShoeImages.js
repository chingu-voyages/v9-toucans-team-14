import React from "react";
import redSmall1 from "../src/assets/images/redShoe/redSmall1.jpg";
import redSmall2 from "../src/assets/images/redShoe/redSmall2.jpg";
import redSmall3 from "../src/assets/images/redShoe/redSmall3.jpg";
import redSmall4 from "../src/assets/images/redShoe/redSmall4.jpg";
import redLarge1 from "../src/assets/images/redShoe/redLarge1.jpg";
import redLarge2 from "../src/assets/images/redShoe/redLarge2.jpg";
import redLarge3 from "../src/assets/images/redShoe/redLarge3.jpg";
import redLarge4 from "../src/assets/images/redShoe/redLarge4.jpg";

export default function RedShoeImages() {
  return (
    <div>
      <img src={redSmall1} alt="shoe image" />
      <img src={redSmall2} alt="shoe image" />
      <img src={redSmall3} alt="shoe image" />
      <img src={redSmall4} alt="shoe image" />
    </div>
  );
}
