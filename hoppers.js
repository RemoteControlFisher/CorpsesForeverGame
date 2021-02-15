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

		const MIN_WALK = 50;
		const GRAVITY = 1800;

		this.game = game
		this.x = x
		//console.log("const x" + this.x)
	    this.y = y
		//console.log("const y" + this.y)
		this.facing = 'l'  //r for right & l for left
		//this.state = state   //Available state [walk], [attack], [hurt]
		this.state = "walk"
		this.dead = false

        this.velocityX = -MIN_WALK;
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

	update()
	{
	  let tick = this.game.clockTick;
	  let center = this.BB.center()
	  let dcenter = this.game.duck.BB.center()

	  this.velocityY += GRAVITY * tick

	  this.x += this.velocityX * tick
	  this.y += this.velocityY * tick

	  this.updateBB(2)
      this.collide()

	  //Initial Walking animation

	  //Debug purposes
	  //console.log("x" + this.x);
	  //console.log("y" + this.y);
      //console.log("Vx" + this.velocityX);
	  //console.log("Vy" + this.velocityY);

	};

    updateBB(scale){
	this.oldBB = this.BB;
	this.BB = new boundingBox(this.x + 7 * scale, this.y + 1 * scale, 25 * scale, 21 * scale);
	this.oldcBB = this.cBB;
    this.cBB = new boundingBox(this.x + 10, this.y + 45, 27 * scale, 14 * scale );
	}

	collide(){
		var that = this;
		this.game.entities.forEach(function (entity) {
			//If platform and entity collided
			if(entity.BB && that.cBB.isCollide(entity.BB)) {
			   //If slime bottom hit floor/wall
			   if (entity.platform && that.oldBB.bottom <= entity.BB.top) {
					that.velocityY = 0
					that.y = entity.BB.top - 73
			   }
			   //If hits the left wall
			   else if (entity.wall && !entity.platform && that.BB.left < entity.BB.right && that.facing == 'l'){
				    that.x = that.BB.left
				    that.velocityX += MIN_WALK
                    that.facing = "r"
					//that.x = that.entity.right
			   }
			   //If hits the right wall
			   else if(entity.wall && !entity.platform && that.BB.right > entity.BB.left && that.facing == 'r'){
				    that.x = that.BB.right - 100
				    that.velocityX -= MIN_WALK
				    that.facing = "l"
					//that.x = that.entity.left
			   }
			   //If hits any trap
			   else if (entity.saw && that.state != "dead"){
				   that.state = "dead"
				   that.velocityX = 0
				   that.velocityY = 0
				   let corpseVX = 0
				   //corpse velocity and speed it will repulse
				   if(entity.facing == l){
					  corpseVX = 550
				   }else{
					  corpseVX = -550
				   }
				   let slimeCorpse = new corpses(this.game, that.x, that.y, "hoppers", this.facing, corpseVX, - 720)
                   this.game.addEntity(slimeCorpse)
			   }
			}
		});
		this.updateBB(2);
	}

	draw(ctx)
	{
		this.animators[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
		//this.animators["hurt"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
		//this.animators["attack"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);

		ctx.strokeStyle = 'Red';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
		ctx.strokeStyle = 'Blue';
        ctx.strokeRect(this.cBB.x - this.game.camera.x, this.cBB.y - this.game.camera.y, this.cBB.width, this.cBB.height);

		let center = this.BB.center()

		ctx.beginPath();
		ctx.strokeStyle = 'Green';
		ctx.arc(center.x - this.game.camera.x, center.y - this.game.camera.y, 1, 0, 2 * Math.PI)
		ctx.stroke();

		let dcenter = this.game.duck.BB.center()

		ctx.beginPath();
		ctx.strokeStyle = 'Pink';
		ctx.moveTo(center.x - this.game.camera.x, center.y - this.game.camera.y);
		ctx.lineTo(dcenter.x - this.game.camera.x, dcenter.y - this.game.camera.y);
		ctx.stroke();

	};
};