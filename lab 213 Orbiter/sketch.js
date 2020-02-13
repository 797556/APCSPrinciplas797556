//Tommy Ashworth
// Ships and Planet

var ship;
var planet;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20,);
  loadObjects(1);
}
//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5, 50);
  runShips();

}

function loadObjects(n){
  planet = new Planet(random(800), random(800), random(-1, 1), random(-1,1));
  ship = new Ship(random(width), random(height), random(-2, 2), random(-2, 2));
} // end of loadObjects

function runShips(){
  planet.run();
  ship.run();

} //end of runShips
