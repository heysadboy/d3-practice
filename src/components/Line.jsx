import React, { useEffect } from "react";
import * as d3 from "d3";
import "./style.css";

const Line = () => {
  useEffect(() => {
    const data = [
      { x: 0, y: 0 },
      { x: 100, y: 50 },
      { x: 200, y: 150 },
      { x: 300, y: 150 },
      { x: 400, y: 180 },
      { x: 500, y: 200 },
    ];

    let svgGraph = d3.select("#graph");

    svgGraph.selectAll("*").remove();
    svgGraph.append("rect").attr("x", 0).attr("y", 0);

    let x = d3.scaleLinear().domain([0, 500]).range([50, 550]);

    svgGraph
      .append("g")
      .attr("transform", "translate(0,250)")
      .call(d3.axisBottom(x));

    let y = d3.scaleLinear().domain([200, 0]).range([50, 220]);

    svgGraph
      .append("g")
      .attr("transform", "translate(50,30)")
      .call(d3.axisLeft(y));

    svgGraph
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("transform", "translate(0,30)")
      .attr(
        "d",
        d3
          .line()
          .x((d) => x(d.x))
          .y((d) => y(d.y))
      );
  }, []);

  return <svg id="graph" className="graph"></svg>;
};

export default Line;
