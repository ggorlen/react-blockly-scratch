import ReactDOM from "react-dom";
import React from "react";
import BlocklyScratch from "./ScratchEditor";

function App() {
  return (
    <div className="App">
      <h1>Blockly + Scratch GUI Demo</h1>
      <BlocklyScratch />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
