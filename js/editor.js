
var $page = $('#page');
var graph = new joint.dia.Graph();
var paper = new joint.dia.Paper({
  el: $('#paper'),
  model: graph,
  width: $page.width(), height: $page.height(),
  gridSize: 5
});

makeLogicpSym(graph, 'Or2', 50,   0);
makeLogicpSym(graph, 'Or3', 150,   0);
makeLogicpSym(graph, 'Or4', 250,   0);
makeLogicpSym(graph, 'Or5', 350,   0);
makeLogicpSym(graph, 'Or6', 450,   0);
makeLogicpSym(graph, 'Or7', 550,   0);
makeLogicpSym(graph, 'Or16', 650,   0);

makeLogicpSym(graph, 'And2', 50,   200);
makeLogicpSym(graph, 'And3', 150,   200);
makeLogicpSym(graph, 'And4', 250,   200);
makeLogicpSym(graph, 'And5', 350,   200);
makeLogicpSym(graph, 'And6', 450,   200);
makeLogicpSym(graph, 'And7', 550,   200);
makeLogicpSym(graph, 'And16', 650,   200);

var not = makeLogicpSym(graph, 'Not',  50, 150);

$(window).resize(function() {
    paper.setDimensions($page.width(), $page.height());
});
