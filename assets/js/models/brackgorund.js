class Background {

  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.vx = -1;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;

    this.bgImg = new Image();
    this.bgImg.src = './assets/img/game-bg.png';
    this.bgImg.isReady = false;
    this.bgImg.onload = () => {
      this.bgImg.isReady = true;
      this.bgImg.width = this.width;
      this.bgImg.height = this.height;
    } ;

    

    this.footerImg = new Image();
    this.footerImg.src = './assets/img/game-bg-footer.png';
    this.footerImg.isReady = false;
    this.footerImg.onload = () => {

      this.footerImg.isReady = true;
      this.footerImg.width = this.width;
      this.footerImg.height = 79;
      this.footerX = this.x;
      this.footerY = this.height - this.footerImg.height
    };
    
  }

  draw() {

    if (this.bgImg.isReady && this.footerImg.isReady) {

      this.ctx.drawImage(
        this.bgImg,
        this.x,
        this.y,
        this.bgImg.width,
        this.bgImg.height
      )
      this.ctx.drawImage(
        this.footerImg,
        this.footerX,
        this.footerY,
        this.footerImg.width,
        this.footerImg.height 
        
      )

      this.ctx.drawImage(
        this.footerImg,
        this.footerX + this.width,
        this.footerY,
        this.footerImg.width,
        this.footerImg.height 
        
      )

    }
  }

  move() {

    this.footerX += this.vx;
    if (this.footerX + this.footerImg.width <= 0){
      this.footerX = 0;
    }


    // check bounds
  }
}
