var newX = 500
var gameState = "play"

function preload(){
birdImage = loadImage("bird.png")
obstacle1Image = loadImage("building 1.png")
obstacle2Image = loadImage("building 2.png")
aeroplaneImg = loadImage("aeroplane.png")
aeroplane2Img = loadImage("aeroplane2.png")


}

function setup() {
  createCanvas(displayWidth, displayHeight);

obstacleGroup = new Group()
aeroplaneGroup = new Group()

  for(var i = 0; i < 25; i++){
    obstacles = new Obstacle(newX)
    obstacleGroup.add(obstacles.body)
    newX += 500
  }

  bird = new Bird()

}

function draw() {
  background("black");  
console.log(gameState)
bird.body.velocityY += 0.5

bird.body.collide(obstacleGroup)

bird.body.collide(aeroplaneGroup, end)

camera.position.x = bird.body.x + 200

  

  if( gameState === "play"){

    if(keyDown (RIGHT_ARROW)){
      bird.body.x += 10
    }
  
    if(keyDown (LEFT_ARROW)){
      bird.body.x -= 10
    }
  
    if(keyDown("space")){
      bird.body.velocityY = -12
    }
  
    if(frameCount % 200 === 0){
      aeroplane = new Aeroplane(bird.body.x + 1000)
    aeroplaneGroup.add(aeroplane.body)

    }
  }

  if(gameState === "end"){

bird.body.pause()
textSize(25)
text("game Over", bird.body.x, height/2)


  }

  

  drawSprites();
}

function end(aeroplane,bird){

gameState = "end"

}




