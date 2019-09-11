class ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0)
    this.clr = color(random(255), random(255), random(255));
    this.id = id;
    if(this.id < 0){
      this.w = 75
    }
    else{
      this.w = 10;
    }
  }
run(){
  this.checkedges();
  this.update();
  this.render();
  }
checkedges(){

  if (this.id<0){
    if(this.loc.x < 0){
      this.loc.x = width;
    }
    if(this.loc.x > width){
      this.loc.x = 0;
    }
    if(this.loc.y < 0){
      this.loc.y = height;
    }
    if(this.loc.y > height){
      this.loc.y = 0;
    }
  }
  else
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
    //this.loc.y = height-2;

    }
  }
update(){
  var distToMainBall;
    if(this.id >= 0){
      distToMainBall = this.loc.dist(Mainball.loc);
      if(distToMainBall < 800){
        this.acc = p5.Vector.sub(Mainball.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(1);
      }
      if(distToMainBall < 150){
        this.acc = p5.Vector.sub(this.loc, Mainball.loc);
        this.acc.normalize();
        this.acc.mult(0);
      }
    }
  this.vel.limit(5);
  this.vel.add(this.acc);
  this.loc.add(this.vel);

  //var distToMainBall;
  //if(this.id >= 0){
    //distToMainBall < 250){

  }

render(){
  fill(this.clr)
  ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }
}// end of ball
