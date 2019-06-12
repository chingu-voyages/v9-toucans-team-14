import React from "react";
import { render } from "react-dom";

import { Top } from "./Top";
import { FirstMiddle } from "./FirstMiddle";
import { SecondMiddle } from "./SecondMiddle";
import { Foot } from "./Foot";

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
