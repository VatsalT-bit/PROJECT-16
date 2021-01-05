var play = 1;
var END = 0;
var gameState = play;
var sword, swordimage;
var fruit_1, fruit1Image;
var fruit_2, fruit2Image;
var fruit_3, fruit3Image;
var fruit_4, fruit4Image;
var microbe_1, microbe1image;
var microbe_2, microbe2image;
var score;
var gameover, gameoverimage;
var knifeSound,gameoverSound;


function preload() {
  swordimage = loadImage("sword.png");
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");

  microbe1image = loadAnimation("alien1.png");
  microbe2image = loadAnimation("alien2.png");

  gameoverimage = loadImage("gameover.png");
  
  knifeSound = loadSound("knifeSwooshSound.mp3");
  gameoverSound = loadSound("gameover.mp3");
}

function setup() {
  createCanvas(600, 600);
  sword = createSprite(270, 220, 10, 10);
  sword.addImage(swordimage);

  score = 0;

  fruitGroup = createGroup();
  enemyGroup = createGroup();
}

function draw() {
  background("cyan");
  if(gameState===play){

    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score = score + 1;
      knifeSound.play();
    }

    if (enemyGroup.isTouching(sword)) {
      gameState = END;
      gameoverSound.play();
    }

    sword.y = World.mouseY;
    sword.x = World.mouseX;
    fruits();
    microbes();
    
  } else if (gameState === END) {
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();

    sword.changeAnimation("gameoverimage", gameover);
    sword.addImage(gameoverimage);
    sword.y = 250;
    sword.x = 300;
    fruitGroup.setVelocityEach(0);
    enemyGroup.setVelocityEach(0);

  }

  drawSprites();
  text("score:" + score, 400, 30);
}

function fruits() {
  if (frameCount % 100 === 0) {
    fruit_1 = createSprite(85, 75, 10, 10);
    fruit_1.x = Math.round(random(1,2));
    fruit_1.y = Math.round(random(10,500));
    fruit_1.addImage("fruit1image", fruit1Image);
    fruit_1.scale = 0.2;
    fruit_1.velocityX = 3;
    fruit_1.velocityY = -1;
    fruit_1.velocityX=-(5+(score/3));
    fruit_1.x=(300+(score/3));
    fruit_1.lifetime = 210;
    fruitGroup.add(fruit_1);        
  }

  if (frameCount % 200 === 0) {
    fruit_2 = createSprite(85, 135, 10, 10);
    fruit_2.x = Math.round(random(10,500));
    fruit_2.addImage("fruit2image", fruit2Image);
    fruit_2.scale = 0.2;
    fruit_2.velocityX = 3;
    fruit_2.velocityY = 2;
    fruit_2.velocityX = (6+(score/3));
    fruit_2.lifetime = 210;
    fruitGroup.add(fruit_2);
  }

  if (frameCount % 300 === 0) {
    fruit_3 = createSprite(85, 195, 10, 10);
    fruit_3.x = Math.round(random(15, 25));
    fruit_3.addImage("fruit3image", fruit3Image);
    fruit_3.scale = 0.2;
    fruit_3.velocityX = 6;
    fruit_3.velocityY = -2;
    fruit_3.velocityX = (6+(score/3));
    fruit_3.x=(350+(score/3));
    fruit_3.lifetime = 210;
    fruitGroup.add(fruit_3);
  }

  if (frameCount % 400 === 0) {
    fruit_4 = createSprite(85, 280, 10, 10);
    fruit_4.x = Math.round(random(1, 4))
    fruit_4.addImage("fruit4image", fruit4Image);
    fruit_4.scale = 0.2;
    fruit_4.velocityX = 3;
    fruit_4.velocityY =-3;
    fruit_4.velocityX = (6+(score/3));    
    fruit_4.lifetime = 210;
    fruitGroup.add(fruit_4);
  }
}

function microbes() {
  if (frameCount % 253 === 0) {
    microbe_1 = createSprite(150, 300, 10, 10);
    microbe_1.addAnimation("microbe1image", microbe1image);
    microbe_1.x = Math.round(random(20, 40));
    microbe_1.y = Math.round(random(100, 120));
    microbe_1.velocityX = 2;
    microbe_1.velocityY = -2;
    microbe_1.velocityX= (6+(score/10));
    microbe_1.lifetime = 210;
    enemyGroup.add(microbe_1);
  }


  if (frameCount % 212 === 0) {
    microbe_2 = createSprite(150, 400, 10, 10);
    microbe_2.addAnimation("microbe2image", microbe2image);
    microbe_2.x = Math.round(random(10, 20));
    microbe_2.x = Math.round(random(130, 160));
    microbe_2.velocityX = 3;
    microbe_2.velocityY = -3;
    microbe_2.velocityX= (6+(score/10));    
    microbe_2.lifetime = 210;
    enemyGroup.add(microbe_2);
  }
}