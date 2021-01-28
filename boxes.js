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
	};

	update()
	{

	};

	draw(ctx)
	{
		console.log(this.game.camera.x + "," + this.game.camera.y)
		this.mimic.drawFrame(this.game.clockTick, ctx, this.x + 90 - this.game.camera.x, this.y, 2)
	};
};