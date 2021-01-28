//The consts are defined outside the duck for the sake of managing them.
//This will get refactor once params is up.
const MIN_WALK = 120.453125;
const MAX_WALK = 293.75;
const MAX_RUN = 550.75;
const ACC_WALK = 153.59375;
const ACC_RUN = 750.390625;
const SLIDE_DECEL = 450;

class duck {

  constructor(game, state, x, y) {
    this.game = game
    this.x = x
    this.y = y
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/duck.png")
    this.facing = 'r' // l for left, r for right.
    this.state = state // stand, jump, walk, squat, slide, hover, freefall are considered valid options.
    this.armstate = 'down' // matchbody, hold
    this.game.duck = this

    this.velocityX = 0;
    this.velocityY = 0;

    //Bounding boxes.
    //Call it twice to initialize the old bounding box.
    this.setBoundingBoxes(2)
    this.setBoundingBoxes(2)

    this.animators = []; //[state][facing]
    this.armAnimators = []; //[state][facing][hold] Does not render when standing unless we are holding something.

    this.animators["stand"] = []
    this.animators["walk"] = []
    this.animators["run"] = []
    this.animators["slide"] = []
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
    this.animators["slide"]["r"] = new animator(this.spritesheet,
      5,
      79,
      22,//Width
      24,//Height
      1,
      0.10,
      4,
      false,
      true,
      null)
    this.animators["slide"]["l"] = new animator(this.spritesheet,
      164,
      79,
      22,//Width
      24,//Height
      1,
      0.10,
      4,
      false,
      true,
      null)
  }

  update() {
    let tick = this.game.clockTick;
    //These constants I did copy just so I remembered the basic constants I should use here. The rest I typed out manually with some vague inspirations being pulled
    //From the lecture examples.

    //Each state group method manages the controls and physics that are strictly unique to that
    //set of states.

    //Walking acceleration and no friction in this state group.
    if (this.state == "stand" || this.state == "walk" || this.state == "run")
      this.walkingLogic(tick);

    //If above walk_max, slow down slightly but don't slow down
    //all the way to walk_max, after 0.0834 seconds have elapsed jump.
    //If the jump key is held for the full jumpsquat, jump high, if the jump key is released, 
    //jump low.
    if (this.state == "squat")
      this.jumpSquatLogic(tick);

    //Cannot try to jump.
    if (this.state == "jump" || this.state == "hover" || this.state == "freefall")
      this.airLogic(tick);

    //Slow down gradually until walk max is reached.
    //Do a fast startup short jump in this state rather then squatting.
    if (this.state == "slide")
      this.slideLogic(tick);

    //Fall at a slower rate
    //Jump away from the nearest wall upwards if jump is pressed.
    //If the player tries to away from the wall, jump away from the 
    //wall with a downwards speed boost.
    if (this.state == "wallcling")
      this.wallLogic(tick);

    this.x += this.velocityX * tick
    this.y += this.velocityY * tick

    //Bounding box logic.
    this.updateBB()
  }
  
  setBoundingBoxes(scale){
    this.oldBB = this.BB;
    this.BB = new boundingBox(this.x, this.y, 16*scale, 25*scale);
    this.oldcBB = this.cBB;
    this.cBB = new boundingBox(this.x-3*scale, this.y+11*scale, 22*scale, 14*scale);
  }

  updateBB() {
    this.setBoundingBoxes(2)
  }

  airLogic(tick) {

  }

  jumpSquatLogic(tick) {

  }

  slideLogic(tick) {
    //console.log(this.velocityX)
    //Check if we should leave the slide state.
    if (!this.game.down) {
      if (Math.abs(this.velocityX) > MAX_RUN){
        this.velocityX = Math.sign(this.velocityX) * MAX_RUN
      }
      //If the player no longer wants to slide, and they are slow enough to run, they can stop sliding.
      this.state = "run"
      //If we are sliding really slowly.
      if (Math.abs(this.velocityX) < MAX_WALK)
        this.state = "walk"
    }
    else {
      //Apply this friction so long as we aren't traveling too slowly, to prevent cases where the player character gets stuck sliding under an obstacle.
      if (Math.abs(this.velocityX) > MAX_WALK * 0.25){
        //Friction is opposite to the direction of movement.
        this.velocityX -= SLIDE_DECEL * Math.sign(this.velocityX) * tick
      } 
    }

  }

  airLogic(tick) {

  }

  walkingLogic(tick) {

    //Typing out basic walk physics.
    if (this.game.left && !this.game.right) {
      if (this.velocityX > -MIN_WALK)
        this.velocityX = -MIN_WALK;
      if (this.game.sprint) {
        this.velocityX -= ACC_RUN * tick
      } else {
        this.velocityX -= ACC_WALK * tick
      }
    } else
      if (this.game.right && !this.game.left) {
        if (this.velocityX < MIN_WALK)
          this.velocityX = +MIN_WALK;
        if (this.game.sprint) {
          this.velocityX += ACC_RUN * tick
        } else {
          this.velocityX += ACC_WALK * tick
        }
      } else {
        //No slide for now.
        this.velocityX = 0
      }

    //Sped capping.
    if (this.game.right && this.velocityX > MAX_RUN) {
      this.velocityX = MAX_RUN;
      if (!this.game.sprint && this.velocityX > MAX_WALK) {
        this.velocityX = MAX_WALK;
      }
    }

    if (this.game.left && this.velocityX < -MAX_RUN) {
      this.velocityX = -MAX_RUN;
      if (!this.game.sprint && this.velocityX < -MAX_WALK) {
        this.velocityX = -MAX_WALK;
      }
    }


    //Select our state.
    if (this.velocityX == 0) {
      this.state = "stand"
    } else {
      this.state = "walk"
      if (this.velocityX < -MAX_WALK || this.velocityX > MAX_WALK)
        this.state = "run"
      if (this.velocityX > 0.1)
        this.facing = "r"
      if (this.velocityX < -0.1)
        this.facing = "l"
      if (this.game.down){
        this.state = "slide"
        //Sliding gives a small instant speed boost, this includes some instant movement to keep the center of mass of the duck in line with its original center of mass.
        //This is proportional to how quickly a slide decelerates for now.
        this.velocityX += SLIDE_DECEL * Math.sign(this.velocityX)
      }
    }
  }

  draw(ctx) {
    let offset = 0
    if (this.state == "slide"){
      offset = -7
    }
    this.animators[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x + offset, this.y, 2)
    if (this.state != "stand" && this.state != "slide" && this.armstate != "hold")
      if (this.armstate != "hold")
        this.armAnimators[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y + 16, 2)

    ctx.strokeStyle = 'Red';
    ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
    ctx.strokeStyle = 'Blue';
    ctx.strokeRect(this.cBB.x, this.cBB.y, this.cBB.width, this.cBB.height);

  }
}
