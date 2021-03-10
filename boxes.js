class boxes {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floorsandwalls.png");
		this.mimic =
			new animator(this.spritesheet, // Spritesheet
				240, //X
				80, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.platform = true;
		this.droppable = true;
		this.BB = new boundingBox(x, y, 32, 32)

		this.velocityX = 0
		this.velocityY = 0

		this.carriable = true

	};

	updateBB() {
		this.oldBB = this.BB;
		this.BB = new boundingBox(this.x, this.y, 32, 32)
	}

	update() {
		let center = this.BB.center()
		let dcenter = this.game.duck.BB.center()
		let length = Math.sqrt(Math.pow(center.x - dcenter.x, 2) + Math.pow(center.y - dcenter.y, 2))
		if (this.state != "carried" && length < 1500) {
			let tick = this.game.clockTick;
			//These constants I did copy just so I remembered the basic constants I should use here. The rest I typed out manually with some vague inspirations being pulled
			//From the lecture examples.

			this.velocityY += GRAVITY * tick
			if (this.velocityY > TERMINAL_VELOCITY) {
				this.velocityY = TERMINAL_VELOCITY
			}
			this.y += this.velocityY * tick
			this.x += this.velocityX * tick

			this.updateBB()

			this.collide()
		} else {
			//Don't collide, be invisible when we are not carried!
			this.BB.active = false
		}
	};


	collide() {
		const that = this
		this.game.entities.forEach(function (entity) {

			if (entity.BB && that.BB.isCollide(entity.BB)) {


				//Override usual behavior for killable things.
				if (that.state == "thrown" && entity.killable) {
					//Kill the target entity.
					entity.die(that)
					//Bounce off the thing I killed.
					if (that.velocityY > 0) { // Thrown items ALWAYS have a sideways velocity.
						that.velocityY = -150
						that.velocityX = 150
						ASSET_MANAGER.playAsset("./sound/Sound effect/Punch - Gaming Sound Effect (HD).mp3")
					} else {
						that.velocityY = -150
						that.velocityX = -15
						ASSET_MANAGER.playAsset("./sound/Sound effect/Punch - Gaming Sound Effect (HD).mp3")
					}
					that.state = "idle"
				}

				if (entity != that && entity.platform && (that.oldBB.bottom <= entity.BB.top
					|| (entity.oldBB && that.oldBB.bottom <= that.oldBB.top)//EXTREMELY SPECIAL CASE: IF I WAS ABOVE THEM BEFORE THEY MOVED.
				) && that.velocityY > 0) {
					that.velocityY = 0
					that.velocityX = 0
					that.y = entity.BB.top - 32
					if (entity.bounce) {
						that.velocityY = -400
						//ASSET_MANAGER.playAsset("./sound/Sound effect/Bounce Sound Effect.mp3")
					}
					that.state = "idle"
					that.updateBB()
				} else if (entity.cieling && that.oldBB.top >= entity.BB.bottom) {
					that.velocityY = 0
					that.y = entity.BB.bottom
					that.state = "idle"

					that.updateBB()
				} else if (entity.wall && that.velocityX < 0 && that.BB.left < entity.BB.right) {

					that.velocityX = MIN_WALK
					that.x = entity.BB.right
					that.state = "idle"

					that.updateBB()

				}
				else if (entity.wall && that.velocityX > 0 && that.BB.right > entity.BB.left) {

					that.velocityX = -MIN_WALK
					that.x = entity.BB.left - that.BB.width
					that.state = "idle"

					that.updateBB()
				} else if (entity.trap && that.velocityY > 0) { // If we fall onto a trap, follow the traps collision rules.
					//Set our velocity by traps qualities.
					that.trapBehavior(entity)
				} else if (entity.button && that.BB.bottom >= entity.BB.top) {
					that.velocityX = 0
					that.velocityY = 0
					that.y = entity.BB.top - that.BB.height + 6 * .75
					that.state = "idle"
					that.updateBB()
				}
			}

		}
		)

	}

	trapBehavior(trap) {
		switch (trap.facing) {
			case "r":
				this.velocityY = -720
				this.velocityX = 550
				this.state = "thrown"
				break;
			case "l":
				this.velocityY = -720
				this.velocityX = 550
				this.state = "thrown"
				break;
			default://No-facing entities should use this behavior.
				if (this.oldBB <= entity.BB.top) {
					that.velocityY = 0
					that.velocityX = 0
					that.y = entity.BB.top - 32
					if (entity.bounce) {
						that.velocityY = -400
					}
					that.state = "idle"
					that.updateBB()
				}
				break;
		}
	}

	draw(ctx) {
		if (this.state != "carried") {
			this.mimic.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 2)
		}
		/*ctx.strokeStyle = 'Red';
		ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);*/
	};

	duckDraw(ctx, x, y) {
		this.mimic.drawFrame(this.game.clockTick, ctx, x - this.game.camera.x + 4, y - this.game.camera.y, 1.5);
	}
};