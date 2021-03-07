class long_backgrounds {
	constructor(game, startX, startY, lengthX, lengthY, type) {
		Object.assign(this, { game, startX, startY, lengthX, lengthY, type });
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floorsandwalls.png");
		this.animations = []
		this.scales = []

		this.x = startX
		this.y = startY + 32 - 32 * lengthY

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
		this.animations["darkBwall"] =
			new animator(this.spritesheet,
				208, //X
				144, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
				null)
	};

	update() {

	};

	draw(ctx) {
		this.animations[this.type].drawFrame(this.game.clockTick, ctx,
			this.x - this.game.camera.x,
			this.y - this.game.camera.y, 2)

		for (let j = 0; j < this.lengthX; j++) {
			for (let k = 0; k < this.lengthY; k++) {
				this.animations[this.type].drawFrame(this.game.clockTick, ctx,
					this.x + j * PARAMS.BLOCKWIDTH - this.game.camera.x,
					this.y + k * PARAMS.BLOCKWIDTH - this.game.camera.y, 2.03)
			}
		}
		//ctx.strokeStyle = 'Red';
		//ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
	};
};