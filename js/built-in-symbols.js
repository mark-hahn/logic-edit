
joint.shapes.logicp = {}

window.makeLogicpSym = (graph, name, x, y) => {
  let info = classInfo[name];
  if(!joint.shapes.logicp[name]) {
    joint.shapes.logicp[name] = joint.shapes.devs.Model.extend({
      markup: '<g class="rotatable"><g class="scalable">' +
                      '<path class="body" d="' + info.path + '"/></g>' +
              '<g class="inPorts"/><g class="outPorts"/></g>',
      portMarkup: '<g class="port port<%= id %>"><circle class="port-body"/></g>',
    });
  }
  let inPorts = [];
  for(i = 0; i < info.inCount; i++) inPorts.push('in' + i);
  let logicP = new joint.shapes.logicp[name]({
    position: {x, y},
    size: {width:60, height:30},
    attrs: {
      '.body': {fill: 'white', stroke: 'black'},
      '.port-body':  {r: 3.3, stroke: 'green'},
    },
    inPorts, outPorts: ['out0'],
  });
  graph.addCell(logicP);
  return logicP;
}

let circle = (r) =>
  ` a ${r} ${r} 0 1 0 ${ r * 2} 0 a ${r} ${r} 0 1 0 ${-r * 2} 0 `;

var classInfo = {
  And:{path:'M 15 0 V 30 C 45 30 45 0 15 0 ' +
            'M 0 8 L 15 8 ' +
            'M 0 22 L 9 22' + circle(3) +
            'M 38 15' + circle(3) +
            'M 44 15 L 55 15', inCount: 2},
  Or: {path:'M 10 0 ' +
            'Q 25 15 10 30 ' +
            'C 45 30 45 0 10 0 ' +
            'M 0 8 L 15 8 ' +
            'M 0 22 L 9 22' + circle(3) +
            'M 36 15' + circle(3) +
            'M 42 15 L 55 15 ', inCount: 2},
  Not:{path:'M 10 0 V 20 L 30 10 L 10 0 ' +
            'M 0 10 L 10 10 ' +
            'M 30 10' + circle(3) +
            'M 36 10 L 43 10 ', inCount: 1},
}
