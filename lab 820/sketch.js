//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x, y:
var speedx, speedy;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 255, 255);
  fill(200, 30, 150);
x=200;
y=200;
speedx= 3;
speedy= 3;

}

//  The draw function is called @ 30 fps
function draw() {
  x= x+ speedx;
  y= y +speedy;
ellipse(x,y,50,50);
}
