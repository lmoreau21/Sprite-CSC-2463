class Sprite {
  constructor(animation, x, y) {
    this.x = x;
    this.y = y;
    this.isRight = true;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = random()+.4;
    this.index = 0;
  }

  show() {
    let index = floor(this.index) % this.len;
    if(!this.isRight ){
      scale(-1, 1);
    }else
      scale(1,1)
    image(this.animation[index], this.x, this.y);
  }

  walkRight() {
    if(!this.isRight ){
      scale(-1, 1);
    }else{
      scale(1,1)
    }
    if(!this.isRight ){
      this.x = abs(this.x)-this.w;
      this.isRight  = true;
    }
    this.walk();
  }

  walkLeft(){
    if(!this.isRight ){
      scale(-1, 1);
    }else{
      scale(1,1)
    }
    if(this.isRight){
      this.x = (this.x*-1) - this.w;
      this.isRight  = false;
    }
    this.walk();
  }

  walk(){
    this.index += this.speed;
    this.x += this.speed * 5;

    if (this.x > width && this.isRight ) {
      this.x = -this.w;
    }else if(this.x > 0 &&!this.isRight ){
      this.x = -width-this.w;
    }
  }
  stand(){
    if(!this.isRight ){
      scale(-1, 1);
    }else{
      scale(1,1)
    }
    image(this.animation[0],this.x,this.y)
  }
}