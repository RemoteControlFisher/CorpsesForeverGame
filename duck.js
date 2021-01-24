class duck {
  constructor(game, state, x, y) {
    this.game = game
    this.x = x
    this.y = y
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/duck.png")
    this.facing = 'r' // l for left, r for right.
    this.state = state // stand, jump, walk, squat, slide are considered valid options.
    this.armstate = 'down' // down, hold

    this.velocity = 0;


    this.animators = []; //[facing][state]
    this.armAnimators = []; //[facing][state][armstate]

    //Currently doesn't follow the conventions for the animator, as facing isn't implemented yet.
    this.animators["walk"] = new animator(this.spritesheet, // Spritesheet
      41, //X
      14, //Y
      16, //Width
      25, //Height
      5, //Frames
      0.12, //Time
      16, //Padding
      false, //reverse
      true, // looping,
      null) //No idle animation because I am looping.
    this.armAnimators["walk"] = new animator(this.spritesheet,
      2,
      519,
      12,
      16,
      6,
      0.10,
      4,
      false,
      true,
      null)

  }

  update() {
    let tick = this.game.clockTick;
    //Currently using the mario walk for the day 1 walk prototype.
    const MIN_WALK = 4.453125;
    const MAX_WALK = 293.75;
    const MAX_RUN = 550.75;
    const ACC_WALK = 333.59375;
    const ACC_RUN = 750.390625;
    //Typing out basic walk physics based on the mariott example now.
    if (this.game.left && !this.game.right) {
      if (this.velocity > -MIN_WALK)
        this.velocity = -MIN_WALK;
      if (this.game.sprint) {
        this.velocity -= ACC_RUN * tick
      } else {
        this.velocity -= ACC_WALK * tick
      }
    } else
      if (this.game.right && !this.game.left) {
        if (this.velocity < MIN_WALK)
          this.velocity = +MIN_WALK;
        if (this.game.sprint) {
          this.velocity += ACC_RUN * tick
        } else {
          this.velocity += ACC_WALK * tick
        }
      } else {
        //No slide for now.
        this.velocity = 0
      }

    //Sped capping.
    if (this.game.right && this.velocity > MAX_RUN) {
      this.velocity = MAX_RUN;
      if (!this.game.sprint && this.velocity > MAX_WALK) {
        this.velocity = MAX_WALK;
      }
    }

    if (this.game.left && this.velocity < -MAX_RUN) {
      this.velocity = -MAX_RUN;
      if (!this.game.sprint && this.velocity < -MAX_WALK) {
        this.velocity = -MAX_WALK;
      }
    }

    this.x += this.velocity * tick 

  }

  draw(ctx) {
    this.animators["walk"].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2)
    this.armAnimators["walk"].drawFrame(this.game.clockTick, ctx, this.x - 1, this.y + 16, 2)



  }
}
