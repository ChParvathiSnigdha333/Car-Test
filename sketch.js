var car, carImg, greenCarImg, yellowCarImg, redCarImg, wall, wallImg;
var speed, weight;

function preload(){

carImg = loadImage ("car.png")

wallImg = loadImage ("wall.jpg")

redCarImg = loadImage ("red car.png")
yellowCarImg = loadImage ("yellow car.png")
greenCarImg = loadImage ("car green.png")
}

function setup() {
  createCanvas(1600,400);

  speed = random (55,90)
 weight = random (400,1500)

 car = createSprite(50, 200,50,50);
 car.addImage("car",carImg)
 car.scale = 0.1;
car.velocityX = speed;

wall = createSprite(1500, 200,60, height/2);
 wall.addImage("wall", wallImg)
 wall.scale = 0.2;

}

function draw() {
  background("lightblue");

  if (wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509 ;

  if (deformation > 180){
    car.changeAnimation(redCarImg)
   }

  if (deformation < 180 && deformation > 100){
    car.changeAnimation(yellowCarImg)
  }

  if (deformation < 100){
    car.changeAnimation(greenCarImg)
  }
 }

  drawSprites();
}