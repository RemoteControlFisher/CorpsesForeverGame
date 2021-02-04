class textboxes
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/TempTextbox.png");
		this.textbox =
		new animator(this.spritesheet, // Spritesheet
			0, //X
			0, //Y
			337, //Width
			114, //Height
			26, //Frames
			0.12, //Time
			1, //Padding
			false, //reverse
			true, // looping,
			null)
	};

	update()
	{

	};

	draw(ctx)
	{
		this.textbox.drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y  - this.game.camera.y, 1)
	};
};