class Bob{
    constructor(x,y,radius){
        var bob_options={
            isStatic : true,
           // 'restitution': 0.9,//
            'friction' :0.5,
            'density' :1.2
       }
       this.body = Bodies.circle(x, y, radius/2, bob_options);
       this.radius = this.radius;
       World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      ellipseMode(CENTER);
      fill("yellow");
      ellipse(0,0,this.radius)
      pop();
    }
  
}