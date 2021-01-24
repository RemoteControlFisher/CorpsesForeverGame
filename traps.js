class traps
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
		this.spritesheetSAW = ASSET_MANAGER.getAsset("./sprites/blade_1_3.png");

		this.animators = []; //[state][facing]
		this.animators["saw"] =
		new animator(this.spritesheetSAW, // Spritesheet
		  2, //X
		  0, //Y
		  64, //Width
		  72, //Height
		  3, //Frames
		  0.12, //Time
		  3, //Padding
		  false, //reverse
		  true, // looping,
		  null) 
	};

	update()g
	{

	};

	draw(ctx)
	{
		this.animators["saw"].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2)
	};
};