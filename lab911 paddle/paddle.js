class paddle{
  constructor(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  render(){
    fill(this.clr)
    rect(this.loc.x, this.loc.y, this.w, this.h)
  }
}
}
