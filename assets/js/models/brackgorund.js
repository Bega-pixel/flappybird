class Background {

  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.vx = -3;
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

    };
    
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
        this.height - this.footerImg.height  ,
        this.width,
        this.footerImg.height 
        
      )

      this.ctx.drawImage(
        this.footerImg,
        this.x + this.width ,
        this.height - this.footerImg.height  ,
        this.width,
        this.footerImg.height 
        
      )

    }
  }

  move() {
    // move the ground
this.footerImg.x += this.vx;



    // check bounds
  }
}
