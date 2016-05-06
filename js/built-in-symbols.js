
joint.shapes.logicp = {}

makeLogicpSym = (name, path) => {
  joint.shapes.logicp[name] = joint.shapes.basic.Generic.extend(
    { markup:   '<g class="rotatable scalable"><path d="' + path + '"/></g>',
      defaults: joint.util.deepSupplement(
        { type: 'logicp.' + name,
           attrs: { path: { fill: 'white', stroke: 'black', 'follow-scale': true,  width: 40,  height: 40 } }
        } , joint.shapes.basic.Generic.prototype.defaults)
    });
}

makeLogicpSym(  'And',
     'M 10 10 L 10 40 C 35 40 35 10 10 10 M 0 18 L 10 18 M 0 32 L 10 32 M 30 25 L 40 25'
);
makeLogicpSym(  'Or',
     'M 10 10 L 10 40 C 35 40 35 10 10 10 M 0 18 L 10 18 M 0 32 L 10 32 M 30 25 L 40 25'
);
makeLogicpSym(  'Not',
     'M 10 10 L 10 40 C 35 40 35 10 10 10 M 0 18 L 10 18 M 0 32 L 10 32 M 30 25 L 40 25'
);
