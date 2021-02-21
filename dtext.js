class dtext {
	constructor(game, x, y, toWrite, animated, delay) {
		Object.assign(this, { game, x, y, toWrite, animated });
		if (animated) this.drawer = new textAnimator(game, toWrite, -delay)
	};

	update() {

	};

	draw(ctx) {
		if (this.animated) {
			let tick = this.game.clockTick;
			this.drawer.drawFrame(tick, ctx, this.x, this.y)
		} else{
			this.drawStatic(ctx)
		}
	};

	drawStatic(ctx) {
		ctx.font = PARAMS.BLOCKWIDTH/2 + 'px neuropol_xregular';
		ctx.beginPath();
        ctx.fillStyle = "White";
		ctx.strokeStyle = "Black";
		ctx.lineWidth = 4;
		ctx.strokeText(this.toWrite, this.x - this.game.camera.x, this.y - this.game.camera.y)
        ctx.fillText(this.toWrite, this.x - this.game.camera.x, this.y - this.game.camera.y);
		ctx.lineWidth = 1;

	}
};