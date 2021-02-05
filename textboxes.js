class textboxes
{
	constructor(game, x, y, z)
	{
		Object.assign(this, {game, x, y, z});
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/TempTextbox.png");
		this.textbox = [];
		this.textbox[0] =
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
		this.textbox[1] = 
		new animator(this.spritesheet, // Spritesheet
			0, //X
			114, //Y
			337, //Width
			114, //Height
			30, //Frames
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
		this.textbox[this.z].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y  - this.game.camera.y, 1)
	};
};