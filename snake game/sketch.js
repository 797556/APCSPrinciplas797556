
//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var snake
var food
var gameState = 1
var x = 0
var y = 0
var score =0
var colWidth = 20
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  frameRate(10);

  loadObjects(1);

}


  function draw() {
    background(5,5,5);
    if(gameState === 1){
    textSize(50)
    fill(245,0,0)
    text('Click to Start', 50, 300)
    rect(200,600,60,60)
  }
    if(gameState === 2){
     playGame();

    }
    if(food.isEaten()){
      food = new Food(Math.floor(random(20))*colWidth, Math.floor(random(10))*colWidth, 20, 20)
      snake.grow();
      score= score+1
  }
}



function loadObjects(n){
  snake = new Snake(Math.floor(random(1,30))*colWidth, Math.floor(random(1,30))*colWidth, 0 ,0);
  food = new Food(Math.floor(random(1,30))*colWidth, Math.floor(random(1,30))*colWidth,20,20);
}

function playGame(){
  food.run();
  snake.run();
}



function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(colWidth, 0)
  }
  else if( keyCode === LEFT_ARROW){
    snake.vel = createVector(-colWidth, 0)
  }
  else if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -colWidth)
  }
  else if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, colWidth)
  }
}



function mousePressed(){
  if(mouseIsPressed &&
    mouseX > 200 &&
    mouseX < 260 &&
    mouseY > 600 &&
    mouseY < 660){
      clear();
      var cnv = createCanvas(800, 800);
      cnv.position((windowWidth-width)/2, 30);
      background(5, 5, 5);
      frameRate(10);

      loadObjects(1);

      gameState = 2;
    }
  }
