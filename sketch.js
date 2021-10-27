
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,leftside, rightside
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
var ball_options={
	isStatic: false, 
	restitution: 0.3,
	friction : 0,
	density: 1.2
}
ball=Bodies.circle(260,100,20,ball_options)
World.add(world,ball)
	

	//Create the Bodies Here.
ground=new Ground(width/2,680,width,20)
leftside= new Ground(1100,600,20,120)
rightside= new Ground(1250,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground,display()
  rightside.display()
  elliespe(ball.postion.x,ball.postion.y,20,20)
  drawSprites();
 
}



