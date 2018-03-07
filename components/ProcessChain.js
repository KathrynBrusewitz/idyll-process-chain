const React = require("react");
const D3Component = require("idyll-d3-component");
const d3 = require("d3");

const width = 400,
  svgWidth = 600,
  svgHeight = 200,
  nodeSize = 12,
  lineWidth = 10,
  nodeColorIncomplete = "#d8d8d8",
  nodeColorComplete = "orange",
  nodeColorLast = "#444";

// Expects props.data: array of process objects
class ProcessChain extends D3Component {
  initialize(node, props) {
    const svg = (this.svg = d3.select(node).append("svg"));
    svg.style("width", svgWidth).style("height", svgHeight);

    this.authenticate(props);
    this.draw(props, false);
  }

  update(props) {
    this.authenticate(props);
    this.draw(props, true);
  }

  authenticate(props) {
    console.log("auth called");
    if (!props.data || props.data.length === 0) {
      return false;
    }
  }

  draw(props, clear) {
    console.log("draw called");
    if (clear) {
      this.svg.selectAll("*").remove();
    }
  }
}

module.exports = ProcessChain;
