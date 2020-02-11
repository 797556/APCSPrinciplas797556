var PY, PX;
var x = [20];
var y = [20];
var segLength = 10;
var color1 = 255
var color2 = 0
var color3 = 0
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  //strokeWeight(600,400);




for(var i=0; i<30; i++) {
    x[i]=1;
    y[i]=1;
}
}


function segment( x, y,  a) {
  strokeWeight(1);
  stroke(color1, color2, color3,40);
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
};

function dragSegment( i,  xin,  yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
};
 function mousePressed(){
    color1 = random(255)
    color2 = random(255)
    color3 = random(255)
  }
  function keyPressed(){
    if(keyCode === RIGHT_ARROW){
    clear();
    background(5,5,5)
    }
  }



function draw() {
 PX=mouseX;
 PY=mouseY;


  dragSegment(0, PX, PY);
  for(var i=0; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
};
