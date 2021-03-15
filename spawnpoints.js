class spawnpoints {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/duck.png");
		this.cageSheet = ASSET_MANAGER.getAsset("./sprites/floorsandwalls.png");
		this.animations = []
		this.animations.cage = new animator(this.cageSheet, 108, 48, 23, 48, 1, 0.12, 16, false, true, null)
		this.animations.prisoner = new animator(this.spritesheet, 72, 83, 17, 20, 1, 0.12, 16, false, true, null)
		this.active = false
		this.spawner = true
		this.BB = new boundingBox(x, y, 46, 96)
	};

	update() {
	};

	draw(ctx) {
		if (this.active)
			this.animations.prisoner.drawFrame(this.game.clockTick, ctx, this.x + 4 - this.game.camera.x, this.y + 50 - this.game.camera.y, 2, true) //Draw a captured duck on active spawns.
		this.animations.cage.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 2)
		/*//Spawner hitbox drawing.
			ctx.strokeStyle = 'Red';
			ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
		*/
	};
};