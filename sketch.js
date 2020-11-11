var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var food, obstacle;
var score=0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600, 400);
  
  monkey = createSprite(50, 335.09, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.13;
  
  ground = createSprite(300, 380, 1200, 10);
  ground.velocityX=-3;
  

  foodGroup = new Group();
  obstacleGroup = new Group();
}

//to make the bananas
function b(){
  if (frameCount % 80 === 0){
    banana = createSprite(650, 120, 20, 20);
    banana.y=Math.round(random(120, 200));
    banana.addImage("banana.png", bananaImage);
    banana.velocityX=-9;
    banana.lifetime=75;
    banana.scale=0.12;
    foodGroup.add(banana);
  }  
}

//to make the obstacles
function o(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(650, 350, 20, 20);
    obstacle.addImage("obstacle.png", obstacleImage);
    obstacle.velocityX=-11;
    obstacle.lifetime=62;
    obstacle.scale=0.14;
    obstacleGroup.add(obstacle);
  }
}

function draw() {
  background("white");
  
  score = Math.ceil(frameCount/frameRate());
  
  textSize(25);
  fill("black");
  text("Survival Time: " + score, 220, 30);
  
  b();
  o();
  
  if (ground.x< 0){
    ground.x = ground.width/2;
  }
  
  //to make the monkey jump
  if (keyDown("space") && monkey.y>=330){
    monkey.velocityY=-22;
  }
  
  //gravity for the monkey
  monkey.velocityY=monkey.velocityY+1;
  
  monkey.collide(ground);
  

  drawSprites();
}






