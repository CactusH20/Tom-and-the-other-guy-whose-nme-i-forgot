var cat, catImage, catStop, catWalking;
var mouse, mouseImage, mouseStop, mouseTeasing;
var garden, gardenImage;

function preload() {
    catWalking = loadAnimation('images/cat2.png', 'images/cat3.png');
    catImage = loadImage('images/cat1.png');
    catStop = loadImage('images/cat4.png');
    mouseTeasing = loadAnimation('images/mouse2.png','images/mouse3.png');
    mouseImage = loadImage('images/mouse1.png');
    mouseStop = loadImage('images/mouse4.png');
    gardenImage = loadImage('images/garden.png');
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400,10,10);
    garden.addImage(gardenImage);
    garden.scale = 1.5;
    cat = createSprite(900,700,20,20);
    cat.addAnimation('start', catImage);
    cat.scale = 0.25;
    mouse = createSprite(100,725,20,20);
    mouse.addAnimation('cheese', mouseImage);
    mouse.scale = 0.15;
}

function draw() {
    background(255);
    keyPressed();
    CandMCollision();
    drawSprites();
}


function keyPressed(){

  if (keyDown('left')){
      mouse.addAnimation('haha', mouseTeasing);
      mouse.changeAnimation('haha');
      cat.addAnimation('come here', catWalking);
      cat.changeAnimation('come here');
      cat.velocityX = -5;
  }
}

function CandMCollision(){
    if (cat.x - mouse.x<(cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation('boom', catStop);
        cat.changeAnimation('boom');
        mouse.addAnimation('boom', mouseStop);
        mouse.changeAnimation('boom');
    }
}