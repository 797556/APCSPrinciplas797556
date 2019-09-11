//  Tommy Ashworth
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var Mainball =[]
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //b1 = new ball(random(width), random(height), random(-5,5), random(-5,5));
  //b2 = new ball(random(width), random(height), random(-5,5), random(-5,5));
  //b3 = new ball(random(width), random(height), random(-5,5), random(-5,5));
  loadballs(1500);
}

//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5);
  runballs();

}

function loadballs(n){
  Mainball = new ball(random(width/2), random(height/2), random(-4, 4), random(-4, 4), -1);

    for(var i = 0; i < n; i++){
      balls[i] = new ball(random(width), random(height), random(-2, 2), random(-2, 2), i);
  }
}

function runballs(){
  Mainball.run();
    for(var i = 0; i < balls.length; i++){
      balls[i].run();

  }
}
