
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score ,survivalTime;

function preload(){ 
  createCanvas(600, 200);
    
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   
//create monkey sprite
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1
monkey.visible=true;

ground=createSprite(400,350,900,10);  
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
}


function draw() {

background("white");
  
stroke("white");
textSize(20);
fill("white");
text("score  :"+ score,500,50);

stroke("black");
textSize(20); 
fill("black");
survivalTime= Math.ceil(frameCount/frameRate())
text("Survival Time :" + survivalTime,100,50);

if (keyDown("space") && monkey.y>=161.5 ) {
monkey.velocityY=-12; 
}
  
monkey.velocityY = monkey.velocityY + 0.8

if (ground.x < 0) {
      ground.x = ground.width / 2;
}

monkey.collide(ground); 
  
spawnBanana();
spawnObstacles();
  
drawSprites();
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    banana = createSprite(600,100,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(10,60))
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    
    //assigning lifetime to the variable
    banana.lifetime = 400
    
    //adjust the depth
    banana.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
}
}

function spawnObstacles() {
  
if (frameCount % 60 === 0) {
    obstacle = createSprite(400,350,10,900);
    obstacle.addImage(obstacleImage)
    obstacle.y = Math.round(random(300,350))
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
    
    //assigning lifetime to the variable
    obstacle.lifetime = 200;
  
  obstacle.collide(ground);
}
}