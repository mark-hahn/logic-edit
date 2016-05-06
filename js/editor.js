
var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
    el: $('#paper'),
    model: graph,
    width: 200, height: 200, gridSize: 5,
});

var and = new joint.shapes.logicp.And({
  position: { x: 0,  y: 0 },
  size: { width: 30, height: 30 },
});

var or = new joint.shapes.logicp.Or({
  position: { x: 0,  y: 50 },
  size: { width: 30, height: 30 },
});

var not = new joint.shapes.logicp.Not({
  position: { x: 0,  y: 100 },
  size: { width: 30, height: 30 },
});

graph.addCells([and, or, not]);
