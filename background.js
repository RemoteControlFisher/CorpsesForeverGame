class background {
	constructor(game, x, y, type) {
		Object.assign(this, { game, x, y, type });
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floorsandwalls.png");
		this.animations = []
		this.scales = []

		this.animations["bwall"] =
			new animator(this.spritesheet,
				0, //X
				49, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)
		this.animations["bwindow"] =
			new animator(this.spritesheet,
				0, //X
				96, //Y
				64, //Width
				128, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)
		this.animations["p1"] =
			new animator(this.spritesheet,
				0, //X
				144, //Y
				16, //Width
				48, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)
		this.animations["p2"] =
			new animator(this.spritesheet,
				0, //X
				160, //Y
				16, //Width
				48, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)
		this.animations["p3"] =
			new animator(this.spritesheet,
				0, //X
				176, //Y
				16, //Width
				48, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)
		this.animations["p4"] =
			new animator(this.spritesheet,
				0, //X
				192, //Y
				16, //Width
				48, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)

		//Slightly overscaling the background walls fixes the background bug on firefox.
		this.scales["bwall"] = 2.03
		this.scales["bwindow"] = 0.5075
		this.scales["p1"] = 2.03
		this.scales["p2"] = 2.03
		this.scales["p3"] = 2.03
		this.scales["p4"] = 2.03

	}

	update() {

	};

	draw(ctx) {
		this.animations[this.type].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, this.scales[this.type])
	};
}