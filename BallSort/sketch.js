
//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []



function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);


  loadBalls(20);
  runBalls();
}
function draw(){
  bubblesort();
}





function loadBalls(n){
  for(var i = 0; i < n; i++){
      balls[i] = new Ball(random(20, 780), 380, random(255), 10);
    }
  }
function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }

function bubblesort(){
  for (var j=0; j<balls.length-1; j++){
    if(balls[j].h>balls[j+1].h){
      swap(balls, j, j+1);
      move();
    }
  }
}
function move(){
  for(var i=0; i<balls.length; i++){
    balls[i].set(i);
function swap(list,a,b){
  var temp=list[a]
  list[a]=list[b];
  list[b]=temp;
}
}
}
