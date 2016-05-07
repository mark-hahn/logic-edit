
var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
  el: $('#paper'),
  model: graph,
  width: 200, height: 200, gridSize: 5,
});

var and = new joint.shapes.logicp.And({
  size: { width: 30, height: 30 },
});

var or = new joint.shapes.logicp.Or({
  size: { width: 30, height: 30 },
});

var not = new joint.shapes.logicp.Not();

graph.addCells([and, or, not]);

and.position(50,50);
or.position(50,100);
not.position(50,150);
