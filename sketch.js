var bullet,wall,speed,weight,deformation,teext,thickness,damage

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  thickness = random(22,83)
  damage = 0
  weight = random(30,52)
  bullet = createSprite(100, 200, 50, 30);
  wall = createSprite(1550,200,thickness,800)
  wall.shapeColor = color(80,80,80)
  bullet.velocityX = speed
  deformation = 0
  teext = "blank"
}

function draw() {
  background(255,255,255);  
  if (bullet.collide(wall)) {
damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  }
  if (damage<10){
    wall.shapeColor = color(0,255,0)
    teext = "(" + "effective" + ")"
  }
 
  
  if (damage>=10) {
    wall.shapeColor = color(255,0,0)
    teext = "(" + "not effective" + ")"
  }
  if (damage>0) {
  text ("damage :" + round(damage) + teext,200,200)
  }
bullet.collide(wall)
  drawSprites();
}