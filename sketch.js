var bullet;
var wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(400, 200, 40, 15);
  bullet.shapeColor = "black";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  speed = random(223,321);
  weight = random (30,52);
  
  thickness = random(22,83);
  
  bullet.velocityX = speed;
}

function draw() {

  background(255,255,255); 
  //background.shapeColor = "black"; 

  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(damage<10){
       bullet.shapeColor = "green";
  }

  if(damage>10){
    bullet.shapeColor = "red";
  }

}

  drawSprites();
}