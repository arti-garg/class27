class SlingShot{

constructor(body1, body2, xoffset, yoffset){
var options ={

    bodyA: body1,
    bodyB: body2,
    length:100,
    stiffness:1.0,
    pointB:{x:xoffset, y:yoffset}
}

this.slingshot =Constraint.create(options)
this.xoffset= xoffset
this.yoffset= yoffset;
World.add (world, this.slingshot)

}

display(){

   var pointA= this.slingshot.bodyA.position;
   var pointB = this.slingshot.bodyB.position;
   //stroke("pink")
   strokeWeight(5);
line(pointA.x, pointA.y, pointB.x+this.xoffset, pointB.y+this.yoffset)
}

}
