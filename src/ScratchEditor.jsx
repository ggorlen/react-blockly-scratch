import React, { useRef, useEffect } from "react";
import * as Blockly from "blockly";
import GUI, { AppStateHOC } from "scratch-gui";

const BlocklyScratch = () => {
  const blocklyDiv = useRef(null);
  const workspace = useRef(null);

  useEffect(() => {
    if (blocklyDiv.current && !workspace.current) {
      workspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: `
          <xml>
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="math_number"></block>
          </xml>
        `,
      });
    }

    return () => {
      if (workspace.current) {
        workspace.current.dispose();
      }
    };
  }, []);

  const WrappedGUI = AppStateHOC(GUI);

  const mockAppState = {
    isFullScreen: false,
  };

  return (
    <div>
      <div
        id="blockly-container"
        ref={blocklyDiv}
        style={{ height: "400px", width: "400px", border: "1px solid #000" }}
      ></div>
      <div
        id="scratch-gui-container"
        style={{
          marginTop: "20px",
          height: "400px",
          width: "400px",
          border: "1px solid #000",
        }}
      >
        <WrappedGUI appState={mockAppState} />
      </div>
    </div>
  );
};

export default BlocklyScratch;
