
joint.shapes.logicp = {}

var pinLen = 25;
var bubbleRadius = 4;

window.makeLogicpSym = (graph, name, x, y) => {
  let info = classInfo[name];
  if(!joint.shapes.logicp[name]) {
    let pinsHtml = bubblesHtml = '';
    let pitch = info.height/info.inCount;
    let y = pitch/2;
    for (let i=0; i < info.inCount; i++, y += pitch) {
      let yInt = Math.round(y);
      pinsHtml += `<line class="pin" x1="0" y1="${yInt}" x2="${pinLen+info.width/3}" y2="${yInt}"/>`;
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

makeAnd = (inCount) => {
  let hgt = (inCount+1) * 10;
  return {
    path:`M ${pinLen} 0 V ${hgt} C ${pinLen+32} ${hgt} ${pinLen+32} 0 ${pinLen} 0`,
    inCount, outCount:1, width:25, height:hgt
  }
}

makeOr = (inCount) => {
  let hgt = (inCount+1) * 10;
  let q = pinLen + (inCount * 3);
  let c = 2.2*pinLen + (inCount * 5);
  return {
    path:`M ${pinLen-4} 0 Q ${q} ${hgt/2} ${pinLen-4} ${hgt} C ${c} ${hgt} ${c} 0 ${pinLen-4} 0`,
           inCount, outCount:1, width:inCount*4+20, height:hgt
  }
}

var classInfo = {
  Not: { path:`M ${pinLen} 0 V 30 L ${pinLen+30} 15 L ${pinLen} 0`,
         inCount:1, outCount:1, width:25, height:30, not:true},
}

for (let i=2; i <= 16; i++) {
  classInfo['And'+i] = makeAnd(i);
  classInfo['Or'+i] = makeOr(i);
}
