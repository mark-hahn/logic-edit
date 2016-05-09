
joint.shapes.logicp = {}
//
// makeLogicpSym = (name, inCount, path) => {
//   let inPorts = [];
//   for (let i = 0; i < inCount; i++) inPorts.push('in'+ i);
//   joint.shapes.logicp[name] = joint.shapes.devs.Model.extend({
//     markup: '<g class="rotatable"><g class="scalable">' +
//                     '<path class="body" d="' + path + '"/>' +
//             '</g>' +
//             '<g class="inPorts"/><g class="outPorts"/></g>',
//     portMarkup: '<g class="port port<%= id %>"><circle class="port-body"/>' +
//                  '</g>',
//     defaults: joint.util.deepSupplement({
//       type: 'logicp.' + name,
//       // inPorts, outPorts: ['out0'],
//       size: {width:60, height:30},
//       attrs: {
//         '.body': {fill: 'white', stroke: 'black'},
//         '.port-body':  {r: 3, stroke: 'green'},
//       },
//     }, joint.shapes.devs.Model),
//   });
// }
//
var circle = (r) => ` a ${r} ${r} 0 1 0 ${ r * 2} 0 a ${r} ${r} 0 1 0 ${-r * 2} 0 `;

var path =  'M 15 0 V 30 C 45 30 45 0 15 0 ' +
            'M 0 8 L 15 8 ' +
            'M 0 22 L 9 22' + circle(3) +
            'M 38 15' + circle(3) +
            'M 44 15 L 55 15';

joint.shapes.logicp.And = joint.shapes.devs.Model.extend({
  markup: '<g class="rotatable"><g class="scalable">' +
                  '<path class="body" d="' + path + '"/></g>' +
          '<g class="inPorts"/><g class="outPorts"/></g>',
  portMarkup: '<g class="port port<%= id %>"><circle class="port-body"/></g>',
  // // defaults: joint.util.deepSupplement({
  //   position: { x: 50, y: 50 },
  //   size: {width:60, height:30},
  //   type: 'logicp.And',
  //   attrs: {
  //     '.body': {fill: 'white', stroke: 'black'},
  //     '.port-body':  {r: 3, stroke: 'green'},
  //   },
  //   inPorts: ['in0','in1'], outPorts: ['out0'],
  // // }, joint.shapes.devs.Model),
});


// makeLogicpSym(  'And', 2,
//   'M 15 0 V 30 C 45 30 45 0 15 0 ' +
//   'M 0 8 L 15 8 ' +
//   'M 0 22 L 9 22' + circle(3) +
//   'M 38 15' + circle(3) +
//   'M 44 15 L 55 15'
// );
// makeLogicpSym(  'Or', 2,
//   'M 10 0 ' +
//   'Q 25 15 10 30 ' +
//   'C 45 30 45 0 10 0 ' +
//   'M 0 8 L 15 8 ' +
//   'M 0 22 L 9 22' + circle(3) +
//   'M 36 15' + circle(3) +
//   'M 42 15 L 55 15'
// );
// makeLogicpSym(  'Not', 1,
//   'M 10 0 V 20 L 30 10 L 10 0 ' +
//   'M 0 10 L 10 10 ' +
//   'M 30 10' + circle(3) +
//   'M 36 10 L 43 10'
// );
