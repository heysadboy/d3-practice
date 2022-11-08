import React, { useEffect } from "react";
import * as d3 from "d3";
import "./style.css";

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

    svgGraph.selectAll("*").remove();
    svgGraph.append("rect").attr("x", 0).attr("y", 0);

    let x = d3.scaleLinear().domain([0, 500]).range([50, 550]);

    svgGraph
      .append("g")
      .attr("transform", "translate(0,250)")
      .call(d3.axisBottom(x));

    let y = d3.scaleLinear().domain([0, 200]).range([50, 220]);

    svgGraph
      .append("g")
      .attr("transform", "translate(50,30)")
      .call(d3.axisLeft(y));
  }, []);

  return <svg id="graph" className="graph"></svg>;
};

export default Line;
