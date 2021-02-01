class textboxes
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/TempTextbox.png");
		this.textbox =
		new animator(this.spritesheet, // Spritesheet
			275, //X
			76, //Y
			337, //Width
			114, //Height
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
		this.textbox.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1)
	};
};