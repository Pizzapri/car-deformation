
var car,wall;
var speed,weight;


function setup() {
  createCanvas(1000,400);

  car=createSprite(50, 200, 50, 50);
  
  
  wall=createSprite(900,200,60,height/2);

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black");  

  
  
  if(keyDown("space")){
    car.velocityX=speed;
  }

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor="red";
    }
    else if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    else if(deformation<100){
      car.shapeColor="green";
    }
  }

  drawSprites();
}