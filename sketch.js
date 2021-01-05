
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var bob1,bob2,bob3,bob4,bob5,roof
var rope1,rope2,rope3,rop4,rop5

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bobDia=40

  roof=new Roof(width/2,height/4,width/2,20)

  bobPosX=width/2
  bobPosY=height/2

  bob1= new Bob(bobPosX,bobPosY,bobDia)
  bob2=new Bob(bobPosX-bobDia,bobPosY,bobDia)
  bob3=new Bob(bobPosX+bobDia,bobPosY,bobDia)
  bob4=new Bob(bobPosX-(bobDia*2),bobPosY,bobDia)
  bob5=new Bob(bobPosX+(bobDia*2),bobPosY,bobDia)

  rope1=new Rope(bob1.body,roof.body,0,0)
  rope2=new Rope(bob2.body,roof.body,+bobDia,0)
  rope3=new Rope(bob3.body,roof.body,-bobDia,0)
  rope4=new Rope(bob4.body,roof.body,+bobDia*2,0)
  rope5=new Rope(bob5.body,roof.body,-bobDia*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===LEFT_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

  }
}
