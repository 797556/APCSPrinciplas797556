
//  Tommy Ashworth
// 	Paddle Game September
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
//This draw function uis where I have it check the game state (whitch is the start game, play game and endgame) and the gamemode which is the diffrfent values that make the game hard or easy
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
  if(gameMode ===1){
    a = -10
    b = 10
  }else if(gameMode === 2){
    a = -10
    b = 10
  }else if(gameMode === 3){
    a = -10
    b = 10
  }
}


//This is start game the code for the buttons and title
function startGame(){
  if(gameMode ===1){
    a = 40
    b = 50
  }else if(gameMode === 2){
    a = 400
    b = 500
  }else if(gameMode === 3){
    a = 900
    b = 1000
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
  // Above this is the code for the visual buttons
  if(mouseIsPressed &&
    mouseX > 200 &&
    mouseX < 260 &&
    mouseY > 600 &&
    mouseY < 660){
      gameMode = 1;
      gameState = 2;
      clear();
      loadballs(1);
      loadpaddles(1);
  }else if(mouseIsPressed &&
    mouseX > 400 &&
    mouseX < 460 &&
    mouseY > 600 &&
    mouseY < 660 ){
      gameMode = 2;
      gameState = 2;
      clear();
      loadballs(2);
      loadpaddles(1);

   }else if(mouseIsPressed &&
     mouseX > 600 &&
     mouseX < 660 &&
     mouseY > 600 &&
     mouseY < 660 ){
       gameMode = 3;
       gameState = 2;
       clear();
       loadballs(3);
       loadpaddles(1);
       //above this is the code for clicking the buttons
    }
}



//This is the functions for the gamne

  function loadballs(n){
    for(var i = 0; i < n; i++){
      balls [i] = new ball(random(5), random(5), random(a, b), random(a, b));
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
  //this is where I call the functions for the game to run
function playGame(){
//loadpaddles(x)
runballs()
runpaddles()

}
