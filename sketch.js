
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImg, boy;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	  boy = createSprite(200,550,20,20);
	 boy.addImage(boyImg);
	  boy.scale = 0.1;


	  tree = new Tree(400,220,400,400);

	  stone  = new Stone(0,0,40);
	  
	  mango = new Mango(500,300,50);
	  mango1 = new Mango(700,300,40);
	  mango2 = new Mango(450,370,40);
	  mango3 = new Mango(500,360,50);
	  mango4 = new Mango(550,350,40);
	  mango5 = new Mango(650,340,50);
	  mango6 = new Mango(590,240,40);
	  mango7 = new Mango(550,290,40);
	  mango8 = new Mango(640,260,50);
	  mango9 = new Mango(600,310,40);
	  mango10 = new Mango(710,360,50);

	

	  rope = new Rope(stone.body,{x:150,y:480});

     ground = new Ground(400,610,800,13)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");


  detectCollision(stone,mango);
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  
  drawSprites();
 

 tree.display();
 stone.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
 
  rope.display();
  ground.display();

}

function mouseDragged(){

Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}


function mouseReleased(){


rope.fly();


}

function detectCollision(lstone,lmango){

	 mangoBodyPosition = lmango.body.position
	 stoneBodyPosition = lstone.body.position

 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y,)
  if( distance <= lmango.r + lstone.r){


   Matter.Body.setStatic(lmango.body,false);



  }


}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  rope.attach(stone.body);
	}
  }