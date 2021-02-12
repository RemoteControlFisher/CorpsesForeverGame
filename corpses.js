class corpses {
	constructor(game, x, y, type, facing = "r") {
		Object.assign(this, { game, x, y, type, facing });
		this.duck = ASSET_MANAGER.getAsset("./sprites/duck.png")
		this.chomp = ASSET_MANAGER.getAsset("./sprites/wolfsheet1.png");
		this.hop = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Walk.png");
		this.hopl = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Walk (Reverse).png");

		this.animations = []
		this.animations.duck = []
		this.animations.chomper = []
		this.animations.hopper = []
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
		this.animations["hopper"]["l"] =
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
		if (this.type == "hopper") {
			this.bounce = true
		}
		this.BB = new boundingBox(this.x, this.y, this.animations[this.type].width * this.scale, (this.animations[this.type].height) * this.scale)
		this.updateBB()
		this.velocityY = 0
	};

	update() {
		let tick = this.game.clockTick;
		//These constants I did copy just so I remembered the basic constants I should use here. The rest I typed out manually with some vague inspirations being pulled
		//From the lecture examples.

		this.velocityY += GRAVITY * tick
		if (this.velocityY > TERMINAL_VELOCITY) {
			this.velocityY = TERMINAL_VELOCITY
		}
		this.y += this.velocityY * tick

		this.updateBB()

		this.collide()

	};

	updateBB() {
		this.oldBB = this.BB;
		this.BB = new boundingBox(this.x, this.y, this.animations[this.type][this.facing].width * this.scale, (this.animations[this.type][this.facing].height) * this.scale)
	}


	collide() {
		const that = this
		this.game.entities.forEach(function (entity) {

			if (entity.BB && that.BB.isCollide(entity.BB)) {

				if (entity != that && entity.platform && that.oldBB.bottom <= entity.BB.top && that.velocityY > 0) {
					that.velocityY = 0
					that.y = entity.BB.top - that.animations[that.type][that.facing].height * that.scale
					if (entity.bounce) {
						that.velocityY = -400
					}
					that.updateBB()
				}
			}

		}
		)

	}

	draw(ctx) {
		this.animations[this.type][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, this.scale);
		/*ctx.strokeStyle = 'Red';
		ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);*/
	};
};