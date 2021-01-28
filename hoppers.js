class Hoppers
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Walk.png");
		this.spritesheetOuch = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Hurt.png");
		this.spritesheetOm = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Attack.png");

		this.animators = []; //[state] [facing]

		this.animators["walk"] = []
		this.animators["attack"] = []
		this.animators["hurt"] = []

		this.animators["walk"]["r"] =
		   new animator (this.spritesheet, //Spritesheet
			5,      //X
			6,      //Y
			21,     //Width
			25,     //Height
			9,      //Frame
			0.1,    //Times
			11,     //Padding
			false,  //Reverse
			true,   //Looping
			null)   //Idle Animation

		this.animators["hurt"]["r"] =
			new animator(this.spritesheetOuch, //Spritesheet
			0,     //X
			7,     //Y
			22,    //Width
			25,    //Height
			3,     //Frame
			0.1,   //Times
			12,     //Padding
			false, //Reverse
			true,  //Looping
			null)  //Idle Animation

		this.animators["attack"]["r"] =
			new animator(this.spritesheetOm, //Spritesheet
			0,     //X
			2,     //Y
			27,    //Width
			40,    //Height
			7,     //Frame
			0.1,   //Times
			6,     //Padding
			false, //Reverse
			true,  //Looping
			null)  //Idle Animation

	};

	update()
	{

	};

	draw(ctx)
	{
		this.animators["walk"]["r"].drawFrame(this.game.clockTick, ctx, this.x + 200  - this.game.camera.x, this.y, 3);
		this.animators["hurt"]["r"].drawFrame(this.game.clockTick, ctx, this.x + 120  - this.game.camera.x, this.y, 3);
		this.animators["attack"]["r"].drawFrame(this.game.clockTick, ctx, this.x + 280 - this.game.camera.x, this.y , 3);
	};
};