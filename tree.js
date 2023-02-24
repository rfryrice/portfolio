import * as d3 from 'd3'
import { text } from 'd3';
// Modified
// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/icicle
function Icicle(data, { // data is either tabular (array of objects) or hierarchy (nested objects)
    path, // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
    id = Array.isArray(data) ? d => d.id : null, // if tabular data, given a d in data, returns a unique identifier (string)
    parentId = Array.isArray(data) ? d => d.parentId : null, // if tabular data, given a node d, returns its parent’s identifier
    children, // if hierarchical data, given a d in data, returns its children
    format = ",", // format specifier string or function for values
    value, // given a node d, returns a quantitative value (for area encoding; null for count)
    sort = (a, b) => d3.descending(a.value, b.value), // how to sort nodes prior to layout
    label, // given a node d, returns the name to display on the rectangle
    title, // given a node d, returns its hover text
    link, // given a node d, its link (if any)
    linkTarget = "_blank", // the target attribute for links (if any)
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    margin = 0, // shorthand for margins
    marginTop = margin, // top margin, in pixels
    marginRight = margin, // right margin, in pixels
    marginBottom = margin, // bottom margin, in pixels
    marginLeft = margin, // left margin, in pixels
    padding = 0, // cell padding, in pixels
    round = false, // whether to round to exact pixels
    color = d3.interpolateRainbow, // color scheme, if any
    fill = "#ccc", // fill for node rects (if no color encoding)
    fillOpacity = 0.6, // fill opacity for node rects
  } = {}) {
  
    // We assume that the data is specified as an object {children}
    // with nested objects (a.k.a. the “flare.json”
    // format), and use d3.hierarchy.
    const root = d3.hierarchy(data, children);
  
    // Compute the values of internal nodes by aggregating from the leaves.
    value == null ? root.count() : root.sum(d => Math.max(0, value(d)));
  
    // Compute formats.
    if (typeof format !== "function") format = d3.format(format);
  
    // Sort the leaves (typically by descending value for a pleasing layout).
    if (sort != null) root.sort(sort);

    if (width <= 500) {
      height = width * (8/7);
    } else if (width <= 800) {
      height = width * (7/8);
    }
  
    // Compute the partition layout. Note that x and y are swapped!
    d3.partition()
        .size([height - marginTop - marginBottom, (root.height + 1) * width / 3])
        .round(round)
      (root);
  
    // Construct a color scale.
    if (color != null) {
      color = d3.scaleSequential([0, root.children.length - 1], color).unknown(fill);
      root.children.forEach((child, i) => child.index = i);
    }
  
    const svg = d3.create("svg")
      .classed("svg-content-responsive", true)
        .attr("viewBox", [-marginLeft, -marginTop, width, height])
        .attr("width", width)
        .attr("height", height)
        .attr("style", "max-width: 100%; height: auto;")
        .attr("font-family", "sans-serif")
        .attr("font-size", 16);
  
    const cell = svg
      .selectAll("g")
      .data(root.descendants())
      .join("g")
        .attr("transform", d => `translate(${d.y0},${d.x0})`);
  
    const rect = cell.append("rect")
        .attr("width", d => d.y1 - d.y0 - 1)
        .attr("height", d => rectHeight(d))
        .attr("fill", color ? d => color(d.ancestors().reverse()[1]?.index) : fill)
        .attr("fill-opacity", fillOpacity)
          .style("cursor", "pointer")
          .on("click", clicked);
  
    const text = cell.append("text")
        .style("user-select", "none")
        .attr("pointer-events", "none")
        .attr("x", 4)
        .attr("y", d => Math.min(10, (d.x1 - d.x0) / 2))
        .attr("dy", "0.52em")
        .attr("fill-opacity", d => +labelVisible(d));
  
    if (label != null) text.append("tspan")
        .text(d => label(d.data, d));
  
    const tspan = text.append("tspan")
        .attr("fill-opacity", d => +labelVisible(d))
        .attr("dx", label == null ? null : 3)
        .text(d => format(d.value));
  
    if (title != null) cell.append("title")
      .text(d => title(d.data, d));

    function clicked(event, p) {
      focus = focus === p ? p = p.parent : p;
    
      root.each(d => d.target = {
        x0: (d.x0 - p.x0) / (p.x1 - p.x0) * height,
        x1: (d.x1 - p.x0) / (p.x1 - p.x0) * height,
        y0: d.y0 - p.y0,
        y1: d.y1 - p.y0
      });
    
      const t = cell.transition().duration(750)
          .attr("transform", d => `translate(${d.target.y0},${d.target.x0})`);
    
      rect.transition(t).attr("height", d => rectHeight(d.target));
      text.transition(t).attr("fill-opacity", d => +labelVisible(d.target));
      tspan.transition(t).attr("fill-opacity", d => labelVisible(d.target) * 0.7);
    }

    function rectHeight(d) {
      return d.x1 - d.x0 - Math.min(1, (d.x1 - d.x0) / 2);
    }

    function labelVisible(d) {
      return d.y1 <= width && d.y0 >= 0 && d.x1 - d.x0 > 16;
    }

    return svg.node();
  }

async function genChart(container) {
  let data = await d3.json('../knowledge.json');
  
  let chart = Icicle(data,{
    value: d => d.value,
    label: d => d.name,
    title: (d, n) => `${n.ancestors().reverse().map(d => d.data.name).join(".")}\n${d.title}`, // hover text,
    parentId: "knowledge",
    children:d => d.children,
    width: container.clientWidth})
  
  container.appendChild(chart);
}

const container = document.querySelector('#knowledge-graph');

await genChart(container);