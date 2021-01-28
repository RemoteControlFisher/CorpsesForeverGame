class corpses {
	constructor(game, x, y, type) {
		Object.assign(this, { game, x, y, type });
		this.duck = ASSET_MANAGER.getAsset("./sprites/duck.png")
		this.chomp = ASSET_MANAGER.getAsset("./sprites/wolfsheet1.png");
		this.hop = ASSET_MANAGER.getAsset(/*place spritesheet here*/);
		this.animations = []
		this.animations["duck"] =
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
		this.animations["chomper"] =
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
		/**this.door =
			new animator(this.spritesheet, // Spritesheet
				144, //X
				80, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
				*/
	};

	update() {

	};

	draw(ctx) {
		this.animations["duck"].drawFrame(this.game.clockTick, ctx, this.x + 200, this.y, 3);
		this.animations["chomper"].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
	};
};