
var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
  el: $('#paper'),
  model: graph,
  // width: 200, height: 200, gridSize: 5,
});

var and = makeLogicpSym(graph, 'And2', 50,   0);
var and = makeLogicpSym(graph, 'And3', 150,   0);
var and = makeLogicpSym(graph, 'And4', 250,   0);
var and = makeLogicpSym(graph, 'And5', 350,   0);
var and = makeLogicpSym(graph, 'And6', 450,   0);
var and = makeLogicpSym(graph, 'And7', 550,   0);
var and = makeLogicpSym(graph, 'And8', 650,   0);
// var or  = makeLogicpSym(graph, 'Or2',  50,  50);
// var not = makeLogicpSym(graph, 'Not',  50, 100);
