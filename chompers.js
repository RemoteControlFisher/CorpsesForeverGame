class Chompers
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
		
		const MIN_WALK = 120.453125;
		const GRAVITY = 1800;
		this.facing = 'r';
		this.dead = false;
		this.velocityX = 0;
		this.velocityY = 0;
		this.updateBB(1);
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/wolfsheet1.png");
		
		this.animators = []; //[state][facing]
	
		this.animators["stand"] = []
		this.animators["walk"] = []
		this.animators["run"] = []
		this.animators["bork"] = []
		this.animators["attack"] = []
		this.animators["sleep"] = []
		this.animators["woke"] = []

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
		this.animators["bork"]["r"] = new animator(this.spritesheet, // Spritesheet
		  318, //X
		  51, //Y
		  65, //Width
		  45, //Height
		  4, //Frames
		  0.12, //Time
		  0, //Padding
	      false, //reverse
	      true, // looping,
		  null) //No idle animation because I am looping.
	    this.animators["bork"]["l"] = new animator(this.spritesheet, // Spritesheet
		  318, //X
		  244, //Y
		  65, //Width
		  44, //Height
		  4, //Frames
		  0.12, //Time
		  0, //Padding
		  true, //reverse
		  true, // looping,
		  null) //No idle animation because I am looping.  
		this.animators["attack"]["l"] = new animator(this.spritesheet, // Spritesheet
		  320, //X
		  161, //Y
		  64, //Width
		  32, //Height
		  5, //Frames
		  0.12, //Time
		  0, //Padding
		  false, //reverse
		  true, // looping,
		  null) //No idle animation because I am looping.  
		this.animators["attack"]["r"] = new animator(this.spritesheet, // Spritesheet
	      320, //X
		  352, //Y
		  64, //Width
		  32, //Height
		  5, //Frames
		  0.12, //Time
		  0, //Padding
		  true, //reverse
		  true, // looping,
		  null) //No idle animation because I am looping.  
	    this.animators["sleep"]["r"] = new animator(this.spritesheet, // Spritesheet
		  320, //X
		  4, //Y
		  64, //Width
		  32, //Height
		  4, //Frames
		  0.12, //Time
		  0, //Padding
		  false, //reverse
		  true, // looping,
		  null) //No idle animation because I am looping.  
		this.animators["sleep"]["l"] = new animator(this.spritesheet, // Spritesheet
		  320, //X
		  195, //Y
		  64, //Width
		  32, //Height
		  4, //Frames
		  0.12, //Time
		  0, //Padding
		  false, //reverse
		  true, // looping,
		  null) //No idle animation because I am looping.
		this.animators["woke"]["r"] = new animator(this.spritesheet, // Spritesheet
		  320, //X
		  4, //Y
		  64, //Width
		  32, //Height
		  4, //Frames
		  0.12, //Time
		  0, //Padding
		  true, //reverse
		  true, // looping,
		  null) //No idle animation because I am looping.  
		this.animators["woke"]["l"] = new animator(this.spritesheet, // Spritesheet
		  320, //X
		  195, //Y
		  64, //Width
		  32, //Height
		  4, //Frames
		  0.12, //Time
		  0, //Padding
		  true, //reverse
		  true, // looping,
		  null) //No idle animation because I am looping.   
	};

	update()
	{
		let tick = this.game.clockTick;
		this.velocityY += GRAVITY * tick
		this.velocityX = -MIN_WALK
  
		this.x += this.velocityX * tick
		this.y += this.velocityY * tick
  
		
		this.collide()
	};

    updateBB(scale)
	{
		this.oldBB = this.BB;
		this.BB = new boundingBox(this.x, this.y, 64 * scale, 32 * scale);	
	}

	collide(){
		var that = this;
		this.game.entities.forEach(function (entity) {
			if(entity.platform && that.BB.isCollide(entity.BB)) {
				if (entity.platform && that.oldBB.bottom <= entity.BB.top) {
					that.velocityY = 0
					that.y = entity.BB.top - 32
					that.updateBB(1)
			   }
			}
		});
		this.updateBB(1);
	}

	draw(ctx)
	{
		//this.animators["stand"]["r"].drawFrame(this.game.clockTick, ctx, this.x+90  - this.game.camera.x, this.y - this.game.camera.y, 1)
		//this.animators["attack"]["r"].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y - this.game.camera.y, 1)
		//this.animators["woke"]["l"].drawFrame(this.game.clockTick, ctx, this.x+180  - this.game.camera.x, this.y - this.game.camera.y, 1)
		this.animators["walk"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1);
		ctx.strokeStyle = 'Red';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
	};

	walkLogic(tick)
	{

	};
};