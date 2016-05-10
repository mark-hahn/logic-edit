
var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
  el: $('#paper'),
  model: graph,
  // width: 200, height: 200, gridSize: 5,
});

var Or = makeLogicpSym(graph, 'Or2', 50,   0);
var Or = makeLogicpSym(graph, 'Or3', 150,   0);
var Or = makeLogicpSym(graph, 'Or4', 250,   0);
var Or = makeLogicpSym(graph, 'Or5', 350,   0);
var Or = makeLogicpSym(graph, 'Or6', 450,   0);
var Or = makeLogicpSym(graph, 'Or7', 550,   0);
var Or = makeLogicpSym(graph, 'Or32', 650,   0);

var not = makeLogicpSym(graph, 'Not',  50, 100);
