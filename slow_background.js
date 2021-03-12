class slow_background {
	constructor(game, x, y, sprite, speed =2, scale =5, width, height) {
		Object.assign(this, { game, x, y, sprite , speed, scale});
		this.spritesheet = ASSET_MANAGER.getAsset(sprite);
		this.animations = new animator(this.spritesheet, // Spritesheet
		  0, //X
		  0, //Y
		  width, //Width
		  height, //Height
		  1, //Frames
		  0.12, //Time
		  16, //Padding
		  false, //reverse
		  true, // looping,
		  null)
	}

	update() {

	};

	draw(ctx) {
		//this.mimic.drawFrame(this.game.clockTick, ctx, x - this.game.camera.x + 4, y - this.game.camera.y, 1.5);
		console.log(this.x)
		console.log(this.game.camera.x)
		console.log(this.speed)
		console.log((this.x - this.game.camera.x/this.speed)/32 + " " + (this.y - this.game.camera.y/this.speed)/32)
		this.animations.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x/this.speed, this.y - this.game.camera.y/this.speed, this.scale)
	};
}