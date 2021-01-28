class floorsandwalls {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floorsandwalls.png");
		this.floor =
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
		this.walls = [];
		this.walls["left"] =
			new animator(this.spritesheet,
				16,
				32,
				16,
				16,
				1,
				0.12,
				12,
				false,
				true,
				null)
		this.walls["right"] =
			new animator(this.spritesheet,
				80,
				32,
				16,
				16,
				1,
				0.12,
				12,
				false,
				true,
				null)
		this.platform = true;
		this.wall = true;
	};

	update() {

	};

	draw(ctx)
	{
		this.floor.drawFrame(this.game.clockTick, ctx, this.x+90, this.y, 1)
		this.walls["left"].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1)
		this.walls["right"].drawFrame(this.game.clockTick, ctx, this.x+180, this.y, 1)
	};
};