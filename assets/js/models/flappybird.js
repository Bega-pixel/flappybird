class FlappyBird {

  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.jumpImpulse = 70;
    this.vy = 3;

    this.sprite = new Image();
    this.sprite.src = './assets/img/bird.png';
    this.sprite.horizontalFrame = 3 ;
    this.sprite.verticalFrame = 1 ;
    this.sprite.horizontalIndex = 0 ;
    this.sprite.verticalIndex = 0 ;    
    this.sprite.isReady = false;
    this.sprite.onload = () => {
      this.sprite.isReady = true;
      this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrame);
      this.sprite.frameHeight =Math.floor(this.sprite.height / this.sprite.verticalFrame);
      this.width = this.sprite.frameWidth ;
      this.height = this.sprite.frameHeight ;
    }
    
    this.drawCount = 0;
    this.movements = {
      up: false
    }
  }

  onKeyEvent(event) {
    // iteration 2: configure frame animation
    const state = event.type === 'keydown';
    switch(event.keyCode){
      case KEY_UP:
        this.movement.up = state;
        break;
    }
  }

  draw() {
    if (this.sprite.isReady) {
      // draw sprite
      this.drawCount++;
      // animate sprite
    }
  }

  animate() {
    // iteration 2: configure frame animation
    this.animateFrame();
  }

  animateFrame(initVerticalFrame, initHorizontalFrame, segments, frequency) {
    // iteration 2: animate the sprite
  }

  move() {
    // iteration 2: move the y
  }

  collides(element) {
    // iteration 3: check collisions (true|false)
  }

}
