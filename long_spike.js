class long_spike {
	constructor(game, startX, startY, lengthX) {
		startY += 14
		Object.assign(this, { game, startX, startY, lengthX });
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/new_Spike_Strip.png");
		this.scales = []

		this.x = startX
		this.y = startY

		this.animators =
			new animator(this.spritesheet, // Spritesheet
				0, //X
				1, //Y
				31, //Width
				12, //Height
				1, //Frames
				0.13, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.spike = true
		this.platform = true
		this.scale = 1.5
		this.BB = new boundingBox(startX, startY + 6 /* This may seem strange but this is actually to make things appear impaled on the spikes.*/, 32 * lengthX, this.animators.height * this.scale)
	};

	update() {

	};

	draw(ctx) {
		this.animators.drawFrame(this.game.clockTick, ctx,
			this.x - this.game.camera.x,
			this.y - this.game.camera.y, this.scale)

		for (let j = 0; j < this.lengthX; j++) {
			this.animators.drawFrame(this.game.clockTick, ctx,
				this.x + j * PARAMS.BLOCKWIDTH - this.game.camera.x,
				this.y - this.game.camera.y, this.scale)
		}

		if (this.lengthX % 1 != 0)
			this.animators.drawFrame(this.game.clockTick, ctx,
				this.x + (this.lengthX +0.5) * PARAMS.BLOCKWIDTH - this.game.camera.x,
				this.y - this.game.camera.y, this.scale)

		//ctx.strokeStyle = 'Red';
		//ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
	};
};