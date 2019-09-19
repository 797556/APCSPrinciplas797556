
//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var c = 0




var balls = []
var paddles = []
var gameState = 1
var gameMode;
var b;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //b1 = new ball(random(width), random(height), random(-5,5), random(-5,5));
  //b2 = new ball(random(width), random(height), random(-5,5), random(-5,5));
  //b3 = new ball(random(width), random(height), random(-5,5), random(-5,5));
  loadballs(1);
  loadpaddles(1);

}


//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5);
  runballs();
  runpaddles();

}

function loadballs(n){
  for(var i = 0; i < n; i++){
    balls [i] = new ball(random(800), random(5), random(-4, -5), random(4, 5));
  }
}
function loadpaddles(x){
  for(var i = 0; i < x; i++){
    paddles [i] = new paddle(250, 700, 200, 50);
  }
}

function runballs(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function runpaddles(){
  for(var i = 0; i < paddles.length; i++){
    paddles[i].run();
  }
}
