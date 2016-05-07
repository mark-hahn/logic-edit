
joint.shapes.logicp = {}

makeLogicpSym = (name, path, circle) => {
  joint.shapes.logicp[name] = joint.shapes.basic.Generic.extend(
    { markup: '<g class="rotatable scalable"><path d="' + path + '"/>' +
      (circle ? `<circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.r}"/></g>` : '</g>')
    ,
      defaults: joint.util.deepSupplement(
        { type: 'logicp.' + name,
          attrs: {
            path: { fill: 'white', stroke: 'black', 'follow-scale': true},
            circle: { fill: 'white', stroke: 'black', 'follow-scale': true}},
        } , joint.shapes.basic.Generic.prototype.defaults)
    });
}

makeLogicpSym(  'And',
  'M 10 0 V 30 C 40 30 40 0 10 0 M 0 8 L 10 8 M 0 22 L 10 22 M 33 15 L 43 15');

makeLogicpSym(  'Or',
  'M 10 0 Q 20 15 10 30 C 40 30 40 0 10 0 M 0 8 L 13 8 M 0 22 L 13 22 M 33 15 L 43 15');

makeLogicpSym(  'Not',
  'M 10 0 V 20 L 30 10 L 10 0 M 30 10 M 0 10 L 10 10 M 35 10 L 43 10',
  {cx: 33, cy: 10, r:3});
