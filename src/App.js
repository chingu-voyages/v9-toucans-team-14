import React from "react";
import { render } from "react-dom";

import { Top } from "./Top";
import { FirstMiddle } from "./FirstMiddle";
import { SecondMiddle } from "./SecondMiddle";
import { Foot } from "./Foot";

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'

// library.add(
//    fab,
//    faHeart,
// )

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

// render(<App />, window.document.getElementById("root"));
export default App;
