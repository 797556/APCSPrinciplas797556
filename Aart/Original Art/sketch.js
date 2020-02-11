void setup() {
background(250);
size(600,400);
}


var PY, PX;
var x = [20];
var y = [20];
var segLength = 10;

for(var i=0; i<30; i++) {
    x[i]=1;
    y[i]=1;
}


void segment( x, y,  a) {
  strokeWeight(1);
  stroke(0, 0, 0,40);
  pushMatrix();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  popMatrix();
};

void dragSegment( i,  xin,  yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
};






void draw() {
 PX=mouseX;
 PY=mouseY;
  dragSegment(0, PX, PY);
  for(var i=0; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
};
