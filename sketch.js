var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5,roof;
var displayWidth,displayHeight,bobDiameter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof= new Roof(400,200,300,10)
displayWidth= roof.width/2
displayHeight= roof.height+500
bobDiameter=40
bob1= new Bob(displayWidth-bobDiameter*2,displayHeight,bobDiameter)
bob2= new Bob(displayWidth-bobDiameter*1,displayHeight,bobDiameter)
bob3= new Bob(displayWidth,displayHeight,bobDiameter)
bob4= new Bob(displayWidth+bobDiameter*1,displayHeight,bobDiameter)
bob5= new Bob(displayWidth+bobDiameter*2,displayHeight,bobDiameter)
rope1= new Rope(bob1.body,roof.body,-bobDiameter*2,0)
rope2= new Rope(bob2.body,roof.body,-bobDiameter*1,0)
rope3= new Rope(bob3.body,roof.body,0,0)
rope4= new Rope(bob4.body,roof.body,bobDiameter,0)
rope5= new Rope(bob5.body,roof.body,bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed()
 { if (keyCode === UP_ARROW) { Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); } }


