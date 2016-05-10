
joint.shapes.logicp = {}

var pinLen = 30;
var bubbleRadius = 4;

window.makeLogicpSym = (graph, name, x, y) => {
  let info = classInfo[name];
  if(!joint.shapes.logicp[name]) {
    let pinsHtml = bubblesHtml = '';
    let pitch = info.height/info.inCount;
    let y = pitch/2;
    for (let i=0; i < info.inCount; i++, y += pitch) {
      let yInt = Math.round(y);
      pinsHtml += `<line class="pin" x1="0" y1="${yInt}" x2="${pinLen}" y2="${yInt}"/>`;
      if (!info.not)
        bubblesHtml += `<circle class="bubble bubbleIn${i}" cx="${pinLen-bubbleRadius}" cy="${yInt}" r="${bubbleRadius}"/>`;
    }
    pitch = info.height/info.outCount;
    y = pitch/2;
    for (let i=0; i < info.outCount; i++, y += pitch) {
      let yInt = Math.round(y);
      pinsHtml    += `<line class="pin" x1="${info.width+pinLen}" y1="${yInt}" x2="${info.width+2*pinLen}" y2="${yInt}"/>`;
      bubblesHtml += `<circle class="bubble ${!info.not?'bubbleOut${i}':''}" cx="${info.width+pinLen+bubbleRadius}" cy="${yInt}" r="${bubbleRadius}"/>`;
    }
    bodyHtml = `<path d="${info.path}"/>`;
    joint.shapes.logicp[name] = joint.shapes.devs.Model.extend({
      markup: `<g class="rotatable">
                 <g class="scalable">
                   <g class="body">${pinsHtml+bodyHtml+bubblesHtml}</g></g>
                 <g class="inPorts"></g>
                 <g class="outPorts"></g>
               </g>`,
      portMarkup: '<g class="port port<%= id %>"><circle class="port-body"/></g>',
    });
  }
  let inPorts = [];
  for(i = 0; i < info.inCount; i++)  inPorts.push('in' + i);
  let outPorts = [];
  for(i = 0; i < info.outCount; i++) outPorts.push('out' + i);
  let logicP = new joint.shapes.logicp[name]({
    position: {x, y},
    size: {width:info.width+2*pinLen, height:info.height},
    attrs: {
      '.pin': {stroke:'black', 'stroke-width':1},
      '.bubble': {fill:'white', stroke:'black'},
      '.body': {fill:'white', stroke:'black'},
      '.port-body': {r: 3.3, stroke: 'green'},
    },
    inPorts, outPorts,
  });
  graph.addCell(logicP);
  return logicP;
}

var classInfo = {
  And2:{ path:`M ${pinLen} 0 V 30 C ${pinLen+32} 30 ${pinLen+32} 0 ${pinLen} 0`,
         inCount:2, outCount:1, width:25, height:30 },
  And3:{ path:`M ${pinLen} 0 V 40 C ${pinLen+32} 40 ${pinLen+32} 0 ${pinLen} 0`,
         inCount:3, outCount:1, width:25, height:40 },
  And4:{ path:`M ${pinLen} 0 V 50 C ${pinLen+32} 50 ${pinLen+32} 0 ${pinLen} 0`,
         inCount:4, outCount:1, width:25, height:50 },
  And5:{ path:`M ${pinLen} 0 V 60 C ${pinLen+32} 60 ${pinLen+32} 0 ${pinLen} 0`,
         inCount:5, outCount:1, width:25, height:60 },
  And6:{ path:`M ${pinLen} 0 V 70 C ${pinLen+32} 70 ${pinLen+32} 0 ${pinLen} 0`,
         inCount:6, outCount:1, width:25, height:70 },
  And7:{ path:`M ${pinLen} 0 V 80 C ${pinLen+32} 80 ${pinLen+32} 0 ${pinLen} 0`,
         inCount:7, outCount:1, width:25, height:80 },
  And8:{ path:`M ${pinLen} 0 V 90 C ${pinLen+50} 90 ${pinLen+45} 0 ${pinLen} 0`,
         inCount:8, outCount:1, width:35, height:90 },
  Or2: { path:`M ${pinLen-4} 0 Q ${pinLen+10} 12 ${pinLen-4} 30 C ${pinLen+35} 30 ${pinLen+35} 0 ${pinLen-4} 0`,
         inCount:2, outCount:1, width:25, height:30},
  Not: { path:`M ${pinLen} 0 V 30 L ${pinLen+30} 15 L ${pinLen} 0`,
         inCount:1, outCount:1, width:25, height:30, not:true},
}
