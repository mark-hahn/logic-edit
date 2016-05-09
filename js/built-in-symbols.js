
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

circle = (r) => ` a ${r} ${r} 0 1 0 ${ r * 2} 0 a ${r} ${r} 0 1 0 ${-r * 2} 0 `;

makeLogicpSym(  'And',
  'M 15 0 V 30 C 45 30 45 0 15 0 ' +
  'M 0 8 L 15 8 ' +
  'M 0 22 L 9 22' + circle(3) +
  'M 38 15' + circle(3) +
  'M 44 15 L 55 15'
);
makeLogicpSym(  'Or',
  'M 10 0 ' +
  'Q 25 15 10 30 ' +
  'C 45 30 45 0 10 0 ' +
  'M 0 8 L 15 8 ' +
  'M 0 22 L 9 22' + circle(3) +
  'M 36 15' + circle(3) +
  'M 42 15 L 55 15'
);
makeLogicpSym(  'Not',
  'M 10 0 V 20 L 30 10 L 10 0 ' +
  'M 0 10 L 10 10 ' +
  'M 30 10' + circle(3) +
  'M 36 10 L 43 10'
);
