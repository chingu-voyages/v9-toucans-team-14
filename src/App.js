import React from "react";
import { render } from "react-dom";

import { Top } from "./Top";
import { FirstMiddle } from "./FirstMiddle";
import { SecondMiddle } from "./SecondMiddle";
import { Foot } from "./Foot";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLongArrowAltLeft, faLongArrowAltRight, faCircle, faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'


library.add(
   fab,
   faLongArrowAltLeft,
   faLongArrowAltRight,
   faCircle,
   fasStar,
   farStar,
)

export class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1>Kalli</h1>

        <div>
          <Top />
        </div>

        <div>
          <FirstMiddle />
        </div>

        <div>
          <SecondMiddle />
        </div>

        <div>
          <Foot />
        </div>
      </div>
    );
  }
}

export default App;
