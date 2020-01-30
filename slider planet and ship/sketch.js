//Tommy Ashworth

var ship = [];
var planet;
var sliderAtraction, sliderVelocity;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20,);
  loadObjects(30);
  sliderVelocity = createSlider(0,15, 7.5);
  sliderVelocity.position(200, 400);
  sliderAtraction = createSlider(0, 5, 2.5);
  sliderAtraction.position(200, 450);
}
//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5, 50);
  runShips();

}

function loadObjects(n){
  for(var i = 0; i < n; i++){
    ship[i] = new Ship(random(width), random(height), random(-2, 2), random(-2, 2));
  }
  planet = new Planet(random(800), random(800), random(-1, 1), random(-1,1));
} // end of loadObjects

function runShips(){
  planet.run();
  for(var i = 0; i < ship.length; i++){
  ship[i].run();
}

} //end of runShips
