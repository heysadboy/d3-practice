import React from "react";
import { VISUAL_OPTIONS } from "../constants";

const VisualSelector = ({ setOption }) => {
  const handleVisualSelector = (e) => {
    setOption(e.target.name);
  };
  return (
    <div className="ui menu">
      <button
        className="ui button item"
        name={VISUAL_OPTIONS.table}
        onClick={handleVisualSelector}
      >
        Table
      </button>
      <button
        className="ui button item"
        name={VISUAL_OPTIONS.donut}
        onClick={handleVisualSelector}
      >
        Donut
      </button>
      <button
        className="ui button item"
        name={VISUAL_OPTIONS.line}
        onClick={handleVisualSelector}
      >
        Line
      </button>
    </div>
  );
};

export default VisualSelector;
