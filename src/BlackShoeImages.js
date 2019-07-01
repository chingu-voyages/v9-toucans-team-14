import React from "react";
import blackSmall1 from "../src/assets/images/blackShoe/blackSmall1.jpg";
import blackSmall2 from "../src/assets/images/blackShoe/blackSmall2.jpg";
import blackSmall3 from "../src/assets/images/blackShoe/blackSmall3.jpg";
import blackSmall4 from "../src/assets/images/blackShoe/blackSmall4.jpg";
import blackSmall5 from "../src/assets/images/blackShoe/blackSmall5.jpg";

export default function BlackShoeImages() {
  return (
    <div>
      <img src={blackSmall1} alt="shoe image" />
      <img src={blackSmall2} alt="shoe image" />
      <img src={blackSmall3} alt="shoe image" />
      <img src={blackSmall4} alt="shoe image" />
      <img src={blackSmall5} alt="shoe image" />
    </div>
  );
}
