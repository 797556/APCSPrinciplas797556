class Ball{
  constructor(x,y,c,s){
    this.loc = createVector(x,y)
    this.clr = color(c,0,0)
    this.size = s
  }

  run(){
    this.render();
  }

  render(){
    fill(this.clr)
    ellipse(this.loc.x,this.loc.y,this.size, this.size)
  }

}
