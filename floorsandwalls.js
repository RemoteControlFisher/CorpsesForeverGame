class floorsandwalls {
	constructor(game, x, y, type) {
		Object.assign(this, { game, x, y, type });
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
				32, //X
				63, //Y
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
				64, //X
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
		this.BB = new boundingBox(x, y, 32, 32)
	};

	update() {

	};

	draw(ctx) {
		this.animations[this.type].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 2)
		/**ctx.strokeStyle = 'Red';
		ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);*/
	};
};