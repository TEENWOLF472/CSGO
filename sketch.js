var car , wall;
var weight , speed;
var deformation;

function setup() {

  createCanvas(1600,400);

 car =  createSprite(400, 200, 30, 30);

 wall = createSprite(1200 , 200, 10, height/2);
 wall.shapeColor = (80,80,80);

 weight = random(400,1500);
 speed = random(55,90);

}

function draw() {

  background(255,255,255);
  
  car.velocityX = speed;

  if (car.isTouching(wall)){
  car.velocityX = 0
  var deformation = 0.5 * weight * speed * speed/22509;
  

  if (deformation > 180){
    car.shapeColor = ("red");
  }

 if (deformation < 180 && deformation > 100){
 car.shapeColor = ("yellow");
 }

 if (deformation < 100){
   car.shapeColor = ("green");
 }
} 

  drawSprites();

}