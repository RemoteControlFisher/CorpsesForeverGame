class doors
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floorsandwalls.png");
		this.wall = true
		this.open = false
		this.door =
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
	};

	update()
	{
		if (this.open)
			this.wall = false
		else
			this.wall = true
	   	this.updateBB(2);
	};

	updateBB(scale) {
		this.oldBB = this.BB;
		this.BB = new boundingBox(this.x, this.y, 16 * scale, 16 * scale);
	}

	draw(ctx)
	{
		if (this.open == false) {
			this.door.drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y - this.game.camera.y, 2)
		}

		/*
		ctx.strokeStyle = 'Red';
		ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
		*/
	};
};