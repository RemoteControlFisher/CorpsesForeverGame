class corpses {
	constructor(game, x, y, type = "duck", facing = "r", velocityX = 0, velocityY = 0) {
		Object.assign(this, { game, x, y, type, facing, velocityX, velocityY });
		this.duck = ASSET_MANAGER.getAsset("./sprites/duck.png")
		this.chomp = ASSET_MANAGER.getAsset("./sprites/wolfsheet1.png");
		this.hop = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Walk.png");
		this.hopl = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Walk (Reverse).png");
		this.hopeL = ASSET_MANAGER.getAsset("./sprites/slimesprite/Hopper jump.png");
		this.hope = ASSET_MANAGER.getAsset("./sprites/slimesprite/Hopper jump r.png");

		this.state = "idle"

		this.carriable = true
		this.buttonPress = false
		this.animations = []
		this.animations.duck = []
		this.animations.chomper = []
		this.animations.hopper = []
		this.animations.lurker = []
		this.animations["duck"]["r"] =
			new animator(this.duck, // Spritesheet
				37, //X
				90, //Y
				22, //Width
				13, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animations["duck"]["l"] =
			new animator(this.duck, // Spritesheet
				164, //X
				110, //Y
				22, //Width
				13, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animations["chomper"]["r"] =
			new animator(this.chomp, // Spritesheet
				514, //X
				11, //Y
				60, //Width
				21, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animations["chomper"]["l"] =
			new animator(this.chomp, // Spritesheet
				514, //X
				203, //Y
				60, //Width
				21, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animations["hopper"]["r"] =
			new animator(this.hope, // Spritesheet
				262, //X
				21, //Y
				20, //Width
				11, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animations["hopper"]["l"] =
			new animator(this.hopeL, // Spritesheet
				6, //X
				21, //Y
				20, //Width
				11, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animations["lurker"]["r"] =
			new animator(this.hop, // Spritesheet
				262, //X
				21, //Y
				20, //Width
				11, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animations["lurker"]["l"] =
			new animator(this.hopl, // Spritesheet
				6, //X
				21, //Y
				20, //Width
				11, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.platform = true;
		this.droppable = true;
		this.scale = 2
		if (this.type == "chomper") this.scale = 1
		if (this.type == "lurker" || this.type == "hopper") {
			this.bounce = true
		}
		this.BB = new boundingBox(this.x, this.y, this.animations[this.type].width * this.scale, (this.animations[this.type].height) * this.scale)
		this.oldBB = this.BB
		this.updateBB()
		console.log(this.velocityX)
	};

	update() {
		//WE DO NOT DRAW OR UPDATE OURSELVES WHEN CARRIED.
		let center = this.BB.center()
		let dcenter = this.game.duck.BB.center()
		let length = Math.sqrt(Math.pow(center.x - dcenter.x, 2) + Math.pow(center.y - dcenter.y, 2))
		if (this.state != "carried" && length < 1500) {
			this.BB.active = true

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
		} //else {
			//Don't collide, be invisible when we are not carried!
			//this.BB.active = false
		//}

	};

	updateBB() {
		this.oldBB = this.BB;
		this.BB = new boundingBox(this.x, this.y, this.animations[this.type][this.facing].width * this.scale, (this.animations[this.type][this.facing].height) * this.scale)
	}

	//Note to self: The duck sideways collision fixes I need to do.

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
						ASSET_MANAGER.playAsset("./sound/Sound effect/Punch - Gaming Sound Effect (HD).mp3")
						that.velocityY = -150
						that.velocityX = 150
					} else {
						ASSET_MANAGER.playAsset("./sound/Sound effect/Punch - Gaming Sound Effect (HD).mp3")
						that.velocityY = -150
						that.velocityX = -15
					}
					that.state = "idle"
				}

				if (entity != that && entity.platform && (that.oldBB.bottom <= entity.BB.top
					|| (entity.oldBB && that.oldBB.bottom <= that.oldBB.top)//EXTREMELY SPECIAL CASE: IF I WAS ABOVE THEM BEFORE THEY MOVED.
				) && that.velocityY > 0) {
					that.velocityY = 0
					that.velocityX = 0
					that.y = entity.BB.top - that.animations[that.type][that.facing].height * that.scale
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
					ASSET_MANAGER.playAsset("./sound/Sound effect/Circular Saw Sound Effect.mp3")
				}
				else if (entity.button && entity.BB.top <= that.BB.bottom) {
					//that.buttonPress = true
					that.velocityX = 0
					that.velocityY = 0
					that.y = entity.BB.top - that.BB.height + 6 * .75
					that.state = "idle"
					that.updateBB()
					//entity.corpseHelper()
				}
			}
			// else if (entity.BB && !that.BB.isCollide(entity.BB)) {
			// 	if (entity.button) {
			// 		that.buttonPress = false
			// 		entity.corpseHelper()
			// 	}
			// }

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
				this.velocityX = -550
				this.state = "thrown"
				break;
			default://No-facing entities should use this behavior.
				if (this.oldBB <= entity.BB.top) {
					that.velocityY = 0
					that.velocityX = 0
					that.y = entity.BB.top - that.animations[that.type][that.facing].height * that.scale
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
			this.animations[this.type][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, this.scale);
			/*ctx.strokeStyle = 'Red';
			ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);*/
		}
	};

	//Used by the duck if it is carrying something.
	duckDraw(ctx, x, y) {
		this.animations[this.type][this.facing].drawFrame(this.game.clockTick, ctx, x - this.game.camera.x, y - this.game.camera.y, this.scale * 0.9);
	}
};