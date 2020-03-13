//  First Constructor Function
// eettlin
// March 10, 2020

class Ball{
 //  Ball Properties  +++++++++++++++++++++++++++++++++++++++++++++
 constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0.016);
    this.clr = 0//this.getColor();//random(255), random(255),random(255));
    this.w = 15;
    this.id = id;
    if(this.id < 0) {this.w = 50;}
 }

 getColor(){
   if(this.id%2 === 0) {

   }else{

   }
 }

 run(){
   this.checkEdges();
 }


  checkEdges(){//+++++++++++++++++++++++++++++++++++++++++++++++++++
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

     this.update();
  } //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  update(){//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var distToMainBall;
    if(this.id >= 0){//  if not mainBall

    }

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.render();
    if(this.id%2 === 0){
      if(this.loc.x < paddle.loc.x +50 && this.loc.x > paddle.loc.x - 50 && this.loc.y === 695){
      clear();
      console.log('hii')

    }
  }
  }//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 render(){
  //  **************************************************************
   if(this.id < 0){
    //mainBall === blue
  }else if(this.id%2 === 0){
     this.clr = fill(0,255,0)
   }else{
     this.clr = fill(255,0,0)
   }
   ellipse(this.loc.x, this.loc.y, this.w, this.w);
 }//***************************************************************
}//  end Ball class
