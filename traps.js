class traps {
	constructor(game, x, y, type) {
		Object.assign(this, { game, x, y, type });
		this.spritesheetSAW = ASSET_MANAGER.getAsset("./sprites/blade_1_3.png");
		this.spritesheetSAWL = ASSET_MANAGER.getAsset("./sprites/blade_1_4.png");

		this.spritesheetbigSAW = ASSET_MANAGER.getAsset("./sprites/blade_2_fix.png");
		this.spritesheetSpikes = ASSET_MANAGER.getAsset("./sprites/new_Spike_Strip.png");

		//Add a type enumerator to verify this is a trap.
		this.trap =  true;

		this.animators = []; //[state][facing]
		this.animators["saw"] =
			new animator(this.spritesheetSAW, // Spritesheet
				2, //X
				0, //Y
				64, //Width
				72, //Height
				3, //Frames
				0.13, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animators["lsaw"] =
			new animator(this.spritesheetSAWL, // Spritesheet
				9, //X
				0, //Y
				64, //Width
				72, //Height
				3, //Frames
				0.13, //Time
				3, //Padding
				true, //reverse
				true, // looping,
				null)
		this.animators["spike"] =
			new animator(this.spritesheetSpikes, // Spritesheet
				0, //X
				-20, //Y
				31, //Width
				34, //Height
				1, //Frames
				0.13, //Time
				3, //Padding
				false, //reverse
				true, // looping,
				null)
		this.animators["bigSaw"] =
			new animator(this.spritesheetbigSAW, // Spritesheet
				0, //X
				0, //Y
				140, //Width
				130, //Height
				3, //Frames
				0.05, //Time
				20, //Padding
				false, //reverse
				true, // looping,
				null)

		if(this.type == "saw" || this.type == "lsaw" || this.type == "bigSaw")
				this.saw=true

		if(this.type =="saw"|| this.type == "bigSaw")
				this.facing = "r"
		
		if(this.type == "lsaw")
				this.facing = "l"

		if(!this.facing)
				this.facing = "c" //"Facing the camera."

		this.BB = new boundingBox(this.x, this.y, this.animators[this.type].width, this.animators[this.type].height)

		if(this.type == "spike")
		       this.BB = new boundingBox(this.x, this.y + 19, this.animators[this.type].width, 15)
	};

	update() {

	};

	draw(ctx) {
		this.animators[this.type].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1)
		 
		ctx.strokeStyle = 'Red';
			ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
			
	};
};
