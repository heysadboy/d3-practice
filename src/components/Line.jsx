import React, { useEffect } from "react";
import * as d3 from "d3";

const Line = () => {
  const initialData = [
    { date: "2007-01-01", value: 100 },
    { date: "2007-02-01", value: 200 },
    { date: "2007-03-01", value: 300 },
    { date: "2007-04-01", value: 400 },
    { date: "2007-05-01", value: 500 },
    { date: "2007-06-01", value: 600 },
    { date: "2007-07-01", value: 500 },
    { date: "2007-08-01", value: 400 },
    { date: "2007-09-01", value: 300 },
    { date: "2007-10-01", value: 200 },
    { date: "2007-11-01", value: 100 },
    { date: "2007-12-01", value: 100 },
  ];

  useEffect(() => {
    let svgGraph = d3.select("#graph");
    svgGraph
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 600)
      .attr("height", 300)
      .style("fill", "#69b3a2");
  }, []);

  return <svg id="graph" width="600" height="300"></svg>;
};

export default Line;
