class Game {

  constructor(canvasId, onGameEnd) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = 384;
    this.canvas.height = 498;
    this.ctx = this.canvas.getContext('2d');

    this.drawIntervalId = undefined;
    this.fps = 1000 / 60;

    this.bg = new Background(this.ctx)

    // iteration 2: setup the flappy

    // iteration 2: setup the flappy

    this.pipes = [];
    this.drawPipesCount = 0;
    this.pipesFrequency = 100;

    // bonus: setup the score
  }
  

  onKeyEvent(event) {
    // iteration 2: link flappy key events
  }

  start() {
    console.log ("traza2");

    if (!this.drawIntervalId) {
      console.log ("traza3");
 
      this.drawIntervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
      }, this.fps);
    }
  }

  stop() {
    // Iteration 1: stop the game
  }

  restart() {
    // Bonus: restart on demand
  }

  end() {
    // Iteration 4: stop the game and setup score
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  move() {
    // Iteration 1: move the background
    this.bg.move();
    // Iteration 2: move the flappy
    // Iteration 3: move the pipes
  }

  addPipes() {
    // Iteration 3: each draw pipes frequency cycles concat a pair of pipes to the pipes array and reset the draw cycle
  }

  randPairOfPipes() {
    // Iteration 3: return two new pipes inside an array. MIND THE GAP
  }

  checkCollisions() {
    // Iteration 4: check pipes collisions among flappy
  }

  checkScore() {
    // Bonus
  }

  draw() {
    this.bg.draw();
        // Iteration 2: draw the flappy
    // Iteration 2: draw the pipes
    // Bonus: draw the score
  }
}
