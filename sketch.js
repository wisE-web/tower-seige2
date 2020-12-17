const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world; 
var score = 0;
  
function setup() {
  engine = Engine.create();
	world = engine.world;
  createCanvas(800,400);
 
  ground1 = new Ground(400,300,150,10);
  box1 = new Box(390,280,30,30);
  box2 = new Box(420,280,30,30);
  box3 = new Box(360,280,30,30);
  box4 = new Box(375,260,30,30);
  box5 = new Box(401,260,30,30);
  box6 = new Box(385,242,30,30);
  polygon = new Polygon(100,170,50,50);
  slingShot = new SlingShot(polygon.body,{x:100,y:170});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  text("score : " + score,550,40);
  drawSprites();
  ground1.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  polygon.display();
  slingShot.display();
}
function mouseDragged(){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
 
}


function mouseReleased(){
  slingShot.fly();
  
}

function keyPressed(){
  if (keyCode === 32) {
    slingShot.attach(polygon.body);
  }
}