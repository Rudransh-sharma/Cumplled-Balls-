
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground , ball , c1 , c2 , c3 ; 
var paper ; 
function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600 , 800 , 1600 , 50 )
c1 = new Container(900,730,10,90)
c2 = new Container(1000,770,209,10)
c3 = new Container(1109,730,10,90)
paper = new Paper( 190, 780 , 50 ,50)
Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
 
  ground.display();
c1.display();
c2.display();
c3.display();
paper.display();




  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:85 , y: -85});
	
	}
	}

