//The consts are defined outside the duck for the sake of managing them.
//This will get refactor once params is up.
const MIN_WALK = 120.453125;
const MAX_WALK = 293.75;
const MAX_RUN = 550.75;
const ACC_WALK = 153.59375;
const ACC_AIR = 280;
const ACC_RUN = 750.390625;
const SLIDE_DECEL = 450;
const GRAVITY = 1800;
const TERMINAL_VELOCITY = 1300;
const troof = true;

class duck {

  constructor(game, state, x, y) {
    this.game = game
    this.x = x
    this.y = y
    this.spritesheet = ASSET_MANAGER.getAsset("./sprites/duck.png")
    this.rEVspritesheet = ASSET_MANAGER.getAsset("./sprites/duck (Reverse).png")
    this.facing = 'r' // l for left, r for right.
    this.state = state // stand, jump, walk, squat, slide, hover, freefall are considered valid options.
    this.armstate = "down" // matchbody, hold
    this.game.duck = this

    this.velocityX = 0;
    this.velocityY = 0;

    //Bounding boxes.
    //Call it twice to initialize the old bounding box.
    this.updateBB(2)
    this.updateBB(2)
    this.oldBB = this.BB;

    this.animators = []; //[state][facing]
    this.armAnimators = []; //[state][facing][hold] Does not render when standing unless we are holding something.

    this.animators["stand"] = []
    this.animators["walk"] = []
    this.animators["run"] = []
    this.animators["slide"] = []
    this.animators["wallcling"] = []
    this.animators["squat"] = []
    this.animators["crouch"] = []
    this.animators["jump"] = []
    this.animators["freefall"] = []
    this.animators["wallslide"] = []
    this.armAnimators["stand"] = []
    this.armAnimators["walk"] = []
    this.armAnimators["run"] = []
    this.armAnimators["squat"] = []
    this.armAnimators["jump"] = []
    this.armAnimators["walk"]["l"]= []  //done
    this.armAnimators["walk"]["r"]= []  //done
    this.armAnimators["run"]["l"]= []   //done
    this.armAnimators["run"]["r"]= []   //done
    this.armAnimators["squat"]["l"]= []
    this.armAnimators["squat"]["r"]= []
    this.armAnimators["stand"]["l"]= [] //done
    this.armAnimators["stand"]["r"]= [] //done
    this.armAnimators["jump"]["l"]= []  //done
    this.armAnimators["jump"]["r"]= []  //done


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

    this.armAnimators["walk"]["r"]["down"]= new animator(this.spritesheet,
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

    this.armAnimators["walk"]["l"]["down"]= new animator(this.spritesheet,
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

    this.animators["run"]["r"]= new animator(this.spritesheet, // Spritesheet
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

    this.armAnimators["run"]["r"]["down"]= new animator(this.spritesheet,
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

    this.armAnimators["run"]["l"]["down"]= new animator(this.spritesheet,
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

    this.armAnimators["run"]["l"]["holding"]= new animator(this.spritesheet,
      37,
      572,
      12,
      14,
      1,
      0.10,
      4,
      true,
      true,
      null)

    this.armAnimators["run"]["r"]["holding"]= new animator(this.rEVspritesheet,
      372,
      588,
      12,
      14,
      1,
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

    this.animators["squat"]["r"] =
      new animator(this.spritesheet, // Spritesheet
        167, //X
        46, //Y
        16, //Width
        25, //Height
        1, //Frames
        0.12, //Time
        16, //Padding
        false, //reverse
        true, // looping,
        null) //No idle animation because I am looping.
    //Facing isn't implemented yet.

    this.animators["squat"]["l"] =
      new animator(this.spritesheet, // Spritesheet
        12, //X
        158, //Y
        16, //Width
        25, //Height
        1, //Frames
        0.12, //Time
        16, //Padding
        false, //reverse
        true, // looping,
        null) //No idle animation because I am looping.

    this.animators["crouch"]["r"] =
      new animator(this.spritesheet, // Spritesheet
        167, //X
        46, //Y
        16, //Width
        25, //Height
        1, //Frames
        0.12, //Time
        16, //Padding
        false, //reverse
        true, // looping,
        null) //No idle animation because I am looping.
    //Facing isn't implemented yet.

    this.animators["crouch"]["l"] =
      new animator(this.spritesheet, // Spritesheet
        12, //X
        158, //Y
        16, //Width
        25, //Height
        1, //Frames
        0.12, //Time
        16, //Padding
        false, //reverse
        true, // looping,
        null) //No idle animation because I am looping.

    this.animators["freefall"]["l"] =
      new animator(this.spritesheet, // Spritesheet
        106, //X
        160, //Y
        22, //Width
        26, //Height
        1, //Frames
        0.12, //Time
        0, //Padding
        true, //reverse
        true, // looping,
        null) //No idle animation because I am looping.
    //Facing isn't implemented yet.

    this.animators["freefall"]["r"] =
      new animator(this.spritesheet, // Spritesheet
        71, //X
        47, //Y
        22, //Width
        25, //Height
        1, //Frames
        0.12, //Time
        0, //Padding
        false, //reverse
        true, // looping,
        null) //No idle animation because I am looping.
    //Facing isn't implemented yet.

    this.animators["jump"]["l"] =
      new animator(this.spritesheet, // Spritesheet
        138, //X
        158, //Y
        16, //Width
        25, //Height
        1, //Frames
        0.12, //Time
        0, //Padding
        false, //reverse
        true, // looping,
        null) //No idle animation because I am looping.
    //Facing isn't implemented yet.

    this.animators["jump"]["r"] =
      new animator(this.spritesheet, // Spritesheet
        39, //X
        45, //Y
        16, //Width
        27, //Height
        1, //Frames
        0.12, //Time
        16, //Padding
        false, //reverse
        true, // looping,
        null) //No idle animation because I am looping.
    //Facing isn't implemented yet.

    this.animators["wallcling"]["l"] =     //when wall cling left
      new animator(this.spritesheet, // Spritesheet
        107, //X
        46, //Y
        16, //Width
        27, //Height
        1, //Frames
        0.12, //Time
        16, //Padding
        false, //reverse
        true, // looping,
        null) //No idle animation because I am looping.
    //Facing isn't implemented yet.

    this.animators["wallcling"]["r"] =     //when wall cling left
      new animator(this.spritesheet, // Spritesheet
        71, //X
        158, //Y
        16, //Width
        27, //Height
        1, //Frames
        0.12, //Time
        16, //Padding
        false, //reverse
        true, // looping,
        null) //No idle animation because I am looping.
    //Facing isn't implemented yet.

    this.armAnimators["stand"]["l"]["down"]= new animator(this.spritesheet,
      49,
      478,
      12,
      14,
      1,
      0.10,
      4,
      true,
      true,
      null)

    this.armAnimators["stand"]["r"]["down"]= new animator(this.spritesheet,
      34,
      518,
      12,
      14,
      1,
      0.10,
      4,
      true,
      true,
      null)

    this.armAnimators["jump"]["l"]["down"]= new animator(this.spritesheet,
      47,
      478,
      12,
      14,
      1,
      0.10,
      4,
      true,
      true,
      null)

    this.armAnimators["jump"]["r"]["down"]= new animator(this.spritesheet,
      34,
      518,
      12,
      14,
      1,
      0.10,
      4,
      true,
      true,
      null)

    this.setSpawn(x, y)
  }

  setSpawn(x, y, spawnPoint = null) {

    if (this.spawn)
      this.spawn.active = false //Deactivate the old spawn point if it exists.

    this.spawnX = x
    this.spawnY = y

    this.spawn = spawnPoint //If no spawnpoint is given, the spawnpoint is null.
    if (spawnPoint)
      spawnPoint.active = true
  }

  die(killer) {
    let myCenter = this.BB.center()
    //Only the player character needs a death time.
    this.deathTime = 0
    this.state = "dead"
    this.velocityX = 0
    this.velocityY = 0

    let corpseVX = 0
    if (killer.facing) {
      if (killer.facing == "r") {
        corpseVX = 550
      }
      else {
        corpseVX = -550
      }
    }

    let myCorpse = new corpses(this.game, myCenter.x, myCenter.y, "duck", this.facing, corpseVX, - 720)
    this.game.addEntity(myCorpse)
  }

  update() {
    let tick = this.game.clockTick;
    //These constants I did copy just so I remembered the basic constants I should use here. The rest I typed out manually with some vague inspirations being pulled
    //From the lecture examples.

    if (this.game.keyK && !this.game.kDisconnect) {
      this.game.kDisconnect = true;
      console.log(this.armstate)
      if (this.armstate == "down") {
        this.armstate = "hold"
      }
      else {
        this.armstate = "down"
      }
    }
      
    // if duck isnt dead
    if (!(this.state == "dead")) {
      this.velocityY += GRAVITY * tick
      if (this.velocityY > TERMINAL_VELOCITY) {
        this.velocityY = TERMINAL_VELOCITY
      }
    }
    //Each state group method manages the controls and physics that are strictly unique to that
    //set of states.

    //Walking acceleration and no friction in this state group.
    if (this.state == "stand" || this.state == "crouch" || this.state == "walk" || this.state == "run")
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

    if (this.state == "dead")
      this.deathLogic(tick);

    this.x += this.velocityX * tick
    this.y += this.velocityY * tick
    //console.log ("duck x: " + this.x)
    //console.log ("duck y: " + this.y)
    
    //Bounding box logic.
    this.collide()
    this.oldBB = this.BB;
    //Check if we are falling.
    if (this.velocityY > 0 && this.state != "slide" && this.state != "wallcling" && this.state != "squat") { this.state = "freefall" }
  }

  deathLogic(tick) {
    this.deathTime += tick
    if (this.deathTime > 3) {
      this.state = "freefall"
      this.x = this.spawnX - 16
      this.y = this.spawnY - 25
      this.velocityX = 0
      this.velocityY = 0
    }
  }



  updateBB(scale) {
    //this.oldBB = this.BB;
    this.BB = new boundingBox(this.x, this.y, 16 * scale, 25 * scale);
    this.oldcBB = this.cBB;
    this.cBB = new boundingBox(this.x - 3 * scale, this.y + 11 * scale, 22 * scale, 14 * scale);
  }

  collide() {
    this.updateBB(2)

    const that = this
    this.game.entities.forEach(function (entity) {
      if (that.state != "slide") {
        if (entity.BB && that.BB.isCollide(entity.BB)) {

          //If the thing is a spawner, set it as our spawn.
          if (entity.spawner) {
            let spawnpoint = entity.BB.center();
            that.setSpawn(spawnpoint.x, spawnpoint.y, entity)
          }

          if (!(that.state == "dead") && (entity.saw)) {
            that.die(entity)
          }


          //If we are landing on something, stop.
          if (entity.platform && that.oldBB.bottom <= entity.BB.top && that.velocityY > 0) {
            //If the entity is droppable and down, let the player fall through it if they are not sliding.
            if (!entity.droppable || !that.game.down) {
              that.velocityY = 0
              that.y = entity.BB.top - 50
              if (that.state == "jump" || that.state == "hover" || that.state == "freefall" || that.state == "wallcling")
                that.state = "stand"
              if (entity.bounce) {
                that.velocityY = -400
                if (that.game.up) {
                  that.velocityY = -750
                }
                that.state = "jump"
              }
              that.updateBB(2)
            } else {
              that.state = "freefall"
            }
          } else
            if (entity.cieling && that.oldBB.top >= entity.BB.bottom) {
              that.velocityY = 0
              that.y = entity.BB.bottom
              that.updateBB(2)
            } else
              if (entity.wall && that.velocityX > 0 && that.BB.right > entity.BB.left) {
                if ((that.state == "jump" || that.state == "hover" || that.state == "freefall" || that.state == "wallcling") && !entity.platform && that.game.right) {
                  that.state = "wallcling"
                  that.facing = "r"
                  that.velocityY *= 0.6
                }
                that.velocityX = 0
                that.x = entity.BB.left - 32
                that.updateBB(2)
              } else
                if (entity.wall && that.velocityX < 0 && that.BB.left < entity.BB.right) {
                  if ((that.state == "jump" || that.state == "hover" || that.state == "freefall" || that.state == "wallcling") && !entity.platform && that.game.left) {
                    that.velocityY *= 0.6
                    that.state = "wallcling"
                    that.facing = "l"
                  }
                  that.velocityX = 0
                  that.x = entity.BB.right
                  that.updateBB(2)
                }
        }
      } else //Sliding uses a different hitbox.
        if (entity.BB && that.cBB.isCollide(entity.BB)) {
          if (entity.platform && that.oldBB.bottom <= entity.BB.top) {
            that.velocityY = 0
            that.y = entity.BB.top - 50
            that.updateBB(2)
          }
          else
            if (entity.wall && that.velocityX > 0 && that.cBB.right > entity.BB.left) {
              that.velocityX = 0
              that.x = entity.BB.left - 38
              that.updateBB(2)
            } else
              if (entity.wall && that.velocityX < 0 && that.cBB.left < entity.BB.right) {
                that.velocityX = 0
                that.x = entity.BB.right + 7
                that.updateBB(2)
              }
        }
    })


  }

  airLogic(tick) {
    //Rising physics.
    if (this.velocityY < 0) {
      this.state = "jump"
      if (this.game.left && !this.game.right) {
        this.velocityX -= ACC_AIR * tick
      } else
        if (this.game.right && !this.game.left) {
          this.velocityX += ACC_AIR * tick
        }
    }
    //Falling physics
    //Horizontal walking movement.
    else {
      this.state = "freefall"
      if (this.game.left && !this.game.right) {
        if (this.velocityX > -MIN_WALK)
          this.velocityX = -MIN_WALK;
        else {
          this.velocityX -= ACC_WALK * tick
        }
      } else
        if (this.game.right && !this.game.left) {
          if (this.velocityX < MIN_WALK)
            this.velocityX = +MIN_WALK;
          else {
            this.velocityX += ACC_WALK * tick
          }
        }
    }
  }

  jumpSquatLogic(tick) {
    this.squatTime += tick
    if (this.squatTime > 0.08) {
      if (this.game.up) this.velocityY = -625
      else this.velocityY = -500
      this.state = "jump"
      this.game.jumpDisconnect = true
    }
  }

  slideLogic(tick) {
    //console.log(this.velocityX)
    //Check if we should leave the slide state.
    if (!this.game.down) {
      if (Math.abs(this.velocityX) > MAX_RUN) {
        this.velocityX = Math.sign(this.velocityX) * MAX_RUN
      }
      this.x -= Math.sign(this.velocityX) * 7
      //If the player no longer wants to slide, and they are slow enough to run, they can stop sliding.
      this.state = "run"
      //If we are sliding really slowly.
      if (Math.abs(this.velocityX) < MAX_WALK)
        this.state = "walk"
    }
    else {
      //Apply this friction so long as we aren't traveling too slowly, to prevent cases where the player character gets stuck sliding under an obstacle.
      if (Math.abs(this.velocityX) > MAX_WALK * 0.25) {
        //Friction is opposite to the direction of movement.
        this.velocityX -= SLIDE_DECEL * Math.sign(this.velocityX) * tick
      }
      if (this.game.up && !this.game.jumpDisconnect) {
        this.game.jumpDisconnect = true
        this.state = "jump"
        this.velocityY = -375
        this.velocityX += Math.sign(this.velocityX) * 250
      }
    }

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
    if (this.game.up && !this.game.jumpDisconnect) {
      this.state = "squat"
      this.squatTime = 0
    } else {
      if (this.velocityX == 0) {
        if (this.game.down)
          this.state = "crouch"
        else
          this.state = "stand"
      } else {
        this.state = "walk"
        if (this.velocityX < -MAX_WALK || this.velocityX > MAX_WALK)
          this.state = "run"
        if (this.velocityX > 0.1)
          this.facing = "r"
        if (this.velocityX < -0.1)
          this.facing = "l"
        if (this.game.down) {
          this.state = "slide"
          //Sliding gives a small instant speed boost, this includes some instant movement to keep the center of mass of the duck in line with its original center of mass.
          //This is proportional to how quickly a slide decelerates for now.
          this.x += Math.sign(this.velocityX) * 7
          this.velocityX += SLIDE_DECEL * Math.sign(this.velocityX)

        }
      }
    }
  }

  wallLogic(tick) {
    //Negate part of gravity.
    if (this.game.left && this.facing == "l" || this.game.right && this.facing == "r") {

      this.velocityY -= 0.7 * GRAVITY * tick
      if (this.game.up && !this.game.jumpDisconnect) {
        //This is where the wall jump would happen.
        if (this.facing == "l") {
          this.velocityY = -550
          this.velocityX = 300
        }
        if (this.facing == "r") {

          this.velocityY = -550
          this.velocityX = -300

        }
        this.state = "jump"
        this.game.jumpDisconnect = true

      }
    } else {
      //If we aren't pressing into the wall, and trying to kick away from the wall, shoot off to the side.
      this.state = "jump"
      if (this.facing == "l" && this.game.right) {
        this.facing = "r"
        this.velocityX += 350
        this.velocityY += 125
      }
      if (this.facing == "r" && this.game.left) {
        this.facing = "l"
        this.velocityX -= 350
        this.velocityY += 125
      }
    }

  }

  draw(ctx) {
    if (!(this.state == "dead")) {
      let offset = 0
      if (this.state == "slide") offset = 7
      //this.armAnimators["holding"]["r"].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2)
      this.animators[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x - offset - this.game.camera.x, this.y - this.game.camera.y, 2)
      if (this.armAnimators[this.state] && this.armAnimators[this.state][this.facing] && this.armAnimators[this.state][this.facing][this.armstate])
        this.armAnimators[this.state][this.facing][this.armstate].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y + 16 - this.game.camera.y, 2)

      let center = this.BB.center()

      ctx.beginPath();
      ctx.strokeStyle = 'Green';
      ctx.arc(center.x - this.game.camera.x, center.y - this.game.camera.y, 1, 0, 2 * Math.PI)
      ctx.stroke();

      ctx.strokeStyle = 'Red';
      ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
      ctx.strokeStyle = 'Blue';
      ctx.strokeRect(this.cBB.x - this.game.camera.x, this.cBB.y - this.game.camera.y, this.cBB.width, this.cBB.height);
    }
  }
}