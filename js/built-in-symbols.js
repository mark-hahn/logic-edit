
joint.shapes.logicp = {}

makeLogicpSym = (name, path) => {
  let newClass = joint.shapes.logicp[name] = joint.shapes.devs.Model.extend({
    markup: '<g class="rotatable"><g class="scalable">' +
                    '<path class="body" d="' + path + '"/>' +
            '</g>' +
            '<g class="inPorts"/><g class="outPorts"/></g>',
    portMarkup: '<g class="port port<%= id %>"><circle class="port-body"/>' +
                 '</g>',
  });
  let portAttrsPortBody = newClass.__super__.defaults.attrs['.port-body'];
  _.extend(portAttrsPortBody, {r: 3, stroke: 'green'});
}

leftCircle = (r) =>
  ` m ${-r * 2} 0
    a ${r} ${r} 0 1 0 ${ r * 2} 0
    a ${r} ${r} 0 1 0 ${-r * 2} 0 `;

rightCircle = (r) =>
  ` a ${r} ${r} 0 1 0 ${ r * 2} 0
    a ${r} ${r} 0 1 0 ${-r * 2} 0 `;

makeLogicpSym(  'And',
  'M 15 0 V 30 C 50 30 50 0 15 0 M 0 8 L 15 8 M 0 22 L 15 22' + leftCircle(3) + 'M 40 15 L 55 15');

// makeLogicpSym(  'Or',
//   'M 10 0 Q 20 15 10 30 C 40 30 40 0 10 0 M 0 8 L 13 8 M 0 22 L 13 22 M 33 15 L 43 15');
//
// makeLogicpSym(  'Not',
//   'M 10 0 V 20 L 30 10 L 10 0 M 30 10 M 0 10 L 10 10 M 35 10 L 43 10');
