let spritesheet;
let spritedata;

let animation = [];

function preload() {
  spritesheet = loadImage('ninja.png');
}


function setup() {
  createCanvas(600, 100);
  for (let i = 0; i < 9; i++) {
    let img = spritesheet.get(80*i, 0, 80, 80);
    animation.push(img);
  }

  sprite = new Sprite(animation,0,0,.5)
}

function draw() {
  background(100)
  
  sprite.show();
  if(keyIsDown(RIGHT_ARROW))
    sprite.walkRight();
  else if(keyIsDown(LEFT_ARROW))
    sprite.walkLeft();
  else
    sprite.stand();
}