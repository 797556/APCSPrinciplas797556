//Tommy Ashworth
// Ships and Planet
var boids = []
var ship;
var planet;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20,);
  loadObjects(1);
  loadBoids(10)

}
//  The draw function is called @ 30 fps
function draw() {
background(5,5,5, 50);
  runShips();
  runBoids();
  text('Dodge The Balls', 350,50)


}
function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(400, 400, random(-.1, .1), random(-.1, .1));
  }
}
function loadObjects(n){
  planet = new Planet(random(800), random(800), random(-5, 5), random(-5,5));
  //ship = new Ship(random(width), random(height), random(-2, 2), random(-2, 2));
} // end of loadObjects

function runShips(){
  planet.run();


} //end of runShips
function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}
