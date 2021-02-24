

class Chompers {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		const MAX_WALK = 293.75;
		const MAX_RUN = 550.75;
		const MIN_WALK = 120.453125;
		const GRAVITY = 1800;
		this.length = 0;
		this.facing = 'l';
		this.state = "walk"
		this.angry = false;
		this.dead = false;
		this.velocityX = -MIN_WALK;
		this.velocityY = 0;
		this.updateBB(1);
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/wolfsheet1.png");

		this.killable = true;

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
				320, //X
				257, //Y
				64, //Width
				32, //Height
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

	update() {
		//console.log(this.y)
		if (this.state != "dead") {
			let tick = this.game.clockTick;
			let center = this.BB.center()
			let dcenter = this.game.duck.BB.center()

			this.velocityY += GRAVITY * tick

			this.x += this.velocityX * tick
			this.y += this.velocityY * tick
			this.updateBB(1)

			this.length = Math.sqrt(Math.pow(center.x - dcenter.x, 2) + Math.pow(center.y - dcenter.y, 2))
			if (this.game.duck.state == "dead")
			{
				this.length = Number.MAX_VALUE
				this.angry = false;
			}
			this.collide()

			if (this.angry) {
				
				if (this.length > 320) {
					this.state = "walk";
					if (this.facing == 'r') {
						this.velocityX = MIN_WALK
					}
					else {
						this.velocityX = -MIN_WALK;
					}
				}
				else if (this.facing == 'l') {
					if (this.BB.right > this.game.duck.BB.left) {
						this.velocityX = -MAX_WALK
					}
					else {
						this.velocityX = MAX_WALK
						this.facing = 'r'
					}
				}
				else {
					if (this.BB.left < this.game.duck.BB.right) {
						this.velocityX = MAX_WALK
					}
					else {
						this.velocityX = -MAX_WALK
						this.facing = 'l'
					}
				}
			}
			else {

				if (this.length <= 160) {
					if (dcenter.x <= center.x) {
						this.velocityX = MAX_WALK
						this.facing = 'r'
					}
					else if (dcenter.x > center.x) {
						this.velocityX = -MAX_WALK
						this.facing = 'l'
					}
				}
				if (this.length > 320 && this.velocityX == MAX_WALK) {
					this.velocityX = MIN_WALK
				}
				else if (this.length > 320 && this.velocityX == -MAX_WALK) {
					this.velocityX = -MIN_WALK
				}

			}
		}
	};

	die(killer) {
		this.state = "dead"
		this.cCorpse = new corpses(this.game, this.x, this.y, "chomper", this.facing, 0, 0)
		this.game.addEntity(this.cCorpse)
		this.removeFromWorld = true;
	}

	updateBB(scale) {
		this.BB = new boundingBox(this.x, this.y, 64 * scale, 32 * scale);
	}

	collide() {
		var that = this;
		this.game.entities.forEach(function (entity) {
			if (entity.BB && that.BB.isCollide(entity.BB)) {
				if (entity.platform && that.oldBB.bottom <= entity.BB.top) {
					that.velocityY = 0
					that.y = entity.BB.top - 32
					that.updateBB(1)
				}
				else if (entity.wall && !entity.platform && that.BB.left < entity.BB.right && that.facing == 'l') {
					if (!that.angry) {
						if (that.length < 160) {
							that.angry = true
						}
						else {
							that.velocityX = MIN_WALK
						}
						that.x = entity.BB.right
						that.facing = 'r'
					}
					else {
						that.x = entity.BB.right
					}
					that.updateBB(1)
				}
				else if (entity.wall && !entity.platform && that.BB.right > entity.BB.left && that.facing == 'r') {
					if (!that.angry) {
						if (that.length < 160) {
							that.angry = true
						}
						else {
							that.velocityX = -MIN_WALK
						}
						that.x = entity.BB.left - 64
						that.facing = 'l'
					}
					else {
						that.x = entity.BB.left - 64
					}

					that.updateBB(1)
				}
				else if (entity.game.duck && entity.game.duck.state != "dead" && ((that.BB.left <= entity.game.duck.BB.right && that.BB.left >= entity.game.duck.BB.left) || (that.BB.right >= entity.game.duck.BB.left && that.BB.right <= entity.game.duck.BB.right)) && ((entity.game.duck.BB.bottom <= that.BB.bottom && entity.game.duck.BB.bottom >= that.BB.top) || (entity.game.duck.BB.top >= that.BB.top && entity.game.duck.BB.top <= that.BB.bottom)))
				{
					entity.game.duck.die(that)
				}
				/*
				else if (entity.game.duck && that.BB.top <= entity.game.duck.BB.bottom && that.BB.top > entity.game.duck.oldBB.bottom && (entity.game.duck.BB.right >= that.BB.left && entity.game.duck.BB.right <= that.BB.right || entity.game.duck.BB.left <= that.BB.right && entity.game.duck.BB.left >= that.BB.left))
				{
					that.die(entity)
				}*/
				/*else if (entity.duck && that.velocityX < 0 && that.BB.left < entity.BB.right)
				{
					that.velocityX = MIN_WALK
					that.x = entity.BB.right
					that.facing = 'r'
					that.updateBB(1)
				}*/
				this.oldBB = this.BB;
			}

		});
		this.updateBB(1);
	}

	draw(ctx) {
		//console.log(this.x/32 + " " +this.y/32)
		//this.animators["stand"]["r"].drawFrame(this.game.clockTick, ctx, this.x+90  - this.game.camera.x, this.y - this.game.camera.y, 1)
		//this.animators["attack"]["r"].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y - this.game.camera.y, 1)
		//this.animators["woke"]["l"].drawFrame(this.game.clockTick, ctx, this.x+180  - this.game.camera.x, this.y - this.game.camera.y, 1)
		if (this.state != "dead") {
			this.animators[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1);
			
			// ctx.strokeStyle = 'Red';
			// ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

			// let center = this.BB.center()

			// ctx.beginPath();
			// ctx.strokeStyle = 'Green';
			// ctx.arc(center.x - this.game.camera.x, center.y - this.game.camera.y, 1, 0, 2 * Math.PI)
			// ctx.stroke();

			// let dcenter = this.game.duck.BB.center()

			// ctx.beginPath();
			// ctx.strokeStyle = 'Pink';
			// ctx.moveTo(center.x - this.game.camera.x, center.y - this.game.camera.y);
			// ctx.lineTo(dcenter.x - this.game.camera.x, dcenter.y - this.game.camera.y);
			// ctx.stroke();

			/** Drawing a detection circle as a prototype for some possible AI behavior.
	
			ctx.beginPath();
			ctx.strokeStyle = 'Yellow';
			ctx.arc(center.x  - this.game.camera.x, center.y - this.game.camera.y, 250, 0, 2*Math.PI)
			ctx.stroke();
			
	
			//*/
		}
	};
};