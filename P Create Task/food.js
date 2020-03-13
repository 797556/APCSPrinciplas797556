class Planet{
  constructor(x, y, dx, dy){
    this.w=15;
    this.clr = color(255, 0, 0)
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0)
    this.rad = 75;
    this.angle = 0
    this.orbiters =[]

}
run(){
  this.render();
  this.checkEdges();
  this.update();
}
render(){
  fill(this.clr)
  ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  var ox = this.loc.x + 100*cos(this.angle)
  var oy = this.loc.y + 100*sin(this.angle)
  fill(0,0,255)
  ellipse(ox,oy, 10,10)
  fill(0,255,0)
  var ox2 = this.loc.x + 100*cos(this.angle+3)
  var oy2 = this.loc.y + 100*sin(this.angle+3)
  ellipse(ox2, oy2, 10,10)
}
  checkEdges(){
    if(this.loc.x < 0 || this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0 || this.loc.y > height){
      this.vel.y = -this.vel.y;
    }
  }
update(){
  this.angle = this.angle + .25
  this.vel.limit(8);
  this.loc.add(this.vel);
  this.vel.add(this.acc);
}//end of update

}//end of ball class
