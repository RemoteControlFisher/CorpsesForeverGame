//The consts are defined outside the duck for the sake of managing them.
//This will get refactor once params is up.
/**const MIN_WALK = 120.453125;
const MAX_WALK = 293.75;
const MAX_RUN = 550.75;
const ACC_WALK = 153.59375;
const ACC_AIR = 280;
const ACC_RUN = 750.390625;
const GRAVITY = 1800;
*/
class Hoppers {
	constructor(game, x, y, facing = "l") {
		Object.assign(this, { game, x, y, facing });

		this.game = game
		this.x = x
		//console.log("const x" + this.x)
		this.y = y
		//console.log("const y" + this.y)
		this.facevalues = []

		//this.state = state   //Available state [stand], [squat], [jump], [freefall]
		this.state = "stand"
		this.dead = false

		this.velocityX = 0;
		this.velocityY = 0;
		this.velocityN = 0;
		this.spotted = false;

		this.updateBB(2);
		this.oldBB = this.BB;


		this.killable = true;

		this.spritesheetL = ASSET_MANAGER.getAsset("./sprites/slimesprite/Hopper jump.png");
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/slimesprite/Hopper jump r.png");

		this.waitTimer()

		this.animators = []; //[state] [facing]

		this.animators["stand"] = []
		this.animators["squat"] = []
		this.animators["jump"] = []
		this.animators["freefall"] = []

		//xStart, yStart, width, height, frameCount, frameDuration, framePadding
		this.animators["stand"]["r"] =
			new animator(this.spritesheet, 5, 14, 20, 18, 4, 0.1, 12, false, true, null)

		this.animators["stand"]["l"] =
			new animator(this.spritesheetL, 166, 14, 20, 18, 4, 0.1, 12, true, true, null)

		this.animators["squat"]["r"] =
			new animator(this.spritesheet, 262, 14, 20, 18, 1, 0.1, 12, false, true, null)

		this.animators["squat"]["l"] =
			new animator(this.spritesheetL, 6, 14, 20, 18, 1, 0.1, 12, true, true, null)

		this.animators["jump"]["r"] =
			new animator(this.spritesheet, 70, 14, 20, 18, 1, 0.1, 12, false, true, null)

		this.animators["jump"]["l"] =
			new animator(this.spritesheetL, 196, 14, 20, 18, 1, 0.1, 12, true, true, null)

		this.animators["freefall"]["r"] =
			new animator(this.spritesheet, 198, 14, 20, 18, 2, 0.2, 12, false, false,
				new animator(this.spritesheetL, 230, 14, 20, 18, 1, 0.1, 12, true, true, null)
			)

		this.animators["freefall"]["l"] =
			new animator(this.spritesheetL, 38, 14, 20, 18, 2, 0.2, 12, true, false,
				new animator(this.spritesheetL, 38, 14, 20, 18, 1, 0.1, 12, true, true, null)
			)


	};

	waitTimer(timefactor = 1) {
		this.waitTime = timefactor * 0.6 + timefactor * Math.random() * 0.8
		this.waited = 0
	}

	update() {
		//console.log(this.x / 32 + " " + this.y / 32 + " " + this.state)
		if (this.state != "dead") {
			let tick = this.game.clockTick;
			let center = this.BB.center()
			let dcenter = this.game.duck.BB.center()

			//let dfacing = this.game.duck.facing
			//console.log("duck facing: " + dfacing) 

			//length between duck and hoppers
			let length = Math.sqrt(Math.pow(center.x - dcenter.x, 2) + Math.pow(center.y - dcenter.y, 2))
			//Calculate where the duck is.
			let duckDir = Math.sign(dcenter.x - center.x)

			//console.log("space: " + length)

			if (this.state == "stand") {
				this.waited += tick
				//console.log(this.waited, this.waitTime)
				if (this.waited >= this.waitTime) {
					this.waitTimer(0.3)
					this.state = "squat"
					if (duckDir > 0) {
						this.facing = "r"
					}
					else {
						this.facing = "l"
					}
					this.velocityNext(length, duckDir)
				}
			} else if (this.state == "squat") {
				this.squatBehavior(tick)
			} else {
				this.jumpBehavior(tick)
				//ASSET_MANAGER.playAsset("./sound/Slime sound/All Slime Sounds (Minecraft) - Landed.mp3")
			}



			this.velocityY += GRAVITY * tick

			this.x += this.velocityX * tick
			this.y += this.velocityY * tick

			this.updateBB(2)
			this.collide(length)

			//Initial Walking animation

			//Debug purposes
			//console.log("x" + this.x);
			//console.log("y" + this.y);
			//console.log("Vx" + this.velocityX);
			//console.log("Vy" + this.velocityY);


			this.oldBB = this.BB;
		}
	};

	jumpBehavior(tick) {
		if (this.velocityY > 0) {
			this.state = "freefall"
		} else {
			this.state = "jump"
		}
	}

	//Selects the ducks next velocity.
	velocityNext(distance, duckDir) {
		// If the duck is close, jump to horizontally converge on the duck.
		//console.log(distance)
		if (distance <= 570 && this.game.duck.state != "dead") {
			console.log("Going for the duck.")
			// If the duck is extremely close, jump to kill the duck.
			if (distance < 220) {
				this.velocityN = 300 * duckDir / 3 + 2 * this.game.duck.velocityX / 3
			} else {
				this.velocityN = 450 * duckDir + this.game.duck.velocityX / 4
			}
		}
		else {// Jump at random.
			this.velocityN = -250 + Math.random() * 500
			if (duckDir > 0) this.velocityN += 100
			else this.velocityN -= 100
		}

		if (this.velocityN > 0) {
			this.facing = "r"
		}
		else {
			this.facing = "l"
		}
	}

	squatBehavior(tick) {
		this.waited += tick
		if (this.waited > this.waitTime) {
			this.velocityY = - 750
			this.velocityX = this.velocityN
			this.state = "jump"
		}
	}

	updateBB(scale) {
		this.BB = new boundingBox(this.x, this.y, 60, 54);
	}

	collide(length) {
		var that = this;
		this.game.entities.forEach(function (entity) {
			//If platform and entity collided
			if (entity.BB && that.BB.isCollide(entity.BB)) {
				//If slime bottom hit floor/wall
				if (entity == that.game.duck && that.oldBB.bottom <= entity.BB.top && entity.state != "dead") {
					entity.die(that)
					that.velocityX = - Math.sign(that.velocityX) * 200
					that.velocityY = -150
				}

				if (entity.platform && that.oldBB.bottom <= entity.BB.top) {
					if (!(that.state == "dead") && entity.spike) {
						that.die(entity)
					}
					that.velocityY = 0
					that.velocityX = that.velocityX * 2 / 3
					if (Math.abs(that.velocityX) < 120) that.velocityX = 0
					that.y = entity.BB.top - 54
					//Stand if we are landing.
					if (that.state == "freefall") {
						if (length < 900)
							ASSET_MANAGER.playAsset("./sound/Slime sound/Slime Sounds (Minecraft) - Jump.mp3")
						that.state = "stand"
						that.waitTimer()
					}
				} else
					if (entity.cieling && that.oldBB.top >= entity.BB.bottom) {
						that.velocityY = 0
						that.y = entity.BB.bottom
						that.updateBB(2)
					}
					//If hits the left wall
					else if (entity.wall && that.BB.left < entity.BB.right && that.velocityX < 0) {
						that.x = entity.BB.right
						that.velocityX = -that.velocityX
						//that.x = that.entity.right
					}
					//If hits the right wall
					else if (entity.wall && that.BB.right > entity.BB.left && that.velocityX > 0) {
						that.x = entity.BB.left - 60
						that.velocityX = -that.velocityX
						//that.x = that.entity.left
					}
					//If hits a saw
					else if (entity.saw && that.state != "dead") {
						that.die(entity)
					}
			}
		});
		this.updateBB(2);
	}

	die(killer) {
		this.state = "dead"
		this.velocityX = 0
		this.velocityY = 0
		let corpseVX = 0
		//corpse velocity and speed it will repulse
		if (killer.facing == "r") {
			corpseVX = 550
		} else if (killer.facing == "l") {
			corpseVX = -550
		}
		let slimeCorpse = new corpses(this.game, this.x, this.y, "hopper", this.facing, corpseVX, - 220)
		this.game.addEntity(slimeCorpse)
		this.removeFromWorld = true;
	}

	draw(ctx) {
		this.animators[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
		//this.animators["hurt"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
		//this.animators["attack"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);


		// ctx.strokeStyle = 'Red';
		// ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
		// ctx.strokeStyle = 'Blue';
		// ctx.strokeRect(this.cBB.x - this.game.camera.x, this.cBB.y - this.game.camera.y, this.cBB.width, this.cBB.height);

		// let center = this.BB.center()


		// ctx.beginPath();
		// ctx.strokeStyle = 'Green';
		// ctx.arc(center.x - this.game.camera.x, center.y - this.game.camera.y, 1, 0, 2 * Math.PI)
		// ctx.stroke();

		// let dcenter = this.game.duck.BB.center()

		// ctx.beginPath();
		// ctx.strokeStyle = 'Pink';
		// ctx.moveTo(center.x - this.game.camera.x, center.y - this.game.camera.y);
		// ctx.lineTo(dcenter.x - this.game.camera.x, dcenter.y - this.game.camera.y);
		// ctx.stroke();


	};
};