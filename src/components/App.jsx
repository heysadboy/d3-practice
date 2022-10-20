import React, { useState } from "react";
import VisualSelector from "./VisualSelector";
import Table from "./Table";
import { VISUAL_OPTIONS } from "../constants";

const App = () => {
  const [option, setOption] = useState(VISUAL_OPTIONS.table);

  const getVisualization = () => {
    switch (option) {
      case VISUAL_OPTIONS.table:
        return <Table />;
      default:
        return null;
    }
  };

  return (
    <>
      <VisualSelector setOption={setOption} />
      {getVisualization()}
    </>
  );
};

export default App;
