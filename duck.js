class duck {
  constructor(game, state, x, y) {
    this.game = game
    this.x = x
    this.y = y
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/duck.png")
    this.facing = 'r' // l for left, r for right.
    this.state = state // stand, jump, walk, squat, slide are considered valid options.
    this.armstate = 'down' // matchbody, hold
    this.game.duck = this

    this.velocity = 0;


    this.animators = []; //[state][facing]
    this.armAnimators = []; //[state][facing][hold] Does not render when standing unless we are holding something.

    this.animators["stand"] = []
    this.animators["walk"] = []
    this.animators["run"] = []
    this.armAnimators["walk"] = []
    this.armAnimators["run"] = []

    this.animators["stand"]["r"] =
      new animator(this.spritesheet, // Spritesheet
        8, //X
        14, //Y
        16, //Width
        25, //Height
        1, //Frames
        0.12, //Time
        16, //Padding
        false, //reverse
        true, // looping,
        null) //No idle animation because I am looping.
    //Facing isn't implemented yet.
    this.animators["stand"]["l"] =
      new animator(this.spritesheet, // Spritesheet
        167, //X
        129, //Y
        16, //Width
        25, //Height
        1, //Frames
        0.12, //Time
        16, //Padding
        false, //reverse
        true, // looping,
        null) //No idle animation because I am looping.
    //Facing isn't implemented yet.
    this.animators["walk"]["r"] = new animator(this.spritesheet, // Spritesheet
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
    this.animators["walk"]["l"] = new animator(this.spritesheet, // Spritesheet
      6, //X
      129, //Y
      16, //Width
      25, //Height
      5, //Frames
      0.12, //Time
      16, //Padding
      true, //reverse
      true, // looping,
      null) //No idle animation because I am looping.
    this.armAnimators["walk"]["r"] = new animator(this.spritesheet,
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
    this.armAnimators["walk"]["l"] = new animator(this.spritesheet,
      2,
      479,
      12,
      16,
      6,
      0.10,
      4,
      true,
      true,
      null)
    this.animators["run"]["r"] = new animator(this.spritesheet, // Spritesheet
      41, //X
      14, //Y
      16, //Width
      25, //Height
      5, //Frames
      0.08, //Time
      16, //Padding
      false, //reverse
      true, // looping,
      null) //No idle animation because I am looping.
    this.animators["run"]["l"] = new animator(this.spritesheet, // Spritesheet
      6, //X
      129, //Y
      16, //Width
      25, //Height
      5, //Frames
      0.08, //Time
      16, //Padding
      true, //reverse
      true, // looping,
      null) //No idle animation because I am looping.
    this.armAnimators["run"]["r"] = new animator(this.spritesheet,
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
    this.armAnimators["run"]["l"] = new animator(this.spritesheet,
      2,
      479,
      12,
      16,
      6,
      0.10,
      4,
      true,
      true,
      null)
  }

  update() {
    let tick = this.game.clockTick;
    //These constants I did copy just so I remembered the basic constants I should use here. The rest I typed out manually with some vague inspirations being pulled
    //From the lecture examples.
    const MIN_WALK = 120.453125;
    const MAX_WALK = 293.75;
    const MAX_RUN = 550.75;
    const ACC_WALK = 153.59375;
    const ACC_RUN = 750.390625;

    //Typing out basic walk physics.
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

    //Select our state.
    if (this.velocity == 0) {
      this.state = "stand"
    } else {
      this.state = "walk"
      if (this.velocity < -MAX_WALK || this.velocity > MAX_WALK)
        this.state = "run"
      if (this.velocity > 0.1)
        this.facing = "r"
      if (this.velocity < -0.1)
        this.facing = "l"
    }

  }

  draw(ctx) {

    this.animators[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2)
    if (this.state != "stand" && this.armstate != "hold")
      if (this.armstate != "hold")
        this.armAnimators[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y + 16, 2)

  }
}
