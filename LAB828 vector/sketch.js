//  Tommy Ashworth
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //b1 = new ball(random(width), random(height), random(-5,5), random(-5,5));
  //b2 = new ball(random(width), random(height), random(-5,5), random(-5,5));
  //b3 = new ball(random(width), random(height), random(-5,5), random(-5,5));
  loadballs(700);

}

//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5);
  runballs();

}

function loadballs(n){
  for(var i = 0; i < n; i++){
    balls[i] = new ball(random(1), random(1), random(-5, 5), random(-5, 5));
  }
}

function runballs(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
