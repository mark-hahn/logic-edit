
var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
  el: $('#paper'),
  model: graph,
  // width: 200, height: 200, gridSize: 5,
});

var and = new joint.shapes.logicp.And({
  inPorts:['in0','in1'],
  outPorts: ['out0'],
  position: { x: 50, y: 50 },
  size: {width:60, height:30},
    attrs: {
      '.body': {fill: 'white', stroke: 'black'},
      '.port-body':  {r: 3, stroke: 'green'},
    },
});

// and.set('inPorts', ['in1', 'in2', 'in3']);
// and.set('outPorts', ['out1']);

graph.addCell(and);

// var or = new joint.shapes.logicp.Or();
//
// var not = new joint.shapes.logicp.Not();
//
// graph.addCells([and, or, not]);
//
// and.position(50,50);
// or.position(50,150);
// not.position(50,250);
