var ground;
var monkey , monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup;
var score = 0;
var randomY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup(){
  createCanvas(400,400);
  ground = createSprite(400,350,900,10);

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.1;
  monkey.debug = true;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}



function draw() {
  

  background("white");
  score = Math.round(frameCount/frameRate());
  text("Survival Time: "+score, 150,50);
  score = Math.round(frameRate());
  console.log(score)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  monkey.collide(ground)
  if(keyWentDown("space")&&monkey.y>200){
    monkey.velocityY = -12;
  }
  if(frameCount%80===0){
    banana();
  }
  if(frameCount%300===0){
    obstacles();
  }
  monkey.velocityY = monkey.velocityY+0.6;
  if(monkey.isTouching(obstacleGroup)){
    monkey.velocityX = 0;
    ground.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    score = 0;
    
  }
  drawSprites();
}

function banana(){
  randomY = Math.round(random(120,200));
  var banana = createSprite(400, randomY, 10,20);
  banana.scale = 0.1;
  banana.velocityX = -4;
  banana.addImage(bananaImage);
  banana.lifetime = 200;
  FoodGroup.add(banana);
  
}
function obstacles(){
  var obstacle = createSprite(400,340,30,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX=-4;
  obstacle.lifetime = 200;
  obstacleGroup.add(obstacle);
}






