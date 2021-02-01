class Hoppers
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Walk.png");
		this.spritesheetOuch = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Hurt.png");

		this.animators = []; //[state] [facing]

		this.animators["walk"] = []
		this.animators["attack"] = []
		this.animators["hurt"] = []

		this.animators["walk"]["r"] = 
		   new animator (this.spritesheet, //Spritesheet
			5,
			6,
			21,
			25,
			9,
			0.1,
			11,
			false,
			true,
			null)

		this.animators["hurt"]["r"] =
			new animator(this.spritesheetOuch, //Spritesheet
			0,
			7,
			10,
			10,
			3,
			0.5,
			3,
			false,
			true,
			null)

	};

	update()
	{

	};

	draw(ctx)
	{
		this.animators["walk"]["r"].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y  - this.game.camera.y, 3);
		//this.animators["hurt"]["r"].drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
	};
};