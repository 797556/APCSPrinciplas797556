class Boid{
constructor(x, y, dx, dy){
  this.loc = createVector(x, y);
  this.vel = createVector(dx, dy);
  this.acc = createVector(random(-.1,.1), random(-.1,.1))
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
  if(this.loc.x < planet.loc.x+50 & this.loc.x > planet.loc.x-50 &
    this.loc.y < planet.loc.y+50 & this.loc.y > planet.loc.y-50){
    remove();
    //clear();
    //text('Game Over', 300, 400)
  }
  }

update(){
  this.loc.add(this.vel)
  this.vel.add(this.acc)

  }
render(){
  var distance;
  fill(0,0,255)
  ellipse(this.loc.x, this.loc.y, 20, 20);

  for(var i =0; i< boids.length; i++){
    distance = this.loc.dist(boids[i].loc)
    if(distance < 200){
      stroke(250,250,250)
      line(this.loc.x,this.loc.y,boids[i].loc.x, boids[i].loc.y)
    }
  }
  }
}// end of boid
