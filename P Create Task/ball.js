class ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    //this.accA = createVector(0, 10);
    this.accB = createVector(0, .4);
    this.clr = color(random(255), random(255), random(255))
    this.score = 0
    }
run(){
  this.checkedges();
  this.update();
  this.render();
  this.iscolliding();
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
//<<<<<<< HEAD
      clear()
      text('Press Ctrl R to play agian' this.score, 200, 200)
//=======
      clear();
        text('EndGame: your score is logged Press control R to restart. ' , 1, 200)
      stop()
      consle.log.this.socre
      text(' Press control R to restart. ' , 200, 200)
//>>>>>>> 381741f6bae16888c536c8f926941ff46e3c06d7
    }
    }
iscolliding(){
  if(this.loc.x > paddles[0].loc.x &&
    this.loc.x < paddles[0].loc.x + paddles[0].w &&
    this.loc.y > paddles[0].loc.y &&
    this.loc.y < paddles[0].loc.y + paddles[0].h) {
      this.vel.y = -this.vel.y;
      this.score = this.score + 1;
  }
}
update(){
    this.vel.add(this.accA);
    this.vel.add(this.accB);
    this.loc.add(this.vel)
  }
render(){
  fill(this.clr)
  ellipse(this.loc.x, this.loc.y, 15, 15);
  text(this.score, 350, 75)
  }
}// end of ball
