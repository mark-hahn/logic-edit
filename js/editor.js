
var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
  el: $('#paper'),
  model: graph,
  // width: 200, height: 200, gridSize: 5,
});

var and = new joint.shapes.logicp.And({
  size: { width: 100, height: 50 },
  inPorts: ['in1','in2'],
  outPorts: ['out1'],
});

var or = new joint.shapes.logicp.Or({
  size: { width: 100, height: 50 },
  inPorts: ['in1','in2'],
  outPorts: ['out1'],
});

var not = new joint.shapes.logicp.Not({
  size: { width: 100, height: 50 },
  inPorts: ['in1'],
  outPorts: ['out1'],
});

graph.addCells([and, or, not]);

and.position(50,50);
or.position(50,150);
not.position(50,250);
