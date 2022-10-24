import React from "react";
import * as d3 from "d3";
import "../style.css";

const Donut = () => {
  const arcPathGenerator = d3
    .arc()
    .innerRadius(300)
    .outerRadius(340)
    .startAngle(0)
    .endAngle(5.5)
    .padAngle(0)
    .cornerRadius(20);

  const arcPath = arcPathGenerator();

  return (
    <svg width="800" height="800">
      <path fill="cornflowerblue" d={arcPath} className="donutPath" />
    </svg>
  );
};

export default Donut;
