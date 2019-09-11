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
update(){
  this.x = this.x + this.dx;
  this.y = this.y + this.dy;
  }
render(){
  fill(this.clr)
  ellipese(this.x, this.y, 50, 50);
  }
}// end of ball
