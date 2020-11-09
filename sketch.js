var spaceship,spaceshipImage;
var backGround,backgroundImage;
var stone,stoneImage,stoneGroup;
var score;


function preload(){
  
spaceshipImage=loadImage("unnamed.png")
backgroundImage= loadImage("bg.png") 
stoneImage=loadImage("sstone.png")  
  
}

function setup(){
createCanvas(600,600)  

backGround= createSprite(300,300);
backGround.addImage("building",backgroundImage);
backGround.velocityY=-1;  

spaceship = createSprite(300,300);
spaceship.addImage("galaxy",spaceshipImage);
spaceship.scale=0.3

stoneGroup= createGroup(); 
score = 0;

}

function draw(){

 background("purple");

if (backGround.y > 300){
backGround.y = backGround.height/2;
} 
    
spawnStone();

if (keyDown("UP_ARROW")) {
    spaceship.velocityX = 0;
    spaceship.velocityY = -3;
     }
  if (keyDown("DOWN_ARROW")) {
    spaceship.velocityX = 0;
    spaceship.velocityY = 3;
    }
  if (keyDown("RIGHT_ARROW")) {
    spaceship.velocityX = 3;
    spaceship.velocityY = 0;
     }
  if (keyDown("LEFT_ARROW")) {
    spaceship.velocityX = -3;
    spaceship.velocityY = 0;
   }

  if (stoneGroup.isTouching(spaceship)){

    stroke(0);
    fill("yellow");
    textSize(24);
    text("Game over",300,300);
    stone.setVelocity(0,0);
    spaceship.setVelocity(0,0);
    
   
    
  

  }





drawSprites();
}

function spawnStone(){

if (frameCount % 300 === 0){

stone=createSprite(300,-3,20,50);
stone.addImage(stoneImage);
stone.velocityY=1; 
stone.x=Math.round(random(100,400));  
stone.scale=0.3;

stoneGroup.add(stone);

}




}