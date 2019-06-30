import React from "react";
import shoe1small from "../src/assets/images/blackShoe/shoe1small.jpg";
import shoe2small from "../src/assets/images/blackShoe/shoe2small.jpg";
import shoe3small from "../src/assets/images/blackShoe/shoe3small.jpg";
import shoe4small from "../src/assets/images/blackShoe/shoe4small.jpg";
import shoe5small from "../src/assets/images/blackShoe/shoe5small.jpg";

export default function BlackShoeImages() {
  return (
    <div>
      <img src={shoe1small} alt="shoe image" />
      <img src={shoe2small} alt="shoe image" />
      <img src={shoe3small} alt="shoe image" />
      <img src={shoe4small} alt="shoe image" />
      <img src={shoe5small} alt="shoe image" />
    </div>
  );
}
