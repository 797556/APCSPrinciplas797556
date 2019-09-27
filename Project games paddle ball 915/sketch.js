
//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var c = 0
var balls = []
var paddles = []
var gameState = 1
var gameMode;
var a;
var b;
var n;
var x;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

}
function draw(){
  if(gameState === 1){
    startGame();
  }
  if(gameState === 2){
    playGame();
  }
  if(gameState === 3){
    endGame();
  }
}


function startGame(){
  if(gameMode ===1){
    a = 4
    b = 5
  }else if(gameMode === 2){
    a = 14
    b = 15
  }else if(gameMode === 3){
    a = 29
    b = 30
  }
  textSize(100)
  text('Paddle and Ball', 50, 200);
  fill(0, 255, 0);
  textSize(30);
  text('Easy', 200, 575);
  rect(200, 600, 60, 60);
  fill(255, 255, 0);
  text('Medium', 400, 575);
  rect(400, 600, 60, 60);
  fill(255, 0, 0);
  text('Hard', 600, 575);
  rect(600, 600, 60, 60);
  if(mouseIsPressed &&
    mouseX > 200 &&
    mouseX < 260 &&
    mouseY > 600 &&
    mouseY < 660){

      clear();
      console.log('easy')
      gameMode = 1;
      gameState = 2;
  }else if(mouseIsPressed &&
    mouseX > 400 &&
    mouseX < 460 &&
    mouseY > 600 &&
    mouseY < 660 ){
      clear();
      gameMode = 2;
      gameState = 2;
   }else if(mouseIsPressed &&
     mouseX > 600 &&
     mouseX < 660 &&
     mouseY > 600 &&
     mouseY < 660 ){
       clear();
       gameMode = 3;
       gameState = 2;
    }
}
//  The function is called @ 30 fps




  function loadballs(n){
    for(var i = 0; i < n; i++){
      balls [i] = new ball(random(800), random(5), random(a, b), random(a, b));
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
function playGame(){
loadballs(n)
loadpaddles(x)
runballs()
runpaddles()
}
