import blackSmall1 from "../assets/images/blackShoe/blackSmall1.jpg";
import blackSmall2 from "../assets/images/blackShoe/blackSmall2.jpg";
import blackSmall3 from "../assets/images/blackShoe/blackSmall3.jpg";
import blackSmall4 from "../assets/images/blackShoe/blackSmall4.jpg";
import blackSmall5 from "../assets/images/blackShoe/blackSmall5.jpg";
import blackLarge1C from "../assets/images/blackShoe/blackLarge1C.jpg";
import blackLarge2C from "../assets/images/blackShoe/blackLarge2C.jpg";
import blackLarge3C from "../assets/images/blackShoe/blackLarge3C.jpg";
import blackLarge4C from "../assets/images/blackShoe/blackLarge4C.jpg";
import blackLarge5 from "../assets/images/blackShoe/blackLarge5.jpg";

import whiteSmall1C from "../assets/images/whiteShoe/whiteSmall1C.jpg";
import whiteSmall2C from "../assets/images/whiteShoe/whiteSmall2C.jpg";
import whiteSmall3C from "../assets/images/whiteShoe/whiteSmall3C.jpg";
import whiteSmall4C from "../assets/images/whiteShoe/whiteSmall4C.jpg";
import whiteLarge1C from "../assets/images/whiteShoe/whiteLarge1C.jpg";
import whiteLarge2C from "../assets/images/whiteShoe/whiteLarge2C.jpg";
import whiteLarge3C from "../assets/images/whiteShoe/whiteLarge3C.jpg";
import whiteLarge4C from "../assets/images/whiteShoe/whiteLarge4C.jpg";

import redSmall1C from "../assets/images/redShoe/redSmall1C.jpg";
import redSmall2C from "../assets/images/redShoe/redSmall2C.jpg";
import redSmall3C from "../assets/images/redShoe/redSmall3C.jpg";
import redSmall4C from "../assets/images/redShoe/redSmall4C.jpg";
import redLarge1C from "../assets/images/redShoe/redLarge1C.jpg";
import redLarge2C from "../assets/images/redShoe/redLarge2C.jpg";
import redLarge3C from "../assets/images/redShoe/redLarge3C.jpg";
import redLarge4C from "../assets/images/redShoe/redLarge4C.jpg";

import blackBrownSmall1C from "../assets/images/blackBrownShoe/blackBrownSmall1C.jpg";
import blackBrownSmall2C from "../assets/images/blackBrownShoe/blackBrownSmall2C.jpg";
import blackBrownSmall3C from "../assets/images/blackBrownShoe/blackBrownSmall3C.jpg";
import blackBrownSmall4C from "../assets/images/blackBrownShoe/blackBrownSmall4C.jpg";
import blackBrownSmall5 from "../assets/images/blackBrownShoe/blackBrownSmall5.jpg";
import blackBrownSmall6 from "../assets/images/blackBrownShoe/blackBrownSmall6.jpg";
import blackBrownLarge1C from "../assets/images/blackBrownShoe/blackBrownLarge1C.jpg";
import blackBrownLarge2C from "../assets/images/blackBrownShoe/blackBrownLarge2C.jpg";
import blackBrownLarge3C from "../assets/images/blackBrownShoe/blackBrownLarge3C.jpg";
import blackBrownLarge4C from "../assets/images/blackBrownShoe/blackBrownLarge4C.jpg";
import blackBrownLarge5 from "../assets/images/blackBrownShoe/blackBrownLarge5.jpg";
import blackBrownLarge6 from "../assets/images/blackBrownShoe/blackBrownLarge6.jpg";

import whiteBrownSmall1C from "../assets/images/whiteBrownShoe/whiteBrownSmall1C.jpg";
import whiteBrownSmall2C from "../assets/images/whiteBrownShoe/whiteBrownSmall2C.jpg";
import whiteBrownSmall3C from "../assets/images/whiteBrownShoe/whiteBrownSmall3C.jpg";
import whiteBrownSmall4C from "../assets/images/whiteBrownShoe/whiteBrownSmall4C.jpg";
import whiteBrownSmall5 from "../assets/images/whiteBrownShoe/whiteBrownSmall5.jpg";
import whiteBrownLarge1C from "../assets/images/whiteBrownShoe/whiteBrownLarge1C.jpg";
import whiteBrownLarge2C from "../assets/images/whiteBrownShoe/whiteBrownLarge2C.jpg";
import whiteBrownLarge3C from "../assets/images/whiteBrownShoe/whiteBrownLarge3C.jpg";
import whiteBrownLarge4C from "../assets/images/whiteBrownShoe/whiteBrownLarge4C.jpg";
import whiteBrownLarge5 from "../assets/images/whiteBrownShoe/whiteBrownLarge5.jpg";

const shoeData = [
  {
    category: { code: 1, name: "Fendi - High tops" },
    titleText: "Black technical knit fabric high-tops",
    introText: "Running sneakers with thin elastic laces",
    color: { code: 1, name: "Black", colors: "#000000" },
    price: "$780",
    previewImages: [
      { url: blackSmall1, altText: "alt text 1" },
      { url: blackSmall2, altText: "alt text 2" },
      { url: blackSmall3, altText: "alt text 3" },
      { url: blackSmall4, altText: "alt text 4" },
      { url: blackSmall5, altText: "alt text 5" }
    ],
    images: [
      { url: blackLarge1C, altText: "alt text 1" },
      { url: blackLarge2C, altText: "alt text 2" },
      { url: blackLarge3C, altText: "alt text 3" },
      { url: blackLarge4C, altText: "alt text 4" },
      { url: blackLarge5, altText: "alt text 5" }
    ]
  },

  {
    category: { code: 1, name: "Fendi - High tops" },
    titleText: "White technical knit fabric high-tops",
    introText: "Running sneakers with thin elastic laces",
    color: { code: 1, name: "White", colors: "#FFFFFF" },
    price: "$750",
    previewImages: [
      { url: whiteSmall1C, altText: "alt text 1" },
      { url: whiteSmall2C, altText: "alt text 2" },
      { url: whiteSmall3C, altText: "alt text 3" },
      { url: whiteSmall4C, altText: "alt text 4" }
    ],
    images: [
      { url: whiteLarge1C, altText: "alt text 1" },
      { url: whiteLarge2C, altText: "alt text 2" },
      { url: whiteLarge3C, altText: "alt text 3" },
      { url: whiteLarge4C, altText: "alt text 4" }
    ]
  },

  {
    category: { code: 2, name: "Fendi - Low tops" },
    titleText: "Red technical knit fabric low-tops",
    introText: "Running sneakers with thin elastic laces",
    color: { code: 2, name: "Red", colors: "#FF0000" },
    price: "$690",
    previewImages: [
      { url: redSmall1C, altText: "alt text 1" },
      { url: redSmall2C, altText: "alt text 2" },
      { url: redSmall3C, altText: "alt text 3" },
      { url: redSmall4C, altText: "alt text 4" }
    ],
    images: [
      { url: redLarge1C, altText: "alt text 1" },
      { url: redLarge2C, altText: "alt text 2" },
      { url: redLarge3C, altText: "alt text 3" },
      { url: redLarge4C, altText: "alt text 4" }
    ]
  },

  {
    category: { code: 2, name: "Fendi - Low tops" },
    titleText: "Black technical knit fabric low-tops",
    introText: "Running sneakers with thin elastic laces",
    color: { code: 2, name: "BlackBrown", colors: "#A52A2A" },
    price: "$700",
    previewImages: [
      { url: blackBrownSmall1C, altText: "alt text 1" },
      { url: blackBrownSmall2C, altText: "alt text 2" },
      { url: blackBrownSmall3C, altText: "alt text 3" },
      { url: blackBrownSmall4C, altText: "alt text 4" },
      { url: blackBrownSmall5, altText: "alt text 5" },
      { url: blackBrownSmall6, altText: "alt text 6" }
    ],
    images: [
      { url: blackBrownLarge1C, altText: "alt text 1" },
      { url: blackBrownLarge2C, altText: "alt text 2" },
      { url: blackBrownLarge3C, altText: "alt text 3" },
      { url: blackBrownLarge4C, altText: "alt text 4" },
      { url: blackBrownLarge5, altText: "alt text 5" },
      { url: blackBrownLarge6, altText: "alt text 6" }
    ]
  },

  {
    category: { code: 2, name: "Fendi - Low tops" },
    titleText: "White technical knit fabric low-tops",
    introText: "Running sneakers with thin elastic laces",
    color: { code: 2, name: "WhiteBrown", colors: "#A52A2A" },
    price: "$760",
    previewImages: [
      { url: whiteBrownSmall1C, altText: "alt text 1" },
      { url: whiteBrownSmall2C, altText: "alt text 2" },
      { url: whiteBrownSmall3C, altText: "alt text 3" },
      { url: whiteBrownSmall4C, altText: "alt text 4" },
      { url: whiteBrownSmall5, altText: "alt text 5" }
    ],
    images: [
      { url: whiteBrownLarge1C, altText: "alt text 1" },
      { url: whiteBrownLarge2C, altText: "alt text 2" },
      { url: whiteBrownLarge3C, altText: "alt text 3" },
      { url: whiteBrownLarge4C, altText: "alt text 4" },
      { url: whiteBrownLarge5, altText: "alt text 5" }
    ]
  }
];

export { shoeData as ShoeData };
