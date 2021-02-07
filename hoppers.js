//The consts are defined outside the duck for the sake of managing them.
//This will get refactor once params is up.
/**const MIN_WALK = 120.453125;
const MAX_WALK = 293.75;
const MAX_RUN = 550.75;
const ACC_WALK = 153.59375;
const ACC_AIR = 280;
const ACC_RUN = 750.390625;
const GRAVITY = 1800;
*/
class Hoppers
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});

		const MIN_WALK = 120.453125;
		const GRAVITY = 1800;
       
		this.game = game
		this.x = x
		console.log("const x" + this.x)
	    this.y = y
		console.log("const y" + this.y)
		this.facing = 'r'  //r for right & l for left
		//this.state = state   //Available state [walk], [attack], [hurt]
		this.dead = false

        this.velocityX = 0;

        this.velocityY = 0;


		this.updateBB(2);

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
			 9, //full is 9
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
	  let tick = this.game.clockTick;
	  this.velocityY += GRAVITY * tick
      
	  //Initial Walking animation
	  //this.bounce(tick);

      this.x += this.velocityX * tick
	  this.y += this.velocityY * tick

	  //Debug purposes
	  //console.log("x" + this.x);
	  //console.log("y" + this.y);
      //console.log("Vx" + this.velocityX);
	  //console.log("Vy" + this.velocityY);
	  
      this.collide()
	};
	
    updateBB(scale){
	this.oldBB = this.BB;
	this.BB = new boundingBox(this.x + 10, this.y + 45, 27 * scale, 14 * scale);
	this.oldcBB = this.cBB;
    this.cBB = new boundingBox(this.x + 7 * scale, this.y + 1 * scale, 25 * scale, 21 * scale);
	}
      
	collide(){
		this.updateBB(2);
	}

	draw(ctx)
	{
		this.animators["walk"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
		//this.animators["hurt"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
		//this.animators["attack"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);

		ctx.strokeStyle = 'Red';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
		ctx.strokeStyle = 'Blue';
        ctx.strokeRect(this.cBB.x - this.game.camera.x, this.cBB.y - this.game.camera.y, this.cBB.width, this.cBB.height);
	};
};
