class slow_background {
	constructor(game, x, y, sprite, speed, scale) {
		Object.assign(this, { game, x, y, sprite , speed, scale});
		this.spritesheet = ASSET_MANAGER.getAsset(sprite);
		this.animations = []


	}

	update() {

	};

	draw(ctx) {
		this.animations[this.type].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x/this.speed, this.y - this.game.camera.y/this.speed, scale)
	};
}