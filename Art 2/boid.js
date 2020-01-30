class Boid{
constructor(x, y, dx, dy){
  this.loc = createVector(x, y);
  this.vel = createVector(dx, dy);
  this.acc = createVector(0, 0)
  this.clr = color(random(255), random(255), random(255))
  }
run(){
  this.checkedges();
  this.update();
  this.render();
  }
checkedges(){
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
    this.loc.y = height-2;
  }
  }

update(){
  this.loc.add(this.vel)
  }
render(){
  var distance;
  fill(this.clr)
  ellipse(this.loc.x, this.loc.y, 10, 10);

  for(var i =0; i< boids.length; i++){
    distance = this.loc.dist(boids[i].loc)
    if(distance < 200){
      stroke(this.clr)
      line(this.loc.x,this.loc.y,boids[i].loc.x, boids[i].loc.y)
    }
  }
  }
}// end of boid
