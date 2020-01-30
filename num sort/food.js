
class Food{
  constructor(x, y, w, h){
  this.loc = createVector(x, y);
  this.w = w;
  this.h = h;

  this.clr = color(random(255), random(255), random(255))
}
run(){
  this.render();
  //this.update();
  this.isEaten();
}
render(){
  fill(255)
  rect(this.loc.x, this.loc.y, this.w, this.h)
}

//update(){


isEaten(){
  if(this.loc.x === snake.loc.x && this.loc.y === snake.loc.y){
    return true;
  }
  return false;
}

}
