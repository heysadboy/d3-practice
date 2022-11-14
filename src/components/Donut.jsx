import React from "react";
import * as d3 from "d3";
import "../style.css";

const Donut = () => {
  const arcPathGenerator = (start, end) => {
    return d3
      .arc()
      .innerRadius(100)
      .outerRadius(140)
      .startAngle(start * 2)
      .endAngle(end * 2);
  };

  const arcPath1 = arcPathGenerator(0 * Math.PI, 0.25 * Math.PI)();
  const arcPath2 = arcPathGenerator(0.25 * Math.PI, 0.85 * Math.PI)();
  const arcPath3 = arcPathGenerator(0.85 * Math.PI, 1 * Math.PI)();

  return (
    <svg width="800" height="800">
      <path fill="blue" d={arcPath1} className="donutPath" />
      <path fill="red" d={arcPath2} className="donutPath" />
      <path fill="yellow" d={arcPath3} className="donutPath" />
    </svg>
  );
};

export default Donut;
