class Hoppers
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});

		this.velocity = {x: PARAMS.BITWIDTH++, y: 0};  //Pixel Per Sec
		this.facing = 'r'  //r for right & l for left
		//this.state = state   //Available state [walk], [attack], [hurt]
		this.dead = false
		this.updateBB();

		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Walk.png");
		this.spritesheetR = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Walk (Reverse).png");
		this.spritesheetOuch = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Hurt.png");
		this.spritesheetOuchR = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Hurt (Reverse).png");
		this.spritesheetAttk = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Attack.png");
		this.spritesheetAttkR = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Attack (Reverse).png");
		
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

		this.animators["walk"]["l"] = 
			new animator (this.spritesheetR, //Spritesheet
			 3,
			 5,
			 21,
			 25,
			 9,
			 0.1,
			 11,
			 true,
			 true,
			 null)
			
		this.animators["hurt"]["r"] =
			new animator(this.spritesheetOuch, //Spritesheet
			0,
			7,
			10,
			10,
			3,
			0.1,
			3,
			false,
			true,
			null)
		
		this.animators["hurt"]["l"] =
			new animator(this.spritesheetOuchR, //Spritesheet
		    5,
			7,
			30,
			30,
			3,
			0.1,
			3,
			true,
			true,
			null)

	    this.animators["attack"]["r"] =
	       new animator(this.spritesheetAttk, //Spritesheet
	       0,
	       3,
	       27,
	       30,
	       7,
	       0.1,
	       6,
	       false,
	       true,
		   null)

		this.animators["attack"]["l"] =
	       new animator(this.spritesheetAttkR, //Spritesheet
	       0,
	       2,
	       26,
	       30,
	       7,
	       0.1,
	       6,
	       true,
	       true,
	       null)
};
	
    //dead(){   Not yet implemented (please leave alone for now)
    //
	//}

	update()
	{
	  let tick = this.game.tick;
	  
	};
	
    updateBB(scale){
	this.oldBB = this.BB;
	this.BB = new boundingBox(this.x, this.y, 16 * scale, 25 * scale);
	}

	draw(ctx)
	{
		this.animators["walk"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
		//this.animators["hurt"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
		//this.animators["attack"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
	};
};