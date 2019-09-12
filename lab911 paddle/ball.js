class ball{
constructor(x, y, dx, dy){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.clr = color(random(255), random(255), random(255))
  }
run(){
  this.checkedges();
  this.update();
  this.render();
  }
checkedges(){
  if(this.x<0){
    this.dx = -this.dx;
  }
  if(this.x> width){
    this.dx = -this.dx;
  }
  if(this.y < 0){
    this.dy = -this.dy;
  }
  if(this.y > height){
    this.dy = -this.dy;
  }
  }
iscolliding(){
  if(this.loc.x>paddle.loc.x&&
  this.loc.x<paddle.loc.x + w &&
  this.loc.y>paddle.loc.y &&
  this.loc.y<paddle.loc.y + h) {
    return true;
  } else{
    return false
  }
}
update(){
  this.x = this.x + this.dx;
  this.y = this.y + this.dy;
  }
render(){
  fill(this.clr)
  ellipse(this.x, this.y, 10, 10);
  }
}// end of ball
