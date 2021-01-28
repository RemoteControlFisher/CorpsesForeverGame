class traps {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.spritesheetSAW = ASSET_MANAGER.getAsset("./sprites/blade_1_3.png");
		this.spritesheetbigSAW = ASSET_MANAGER.getAsset("./sprites/blade_2_fix.png");
		this.spritesheetSpikes = ASSET_MANAGER.getAsset("./sprites/spike_strip.png");

		this.animators = []; //[state][facing]
		this.animators["saw"] =
			new animator(this.spritesheetSAW, // Spritesheet
				2, //X
				0, //Y
				64, //Width
				72, //Height
				3, //Frames
				0.13, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animators["spike"] =
			new animator(this.spritesheetSpikes, // Spritesheet
				0, //X
				0, //Y
				31, //Width
				13, //Height
				1, //Frames
				0.13, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animators["bigSaw"] =
			new animator(this.spritesheetbigSAW, // Spritesheet
				0, //X
				0, //Y
				140, //Width
				130, //Height
				3, //Frames
				0.05, //Time
				20, //Padding
				false, //reverse
				true, // looping,
				null)
	};

	update() {

	};

	draw(ctx) {
		this.animators["saw"].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y - this.game.camera.y, 1)
		this.animators["bigSaw"].drawFrame(this.game.clockTick, ctx, 500  - this.game.camera.x, this.y - this.game.camera.y, 1)
		this.animators["spike"].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y+240 - this.game.camera.y, 2)
	};
};