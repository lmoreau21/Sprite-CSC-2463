isRight = true;
class Sprite {
  constructor(animation, x, y, speed) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
  }

  show() {
    let index = floor(this.index) % this.len;
    if(!isRight){
      scale(-1, 1);
    }else
      scale(1,1)
    image(this.animation[index], this.x, this.y);
  }

  walkRight() {
    if(!isRight){
      this.x = abs(this.x)-this.w;
      isRight = true;
    }
    this.walk();
  }

  walkLeft(){
    if(isRight){
      this.x = this.x*-1 - this.w;
      isRight = false;
    }
    this.walk();
  }

  walk(){
    this.index += this.speed;
    this.x += this.speed * 5;

    if (this.x > width && isRight) {
      this.x = -this.w;
    }else if(this.x > 0 &&!isRight){
      this.x = -width-this.w;
    }
  }
  stand(){
    background(100)
    image(this.animation[0],this.x,this.y)
  }
}