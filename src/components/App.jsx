import React, { useState } from "react";
import VisualSelector from "./VisualSelector";
import Table from "./Table";
import { VISUAL_OPTIONS } from "../constants";
import Donut from "./Donut";

const App = () => {
  const [option, setOption] = useState(VISUAL_OPTIONS.table);

  const getVisualization = () => {
    switch (option) {
      case VISUAL_OPTIONS.table:
        return <Table />;
      case VISUAL_OPTIONS.donut:
        return <Donut />;
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
