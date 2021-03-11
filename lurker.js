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
class Lurkers {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });

		const MAX_WALK = 70;
		this.exhausted = false
		this.attackX = []
		this.min_walk = 50;
		this.gravity = 500;
		this.elapsedTimes = []
		this.elapsedTimes["jump"] = []
		this.elapsedTimes["freefall"] = []
		this.elapsedTimes["landing"] = []
		this.elapsedTimes["attack"] = []
		this.elapsedTimes["jump"]['r'] = 0
		this.elapsedTimes["jump"]['l'] = 0
		this.elapsedTimes["freefall"]['r'] = 0
		this.elapsedTimes["freefall"]['l'] = 0
		this.elapsedTimes["landing"]['r'] = 0
		this.elapsedTimes["landing"]['l'] = 0
		this.elapsedTimes["attack"]['r'] = 0
		this.elapsedTimes["attack"]['l'] = 0
		//Specific for the attack bounding box and draw
		this.drawAttackY = [0, 0, 3, 5, 4, 3, 0]

		this.pointsX = []
		this.pointsY = []
		this.widths = []
		this.heights = []
		this.frames = []

		this.pointsX["jump"] = [7, 8, 8, 8, 8, 8]
		this.pointsX["freefall"] = [8, 8]
		this.pointsX["landing"] = [6]
		this.pointsX["attack"] = []

		this.pointsX["attack"]['r'] = [6, 5, 4, 6, 4, 3, 11]
		this.pointsX["attack"]['l'] = [7, 9, 10, 5, 1, 0, 0]

		this.pointsY["jump"] = [19, 14, 11, 9, 7, 6]
		this.pointsY["freefall"] = [7, 12]
		this.pointsY["landing"] = [21]
		this.pointsY["attack"] = [19, 17, 12, 5, 3, 5, 15]

		this.widths["jump"] = [18, 16, 16, 16, 16, 16]
		this.widths["freefall"] = [16, 16]
		this.widths["landing"] = [20]
		this.widths["attack"] = [19, 18, 18, 21, 27, 29, 21]

		this.heights["jump"] = [13, 14, 14, 12, 12, 14]
		this.heights["freefall"] = [14, 18]
		this.heights["landing"] = [11]
		this.heights["attack"] = [13, 15, 17, 22, 25, 24, 17]

		this.frames["jump"] = 6
		this.frames["freefall"] = 2
		this.frames["landing"] = 1
		this.frames["attack"] = 7

		// this.attackX['r'] = [6, 5, 4, 6, 4, 3, 11]
		// this.attackX['l'] = [7, 9, 10, 5, 1, 0, 0]
		// this.attackY = [19, 17, 12, 5, 3, 5, 15]
		// this.attackWidths = [19, 18, 18, 21, 27, 29, 21]
		// this.attackHeights = [13, 15, 17, 22, 25, 24, 17]
		// this.jumpX = [7, 8, 8, 8, 8, 8]
		// this.freefallX = [8, 8]
		// this.landingX = 6
		// this.jumpY = [19, 14, 11, 9, 7, 6]
		// this.freefallY = [7, 12]
		// this.landingY = 21
		// //this.walkWidths = [18, 16, 16, 16, 16, 16, 16, 16, 20];
		// //this.walkHeights = [13, 14, 14, 12, 12, 14, 14, 18, 11];
		// this.jumpWidths = [18, 16, 16, 16, 16, 16]
		// this.jumpHeights = [13, 14, 14, 12, 12, 14]
		// this.freefallWidths = [16, 16]
		// this.freefallHeights = [14, 18]
		// this.landingHeights = 11
		// this.landingWidths = 20
		this.game = game
		this.x = x
		//console.log("const x" + this.x)
		this.y = y
		//console.log("const y" + this.y)
		this.facing = 'l'  //r for right & l for left
		//this.state = state   //Available state [walk], [attack], [hurt]
		this.state = "jump"
		this.dead = false
		this.spotted = false
		this.tired = false
		this.velocityX = -this.min_walk;
		this.velocityY = 0;
		this.killable = true;

		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Walk.png");
		this.spritesheetR = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Walk (Reverse).png");
		this.spritesheetOuch = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Hurt.png");
		this.spritesheetOuchR = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Hurt (Reverse).png");
		this.spritesheetAttk = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Attack.png");
		this.spritesheetAttkR = ASSET_MANAGER.getAsset("./sprites/slimesprite/Slime_Attack (Reverse).png");

		this.animators = []; //[state] [facing]

		this.animators["jump"] = []
		this.animators["freefall"] = []
		this.animators["landing"] = []
		this.animators["attack"] = []

		this.animators["jump"]["r"] =
			new animator(this.spritesheet, //Spritesheet
				0,
				0,
				32,
				32,
				5,
				.1,
				0,
				false,
				false,
				new animator(this.spritesheet, 160, 0, 32, 32, 1, .1, 0, false, true, null))
		this.animators["jump"]["l"] =
			new animator(this.spritesheetR, //Spritesheet
				128,
				0,
				32,
				32,
				5,
				.1,
				0,
				true,
				false,
				new animator(this.spritesheetR, 96, 0, 32, 32, 1, .1, 0, true, true, null))
		this.animators["freefall"]["r"] =
			new animator(this.spritesheet, //Spritesheet
				192,
				0,
				32,
				32,
				1,
				.4,
				0,
				false,
				false,
				new animator(this.spritesheet, 224, 0, 32, 32, 1, .1, 0, false, true, null))
		this.animators["freefall"]["l"] =
			new animator(this.spritesheetR, //Spritesheet
				64,
				0,
				32,
				32,
				1,
				.4,
				0,
				true,
				false,
				new animator(this.spritesheetR, 32, 0, 32, 32, 1, .1, 0, true, true, null))
		this.animators["landing"]["r"] =
			new animator(this.spritesheet, //Spritesheet
				256,
				0,
				32,
				32,
				1,
				.1,
				0,
				false,
				true,
				null)
		this.animators["landing"]["l"] =
			new animator(this.spritesheetR, //Spritesheet
				0,
				0,
				32,
				32,
				1,
				.1,
				0,
				true,
				true,
				null)
		// this.animators["walk"] = []
		// this.animators["attack"] = []
		// this.animators["hurt"] = []

		// this.animators["walk"]["r"] =
		// 	new animator(this.spritesheet, //Spritesheet
		// 		0,
		// 		0,
		// 		32,
		// 		32,
		// 		9,
		// 		0.1,
		// 		0,
		// 		false,
		// 		true,
		// 		null)

		// this.animators["walk"]["l"] =
		// 	new animator(this.spritesheetR, //Spritesheet
		// 		0,
		// 		0,
		// 		32,
		// 		32,
		// 		9, //full is 9
		// 		0.1,
		// 		0,
		// 		true,
		// 		true,
		// 		null)

		// this.animators["hurt"]["r"] =
		// 	new animator(this.spritesheetOuch, //Spritesheet
		// 		0,
		// 		7,
		// 		10,
		// 		10,
		// 		3,
		// 		0.1,
		// 		3,
		// 		false,
		// 		true,
		// 		null)

		// this.animators["hurt"]["l"] =
		// 	new animator(this.spritesheetOuchR, //Spritesheet
		// 		5,
		// 		7,
		// 		30,
		// 		30,
		// 		3,
		// 		0.1,
		// 		3,
		// 		true,
		// 		true,
		// 		null)

		this.animators["attack"]["r"] =
			new animator(this.spritesheetAttk, //Spritesheet
				0,
				0,
				32,
				32,
				7,
				0.1,
				0,
				false,
				true,
				null)

		this.animators["attack"]["l"] =
			new animator(this.spritesheetAttkR, //Spritesheet
				0,
				0,
				32,
				32,
				7,
				0.1,
				0,
				true,
				true,
				null)
		this.updateBB(3);
		this.oldBB = this.BB
	};

	update() {
		if (this.state != "dead") {
			let tick = this.game.clockTick;
			let center = this.BB.center()
			let dcenter = this.game.duck.BB.center()

			//let dfacing = this.game.duck.facing
			//console.log("duck facing: " + dfacing)

			//length between duck and hoppers
			length = Math.sqrt(Math.pow(center.x - dcenter.x, 2) + Math.pow(center.y - dcenter.y, 2))
			//console.log("space: " + length)





			//Initial Walking animation

			//Debug purposes
			//console.log("x" + this.x);
			//console.log("y" + this.y);
			//console.log("Vx" + this.velocityX);
			//console.log("Vy" + this.velocityY);
			if (length <= 160 && this.state != "attack" && this.game.duck.state != "dead") {
				this.state = "attack"
				this.elapsedTimes[this.state]['r'] = 0
				this.elapsedTimes[this.state]['l'] = 0
				this.animators[this.state]['r'].elapsedTime = 0
				this.animators[this.state]['l'].elapsedTime = 0
				// setTimeout(function() {
				// 	if (this.state == "attack")
				// })
			}
			if (length <= 160 && this.game.duck.state != "dead" && this.state == "attack") {
				let speed = MAX_WALK
				if (center.x > dcenter.x) {
					if (this.facing == 'r') {
						this.elapsedTimes[this.state]['l'] = this.elapsedTimes[this.state]['r']
						this.animators[this.state]['l'].elapsedTime = this.animators[this.state]['r'].elapsedTime
					}
					this.facing = 'l'
					this.velocityX = -speed
				}
				else {
					if (this.facing == 'l') {
						this.elapsedTimes[this.state]['r'] = this.elapsedTimes[this.state]['l']
						this.animators[this.state]['r'].elapsedTime = this.animators[this.state]['l'].elapsedTime
					}
					this.facing = 'r'
					this.velocityX = speed
				}
			}
			else if (this.state == "attack" && (length > 160 || this.game.duck.state == "dead")) {
				this.state = "jump"
				this.animators[this.state][this.facing].elapsedTime = 0
				this.elapsedTimes[this.state][this.facing] = 0
				if (this.facing == 'l') {
					this.velocityX = -this.min_walk
				}
				else {
					this.velocityX = this.min_walk
				}
			}

			if (this.velocityY > 0 && this.state == "jump") {
				this.state = "freefall"
				this.elapsedTimes[this.state][this.facing] = 0
				this.animators[this.state][this.facing].elapsedTime = 0
			}
	
			this.velocityY += this.gravity * tick
	
			this.x += this.velocityX * tick
			this.y += this.velocityY * tick
			
			

			this.oldBB = this.BB			
			this.collide()	
			this.elapsedTimes[this.state][this.facing] += tick
			this.updateBB(3);
		}

		
	};

	updateBB(scale) {
		if (this.state != "dead") {
			let index = Math.floor(this.elapsedTimes[this.state][this.facing] / this.animators[this.state][this.facing].frameDuration)
			if (this.animators[this.state][this.facing].loop == true) {
				index = Math.floor(index % this.frames[this.state])
			} else {
				if (index >= this.frames[this.state]) {
					index = this.frames[this.state] - 1
				}
			}
			// if (this.state == "jump") {
			// 	if (index >= 6) index = 5
			// 	this.BB = new boundingBox(this.x + this.jumpX[index] * scale, this.y + this.jumpY[index] * scale, this.jumpWidths[index] * scale, this.jumpHeights[index] * scale);
			// } else if (this.state == "freefall") {
			// 	if (index >= 2) index = 1
			// 	this.BB = new boundingBox(this.x + this.freefallX[index] * scale, this.y + this.freefallY[index] * scale, this.freefallWidths[index] * scale, this.freefallHeights[index] * scale);
			// } else if (this.state == "landing") {
			// 	this.BB = new boundingBox(this.x + this.landingX * scale, this.y + this.landingY * scale, this.landingWidths * scale, this.landingHeights * scale);
			// } else if (this.state == "attack") {
			// 	if (index >= 7) {
			// 		index = 0
			// 	}
			// 	if (this.facing == 'r')
			// 		this.BB = new boundingBox(this.x + this.attackX['r'][index] * scale, this.y + (this.attackY[index] + this.drawAttackY[index]) * scale, this.attackWidths[index] * scale, this.attackHeights[index] * scale)
			// 	else
			// 		this.BB = new boundingBox(this.x + this.attackX['l'][index] * scale, this.y + (this.attackY[index] + this.drawAttackY[index]) * scale, this.attackWidths[index] * scale, this.attackHeights[index] * scale)
			// }

			if (this.state != "attack") {
				this.BB = new boundingBox(this.x + this.pointsX[this.state][index] * scale, this.y + this.pointsY[this.state][index] * scale, this.widths[this.state][index] * scale, this.heights[this.state][index] * 3)
			} else {
				this.BB = new boundingBox(this.x + this.pointsX[this.state][this.facing][index] * scale, this.y + (this.pointsY[this.state][index] + this.drawAttackY[index]) * scale, this.widths[this.state][index] * scale, this.heights[this.state][index] * 3)
			}
		}
	}


	collide() {
		this.updateBB(3)
		var that = this;
		let index = Math.floor(this.elapsedTimes[that.state][that.facing] / this.animators[this.state][this.facing].frameDuration)
		if (this.animators[this.state][this.facing].loop == true) {
			index = index % this.frames[this.state]
		} else {
			if (index >= this.frames[this.state]) {
				index = this.frames[this.state] - 1
			}
		}
		this.game.entities.forEach(function (entity) {
			//If platform and entity collided
			if (entity.BB && that.BB.isCollide(entity.BB)) {
				//If slime bottom hit floor/wall
				if (entity.platform && that.oldBB.bottom <= entity.BB.top && that.velocityY > 0) {
					if (that.state == "freefall") {
						that.velocityY = 0
						that.state = "landing"
					} else if (that.state == "landing") {
						if (that.velocityY > 50) {
							that.velocityY = -80
							that.state = "jump"
							that.elapsedTimes[that.state][that.facing] = 0
							that.animators[that.state][that.facing].elapsedTime = 0
						}
					} else if (that.state == "attack") {
						if (index >= 7) index = 0
						that.velocityY = 0
					}
					that.y = entity.BB.top - 96
					that.updateBB(3)
				}
				else if (entity.cieling && that.oldBB.top >= entity.BB.bottom) {
					that.velocityY = 0
					if (index >= 6) index = 5
					that.y = entity.BB.bottom - that.pointsY[that.state][index] * 3
					that.updateBB(3)
				}
				//If hits the left wall
				// else if (entity.wall && that.BB.left < entity.BB.right && that.oldBB.left >= entity.BB.right && that.velocityX < 0) {
				// 	that.velocityX = that.min_walk
				// 	that.facing = "r"
				// 	that.animators[that.state]['r'].elapsedTime = that.animators[that.state]['l'].elapsedTime

				// 	if (that.state == "jump") {
				// 		if (index >= 6) index = 5
				// 		that.x = entity.BB.right - that.jumpX[index] * 3
				// 	} else if (that.state == "freefall") {
				// 		if (index >= 2) index = 1
				// 		that.x = entity.BB.right - that.freefallX[index] * 3
				// 	} else if (that.state == "landing") {
				// 		that.x = entity.BB.right - that.landingX * 3
				// 	}
				// 	else if (that.state == "attack") {
				// 		if (index >= 7) index = 0
				// 		that.x = entity.BB.right - that.attackX['r'][index] * 3
				// 		that.facing = 'l'
				// 		that.velocityX = -MAX_WALK
				// 	}
				// } else if (entity.wall && that.BB.left < entity.BB.right && that.velocityX < 0) {
				// 	that.velocityX = -that.min_walk
				// 	that.facing = "l"
				// 	if (that.state == "jump") {
				// 		if (index >= 6) index = 5
				// 		that.x = entity.BB.left - 96 + that.jumpX[index] * 3
				// 	} else if (that.state == "freefall") {
				// 		if (index >= 2) index = 1
				// 		that.x = entity.BB.left - 96 + that.freefallX[index] * 3
				// 	} else if (that.state == "landing") {
				// 		that.x = entity.BB.left - 96 + that.landingX * 3
				// 	}
				// 	else if (that.state == "attack") {
				// 		if (index >= 7) index = 0
				// 		that.x = entity.BB.left - 96 + that.attackX['l'][index] * 3
				// 		that.velocityX = -MAX_WALK
				// 	}
				// }
				// //If hits the right wall
				// else if (entity.wall && that.BB.right > entity.BB.left && that.oldBB.right <= entity.BB.left && that.velocityX > 0) {
				// 	that.velocityX = -that.min_walk
				// 	that.facing = "l"
				// 	that.animators[that.state]['l'].elapsedTime = that.animators[that.state]['r'].elapsedTime
				// 	if (that.state == "jump") {
				// 		if (index >= 6) index = 5
				// 		that.x = entity.BB.left - 96 + that.jumpX[index] * 3
				// 	} else if (that.state == "freefall") {
				// 		if (index >= 2) index = 1
				// 		that.x = entity.BB.left - 96 + that.freefallX[index] * 3
				// 	} else if (that.state == "landing") {
				// 		that.x = entity.BB.left - 96 + that.landingX * 3
				// 	}
				// 	else if (that.state == "attack") {
				// 		if (index >= 7) index = 0
				// 		that.x = entity.BB.left - 96 + that.attackX['l'][index] * 3
				// 		that.facing = 'r'
				// 		that.velocityX = MAX_WALK
				// 	}
				// } else if (entity.wall && that.BB.right > entity.BB.left && that.velocityX > 0) {
				// 	that.velocityX = that.min_walk
				// 	that.facing = "r"
				// 	if (that.state == "jump") {
				// 		if (index >= 6) index = 5
				// 		that.x = entity.BB.right - that.jumpX[index] * 3
				// 	} else if (that.state == "freefall") {
				// 		if (index >= 2) index = 1
				// 		that.x = entity.BB.right - that.freefallX[index] * 3
				// 	} else if (that.state == "landing") {
				// 		that.x = entity.BB.right - that.landingX * 3
				// 	}
				// 	else if (that.state == "attack") {
				// 		if (index >= 7) index = 0
				// 		that.x = entity.BB.right - that.attackX['r'][index] * 3
				// 		that.velocityX = MAX_WALK
				// 	}
				// }
				else if (entity.wall && that.BB.left < entity.BB.right && that.oldBB.left >= entity.BB.right && that.velocityX < 0) {
					if (that.state != "attack") {
						that.velocityX = that.min_walk
						that.facing = 'r'
						that.x = entity.BB.right - that.pointsX[that.state][index] * 3
					} else {
						that.velocityX = 0
						that.x = entity.BB.right - that.pointsX[that.state][that.facing][index] * 3
					}
					that.elapsedTimes[that.state][that.facing] = that.elapsedTimes[that.state]['l']
					that.updateBB(3)
				}
				else if (entity.wall && that.BB.right > entity.BB.left && that.oldBB.right <= entity.BB.left && that.velocityX > 0) {
					if (that.state != "attack") {
						that.velocityX = -that.min_walk
						that.facing = 'l'
						that.x = entity.BB.left - 96 + that.pointsX[that.state][index] * 3
					} else {
						that.velocityX = 0
						that.x = entity.BB.left - 96 + that.pointsX[that.state][that.facing][index] * 3				
					}
					that.elapsedTimes[that.state][that.facing] = that.elapsedTimes[that.state]['r']
					that.updateBB(3)
				}
				//If hits any trap
				else if (entity.saw && that.state != "dead") {
					that.die(entity)
					that.updateBB(3)
				}
				else if (entity == that.game.duck && that.game.duck.state != "dead") {
					that.game.duck.die(that);
					that.updateBB(3)
				}
				
			}
		});
	}

	die(killer) {
		this.state = "dead"
		this.velocityX = 0
		this.velocityY = 0
		let corpseVX = 0
		//corpse velocity and speed it will repulse
		if (killer.facing == "l") {
			corpseVX = -550
		} else {
			corpseVX = 550
		}
		let lurkCorpse = new corpses(this.game, this.x, this.y, "lurker", this.facing, corpseVX, - 220)
		this.game.addEntity(lurkCorpse)
		this.removeFromWorld = true;
	}

	draw(ctx) {
		if (this.state != "dead") {
			let index = Math.floor(this.elapsedTimes[this.state][this.facing] / this.animators[this.state][this.facing].frameDuration)
			if (this.state != "attack") {
				this.animators[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
			}
			else {
				index = Math.floor(index % this.frames[this.state])
				this.animators[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y + this.drawAttackY[index] * 3 - this.game.camera.y, 3);
			}
			//this.animators["hurt"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
			//this.animators["attack"]["l"].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);

			ctx.strokeStyle = 'Red';
			ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

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

		}
	};
};