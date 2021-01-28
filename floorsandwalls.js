class floorsandwalls {
	constructor(game, x, y, type) {
		Object.assign(this, { game, x, y , type});
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
		this.platform = true;
		this.wall = true;
		this.cieling = true;
		this.BB = new boundingBox (x, y, 32, 32)
	};

	update() {

	};

	draw(ctx) {
		this.animations[this.type].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y, 2)
		ctx.strokeStyle = 'Red';
		ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
	};
};