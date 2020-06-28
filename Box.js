class Box {
constructor(x,y,width,height){
    var options = {
        restitution:0.8
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)
  this.width=width;
  this.height=height;  
}
display (){
    var angle=this.body.angle
    push ();
    translate(this.body.position.x,this.body.position.y)
    rotate (angle)
    angleMode(RADIANS)
    rectMode(CENTER)
    fill("white")
    rect(0,0,this.width,this.height )
    pop();
}
}