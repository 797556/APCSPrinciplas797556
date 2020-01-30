class Snake{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.segments = []
    this.vel = createVector(dx, dy)
    this.clr = color(random(255), random(255), random(255))

    // need a segment array

    }
run(){
  this.checkedges();
  this.update();
  this.render();

  }
  checkedges(){
    textSize(50)
    fill(245,0,0)
    if(this.loc.x < 0){
      clear()
      text(score, 10, 100)
      text('press ctrl R to restart', 50, 300)
    }
    if(this.loc.x > width){
      clear()
      text(score, 10, 100)
      text('press ctrl R to restart', 50, 300)
    }
    if(this.loc.y < 0){
      clear()
      text(score, 10, 100)
      text('press ctrl R to restart', 50, 300)
    }
    if(this.loc.y > height){
      clear()
      text(score, 10, 100)
      text('press ctrl R to restart', 50, 300)
    }
    }

update(){
    //upadte segments back to front
    for (var i=this.segments.length-1; i>=0; i--){
      if(i===0){
        //follow head
        this.segments[i].x = this.loc.x;
        this.segments[i].y = this.loc.y;
      } else{
        //follow segments part
        this.segments[i].x = this.segments[i-1].x;
        this.segments[i].y = this.segments[i-1].y;
    }
  }
    this.loc.add(this.vel);
  }
  grow(){
    //adding segments
    this.segments.push(createVector(0,0));
  }
render(){
  fill(this.clr)

  // for-loop to draw each element of the segment array
for (var i=0; i<this.segments.length; i++){
  rect(this.segments[i].x, this.segments[i].y, 20, 20)
}
  rect(this.loc.x, this.loc.y, 20, 20);

  }
  }
