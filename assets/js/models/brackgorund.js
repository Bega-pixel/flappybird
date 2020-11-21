class Background {

  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;

    this.bgImg = new Image();
    this.bgImg.src = './assets/img/game-bg.png';
    this.bgImg.isReady = false;
    if (this.bgImg.onload) {
      this.bgImg.isReady = true;
      this.bgImg.width = this.width;
      this.bgImg.height = this.height;
    }

    this.footerImg = new Image();
    this.footerImg.src = './assets/img/game-bg-footer.png';
    this.footerImg.isReady = false;
    if (this.footerImg.onload) {
      this.footerImg.isReady = true;
      this.footerImg.width = this.width;
    }
    
  }

  draw() {
    if (this.bgImg.isReady && this.footerImg.isReady) {
      this.ctx.drawImage(
        this.bgImg,
        this.x,
        this.y,
        this.width,
        this.height
      )
      this.ctx.drawImage(
        this.footerImg,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
  }

  move() {
    // move the ground

    // check bounds
  }
}
