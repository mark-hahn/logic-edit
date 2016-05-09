
var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
  el: $('#paper'),
  model: graph,
  // width: 200, height: 200, gridSize: 5,
});

var and = makeLogicpSym(graph, 'And', 50,   0);
var or  = makeLogicpSym(graph, 'Or',  50,  50);
var not = makeLogicpSym(graph, 'Not', 50, 100);
