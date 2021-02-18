class textAnimator
{
	constructor(game, toWrite, delay = 0,  letterDuration = 0.12 )
	{
		Object.assign(this, {game, toWrite});
        this.elapsedTime = delay;
        this.writeDuration = this.toWrite.length * letterDuration
	};

	drawFrame(tick, ctx, x, y)
	{
        this.elapsedTime += tick
        let pct = Math.min(1, this.elapsedTime/this.writeDuration)
        console.log(pct)


		ctx.font = PARAMS.BLOCKWIDTH/2 + 'px neuropol_xregular';
        ctx.beginPath();

        ctx.fillStyle = "White";
		ctx.strokeStyle = "Black";
        ctx.lineWidth = 4;
		ctx.strokeText(this.toWrite, this.x, this.y)
        ctx.strokeText(this.toWrite.substring(0, Math.max(0, pct * this.toWrite.length)), x - this.game.camera.x, y - this.game.camera.y)
        ctx.fillText(this.toWrite.substring(0, Math.max(0, pct * this.toWrite.length)) , x - this.game.camera.x, y - this.game.camera.y);
        ctx.lineWidth = 1;


	};
};