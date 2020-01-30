//  Tommy Ashworth
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var boids = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 255, 255);

  loadBoids(100);

}

//  The draw function is called @ 30 fps
function draw() {
  background(2,2,2);
  runBoids();

}

function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(random(800), random(800), random(-1, 1), random(-1, 1));
  }
}

function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}
