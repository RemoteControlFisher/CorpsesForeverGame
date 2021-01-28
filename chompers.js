class Chompers
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/wolfsheet1.png");
		
		this.animators = []; //[state][facing]
	
		this.animators["stand"] = []
		this.animators["walk"] = []
		this.animators["run"] = []

		this.animators["stand"]["r"] =
		  new animator(this.spritesheet, // Spritesheet
			320, //X
			1, //Y
			64, //Width
			32, //Height
			1, //Frames
			0.12, //Time
			16, //Padding
			false, //reverse
			true, // looping,
			null) //No idle animation because I am looping.
		//Facing isn't implemented yet.
		this.animators["stand"]["l"] =
		  new animator(this.spritesheet, // Spritesheet
			167, //X
			129, //Y
			16, //Width
			25, //Height
			1, //Frames
			0.12, //Time
			16, //Padding
			false, //reverse
			true, // looping,
			null) //No idle animation because I am looping.
		//Facing isn't implemented yet.
		this.animators["walk"]["r"] = new animator(this.spritesheet, // Spritesheet
		  320, //X
		  128, //Y
		  64, //Width
		  32, //Height
		  5, //Frames
		  0.12, //Time
		  0, //Padding
		  false, //reverse
		  true, // looping,
		  null) //No idle animation because I am looping.
		this.animators["walk"]["l"] = new animator(this.spritesheet, // Spritesheet
		  320, //X
		  320, //Y
		  64, //Width
		  32, //Height
		  5, //Frames
		  0.12, //Time
		  0, //Padding
		  true, //reverse
		  true, // looping,
		  null) //No idle animation because I am looping.
	};

	update()
	{

	};

	draw(ctx)
	{
		this.animators["stand"]["r"].drawFrame(this.game.clockTick, ctx, this.x+90  - this.game.camera.x, this.y, 1)
		this.animators["walk"]["l"].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y, 1)
		this.animators["walk"]["r"].drawFrame(this.game.clockTick, ctx, this.x+180  - this.game.camera.x, this.y, 1)
	};
};