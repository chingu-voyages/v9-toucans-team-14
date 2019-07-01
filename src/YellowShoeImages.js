import React from "react";
import yellowSmall1 from "../src/assets/images/yellowShoe/yellowSmall1.jpg";
import yellowSmall2 from "../src/assets/images/yellowShoe/yellowSmall2.jpg";
import yellowSmall3 from "../src/assets/images/yellowShoe/yellowSmall3.jpg";
import yellowSmall4 from "../src/assets/images/yellowShoe/yellowSmall4.jpg";
import yellowSmall5 from "../src/assets/images/yellowShoe/yellowSmall5.jpg";

export default function YellowShoeImages() {
  return (
    <div>
      <img src={yellowSmall1} alt="shoe image" />
      <img src={yellowSmall2} alt="shoe image" />
      <img src={yellowSmall3} alt="shoe image" />
      <img src={yellowSmall4} alt="shoe image" />
      <img src={yellowSmall5} alt="shoe image" />
    </div>
  );
}
