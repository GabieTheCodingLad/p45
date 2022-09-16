var sollyImage,povImage,rocketImage,demoImage,grnadImage
var soldier,pov,rocket,demo,grenade

function preload() {
   sollyImage = loadImage("solly.png")
   povImage = loadImage("pyroPov.png")
   rocketImage = loadImage("rocket.png")
   demoImage = loadImage("demoman.png")
   grnadImage = loadImage("grenade.png")
}

function setup() {
    createCanvas(1350,600);
pov = createSprite(width/2,height/2 + 112,width,height)
pov.addImage(povImage)
  

}

function draw() {
    background(200,200,200);

   

    drawSprites();
    console.log(Math.round(frameCount/180));
    solly();

}

function solly() {
    if (frameCount % 180 == 0) {
        soldier = createSprite(random(100,1250),random(100,500),50,70)
        soldier.addImage(sollyImage)
        soldier.lifetime = 100
    }
}