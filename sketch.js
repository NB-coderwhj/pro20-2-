var speed, weight, deformation;
var car, wall;

function setup() {
  createCanvas(800,400);
  speed = Math.round(random(55,90))
  weight = Math.round(random(400,1500))
  car = createSprite(100, 200, 50, 50);
  car.velocityX = 10;
  wall = createSprite(700, 200, 60, height/2);

  console.log(speed)
  console.log(weight)

}

function draw() {
  background("pink");  
  drawSprites();

  if(wall.x - car.x < (wall.width+car.width)/2){
    car.velocityX = 0;
    deformation =0.5*weight*speed*speed/22500;

    if(deformation < 100){
      car.shapeColor = "green"
    }else if(deformation > 180){
      car.shapeColor = "red"
    }else if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow"
    }

  }
}

