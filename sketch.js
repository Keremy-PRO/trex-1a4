
var trex ,trex_running;
var suelo, suelo_image;
var sueloInvisible;
function preload(){ // PRECARGA DE IMAGENES Y SONIDOS
  trex_running=loadAnimation("trex1.png","trex4.png", "trex3.png");
  suelo_image=loadImage("ground2.png");
}

function setup(){ //CONFIGURACIÓN
  createCanvas(600,200)
trex=createSprite(50,160,10,50)
trex.addAnimation("dinosaurio",trex_running);
trex.scale=0.6;
suelo=createSprite(200,180,400,20);
suelo.addImage("suelito",suelo_image);
suelo=createSprite(200,180,400,10);
}

function draw(){ // DIBUJA
  background("white")
  drawSprites();
  suelo.velocityX=-5;
  trex.collide(suelo);// colisionar contra suelo
  if(keyDown("space")){
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.8;// GRAVEDAD
}
