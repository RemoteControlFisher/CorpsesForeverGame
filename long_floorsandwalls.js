class long_floorsandwalls {
	constructor(game, startX, startY, lengthX, lengthY, type) {
		Object.assign(this, { game, startX, startY, lengthX, lengthY, type });
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floorsandwalls.png");
		this.animations = []
		this.animations["floor"] =
			new animator(this.spritesheet, // Spritesheet
				48, //X
				0, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animations["thinPlatform"] =
			new animator(this.spritesheet, // Spritesheet
				209, //X
				48, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animations["wleft"] =
			new animator(this.spritesheet, //Spritesheet
				16, //X
				32, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				12, //Padding
				false, //Reverse
				true, //Looping
				null)
		this.animations["wright"] =
			new animator(this.spritesheet,
				80, //X
				32, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)
		this.animations["tright"] =
			new animator(this.spritesheet,
				32, //X
				0, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)
		this.animations["tleft"] =
			new animator(this.spritesheet,
				64, //X
				0, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)
		this.animations["bright"] =
			new animator(this.spritesheet,
				16, //X
				47, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)
		this.animations["bleft"] =
			new animator(this.spritesheet,
				80, //X
				47, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)
		this.animations["bottom"] =
			new animator(this.spritesheet,
				48, //X
				63, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)
		if (this.type != "wleft" && this.type != "wright")
			this.platform = true;
		if (this.type != "thinPlatform") {
			this.wall = true;
			this.cieling = true;
		} else {
			this.droppable = true
		}
		this.BB = new boundingBox(startX, startY + 32 - 32 * lengthY, 32 * lengthX, 32 * lengthY)
	};

	update() {

	};

	draw(ctx) {
		this.animations[this.type].drawFrame(this.game.clockTick, ctx,
			this.BB.x - this.game.camera.x,
			this.BB.y - this.game.camera.y, 2)

		for (let j = 0; j < this.lengthX; j++) {
			for (let k = 0; k < this.lengthY; k++) {
				this.animations[this.type].drawFrame(this.game.clockTick, ctx,
					this.BB.x + j * PARAMS.BLOCKWIDTH - this.game.camera.x,
					this.BB.y + k * PARAMS.BLOCKWIDTH - this.game.camera.y, 2.05)
			}
		}
		//ctx.strokeStyle = 'Red';
		//ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
	};
};