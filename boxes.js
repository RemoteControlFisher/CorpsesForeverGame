class boxes
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floorsandwalls.png");
		this.mimic =
			new animator(this.spritesheet, // Spritesheet
				240, //X
				48, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.platform = true;
		this.droppable = true;
		this.BB = new boundingBox (x, y, 32, 32)

	};

	update()
	{
		this.BB = new boundingBox (this.x, this.y, 32, 32)
	};

	draw(ctx)
	{
		this.mimic.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 2)
		/*ctx.strokeStyle = 'Red';
		ctx.strokeRect(this.BB.x  - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);*/
	};
};